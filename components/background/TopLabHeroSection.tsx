// components/trial/LabBgSection.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import BannerAvantages from "@/components/background/extra/BannerAvantages";
import HeroTitleWithMarker from "@/components/background/extra/HeroTitleWithMarker";

type Tone = 1 | 2 | 3;
type BgTone = 1 | 2 | 3 | 4;
type CSSVar = string | number;

type SectionVars = React.CSSProperties & {
  ["--cb-bg"]?: CSSVar;
  ["--cb-tint"]?: CSSVar;
  ["--cb-glow"]?: CSSVar;
  ["--cb-top"]?: CSSVar;   // couleur du feather haut
  ["--joint-a"]?: CSSVar;  // opacité de départ de la ligne de jointure
};

type Props = {
  className?: string;
  src?: string;
  height?: number | string;

  /** Presets basés sur --colorbackground-N */
  bgTone?: BgTone;           // fond (1..4)
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
  jointLineOpacity?: number; // 0..1 (non utilisé dans le calcul demandé)
};

export default function TopLabSection({
  className,
  src = "/avif/bg_solutions_top-min.avif",
  height = 880,

  bgTone = 4,
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
}: Props) {
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  const styleVars: SectionVars = {
    "--cb-bg": `var(--colorbackground-${bgTone})`,
    "--cb-tint": `var(--colorbackground-${tintTone})`,
    "--cb-glow": `var(--colorbackground-${glowTone})`,
    ...(topFeatherTone ? { ["--cb-top"]: `var(--colorbackground-${topFeatherTone})` } : {}),
    "--joint-a": jointLineOpacity,
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
      {/* ▼▼▼ Dégradé de jointure EN BAS — 100% en bas → 0% en haut ▼▼▼ */}
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

      {/* Feather TOP uniquement */}
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
        <BannerAvantages className="w-full md:w-auto md:self-center" />
      </div>

      <div className="relative h-full" />
    </section>
  );
}
