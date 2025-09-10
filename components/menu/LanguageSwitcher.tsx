"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const flagImages: { [key: string]: string } = {
  en: "/images/flags/angleterre.webp",
  fr: "/images/flags/France.webp",
  es: "/images/flags/Spain.webp",
  de: "/images/flags/allemand.webp"
};

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  if (!hasMounted) return null; // ⛔ Ne rend rien tant que ce n'est pas monté

  return (
    <div className="flex justify-center items-center">
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 font-bold text-orange-500 rounded-full hover:bg-orange-100 transition"
        >
          <Image
            src={flagImages[i18n.language]}
            alt={i18n.language}
            width={20}
            height={20}
            className="mr-2"
          />
          {t(i18n.language.toUpperCase())}
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {["en", "fr", "es", "de"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleChangeLanguage(lang)}
                className={`flex items-center w-full px-4 py-3 text-sm text-black hover:bg-orange-100 transition ${
                  i18n.language === lang ? "font-bold text-orange-500" : ""
                }`}
              >
                <span className="flex items-center w-full">
                  <Image
                    src={flagImages[lang]}
                    alt={lang}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {t(lang.toUpperCase())}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
