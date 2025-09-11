"use client";

import React from "react";
import HeroLabSection from "@/components/background/TriangleTopBackground";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import HowIsWorkTop from "@/components/how-is-work/HowIsWorkTop";
import HowCard from "@/components/how-is-work/HowCard";
import HowBlock from "@/components/how-is-work/HowBlock";
import HowCardSix from "@/components/how-is-work/HowCardSix";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="">
      <HowIsWorkTop />
      <HowCard className="sm:-mt-10 md:-mt-12 lg:-mt-16" />
      <HowBlock />
      <HowCardSix />
      <HeroLabSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-white">
              {mounted && t("howwork.ctaTitle", "Commencez maintenant")}
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
