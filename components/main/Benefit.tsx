// components/sections/Benefit.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import TriangleTopBackground from "@/components/background/TriangleTopBackground";

type BenefitItem = {
  title: string;
  text: string;
};

type Props = {
  className?: string;
  items?: BenefitItem[];
};

const DEFAULT_ITEMS: BenefitItem[] = [
  { title: "Analyse IA en temps réel", text: "Nos modèles évaluent l’impact de vos contenus en continu pour optimiser chaque publication." },
  { title: "Ciblage plus intelligent", text: "Identifiez les audiences qui convertissent vraiment grâce à des signaux comportementaux." },
  { title: "Automations flexibles", text: "Planifiez, orchestrez et ajustez vos campagnes avec des scénarios dynamiques." },
  { title: "Mesures actionnables", text: "Des KPIs clairs, reliés à vos objectifs business — pas juste des vanity metrics." },
  { title: "Intégration simple", text: "Se connecte à vos outils existants sans friction, via API et connecteurs natifs." },
  { title: "Sécurité & conformité", text: "Données protégées, conformité RGPD et pratiques de chiffrement de bout en bout." },
];

export default function Benefit({ className, items }: Props) {
  const data = (items && items.length ? items : DEFAULT_ITEMS).slice(0, 6);

  return (
    <section className={cn("relative overflow-hidden w-full", className)}>
      {/* 🔺 Background triangulaire */}
      <div className="absolute w-full h-120vh">
        <TriangleTopBackground />
      </div>

      {/* Header + CTA */}
      <div className="relative z-[2] w-full flex flex-col items-center gap-4 sm:gap-6 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-white">
              <span className="whitespace-nowrap">Notre technologie</span>
              <br className="hidden lg:block" />
              <span> explosive</span>
            </span>
          </h2>
        </div>

        <ButtonStrike href="/technologie" />
      </div>

      {/* Grille des bénéfices */}
      <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 pb-20 sm:pb-24">
        <div
          className={cn(
            "grid gap-5 sm:gap-6",
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          )}
        >
          {data.map((item, i) => (
            <article
              key={i}
              className={cn(
                "rounded-2xl border",
                "bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70",
                "border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
                "p-6 sm:p-7",
                "min-h-[170px] sm:min-h-[190px]"
              )}
            >
              <h3 className="text-lg font-semibold leading-tight text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        {/* Espace supplémentaire sous la partie cards */}
        <div aria-hidden className="h-8 sm:h-12" />
      </div>
    </section>
  );
}
