"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export function TermsConditionsPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  // 1er render (SSR et 1er CSR) = même placeholder → pas de mismatch.
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Skeleton identique serveur/client
    return (
      <div className="max-w-2xl mx-auto antialiased pt-4 pb-8 px-6">
        <div className="space-y-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-6 w-2/3 rounded bg-black/10 dark:bg-white/10" />
              <div className="h-4 w-full rounded bg-black/10 dark:bg-white/10" />
              <div className="h-4 w-11/12 rounded bg-black/10 dark:bg-white/10" />
              <div className="h-4 w-10/12 rounded bg-black/10 dark:bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Après montage → on peut appeler t() en toute sécurité
  const legalContent = [
    {
      title: t("components.TermsConditions.section1.title"),
      description: (
        <>
          <p className="text-xl font-bold mt-6 mb-2">
            {t("components.TermsConditions.section1.subtitle")}
          </p>
          <p className="space-y-4 leading-relaxed">
            {t("components.TermsConditions.section1.p1")}
            <a href="https://lezard-agency.com" className="text-blue-500 underline">
              {" "}lezard-agency.com
            </a>
            {t("components.TermsConditions.section1.p2")}
          </p>

          <p className="text-xl font-bold mt-6 mb-2">
            {t("components.TermsConditions.section2.subtitle")}
          </p>
          <p className="space-y-4 leading-relaxed">
            {t("components.TermsConditions.section2.p1")}
          </p>

          <p className="text-xl font-bold mt-6 mb-2">
            {t("components.TermsConditions.section3.subtitle")}
          </p>
          <p className="space-y-4 leading-relaxed">
            {t("components.TermsConditions.section3.p1")}
          </p>

          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>{t("components.TermsConditions.section3.list.item1")}</li>
            <li>{t("components.TermsConditions.section3.list.item2")}</li>
            <li>{t("components.TermsConditions.section3.list.item3")}</li>
          </ul>

          <p className="text-xl font-bold mt-6 mb-2">
            {t("components.TermsConditions.section4.subtitle")}
          </p>
          <p className="space-y-4 leading-relaxed">
            {t("components.TermsConditions.section4.p1")}
          </p>

          <p className="text-xl font-bold mt-6 mb-2">
            {t("components.TermsConditions.section5.subtitle")}
          </p>
          <p className="space-y-4 leading-relaxed">
            {t("components.TermsConditions.section5.p1")}
          </p>

          <p className="text-xl font-bold mt-6 mb-2">
            {t("components.TermsConditions.section6.subtitle")}
          </p>
          <p className="space-y-4 leading-relaxed">
            {t("components.TermsConditions.section6.p1")}
          </p>
        </>
      ),
    },
    {
      title: t("components.TermsConditions.section7.subtitle"),
      description: (
        <p className="space-y-4 leading-relaxed">
          {t("components.TermsConditions.section7.p1")}
        </p>
      ),
    },
    {
      title: t("components.TermsConditions.section8.subtitle"),
      description: (
        <p className="space-y-4 leading-relaxed">
          {t("components.TermsConditions.section8.p1")}
        </p>
      ),
    },
    {
      title: t("components.TermsConditions.section9.subtitle"),
      description: (
        <>
          <p className="space-y-4 leading-relaxed">
            {t("components.TermsConditions.section9.p1")}
          </p>
          <p className="text-center font-bold">
            {t("components.TermsConditions.section9.email")} :{" "}
            <a href="mailto:contact@lezard-agency.com" className="text-blue-500 underline">
              contact@lezard-agency.com
            </a>
          </p>
          <p className="text-center font-bold">
            {t("components.TermsConditions.section9.phone")} :{" "}
            <a href="tel:+33781225913" className="text-blue-500 underline">
              +33 07 81 22 59 13
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-2xl mx-auto antialiased pt-4 pb-8 px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4">
        {legalContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className={twMerge("text-2xl font-bold mb-4")}>
              {item.title}
            </h2>
            <div className="text-sm prose dark:prose-invert space-y-4 leading-relaxed">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
