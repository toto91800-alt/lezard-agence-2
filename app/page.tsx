"use client";

import Banner from "@/components/ui/banner";
import { NavbarDemo } from "@/components/menu/NavbarDemo";
import SliderProjets1 from "@/components/sliderproject/SliderProjets1";
import Home from "@/components/ui/Home";
import { SectionBadge } from "@/components/ui/section-bade";
import { MarqueeDemo1 } from "@/components/ui/reviews1";
import AlternatingCards from "@/components/ui/AlternatingCards";
import CreativeTriad from "@/components/ui/CreativeTriad";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full space-y-10 px-[2%] lg:px-0">
      <main className="flex-1 w-full">
        <NavbarDemo />
        <Banner />

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Production audiovisuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Je documente votre histoire avec passion
          </h2>
          <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
           En chacun et chacune se cache une histoire à raconter. Je capture la votre et lui donne vie sous un nouveau format, la vidéo.
          </p>
        </div>

        <SliderProjets1 />
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
          <SectionBadge title="Conception visuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Donnez vie à vos projets avec style et impact
          </h2>

        </div>
        <CreativeTriad />
        <AlternatingCards />

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12">
          <SectionBadge title="Production audiovisuelle" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
            Drone
          </h2>
          <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
           Des plans immersifs, intenses, extrêmes. Voler n’a jamais été aussi beau.
          </p>
          <img
            src="/images/drone.png"
            alt="Production audiovisuelle"
            className="-mt-24 w-full max-w-md"
          />
        </div>
        <Home />
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
