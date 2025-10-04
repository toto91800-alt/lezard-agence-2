



"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import HeroResultat from "@/components/resultats/HeroResultat";
import MainResultats from "@/components/resultats/MainResultats";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import SocialProof from "@/components/background/extra/SocialProof";
import HeroLabSection from "@/components/background/TriangleTopBackground";

export default function MainResultat() {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="">
        <HeroResultat/>
        <div className="-mt-35">
        <MainResultats />
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
