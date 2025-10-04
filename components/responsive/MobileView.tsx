// components/responsive/MobileView.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";

// 📱 Mobile SVGs
import SVGMobileFr from "@/components/responsive/SVG-Mobile/SVGMobileFr";
import SVGMobileEn from "@/components/responsive/SVG-Mobile/SVGMobileEn";
import SVGMobileEs from "@/components/responsive/SVG-Mobile/SVGMobileEs";
import SVGMobileDe from "@/components/responsive/SVG-Mobile/SVGMobileDe";

// 🌈 Background
import SVGBarMobile from "@/components/responsive/common/SVGBarMobile";

type SupportedLang = "fr" | "en" | "es" | "de";
type Props = { lang?: SupportedLang };

// Map langue → composant SVG
const LANG_MAP: Record<SupportedLang, React.FC> = {
  fr: SVGMobileFr,
  en: SVGMobileEn,
  es: SVGMobileEs,
  de: SVGMobileDe,
};

export default function MobileView({ lang }: Props) {
  const { i18n } = useTranslation();

  // Normalise la langue (ex: fr-FR → fr)
  const detected = (i18n.language || "fr").split("-")[0] as SupportedLang;
  const effectiveLang: SupportedLang = (lang ?? detected) as SupportedLang;

  const SVGComponent = LANG_MAP[effectiveLang] ?? SVGMobileFr;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%", // ResponsiveRenderer fixe déjà 120vh en mobile
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Foreground: language-specific SVG */}
      <div
        style={{
          position: "absolute",
          width: "390px",
          height: "840px",
          zIndex: 1,
        }}
      >
        <SVGComponent />
      </div>

      {/* Background beam */}
      <div
        style={{
          position: "absolute",
          width: "712px",
          height: "870px",
          zIndex: 0,
        }}
      >
        <SVGBarMobile />
      </div>
    </div>
  );
}
