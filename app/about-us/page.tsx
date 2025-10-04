"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import AboutUS from "@/components/about-us/AboutUS";
import HeroLabSection from "@/components/background/TriangleTopBackground";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import SocialProof from "@/components/background/extra/SocialProof";
import About from "@/components/about-us/About";
import ContactAbout from "@/components/about-us/ContactAbout";

export default function AboutUs() {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="">
      <About />
      <AboutUS />
      <ContactAbout className="pb-12 sm:pb-16" />

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
