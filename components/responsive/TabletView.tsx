// components/responsive/TabletView.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";

// 🧠 Tablet SVGs per language
import SVGTabletFr from "@/components/responsive/SVG-Tablet/SVGTabletFr";
import SVGTabletEn from "@/components/responsive/SVG-Tablet/SVGTabletEn";
import SVGTabletEs from "@/components/responsive/SVG-Tablet/SVGTabletEs";
import SVGTabletDe from "@/components/responsive/SVG-Tablet/SVGTabletDe";

// ⚡ Animated tablet bar
import SVGBarTablet from "@/components/responsive/common/SVGBarTablet";

type SupportedLang = "fr" | "en" | "es" | "de";

type Props = {
  /** Optionnel : forcer une langue depuis un Server Component */
  lang?: SupportedLang;
};

// map hors composant → pas recréée à chaque render
const LANG_MAP: Record<SupportedLang, React.FC> = {
  fr: SVGTabletFr,
  en: SVGTabletEn,
  es: SVGTabletEs,
  de: SVGTabletDe,
};

export default function TabletView({ lang }: Props) {
  const { i18n } = useTranslation();

  // langue effective : prop > i18n > fallback
  const detected = (i18n.language || "fr").split("-")[0] as SupportedLang;
  const effectiveLang: SupportedLang = (lang ?? detected) as SupportedLang;

  const SVGComponent = LANG_MAP[effectiveLang] ?? SVGTabletFr;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%", // ← laisse ResponsiveRenderer gérer la hauteur (120vh en tablet)
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🌍 Foreground: language-specific SVG */}
      <div
        style={{
          position: "absolute",
          width: "768px",
          height: "1024px",
          zIndex: 1,
        }}
      >
        <SVGComponent />
      </div>

      {/* ⚡ Animated background bar */}
      <div
        style={{
          position: "absolute",
          width: "1320px",
          height: "1100px",
          zIndex: 0,
        }}
      >
        <SVGBarTablet />
      </div>
    </div>
  );
}
