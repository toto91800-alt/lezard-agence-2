"use client";

import { NavbarDemo } from "@/components/menu/NavbarDemo";
import { SectionBadge } from "@/components/ui/section-bade";
import { MarqueeDemo1 } from "@/components/ui/reviews1";
import MainSection from "@/components/main/MainSection";
import Presentation from "@/components/main/Presentation";
import MainResultat from "@/components/main/MainResultat";
import Technologie from "@/components/main/Technologie";
import Benefit from "@/components/main/Benefit";
import New_Pricing from "@/components/prix/New_Pricing";

export default function HomePage() {
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
        <New_Pricing />
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Avis" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Ce que disent mes clients
          </h2>
        </div>
        <MarqueeDemo1 />
      </main>
    </div>
  );
}
