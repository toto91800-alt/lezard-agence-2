// components/how/HowCardTwo.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lock, Target, BarChart3, RefreshCw } from "lucide-react";

type HowItem = {
  title: string;
  text: string;
  image: string;
  alt?: string;
};

type Props = {
  className?: string;
  items?: HowItem[];
  title?: string;
};

const DEFAULT_ITEMS: HowItem[] = [
  {
    title: "Trouvez vos cibles",
    text: "Les cibles sont des comptes concurrents et des comptes dans votre niche.",
    image: "/svg/how/setup-4.svg",
    alt: "Connexion sécurisée",
  },
  {
    title: "Suivez votre progression en temps réel",
    text: "Vous pouvez voir toutes vos actions en temps réel.",
    image: "/svg/how/setup-5.svg",
    alt: "Configuration des cibles",
  },
  {
    title: "Gérez vos actions",
    text:
      "Vous pouvez gérer toutes vos actions en temps réel. Activez et désactivez-les à tout moment. Suivez vos statistiques.",
    image: "/svg/how/setup-6.svg",
    alt: "Pilotage des résultats",
  },
  {
    title: "Vous pouvez voir vos résultats",
    text:
      "Vues de stories, likes de stories, nouveaux followers, etc. Vous pouvez voir toutes vos actions, jour par jour.",
    image: "/svg/how/setup-7.svg",
    alt: "Optimisation continue",
  },
];

export default function HowCardTwo({
  className,
  items,
  title = "Une interface pensée pour les meilleurs",
}: Props) {
  const data = (items && items.length ? items : DEFAULT_ITEMS).slice(0, 4);
  const icons = [Lock, Target, BarChart3, RefreshCw];

  return (
    <section className={cn("px-4 pb-16", className)}>
      {/* Titre en haut — wrap activé */}
      <div className="relative z-10 w-full flex flex-col items-center pt-10 pb-10 sm:pt-8 sm:pb-12">
        <div className="mx-auto w-full max-w-5xl px-4 text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.2rem,8vw,6.5rem)]">
            <span className="block mt-[0.25em] text-[var(--MainTitle)] whitespace-normal">
              {title}
            </span>
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          {data.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <article
                key={idx}
                className={cn(
                  "rounded-3xl shadow-xl w-full overflow-hidden",
                  "transform transition-transform duration-300 hover:-translate-y-1",
                  "bg-[var(--HowBackground)]"
                )}
              >
                <div className="bg-white">
                  {/* hauteur de l'image augmentée directement ici */}
                  <div className="relative h-[22rem] sm:h-[22rem] w-full flex items-center justify-center p-8">
                    <Image
                      src={card.image}
                      alt={card.alt ?? card.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>

                <div className="px-6 py-5">
                  <h3 className="text-xl font-semibold text-[var(--HowTitle)]">
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      {card.title}
                    </span>
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[var(--HowTexte)]">
                    {card.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
