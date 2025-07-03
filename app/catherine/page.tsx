"use client";

import { SectionBadge } from "@/components/ui/section-bade";
import CatherineProductGrid from "@/components/SimpleProductGrid/CatherineProductGrid";
import CatherineLandscapeGrid from "@/components/SimpleLandscapeGrid/CatherineLandscapeGrid";
export default function CatherinePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
                    <SectionBadge title="Production audiovisuelle" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
                       Shooting photo pour Book personnel
                    </h2>
                    <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
                       Réalisation d’un photoshoot pour la mannequin montréalaise Catherine Gléduc.
                    </p>
                </div>
                <CatherineProductGrid />
                <CatherineLandscapeGrid />
            </main>
        </div>
    );
}
