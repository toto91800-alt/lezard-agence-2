// components/responsive/MobileView.tsx
"use client";

import React from "react";

// 📱 Mobile SVGs
import SVGMobileFr from "@/components/responsive/SVG-Mobile/SVGMobileFr";
import SVGMobileEn from "@/components/responsive/SVG-Mobile/SVGMobileEn";
import SVGMobileEs from "@/components/responsive/SVG-Mobile/SVGMobileEs";
import SVGMobileDe from "@/components/responsive/SVG-Mobile/SVGMobileDe";
// 🌈 Background
import SVGCBarmobile from "@/components/responsive/common/SVGBarMobile";

type SupportedLang = "fr" | "en" | "es" | "de";

type Props = {
  /** 👍 Recommandé : passe la langue depuis un parent (server component) */
  lang?: SupportedLang;
};

/** map hors composant → pas recréée à chaque render */
const LANG_MAP: Record<SupportedLang, React.FC> = {
  fr: SVGMobileFr,
  en: SVGMobileEn,
  es: SVGMobileEs,
  de: SVGMobileDe,
};

export default function MobileView({ lang }: Props) {
  // langue déterminée: priorité à la prop (évite tout flicker/hydration issues)
  const [autoLang, setAutoLang] = React.useState<SupportedLang>("en");

  // détection client facultative (si on n’a pas reçu `lang`)
  React.useEffect(() => {
    if (lang) return; // déjà fourni
    const raw = document.documentElement.lang || "en";
    const code = (raw.split("-")[0] as SupportedLang) || "en";
    if (code in LANG_MAP) setAutoLang(code);
  }, [lang]);

  const effectiveLang: SupportedLang = lang ?? autoLang;
  const SVGComponent = LANG_MAP[effectiveLang] ?? SVGMobileEn;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
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
        <SVGCBarmobile />
      </div>
    </div>
  );
}
