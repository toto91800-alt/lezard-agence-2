// components/responsive/TabletView.tsx
"use client";

import React from "react";

// 🧠 Tablet SVGs per language
import SVGTabletFr from "@/components/responsive/SVG-Tablet/SVGTabletFr";
import SVGTabletEn from "@/components/responsive/SVG-Tablet/SVGTabletEn";
import SVGTabletEs from "@/components/responsive/SVG-Tablet/SVGTabletEs";
import SVGTabletDe from "@/components/responsive/SVG-Tablet/SVGTabletDe";

// ⚡ Animated tablet bar
import SVGBarTablet from "@/components/responsive/common/SVGBarTablet";

type SupportedLang = "fr" | "en" | "es" | "de";

type Props = {
  /** Langue forcée (recommandé depuis un Server Component) */
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
  // auto-détection client si aucune prop n’est fournie
  const [autoLang, setAutoLang] = React.useState<SupportedLang>("en");

  React.useEffect(() => {
    if (lang) return;
    const raw = document.documentElement.lang || "en";
    const code = (raw.split("-")[0] as SupportedLang) || "en";
    if (code in LANG_MAP) setAutoLang(code);
  }, [lang]);

  const effectiveLang: SupportedLang = lang ?? autoLang;
  const SVGComponent = LANG_MAP[effectiveLang] ?? SVGTabletEn;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
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
