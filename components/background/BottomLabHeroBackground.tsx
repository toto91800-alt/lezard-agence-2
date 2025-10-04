// components/BottomLabHeroBackground.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = 1 | 2 | 3;
type BgTone = 1 | 2 | 3 | 4 | 5; // ← supporte 5
type CSSVar = string | number;

type SectionVars = React.CSSProperties & {
  ["--cb-bg"]?: CSSVar;
  ["--cb-tint"]?: CSSVar;
  ["--cb-glow"]?: CSSVar;
  ["--cb-top"]?: CSSVar;
  ["--joint-a"]?: CSSVar;
  ["--cb-recolor"]?: CSSVar; // recolor des zones blanches
};

export type BottomLabHeroBackgroundProps = {
  className?: string;
  src?: string;
  height?: number | string;

  /** Presets basés sur --colorbackground-N */
  bgTone?: BgTone;           // fond (1..5)
  tintTone?: Tone;           // teinte linéaire
  glowTone?: Tone;           // lueur radiale
  topFeatherTone?: Tone;     // dégradé HAUT (nom conservé)

  // Overrides explicites
  tintColor?: string;
  tintOpacity?: number;
  tintAngleDeg?: number;
  tintStart?: string;

  vividOpacity?: number;

  leftTintColor?: string;
  leftBlendMode?: "color" | "hue";
  leftTintRadius?: string;
  leftTintCenter?: string;     // ex: "0% 100%"
  leftTintHardStop?: string;
  leftTintFadeStop?: string;
  leftTintOpacity?: number;

  topFeatherPx?: number;

  /** Dégradé de jointure en HAUT */
  jointLineHeightPx?: number;
  jointLineOpacity?: number; // 0..1

  /** Recolor du BLANC de l'AVIF (via multiply) */
  recolorWhiteTone?: BgTone;     // par défaut 5 → --colorbackground-5
  recolorWhiteOpacity?: number;  // force de teinte (0..1), 1 = pleine

  /** 🔁 Rotation 180° de l'AVIF ET des couches couleur associées */
  rotateAvif180?: boolean;       // par défaut true
};

/** ✅ Constante exportée: ajuste le default height ici (ou passe `height` en prop) */
export const HERO_SECTION_DEFAULT_HEIGHT = 480;

/** Util: normalise un angle en [0, 360) */
function normDeg(d: number) {
  const r = d % 360;
  return r < 0 ? r + 360 : r;
}

/** Util: convertit "center"/"50%" en 50, "0%" → 0, "100%" → 100 ; retourne null si invalide */
function pctToNum(v: string): number | null {
  const t = v.trim().toLowerCase();
  if (t === "center") return 50;
  const m = t.match(/^(-?\d+(?:\.\d+)?)%$/);
  if (!m) return null;
  const num = parseFloat(m[1]);
  return isFinite(num) ? num : null;
}

/** Util: parse "X% Y%" | "center center" ; retourne [x,y] en 0..100 si possible */
function parseCenterPair(s: string | undefined): [number, number] | null {
  if (!s) return null;
  const parts = s.split(/\s+/);
  if (parts.length < 2) return null;
  const x = pctToNum(parts[0]);
  const y = pctToNum(parts[1]);
  if (x == null || y == null) return null;
  return [Math.max(0, Math.min(100, x)), Math.max(0, Math.min(100, y))];
}

/** Util: tourne le point 180° dans le repère 0..100 */
function rotateCenter180([x, y]: [number, number]): [number, number] {
  return [100 - x, 100 - y];
}

/** Util: stringify vers "X% Y%" */
function toPairStr([x, y]: [number, number]): string {
  const fx = Number.isFinite(x) ? Math.max(0, Math.min(100, x)) : 50;
  const fy = Number.isFinite(y) ? Math.max(0, Math.min(100, y)) : 50;
  return `${fx}% ${fy}%`;
}

export default function BottomLabHeroBackground({
  className,
  src = "/avif/bg_solutions_top-min.avif",
  height = HERO_SECTION_DEFAULT_HEIGHT,

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

  rotateAvif180 = true,
}: BottomLabHeroBackgroundProps) {
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  const styleVars: SectionVars = {
    "--cb-bg": `var(--colorbackground-${bgTone})`,
    "--cb-tint": `var(--colorbackground-${tintTone})`,
    "--cb-glow": `var(--colorbackground-${glowTone})`,
    ...(topFeatherTone ? { ["--cb-top"]: `var(--colorbackground-${topFeatherTone})` } : {}),
    "--joint-a": jointLineOpacity,
    "--cb-recolor": `var(--colorbackground-${recolorWhiteTone})`,
  };

  const isAvif = typeof src === "string" && /\.avif(\?.*)?$/i.test(src);

  // 🔁 Si on tourne l’AVIF, on tourne AUSSI les angles/couleurs
  const effTintAngle = rotateAvif180 && isAvif ? normDeg((tintAngleDeg ?? 0) + 180) : (tintAngleDeg ?? 0);

  const parsedCenter = parseCenterPair(leftTintCenter);
  const rotatedCenter =
    rotateAvif180 && isAvif && parsedCenter ? toPairStr(rotateCenter180(parsedCenter)) : leftTintCenter;

  const tintColorResolved = tintColor ?? "rgb(var(--cb-tint))";
  const glowColorResolved = leftTintColor ?? "rgb(var(--cb-glow))";
  const topFeatherColor = topFeatherTone ? "rgb(var(--cb-top))" : "rgb(var(--cb-bg))";

  // Transform de l’image
  const imageTransform = rotateAvif180 && isAvif ? "rotate(180deg)" : undefined;

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      style={{
        ...styleVars,
        height: resolvedHeight,
        background: `rgb(var(--cb-bg))`,
      }}
    >
      {/* Dégradé de jointure EN HAUT — 100% en haut → 0% en bas */}
      {jointLineHeightPx > 0 && (
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 pointer-events-none z-[1]"
          style={{
            height: jointLineHeightPx,
            background: `linear-gradient(
              to bottom,
              rgb(var(--colorbackground-4) / 1) 0%,
              rgb(var(--colorbackground-4) / 0) 100%
            )`,
          }}
        />
      )}

      {/* Image de fond — rotation 180° pour AVIF */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: imageTransform,
          transformOrigin: "center center",
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

      {/* Teinte (blend: color) — angle tourné aussi si AVIF tourné */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${effTintAngle}deg, transparent ${tintStart}, ${tintColorResolved} 100%)`,
          mixBlendMode: "color",
          opacity: tintOpacity,
        }}
      />

      {/* Vitalité (soft-light) — angle tourné aussi */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${effTintAngle}deg, transparent 50%, rgb(var(--cb-tint) / 0.95) 100%)`,
          mixBlendMode: "soft-light",
          opacity: vividOpacity,
        }}
      />

      {/* Lueur radiale — centre tourné 180° si AVIF tourné */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse ${leftTintRadius} at ${rotatedCenter},
            ${glowColorResolved} 0%,
            ${glowColorResolved} ${leftTintHardStop},
            transparent ${leftTintFadeStop}
          )`,
          mixBlendMode: leftBlendMode,
          opacity: leftTintOpacity,
        }}
      />

      {/* ✅ Feather TOP (au lieu du bas) */}
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
    </section>
  );
}
