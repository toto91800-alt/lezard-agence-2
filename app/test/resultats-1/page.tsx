"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BannerResultat1 from "@/components/resultats/BannerResultat1";
import HeroBlockResultats1 from "@/components/resultats/HeroBlockResultats1";
import StoryResultats1 from "@/components/resultats/StoryResultats1";
import ChartAreaInteractive1 from "@/components/resultats/charts/ChartAreaInteractive1";
import ChartAreaInteractive2 from "@/components/resultats/charts/ChartAreaInteractive2";
import TargetsTable from "@/components/resultats/charts/TargetsTable";
import HeroLabSection from "@/components/background/TriangleTopBackground";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import SocialProof from "@/components/background/extra/SocialProof";

export default function Resultat1() {
  const [hasMounted, setHasMounted] = useState(false);
  const { t } = useTranslation(); // ✅ Correction ici

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="w-full">
      <BannerResultat1 dataset="resultats-1" />
      <HeroBlockResultats1 dataset="resultats-1" />

      <StoryResultats1 dataset="resultats-1" />
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col gap-6 text-center">
          <ChartAreaInteractive2 dataset="resultats-1" />
          <ChartAreaInteractive1 dataset="resultats-1" />
          <TargetsTable dataset="resultats-1" />
        </div>
      </div>
      <HeroLabSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-white">
              {t("aboutus.title", "Commencez maintenant")}
            </span>
          </h2>
        </div>

        <SocialProof
          images={[
            { src: "https://app.lezard-agency.com/api/ig/pdp/theo.leraillez", alt: "Alice" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/meryyrodriguezz?cb=1759395794884", alt: "Bob" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/ericflag?cb=1756323886796", alt: "Carla" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/alextournier_?cb=1756323986311", alt: "David" },
            { src: "https://app.lezard-agency.com/api/ig/pdp/mavii.off?cb=1756323775730", alt: "Eva" },
          ]}
          rating={5}
          usersCount={1200}
          sizePx={56}
        />

        <ButtonStrike
          href="https://app.lezard-agency.com/dashboard/plan"
          className="mt-2"
        />
      </HeroLabSection>
    </section>
  );
}
