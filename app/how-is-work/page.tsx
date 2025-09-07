// app/how-is-work/page.tsx
import React from "react";
import HeroLabSection from "@/components/background/TriangleTopBackground";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import HowIsWorkTop from "@/components/how-is-work/HowIsWorkTop";

export default function AboutUs() {
  return (
    <section className="">
          <HowIsWorkTop  />
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
