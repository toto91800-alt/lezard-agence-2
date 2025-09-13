"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 🔹 On récupère faq.items et on sécurise
  const rawData = t("faq.items", { returnObjects: true });
  const faqData =
    Array.isArray(rawData) ? rawData : [];

  type FAQItem = {
    question: string;
    answer: string;
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-10 sm:py-16">
      {/* Titre */}
      <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
        <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.8rem,12vw,3.75rem)] sm:text-[clamp(2.2rem,8vw,7rem)]">
          <span className="block mt-[0.25em] text-[var(--MainTitle)] whitespace-nowrap">
            {t("faq.title", "FAQ")}
          </span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item: FAQItem, index: number) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border rounded-xl bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
            >
              <button
                className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left text-base sm:text-lg font-medium"
                onClick={() => toggle(index)}
              >
                <span className="pr-4">{item.question}</span>
                {isOpen ? (
                  <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
                )}
              </button>

              <div
                className={`px-4 sm:px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[999px] py-2 sm:py-3" : "max-h-0"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
