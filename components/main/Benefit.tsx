// components/sections/Benefit.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import TriangleTopBackground from "@/components/background/TriangleTopBackground";

// ⬇️ Import des 6 composants de card
import Cards1 from "@/components/main/cards/cards1";
import Cards2 from "@/components/main/cards/cards2";
import Cards3 from "@/components/main/cards/cards3";
import Cards4 from "@/components/main/cards/cards4";
import Cards5 from "@/components/main/cards/cards5";
import Cards6 from "@/components/main/cards/cards6";

type BenefitItem = { title: string; text: string };
type Props = { className?: string; items?: BenefitItem[] };

const DEFAULT_ITEMS: BenefitItem[] = [
  {
    title: "Nouveux Abonnées",
    text: "Développez votre audience organiquement.",
  },
  {
    title: "Plus de likes / commentaires",
    text: "Augmentez l'engagement sur vos publications.",
  },
  {
    title: "Plus de clients",
    text: "Transformez vos abonnés en clients fidèles et payants.",
  },
  {
    title: "Mesures actionnables",
    text: "Des KPIs clairs, reliés à vos objectifs business — pas juste des vanity metrics.",
  },
  {
    title: "Intégration simple",
    text: "Se connecte à vos outils existants sans friction, via API et connecteurs natifs.",
  },
  {
    title: "Sécurité & conformité",
    text: "Données protégées, conformité RGPD et pratiques de chiffrement de bout en bout.",
  },
];

export default function Benefit({ className, items }: Props) {
  const data = (items && items.length ? items : DEFAULT_ITEMS).slice(0, 6);

  // Tableau des composants de cartes par index
  const CardComponents = [
    Cards1,
    Cards2,
    Cards3,
    Cards4,
    Cards5,
    Cards6,
  ] as const;

  return (
    <section className={cn("relative overflow-hidden w-full", className)}>
      {/* 🔺 Background triangulaire */}
      <div className="absolute inset-0 h-[140vh]">
        <TriangleTopBackground height="100%" />
      </div>

      {/* ⚡ Calque d'éclairs (desktop & au-dessus) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
      >
        <Image
          src="/svg/eclair.svg"
          alt=""
          width={200}
          height={200}
          className="absolute left-[100px] top-[12%] w-20 sm:w-24 lg:w-32 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)]"
          priority
        />
        <Image
          src="/svg/eclair.svg"
          alt=""
          width={220}
          height={220}
          className="absolute right-[100px] top-[34%] w-20 sm:w-24 lg:w-36 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
      </div>

      {/* Header + CTA */}
      <div className="relative z-[2] w-full flex flex-col items-center pt-10 pb-16 sm:pt-8 sm:pb-12">
        <div className="w-full px-4 flex justify-center pb-6 sm:pb-8">
          <h2 className="mx-auto text-center font-bold leading-[0.98] tracking-tight text-[clamp(2.5rem,10vw,7rem)]">
            <span className="block mt-[0.25em] text-[var(--MainTitle)]">
              <span className="whitespace-normal">Les Bénéfices</span>
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
          {data.map((item, i) => {
            const Card = CardComponents[i] ?? Cards1;
            return (
              <Card
                key={`${item.title}-${i}`}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>

        {/* Espace supplémentaire sous la partie cards */}
        <div aria-hidden className="h-8 sm:h-12" />
      </div>
    </section>
  );
}
