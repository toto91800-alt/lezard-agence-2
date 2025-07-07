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
                      Une idée, un projet ou simplement l’envie d’échanger ? Je suis à votre écoute. Remplissez le formulaire ci-dessous ou écrivez-moi directement, je vous répondrai dans les plus brefs délais.
                    </p>
                </div>

                <ContactSection />


            </main>
        </div>
    );
}
