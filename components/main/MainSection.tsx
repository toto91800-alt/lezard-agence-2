// components/MainSection.tsx
"use client";
import * as React from "react";
import TopLabHeroBackground from "@/components/background/TopLabHeroBackground";
import SocialProof from "@/components/background/extra/SocialProof";
import HeroTitleWithMarker from "@/components/background/extra/HeroTitleWithMarker";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import ButtonDemo from "@/components/background/extra/ButtonDemo";
import Image from "next/image";

// Mobile compact, desktop surchargé via classes
const HERO_HEIGHT = "clamp(480px, 60svh, 820px)";

const MainSection: React.FC = () => {
  return (
    <section className="relative">
   <TopLabHeroBackground
  height={HERO_HEIGHT}
  className="
    !h-[800px]           // ← hauteur forcée sur mobile
    sm:!h-[60svh]        // sm = >=640px
    md:!h-[66svh]
    lg:!h-[74svh]
    xl:!h-[78svh]
    2xl:!h-[840px]
  "
/>

      {/* 🎨 Décorations SVG (étoiles) — cachées sur mobile */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] hidden sm:block">
        {/* Gauche */}
        <Image
          src="/svg/star.svg"
          alt=""
          width={200}
          height={200}
          className="
            absolute left-[50px] top-[12%]
            w-20 sm:w-24 lg:w-32
            opacity-70
            drop-shadow-[0_10px_25px_rgba(0,0,0,.25)]
          "
          priority
        />
        {/* Droite */}
        <Image
          src="/svg/star.svg"
          alt=""
          width={220}
          height={220}
          className="
            absolute right-[50px] top-[54%]
            w-20 sm:w-24 lg:w-36
            opacity-60
            drop-shadow-[0_10px_25px_rgba(0,0,0,.25)]
            -scale-x-100 transform-gpu
          "
          priority
        />
      </div>

      {/* Overlay contenu */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 sm:gap-6 px-4 sm:px-6">
        {/* Title */}
        <div className="pointer-events-auto mx-auto max-w-[min(92vw,64rem)] text-center">
          <HeroTitleWithMarker />
        </div>

        {/* Buttons */}
        <div className="pointer-events-auto w-full px-4 sm:px-0">
          <div className="mx-auto flex w-full max-w-[20rem] flex-col gap-5 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <ButtonStrike
              href="https://app.lezard-agency.com/dashboard/plan"
              className="w-full sm:w-auto"
            />
            <ButtonDemo
              href="https://demo.lezard-agency.com/lezard-agence/trial"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Social proof */}
        <div className="pointer-events-auto mt-10 sm:mt-6"> {/* ⬅️ marge plus grande sur mobile */}
          <SocialProof
            images={[
              { src: "https://app.lezard-agency.com/api/ig/pdp/theo.leraillez", alt: "Alice" },
              { src: "https://app.lezard-agency.com/api/ig/pdp/meryyrodriguezz?cb=1758981685139", alt: "Bob" },
              { src: "https://app.lezard-agency.com/api/ig/pdp/ericflag?cb=1756323886796", alt: "Carla" },
              { src: "https://app.lezard-agency.com/api/ig/pdp/alextournier_?cb=1756323986311", alt: "David" },
              { src: "https://app.lezard-agency.com/api/ig/pdp/mavii.off?cb=1756323775730", alt: "Eva" },
            ]}
            rating={5}
            usersCount={1200}
            sizePx={44}
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
