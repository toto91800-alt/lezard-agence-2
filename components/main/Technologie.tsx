// components/sections/Technologie.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import ResponsiveRenderer from "@/components/responsive/ResponsiveRenderer";
import ButtonTechnologie from "@/components/background/extra/ButtonTechnologie";

type Props = {
  className?: string;
};

export default function Technologie({ className = "" }: Props) {
  return (
    <section className={`relative overflow-hidden w-full ${className}`}>
  

      {/* Décorations SVG à gauche/droite — cachées sur mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
      >
        <Image
          src="/svg/eclair.svg"
          alt=""
          width={200}
          height={200}
          className="absolute left-[100px] top-[12%] w-20 sm:w-24 lg:w-32 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)]"
          priority
        />
        <Image
          src="/svg/eclair.svg"
          alt=""
          width={220}
          height={220}
          className="absolute right-[100px] top-[34%] w-20 sm:w-24 lg:w-36 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-[2] w-full flex flex-col items-center gap-4 sm:gap-6 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-white">
              <span className="whitespace-nowrap">Notre technologie</span>
              <br className="hidden lg:block" />
              <span> a 360</span>
            </span>
          </h2>
        </div>

        <ButtonTechnologie href="/technologie" />
      </div>
      <ResponsiveRenderer />
    </section>
  );
}
