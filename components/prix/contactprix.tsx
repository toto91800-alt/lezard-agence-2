// components/prix/contactprix.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";
import ButtonContact from "@/components/background/extra/ButtonContact";

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string; // gardé si vous souhaitez faire évoluer ButtonStrike plus tard
  href?: string;
  avatarSrc?: string;
};

export default function ContactPrix({
  className,
  title = "Vous avez des questions ?",
  subtitle = "Réservez votre consultation de 20 min avec notre expert !",
  href = "https://calendly.com/lezard-agence/mmm?back=1&month=2025-02",
  avatarSrc = "/images/theo-leraillez.webp",
}: Props) {
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
            "flex flex-col items-start gap-6 p-6",
            "sm:p-8",
            "lg:flex-row lg:items-center lg:justify-between lg:p-10"
          )}
        >
          {/* Left: avatar + text */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
              <Image
                src={avatarSrc}
                alt=""
                width={112}
                height={112}
                className="h-16 w-16 sm:h-24 sm:w-24 object-cover"
                priority
              />
            </div>

            <div>
              <h3 id="contact-pricing-title" className="text-2xl font-semibold sm:text-3xl">
                {title}
              </h3>
              <p className="mt-2 text-base sm:text-lg opacity-80">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Right: CTA (ButtonStrike) */}
          <div className="w-full lg:w-auto lg:pl-6">
            <ButtonContact href={href} className="w-full lg:w-auto" />
            {/* Note : ButtonStrike contient un libellé interne.
                Si vous souhaitez utiliser `ctaText`, faites évoluer ButtonStrike
                pour accepter `children` ou un prop `label`. */}
          </div>
        </div>
      </div>
    </section>
  );
}
