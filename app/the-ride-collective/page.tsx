"use client";

import { SectionBadge } from "@/components/ui/section-bade";
import TheRideProductGrid from "@/components/SimpleProductGrid/TheRideProductGrid";
export default function RidePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
                    <SectionBadge title="Production audiovisuelle" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
                        Shooting sous conditions extrêmes
                    </h2>
                    <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
                      Depuis maintenant 3 ans, je suis régulièrement amené à suivre dans leur aventure le groupe de sport extrême THE RIDE COLLECTIVE. Voici un panel de photos et vidéos réalisées pour le collectif.
                    </p> 
                </div>
                <TheRideProductGrid />
            </main>
        </div>
    );
}
