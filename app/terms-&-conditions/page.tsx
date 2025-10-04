 // app/terms-&-conditions/page.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { TermsConditionsPage } from "@/components/privacy/TermsConditionsPage";

export default function TermsPage() {
  const { t, i18n } = useTranslation();

  // i18n readiness (évite le rendu d’une clé côté serveur et d’une
  // traduction côté client au 1er paint)
  const [ready, setReady] = React.useState<boolean>(i18n.isInitialized);

  React.useEffect(() => {
    if (i18n.isInitialized) return;

    const onReady = () => setReady(true);
    i18n.on("initialized", onReady);
    i18n.on("languageChanged", onReady);
    return () => {
      i18n.off("initialized", onReady);
      i18n.off("languageChanged", onReady);
    };
  }, [i18n]);

  const fallbackTitle = "Conditions Générales d'Utilisation";

  return (
    <main className="max-w-5xl mx-auto px-6 pt-16 sm:pt-20 lg:pt-24 pb-12">
      {/* Titre centré : même contenu SSR/1er render client */}
      <h1 className="text-center font-extrabold leading-[1.05] tracking-tight text-[clamp(2rem,6vw,3.5rem)]">
        {ready ? t("TermsConditions.title") : fallbackTitle}
      </h1>

      {/* Contenu */}
      <div className="mt-10">
        <TermsConditionsPage />
      </div>
    </main>
  );
}
