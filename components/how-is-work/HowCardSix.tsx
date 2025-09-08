// components/how/HowCardSix.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Eye, Heart, UserPlus, ThumbsUp, MessageSquare, ListChecks } from "lucide-react";

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
    title: "Voir les stories en masse",
    text: "Jetez un coup d'oeil a des stories de façon a attirer l'attention sur votre compte.",
    image: "/svg/how/story_view.svg",
    alt: "Connexion sécurisée",
  },
  {
    title: "Like de stories",
    text: "Likez jusqu'à 1000 stories par jour afin d'être en haut de la liste des visionnements.",
    image: "/svg/how/img-2.svg",
    alt: "Configuration des cibles",
  },
  {
    title: "Follow / Unfollow",
    text: "Suivez des personnes et par la suite, désabonnez-vous de leur compte. Facultatif.",
    image: "/svg/how/follow_unfollow.svg",
    alt: "Pilotage des résultats",
  },
  {
    title: "Like de publications",
    text: "Vues de stories, likes de stories, nouveaux followers, etc. Vous pouvez voir toutes vos actions, jour par jour.",
    image: "/svg/how/publication.svg",
    alt: "Optimisation continue",
  },
  {
    title: "Analyse détaillée",
    text: "Des indicateurs clairs pour comprendre l’impact de chaque action et affiner vos décisions.",
    image: "/svg/how/setup-6.svg",
    alt: "Analyse détaillée",
  },
  {
    title: "Répondez aux sondages",
    text: "Répondez aux sondages de vos cibles afin de les attirer sur votre compte.",
    image: "/svg/how/going_next.svg",
    alt: "Automatisation",
  },
];

export default function HowCardSix({
  className,
  items,
  title = "Une technologie unique",
}: Props) {
  const data = (items && items.length ? items : DEFAULT_ITEMS).slice(0, 6);

  // Icônes dans l’ordre: œil, likes, follows, j’aime, message, sondage
  const icons = [Eye, Heart, UserPlus, ThumbsUp, MessageSquare, ListChecks];

  return (
    <section className={cn("px-4 pb-16", className)}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
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
                <div className="bg-[#ffffff]">
                  <div className="relative h-[22rem] sm:h-[22rem] w-full flex items-center justify-center">
                    {/* zone d'affichage un peu plus grande */}
                    <div className="relative w-[92%] h-[92%] sm:w-[90%] sm:h-[90%] lg:w-[86%] lg:h-[86%]">
                      <Image
                        src={card.image}
                        alt={card.alt ?? card.title}
                        fill
                        className="object-contain pointer-events-none select-none"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={idx === 0}
                      />
                    </div>
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
