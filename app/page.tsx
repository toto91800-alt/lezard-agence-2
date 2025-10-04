"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavbarDemo } from "@/components/menu/NavbarDemo";
import { MarqueeDemo1 } from "@/components/ui/reviews1";
import MainSection from "@/components/main/MainSection";
import Presentation from "@/components/main/Presentation";
import MainResultat from "@/components/main/MainResultat";
import Technologie from "@/components/main/Technologie";
import Benefit from "@/components/main/Benefit";
import New_Pricing from "@/components/prix/New_Pricing";
import Faq from "@/components/ui/faq";

export default function HomePage() {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-sm text-gray-400">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full space-y-10 lg:px-0">
      <main className="flex-1 w-full">
        <NavbarDemo />

        <MainSection />
        <div className="relative z-[3] pointer-events-auto w-full px-4 sm:px-0 -mt-6 sm:-mt-8 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-28">
          <Presentation />
        </div>
        <MainResultat />
        <Technologie />
        <Benefit />

        {/* Section Tarifs */}
        <div className="relative z-[2] w-full flex flex-col items-center pt-10 pb-1 sm:pt-8 sm:pb-0">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
              <span className="block mt-[0.25em] text-[var(--MainTitle)]">
                <span className="whitespace-nowrap">
                  {t("mainpage.pricing.title", "Nos Tarifs")}
                </span>
              </span>
            </h2>
          </div>
        </div>

        <New_Pricing />
        <Faq />

        {/* Section Avis */}
        <div className="relative z-[2] w-full flex flex-col items-center pt-10 pb-16 sm:pt-8 sm:pb-12">
          <div className="w-full px-4 flex justify-center">
            <h2 className="mx-auto text-center font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
              <span className="block mt-[0.25em] text-[var(--MainTitle)]">
                <span className="whitespace-normal">
                  {t("mainpage.reviews.title", "Les avis")}
                </span>
              </span>
            </h2>
          </div>
        </div>

        <MarqueeDemo1 />
      </main>
    </div>
  );
}
