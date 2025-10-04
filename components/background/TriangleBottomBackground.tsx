// components/trial/LabBgSectionInverted.tsx
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
  children?: React.ReactNode;

  /** Presets basés sur --colorbackground-N */
  bgTone?: BgTone;       // 1..5
  tintTone?: Tone;       // 1..3
  glowTone?: Tone;       // 1..3
  featherTone?: Tone;    // 1..3 (dégradé bas / haut selon inversion)

  // Overrides explicites
  tintColor?: string;
  tintOpacity?: number;
  tintAngleDeg?: number;   // on l’inversera automatiquement (+180°)
  tintStart?: string;

  vividOpacity?: number;

  leftTintColor?: string;  // conservé pour compat — le glow sera déplacé coin opposé
  leftBlendMode?: "color" | "hue";
  leftTintRadius?: string;
  leftTintCenter?: string; // on l’inversera (ex: "0% 100%" -> "100% 0%")
  leftTintHardStop?: string;
  leftTintFadeStop?: string;
  leftTintOpacity?: number;

  /** Feather hauteur ; dans la version inversée on le met EN HAUT */
  topFeatherPx?: number;
};

// Utilitaire: inverse "X% Y%" -> "(100-X)% (100-Y)%"
function invertCenter(pos: string | undefined): string | undefined {
  if (!pos) return pos;
  const m = pos.match(/^\s*([\d.]+)%\s+([\d.]+)%\s*$/);
  if (!m) return pos; // si format non standard, on ne modifie pas
  const x = Math.max(0, Math.min(100, 100 - parseFloat(m[1])));
  const y = Math.max(0, Math.min(100, 100 - parseFloat(m[2])));
  return `${x}% ${y}%`;
}

export default function TriangleBottomBackground({
  className,
  src = "/avif/bg_solutions_top-min2.avif",
  height = 880,

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

  // lueur radiale (sera déplacée coin opposé)
  leftTintColor,
  leftBlendMode = "color",
  leftTintRadius = "150% 125%",
  leftTintCenter = "0% 100%", // coin bas-gauche (par défaut)
  leftTintHardStop = "58%",
  leftTintFadeStop = "78%",
  leftTintOpacity = 0.68,

  // feather (dans la version inversée on le met EN HAUT)
  topFeatherPx = 80,

  children,
}: Props) {
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  // Inversions calculées
  const invertedAngle = ((tintAngleDeg ?? 0) + 180) % 360; // linéaire inversé
  const invertedCenter = invertCenter(leftTintCenter) ?? "100% 0%"; // coin opposé
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
      {/* Image de fond — pivotée 180° */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(180deg)",
          transformOrigin: "center",
        }}
      />

      {/* Teinte linéaire (inversée via +180°) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${invertedAngle}deg, transparent ${tintStart}, ${tintColorResolved} 100%)`,
          mixBlendMode: "color",
          opacity: tintOpacity,
        }}
      />

      {/* Glow déplacé au coin opposé (ex: bas-gauche -> haut-droit) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse ${leftTintRadius} at ${invertedCenter},
            ${glowColorResolved} 0%,
            ${glowColorResolved} ${leftTintHardStop},
            transparent ${leftTintFadeStop}
          )`,
          mixBlendMode: leftBlendMode,
          opacity: leftTintOpacity,
        }}
      />

      {/* Feather EN HAUT (inverse de la version bas) */}
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

      {/* Contenu centré */}
      <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center gap-6 px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}
