// components/main/MainResultat.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import ButtonResultats from "@/components/background/extra/ButtonResultats";

type Props = {
  className?: string;
  href?: string;
};

const MainResultat: React.FC<Props> = ({
  className = "",
  href = "https://app.lezard-agency.com/dashboard/plan",
}) => {
  return (
    <section className={`relative overflow-hidden w-full ${className}`}>
      {/* Décorations SVG (gauche / droite) — cachées sur mobile */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] hidden sm:block">
        <Image
          src="/svg/coeur.svg"
          alt=""
          width={200}
          height={200}
          className="absolute left-[100px] top-[12%] w-20 sm:w-24 lg:w-32 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)]"
          priority
        />
        <Image
          src="/svg/etoile.svg"
          alt=""
          width={220}
          height={220}
          className="absolute right-[100px] top-[54%] w-20 sm:w-24 lg:w-36 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-[2] w-full flex flex-col items-center gap-4 sm:gap-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-[oklch(var(--secondary))]">
              <span className="whitespace-nowrap">Leurs Instagram</span>
              <br className="hidden lg:block" />
              <span> explose</span>
            </span>
          </h2>
        </div>

        <ButtonResultats href={href} className="mt-2" />
      </div>
    </section>
  );
};

export default MainResultat;
