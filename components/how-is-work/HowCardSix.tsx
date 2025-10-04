"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Eye,
  Heart,
  UserPlus,
  ThumbsUp,
  MessageSquare,
  ListChecks,
} from "lucide-react";
import { useTranslation } from "react-i18next";

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

export default function HowCardSix({ className, items, title }: Props) {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Ou loader si tu veux
  }

  const translated = t("howwork.howcardsix.items", {
    returnObjects: true,
  }) as unknown;

  const translatedItems: HowItem[] = Array.isArray(translated)
    ? (translated as HowItem[])
    : [];

  const data = (items && items.length ? items : translatedItems).slice(0, 6);
  const finalTitle =
    title ?? t("howwork.howcardsix.title", "Une technologie unique");

  const icons = [Eye, Heart, UserPlus, ThumbsUp, MessageSquare, ListChecks];

  return (
    <section className={cn("px-4 pb-16", className)}>
      <div className="relative z-10 w-full flex flex-col items-center pt-10 pb-10 sm:pt-8 sm:pb-12">
        <div className="mx-auto w-full max-w-5xl px-4 text-center">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.2rem,8vw,6.5rem)]">
            <span className="block mt-[0.25em] text-[var(--MainTitle)] whitespace-normal">
              {finalTitle}
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
                <h3 className="text-2xl sm:text-xl font-semibold text-[var(--HowTitle)]">
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
