// components/main/MainResultat.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import ButtonResultats from "@/components/background/extra/ButtonResultats";
import BottomLabHeroBackground from "@/components/background/BottomLabHeroBackground";
import CarouselResultats from "@/components/main/CarouselResultats";

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
      {/* ✅ Background plein écran, légèrement agrandi */}
      <BottomLabHeroBackground
        className="absolute inset-0 -z-10 transform-gpu scale-[1.03]"
        height="auto"
        src="/avif/bg_solutions_top-min.avif"
        rotateAvif180
        jointLineHeightPx={34}
        topFeatherPx={40}
        bgTone={5}
        tintTone={2}
        glowTone={3}
        leftTintCenter="0% 100%"
      />

      {/* Décorations SVG (gauche / droite) — cachées sur mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
      >
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
          className="absolute right-[100px] top-[34%] w-20 sm:w-24 lg:w-36 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-[2] w-full flex flex-col items-center gap-4 sm:gap-6 py-14 sm:py-20">
        {/* élargir le conteneur pour éviter l'overflow vers la droite */}
        <div className="mx-auto max-w-6xl text-center px-4">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-[var(--MainTitleSecond)]">
              <span className="block">Leur compte</span>
              {/* garder Instagram + explose sur la même ligne */}
              <span className="block whitespace-nowrap">
                Instagram&nbsp;explose
              </span>
            </span>
          </h2>
        </div>

        <ButtonResultats href={href} className="mt-2" />
      </div>

      {/* Carrousel + padding bottom en dessous */}
      <div className="w-full pb-14 sm:pb-20">
        <CarouselResultats />
      </div>
    </section>
  );
};

export default MainResultat;
