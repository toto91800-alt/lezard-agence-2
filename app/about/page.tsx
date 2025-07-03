"use client";

import { SectionBadge } from "@/components/ui/section-bade";
import AboutMe from "@/components/AboutMe/AboutMe";
import EducationSection from "@/components/AboutMe/EducationSection";
import Apropos from "@/components/ui/Apropos";
export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-12 pb-12">
                    <SectionBadge title="À propos" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-black dark:text-white">
                        Mon parcours, ma vision
                    </h2>
                    <p className="text-base md:text-lg text-center text-black dark:text-accent-foreground/80 mt-6">
                        Découvrez ce qui m’anime au quotidien : des expériences marquantes, des rencontres inspirantes et une passion profonde pour l’image et le storytelling.
                    </p>
                </div>

                <Apropos />
                <AboutMe />
                <EducationSection />

            </main>
        </div>
    );
}
