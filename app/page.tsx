"use client";

import { NavbarDemo } from "@/components/menu/NavbarDemo";
import { SectionBadge } from "@/components/ui/section-bade";
import { MarqueeDemo1 } from "@/components/ui/reviews1";
import TopLabHeroSection from "@/components/background/TopLabHeroSection";
import LabBgSection from "@/components/background/LabBgSection";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full space-y-10 px-[2%] lg:px-0">
      <main className="flex-1 w-full">
        <NavbarDemo />
  

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Production audiovisuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Je documente votre histoire avec passion
          </h2>
          <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
           En chacun et chacune se cache une histoire à raconter. Je capture la votre et lui donne vie sous un nouveau format, la vidéo.
          </p>
        </div>
        <TopLabHeroSection />
    
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Conception visuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Donnez vie à vos projets avec style et impact
          </h2>

        </div>
   
        <LabBgSection />
      
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
