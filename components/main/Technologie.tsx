// components/sections/Technologie.tsx
"use client";

import * as React from "react";
import ResponsiveRenderer from "@/components/responsive/ResponsiveRenderer";
import ButtonTechnologie from "@/components/background/extra/ButtonTechnologie";

type Props = {
  className?: string;
};

export default function Technologie({ className = "" }: Props) {
  return (
    <section className={`relative overflow-hidden w-full ${className}`}>
      {/* Contenu */}
      <div className="relative z-[2] w-full flex flex-col items-center gap-4 sm:gap-6 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-[var(--MainTitle)]">
              <span className="whitespace-nowrap">Notre technologie</span>
              <br className="hidden lg:block" />
              <span> a 360</span>
            </span>
          </h2>
        </div>

        <ButtonTechnologie href="/how-is-work" />
      </div>
      <ResponsiveRenderer />
    </section>
  );
}
