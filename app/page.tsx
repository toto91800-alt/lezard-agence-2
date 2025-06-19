"use client";

import Banner from "@/components/ui/banner";
import { NavbarDemo } from "@/components/menu/NavbarDemo";
import SliderProjets1 from "@/components/sliderproject/SliderProjets1";
import Home from "@/components/ui/Home";
import { SectionBadge } from "@/components/ui/section-bade";
import { MarqueeDemo1 } from "@/components/ui/reviews1";
import Portfolio from "@/components/ui/footerExpert";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full space-y-10 px-[2%] lg:px-0">
      <main className="flex-1 w-full">
        <NavbarDemo />
        <Banner />

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Production audiovisuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Donnez vie à vos projets avec style et impact
          </h2>
          <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
            Nous combinons créativité et technologie pour produire des contenus qui captivent et engagent.
          </p>
        </div>

        <SliderProjets1 />
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Production audiovisuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Donnez vie à vos projets avec style et impact
          </h2>
          <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
            Nous combinons créativité et technologie pour produire des contenus qui captivent et engagent.
          </p>
        </div>
        <Home />
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Production audiovisuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Donnez vie à vos projets avec style et impact
          </h2>
          <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
            Nous combinons créativité et technologie pour produire des contenus qui captivent et engagent.
          </p>
        </div>
        <MarqueeDemo1 />
        <Portfolio />
      </main>
    </div>
  );
}
