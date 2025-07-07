"use client";

import { SectionBadge } from "@/components/ui/section-bade";
import ContactSection from "@/components/ui/ContactSection";
export default function WorkPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
                    <SectionBadge title="Contact" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
                        Discutons ensemble
                    </h2>
                    <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
                       Vous avez un projet en photo, vidéo ou stratégie marketing pour votre entreprise ou votre marque ? Remplissez le formulaire ci-dessous ou contactez-moi directement par courriel ou téléphone.
                    </p>
                </div>

                <ContactSection />


            </main>
        </div>
    );
}
