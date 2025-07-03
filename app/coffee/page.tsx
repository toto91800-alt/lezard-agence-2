"use client";

import { SectionBadge } from "@/components/ui/section-bade";
import CoffeeProductGrid from "@/components/SimpleProductGrid/CoffeeProductGrid";
export default function CoffeePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
                    <SectionBadge title="Production audiovisuelle" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
                      Montréal et ses coffee shops
                    </h2>
                    <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
                       Réalisation d’une série de photos/vidéos pour les cafés montréalais les plus emblématiques.
                    </p>
                </div>
                <CoffeeProductGrid />
            </main>
        </div>
    );
}
