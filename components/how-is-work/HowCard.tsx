"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lock, Target, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

type HowItem = {
  title: string;
  text: string;
  image: string;
  alt?: string;
};

type Props = {
  className?: string;
};

export default function HowCard({ className }: Props) {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [Lock, Target, BarChart3];

  // ⚡️ Ne pas afficher tant que pas monté
  if (!mounted) {
    return <section className={cn("px-4 pb-16", className)} />;
  }

  const data: HowItem[] = [
    {
      title: t("howwork.card1.title"),
      text: t("howwork.card1.text"),
      image: "/svg/how/setup-1.svg",
      alt: t("howwork.card1.alt"),
    },
    {
      title: t("howwork.card2.title"),
      text: t("howwork.card2.text"),
      image: "/svg/how/setup-2.svg",
      alt: t("howwork.card2.alt"),
    },
    {
      title: t("howwork.card3.title"),
      text: t("howwork.card3.text"),
      image: "/svg/how/setup-3.svg",
      alt: t("howwork.card3.alt"),
    },
  ];

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
