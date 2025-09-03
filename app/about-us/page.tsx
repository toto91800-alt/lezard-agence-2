// app/about/page.tsx
import React from "react";
import AboutUS from "@/components/about-us/AboutUS";
import HeroLabSection from "@/components/background/TriangleTopBackground";
import { SectionBadge } from "@/components/ui/section-bade";
import ButtonStrike from "@/components/background/extra/ButtonStrike";

export default function AboutUs() {
  return (
    <section className="">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
        <SectionBadge title="Production audiovisuelle" />
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
          Je documente votre histoire avec passion
        </h2>
        <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
          En chacun et chacune se cache une histoire à raconter. Je capture la
          votre et lui donne vie sous un nouveau format, la vidéo.
        </p>
      </div>

      <AboutUS />
      <HeroLabSection>
        {/* Zone contenu (centrée verticalement) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-white">
              Commencez maintenant
            </span>
          </h2>
        </div>
        <ButtonStrike
          href="https://app.lezard-agency.com/dashboard/plan"
          className="mt-2"
        />
      </HeroLabSection>
    </section>
  );
}
