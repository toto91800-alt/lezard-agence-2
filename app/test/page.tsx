"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import HeroLabSection from "@/components/background/TriangleTopBackground";
import HeroResultat from "@/components/resultats/HeroResultat";
import MainResultats from "@/components/resultats/MainResultats";


export default function AboutUs() {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="">
        <HeroResultat/>
        <MainResultats/>
      <HeroLabSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-white">
              {t("aboutus.title", "Commencez maintenant")}
            </span>
          </h2>
        </div>
      </HeroLabSection>
    </section>
  );
}
