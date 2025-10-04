"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { ConditionsOfSalePage } from "@/components/privacy/ConditionsOfSalePage";

export default function ConditionsOfSale() {
  const { t } = useTranslation();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 sm:pt-16 lg:pt-20 pb-12">
      {/* Titre centré */}
      <h1 className="text-center font-extrabold leading-[1.05] tracking-tight text-[clamp(2rem,6vw,3.5rem)]">
        {t("components.ConditionsOfSale.title", "Conditions Générales de Vente Software")}
      </h1>

      {/* Contenu */}
      <div className="mt-10">
        <ConditionsOfSalePage />
      </div>
    </main>
  );
}
