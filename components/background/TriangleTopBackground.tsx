// components/trial/LabBgSection.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = 1 | 2 | 3;
type BgTone = 1 | 2 | 3 | 4 | 5;
type CSSVar = string | number;

type SectionVars = React.CSSProperties & {
  ["--cb-bg"]?: CSSVar;
  ["--cb-tint"]?: CSSVar;
  ["--cb-glow"]?: CSSVar;
  ["--cb-feather"]?: CSSVar;
  ["--cb-top"]?: CSSVar;
};

type Props = {
  className?: string;
  src?: string;
  height?: number | string;            // <- si non fourni, on applique 160vh/130vh via Tailwind
  children?: React.ReactNode;

  bgTone?: BgTone;
  tintTone?: Tone;
  glowTone?: Tone;
  featherTone?: Tone;

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
};

export default function TriangleTopBackground({
  className,
  src = "/avif/bg_solutions_top-min2.avif",

  // pas de hauteur par défaut -> on laisse les classes responsives agir
  height,

  bgTone = 5,
  tintTone = 2,
  glowTone = 3,
  featherTone,

  tintColor,
  tintOpacity = 0.78,
  tintAngleDeg = 135,
  tintStart = "54%",

  leftTintColor,
  leftBlendMode = "color",
  leftTintRadius = "150% 125%",
  leftTintCenter = "0% 100%",
  leftTintHardStop = "58%",
  leftTintFadeStop = "78%",
  leftTintOpacity = 0.68,

  topFeatherPx = 80,

  children,
}: Props) {
  const resolvedHeight =
    typeof height === "number" ? `${height}px` : height || undefined;

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
      className={cn(
        "relative overflow-hidden",
        // Par défaut: 160vh sur mobile, 130vh sur desktop (≥1024px)
        !resolvedHeight && "h-[150vh] lg:h-[130vh]",
        className
      )}
      style={{
        ...styleVars,
        ...(resolvedHeight ? { height: resolvedHeight } : {}),
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

      {/* Feather EN BAS */}
      {topFeatherPx > 0 && (
        <div
          aria-hidden
          className="absolute left-0 right-0 bottom-0 pointer-events-none"
          style={{
            height: topFeatherPx,
            background: `linear-gradient(
              to top,
              rgb(var(--cb-top)) 0%,
              rgb(var(--cb-top) / 0) 100%
            )`,
          }}
        />
      )}

      {/* Zone contenu (centrée verticalement) */}
      <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center gap-6 px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}
