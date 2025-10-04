// components/background/BackgroundFooter.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = 1 | 2 | 3;
type BgTone = 1 | 2 | 3 | 4 | 5;
type CSSVar = string | number;

type SectionVars = React.CSSProperties & {
  ["--cb-bg"]?: CSSVar;      // base/fond
  ["--cb-tint"]?: CSSVar;    // teinte linéaire
  ["--cb-glow"]?: CSSVar;    // lueur radiale
  ["--cb-feather"]?: CSSVar; // couleur du feather (bas)
  ["--cb-top"]?: CSSVar;     // couleur du feather (haut)
};

type Props = {
  className?: string;
  src?: string;
  height?: number | string;

  /** Presets basés sur --colorbackground-N */
  bgTone?: BgTone;       // 1..5
  tintTone?: Tone;       // 1..3
  glowTone?: Tone;       // 1..3
  featherTone?: Tone;    // 1..3 (dégradé bas)

  // Overrides explicites (prennent le dessus sur les tones)
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

  /** Feather en haut */
  topFeatherPx?: number;
};

export default function BackgroundFooter({
  className,
  src = "/avif/bg_solutions_bottom-min.avif",
  height = 680,

  // choix des presets
  bgTone = 5,
  tintTone = 2,
  glowTone = 3,
  featherTone,

  // teinte linéaire
  tintColor,
  tintOpacity = 0.78,
  tintAngleDeg = 135,
  tintStart = "54%",

  // lueur radiale
  leftTintColor,
  leftBlendMode = "color",
  leftTintRadius = "150% 125%",
  leftTintCenter = "0% 100%",
  leftTintHardStop = "58%",
  leftTintFadeStop = "78%",
  leftTintOpacity = 0.68,

  // hauteur du dégradé en haut
  topFeatherPx = 80,
}: Props) {
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  // câble les presets globaux --colorbackground-N → variables locales
  const styleVars: SectionVars = {
    "--cb-bg": `var(--colorbackground-${bgTone})`,
    "--cb-tint": `var(--colorbackground-${tintTone})`,
    "--cb-glow": `var(--colorbackground-${glowTone})`,
    ...(featherTone ? { ["--cb-feather"]: `var(--colorbackground-${featherTone})` } : {}),
    "--cb-top": `var(--colorbackground-6)`,
  };

  const tintColorResolved = tintColor ?? "rgb(var(--cb-tint))";
  const glowColorResolved = leftTintColor ?? "rgb(var(--cb-glow))";

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      style={{
        ...styleVars,
        height: resolvedHeight,
        background: `rgb(var(--cb-bg))`,
      }}
    >
      {/* Background image */}
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

      {/* Hue-correcting wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${tintAngleDeg}deg, transparent ${tintStart}, ${tintColorResolved} 100%)`,
          mixBlendMode: "color",
          opacity: tintOpacity,
        }}
      />

      {/* Bottom-left glow */}
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

      {/* Feather EN HAUT (utilise --colorbackground-6) */}
      {topFeatherPx > 0 && (
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 pointer-events-none"
          style={{
            height: topFeatherPx,
            background: `linear-gradient(
              to bottom,
              rgb(var(--cb-top)) 0%,
              rgb(var(--cb-top) / 0) 100%
            )`,
          }}
        />
      )}
    </section>
  );
}
