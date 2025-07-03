"use client";

import { SectionBadge } from "@/components/ui/section-bade";
import TheRideBrand from "@/components/branding/TheRideBrand";
export default function TheRideCollectivePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
                    <SectionBadge title="Expériences" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
                        Mes expériences professionnelles 
                    </h2>
                    <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
                       Un aperçu détaillé de mes multiples expériences professionnelles.
                    </p>
                </div>
                <TheRideBrand />
            </main>
        </div>
    );
}
