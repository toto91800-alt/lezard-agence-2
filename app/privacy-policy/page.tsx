"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { PrivacyPolicyPage } from "@/components/privacy/PrivacyPolicyPage";

export default function PrivacyPage() {
  const { t } = useTranslation();
  // Assure un 1er rendu client identique au SSR
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const fallbackTitle = "Politique de confidentialité et cookies";

  return (
    <main className="max-w-5xl mx-auto px-6 pt-16 sm:pt-20 lg:pt-24 pb-12">
      {/* Titre centré */}
      <h1 className="text-center font-extrabold leading-[1.05] tracking-tight text-[clamp(2rem,6vw,3.5rem)]">
        {mounted ? t("components.PrivacyPolicy.title") : fallbackTitle}
      </h1>

      {/* Pour éviter tout décalage, n’afficher le contenu qu’après montage */}
      <div className="mt-10">
        {mounted ? <PrivacyPolicyPage /> : null}
      </div>
    </main>
  );
}
