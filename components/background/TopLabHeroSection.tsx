// components/TopLabHeroSection.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import SocialProof from "@/components/background/extra/SocialProof";
import HeroTitleWithMarker from "@/components/background/extra/HeroTitleWithMarker";
type Tone = 1 | 2 | 3;
type BgTone = 1 | 2 | 3 | 4 | 5; // ← supporte 5
type CSSVar = string | number;

type SectionVars = React.CSSProperties & {
  ["--cb-bg"]?: CSSVar;
  ["--cb-tint"]?: CSSVar;
  ["--cb-glow"]?: CSSVar;
  ["--cb-top"]?: CSSVar;
  ["--joint-a"]?: CSSVar;

  // ↓ nouveau : couleur utilisée pour recolorer le blanc via multiply
  ["--cb-recolor"]?: CSSVar;
};

type Props = {
  className?: string;
  src?: string;
  height?: number | string;

  /** Presets basés sur --colorbackground-N */
  bgTone?: BgTone;           // fond (1..5)
  tintTone?: Tone;           // teinte linéaire
  glowTone?: Tone;           // lueur radiale
  topFeatherTone?: Tone;     // dégradé HAUT

  // Overrides explicites
  tintColor?: string;
  tintOpacity?: number;
  tintAngleDeg?: number;
  tintStart?: string;

  vividOpacity?: number;

  leftTintColor?: string;
  leftBlendMode?: "color" | "hue";
  leftTintRadius?: string;
  leftTintCenter?: string;
  leftTintHardStop?: string;
  leftTintFadeStop?: string;
  leftTintOpacity?: number;

  topFeatherPx?: number;

  /** Dégradé de jointure en BAS */
  jointLineHeightPx?: number;
  jointLineOpacity?: number; // 0..1

  /** Recolor du BLANC de l'AVIF (via multiply) */
  recolorWhiteTone?: BgTone;     // par défaut 5 → --colorbackground-5
  recolorWhiteOpacity?: number;  // force de teinte (0..1), 1 = pleine
};

export default function TopLabSection({
  className,
  src = "/avif/bg_solutions_top-min.avif",
  height = 880,

  bgTone = 5,           // ← fond de la section
  tintTone = 2,
  glowTone = 3,
  topFeatherTone,

  tintColor,
  tintOpacity = 0.78,
  tintAngleDeg = 135,
  tintStart = "54%",

  vividOpacity = 0.48,

  leftTintColor,
  leftBlendMode = "color",
  leftTintRadius = "150% 125%",
  leftTintCenter = "0% 100%",
  leftTintHardStop = "58%",
  leftTintFadeStop = "78%",
  leftTintOpacity = 0.68,

  topFeatherPx = 0,

  jointLineHeightPx = 34,
  jointLineOpacity = 1,

  // ↓ par défaut on recolore le blanc avec --colorbackground-5
  recolorWhiteTone = 5,
  recolorWhiteOpacity = 1,
}: Props) {
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  const styleVars: SectionVars = {
    "--cb-bg": `var(--colorbackground-${bgTone})`,
    "--cb-tint": `var(--colorbackground-${tintTone})`,
    "--cb-glow": `var(--colorbackground-${glowTone})`,
    ...(topFeatherTone ? { ["--cb-top"]: `var(--colorbackground-${topFeatherTone})` } : {}),
    "--joint-a": jointLineOpacity,

    // couleur utilisée pour recolorer les zones BLANCHES
    "--cb-recolor": `var(--colorbackground-${recolorWhiteTone})`,
  };

  const tintColorResolved = tintColor ?? "rgb(var(--cb-tint))";
  const glowColorResolved = leftTintColor ?? "rgb(var(--cb-glow))";
  const topFeatherColor = topFeatherTone ? "rgb(var(--cb-top))" : "rgb(var(--cb-bg))";

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      style={{
        ...styleVars,
        height: resolvedHeight,
        background: `rgb(var(--cb-bg))`,
      }}
    >
      {/* Dégradé de jointure EN BAS — 100% en bas → 0% en haut */}
      {jointLineHeightPx > 0 && (
        <div
          aria-hidden
          className="absolute left-0 right-0 bottom-0 pointer-events-none z-[2]"
          style={{
            height: jointLineHeightPx,
            background: `linear-gradient(
              to top,
              rgb(var(--colorbackground-4) / 1) 0%,
              rgb(var(--colorbackground-4) / 0) 100%
            )`,
          }}
        />
      )}

      {/* Image de fond */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 🔴 Recolor des zones BLANCHES de l'image (multiply) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `rgb(var(--cb-recolor))`,
          mixBlendMode: "multiply",
          opacity: recolorWhiteOpacity,
        }}
      />

      {/* Teinte (blend: color) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${tintAngleDeg}deg, transparent ${tintStart}, ${tintColorResolved} 100%)`,
          mixBlendMode: "color",
          opacity: tintOpacity,
        }}
      />

      {/* Vitalité (soft-light) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${tintAngleDeg}deg, transparent 50%, rgb(var(--cb-tint) / 0.95) 100%)`,
          mixBlendMode: "soft-light",
          opacity: vividOpacity,
        }}
      />

      {/* Lueur radiale */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse ${leftTintRadius} at ${leftTintCenter},
            ${glowColorResolved} 0%,
            ${glowColorResolved} ${leftTintHardStop},
            transparent ${leftTintFadeStop}
          )`,
          mixBlendMode: leftBlendMode,
          opacity: leftTintOpacity,
        }}
      />

      {/* Feather TOP (optionnel) */}
      {topFeatherPx > 0 && (
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 pointer-events-none"
          style={{
            height: topFeatherPx,
            background: `linear-gradient(to bottom, ${topFeatherColor}, transparent)`,
          }}
        />
      )}

      {/* Contenu */}
      <div className="relative z-[3] flex h-full px-6 flex-col items-center justify-center gap-6 md:flex-col md:items-center md:justify-center">
        <HeroTitleWithMarker />
        <SocialProof
          images={[
            { src: "https://app.lezard-agency.com/api/ig/pdp/theo.leraillez", alt: "Alice" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/julia_nadal_?cb=1756323670092", alt: "Bob" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/ericflag?cb=1756323886796", alt: "Carla" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/alextournier_?cb=1756323986311", alt: "David" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/mavii.off?cb=1756323775730", alt: "Eva" },
          ]}
          rating={5}
          usersCount={1200}
          sizePx={56}
        />
      </div>
  
    </section>
  );
}
