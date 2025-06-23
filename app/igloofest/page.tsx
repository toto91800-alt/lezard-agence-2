"use client";

import { SectionBadge } from "@/components/ui/section-bade";
import IgloofestProductGrid from "@/components/SimpleProductGrid/IgloofestProductGrid";
import { HeroVideoTop } from "@/components/video/HeroVideoKora";
import  IgloofestLandscapeGrid  from "@/components/SimpleLandscapeGrid/IgloofestLandscapeGrid";
export default function IgloofestPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
                    <SectionBadge title="Production audiovisuelle" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
                        Donnez vie à vos projets avec style et impact
                    </h2>
                    <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
                        Nous combinons créativité et technologie pour produire des contenus qui captivent et engagent.
                    </p>
                </div>

                <div className="px-6 sm:px-12 lg:px-24 xl:px-40 max-w-5xl mx-auto">
                    <HeroVideoTop />
                </div>

                <IgloofestProductGrid />
                <IgloofestLandscapeGrid />
            </main>
        </div>
    );
}
