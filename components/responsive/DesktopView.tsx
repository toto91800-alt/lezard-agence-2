// components/responsive/DesktopView.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SVGBarDesktop from "@/components/responsive/common/SVGBarDesktop";
import SVGDesktopFr from "@/components/responsive/SVG-Desktop/SVGDesktopFr";
import SVGDesktopEn from "@/components/responsive/SVG-Desktop/SVGDesktopEn";
import SVGDesktopDe from "@/components/responsive/SVG-Desktop/SVGDesktopDe";
import SVGDesktopEs from "@/components/responsive/SVG-Desktop/SVGDesktopEs";

type SupportedLang = "fr" | "en" | "de" | "es";

const MAP: Record<SupportedLang, React.FC> = {
  fr: SVGDesktopFr,
  en: SVGDesktopEn,
  de: SVGDesktopDe,
  es: SVGDesktopEs,
};

export default function DesktopView() {
  const { i18n } = useTranslation();

  // langue simplifiée (fr-FR → fr)
  const lang = (i18n.language?.split("-")[0] as SupportedLang) || "fr";

  // Choix du composant SVG
  const SVGComponent = MAP[lang] ?? SVGDesktopFr;

  return (
    <>
      <div style={{ position: "absolute", zIndex: 0 }}>
        <SVGBarDesktop />
      </div>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <SVGComponent />
      </div>
    </>
  );
}
