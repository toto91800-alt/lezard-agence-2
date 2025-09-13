"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import ButtonContact from "@/components/background/extra/ButtonContact";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  href?: string;
  avatarSrc?: string;
};

export default function ContactPrix({
  className,
  title,
  subtitle,
  href = "https://calendly.com/lezard-agence/mmm?back=1&month=2025-02",
  avatarSrc = "/images/theo-leraillez.webp",
}: Props) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const finalTitle =
    title ?? t("prix.contact.title", "Vous avez des questions ?");
  const finalSubtitle =
    subtitle ??
    t(
      "prix.contact.subtitle",
      "Réservez votre consultation de 20 min avec notre expert !"
    );

  return (
    <section
      className={cn("w-full px-4 sm:px-6 lg:px-8", className)}
      aria-labelledby="contact-pricing-title"
    >
      <div
        className={cn(
          "mx-auto max-w-[76rem] rounded-3xl border shadow-sm",
          "border-black/10"
        )}
        style={{
          backgroundColor: "var(--backgroundcontactcolor)",
          color: "var(--contactextecolor)",
        }}
      >
        <div
          className={cn(
            // mobile : colonne centrée, desktop : row
            "flex flex-col items-center text-center gap-6 p-6",
            "sm:p-8",
            "lg:flex-row lg:items-center lg:justify-between lg:text-left lg:p-10"
          )}
        >
          {/* Bloc avatar + texte */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:items-start lg:text-left">
            <div className="shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
              <Image
                src={avatarSrc}
                alt=""
                width={112}
                height={112}
                className="h-24 w-24 sm:h-28 sm:w-28 object-cover"
                priority
              />
            </div>

            <div>
              <h3
                id="contact-pricing-title"
                className="text-2xl font-semibold sm:text-3xl"
              >
                {finalTitle}
              </h3>
              <p className="mt-2 text-base sm:text-lg opacity-80">
                {finalSubtitle}
              </p>
            </div>
          </div>

          {/* Bouton */}
          <div className="w-full lg:w-auto lg:pl-6 mt-4 lg:mt-0">
            <ButtonContact href={href} className="w-full lg:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
