// components/sections/Technologie.tsx
"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import ResponsiveRenderer from "@/components/responsive/ResponsiveRenderer";
import ButtonTechnologie from "@/components/background/extra/ButtonTechnologie";

type Props = {
  className?: string;
};

export default function Technologie({ className = "" }: Props) {
  const { t } = useTranslation();

  return (
    <section className={`relative overflow-hidden w-full ${className}`}>
     <div className="relative z-[2] w-full flex flex-col items-center gap-4 sm:gap-6 pt-14 sm:pt-0">
        <div className="mx-auto w-full max-w-5xl px-4">
          <h2 className="w-full text-center font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            {/* Wrapper centré et stable */}
            <span className="mt-[0.25em] inline-flex flex-col items-center text-[var(--MainTitle)]">
              <span className="block">{t("mainpage.technologie.title.line1")}</span>
              {/* ligne 2 en dessous, pas de <br/> nécessaire */}
              <span className="block">{t("mainpage.technologie.title.line2")}</span>
            </span>
          </h2>
        </div>

        <ButtonTechnologie href="/how-is-work" />
      </div>

      <ResponsiveRenderer />
    </section>
  );
}
