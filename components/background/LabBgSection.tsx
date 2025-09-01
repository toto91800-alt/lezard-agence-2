// components/trial/LabBgSection.tsx
"use client";
import SocialProof from "@/components/background/extra/SocialProof";
import * as React from "react";
import { cn } from "@/lib/utils";
import ButtonStrike from "@/components/background/extra/ButtonStrike";

type Props = {
  className?: string;
  src?: string;
  labColor?: string;
  height?: number | string;

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

export default function LabBgSection({
  className,
  src = "/avif/bg_solutions_bottom-min.avif",
  labColor = "lab(96.1596% -.0823438 -1.13575)",
  height = 480,

  // teinte orange
  tintColor = "oklch(0.82 0.14 55)",
  tintOpacity = 0.78,
  tintAngleDeg = 135,
  tintStart = "54%",

  vividOpacity = 0.48,

  leftTintColor = "oklch(0.84 0.15 55)",
  leftBlendMode = "color",
  leftTintRadius = "150% 125%",
  leftTintCenter = "0% 100%",
  leftTintHardStop = "58%",
  leftTintFadeStop = "78%",
  leftTintOpacity = 0.68,

  topFeatherPx = 80,
}: Props) {
  const fallbackRgb = "rgb(246, 246, 246)";
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      style={{
        height: resolvedHeight,
        background: `linear-gradient(${labColor}, ${labColor}), ${fallbackRgb}`,
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

      {/* Hue-correcting orange wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${tintAngleDeg}deg, transparent ${tintStart}, ${tintColor} 100%)`,
          mixBlendMode: "color",
          opacity: tintOpacity,
        }}
      />

      {/* Soft-light vitality */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${tintAngleDeg}deg, transparent 50%, oklch(0.80 0.12 55 / 0.95) 100%)`,
          mixBlendMode: "soft-light",
          opacity: vividOpacity,
        }}
      />

      {/* Bottom-left orange glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse ${leftTintRadius} at ${leftTintCenter},
            ${leftTintColor} 0%,
            ${leftTintColor} ${leftTintHardStop},
            transparent ${leftTintFadeStop}
          )`,
          mixBlendMode: leftBlendMode,
          opacity: leftTintOpacity,
        }}
      />

      {/* Top feather */}
      {topFeatherPx > 0 && (
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 pointer-events-none"
          style={{
            height: topFeatherPx,
            background: `linear-gradient(to bottom, ${labColor}, transparent)`,
          }}
        />
      )}

      {/* Zone contenu (titre + social + bouton) */}
      <div className="absolute inset-0 z-[1] flex flex-col items-center justify-start gap-6 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center text-black">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em]">Commencez maintenant</span>
          </h2>
        </div>

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

        {/* Bouton sous le titre + social */}
        <ButtonStrike href="https://app.lezard-agency.com/dashboard/plan" className="mt-2" />
      </div>
    </section>
  );
}
