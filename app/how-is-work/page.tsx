// app/how-is-work/page.tsx
import React from "react";
import HeroLabSection from "@/components/background/TriangleTopBackground";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import HowIsWorkTop from "@/components/how-is-work/HowIsWorkTop";
import HowCard from "@/components/how-is-work/HowCard";
import HowBlock from "@/components/how-is-work/HowBlock";


export default function AboutUs() {
  return (
    <section className="">
      <HowIsWorkTop />

      {/* Overlap uniquement à partir de sm -> évite le cut sur mobile */}
      <HowCard className="sm:-mt-10 md:-mt-12 lg:-mt-16" />

      <HowBlock />

      <HeroLabSection>
        {/* Zone contenu (centrée verticalement) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-white">Commencez maintenant</span>
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
