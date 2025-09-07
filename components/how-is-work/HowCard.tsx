// components/how/HowCard.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lock, Target, BarChart3 } from "lucide-react";

type HowItem = {
  title: string;
  text: string;
  image: string;
  alt?: string;
};

type Props = {
  className?: string;
  items?: HowItem[];
};

const DEFAULT_ITEMS: HowItem[] = [
  {
    title: "Connectez votre compte",
    text:
      "Reliez votre Instagram en toute sécurité : connexion chiffrée, sans stockage du mot de passe.",
    image: "/svg/how/setup-1.svg",
    alt: "Connexion sécurisée",
  },
  {
    title: "Configurez vos cibles",
    text:
      "Choisissez des comptes concurrents, hashtags et zones pour une prospection ultra précise.",
    image: "/svg/how/setup-2.svg",
    alt: "Configuration des cibles",
  },
  {
    title: "Pilotez les résultats",
    text:
      "Lancez la croissance et suivez abonnés, engagement et portée. Ajustez en un clic.",
    image: "/svg/how/setup-3.svg",
    alt: "Pilotage des résultats",
  },
];

export default function HowCard({ className, items }: Props) {
  const data = items && items.length ? items.slice(0, 3) : DEFAULT_ITEMS;
  const icons = [Lock, Target, BarChart3];

  return (
    <section className={cn("px-4 pb-16", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
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
                {/* Media sur fond blanc (hauteur augmentée) */}
                <div className="bg-white">
                  <div className="relative h-56 sm:h-64 w-full flex items-center justify-center p-8">
                    <Image
                      src={card.image}
                      alt={card.alt ?? card.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>

                {/* Texte */}
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
