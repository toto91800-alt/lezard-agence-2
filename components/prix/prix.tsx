"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TopLabHeroBackground from "@/components/background/TopLabHeroBackground";
import SocialProof from "@/components/background/extra/SocialProof";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
  heightMobile?: number | string;
  heightDesktop?: number | string;
};

type VarStyle = React.CSSProperties & {
  ["--h-mobile"]?: string;
  ["--h-desktop"]?: string;
};

export default function PrixSection({
  className,
  heightMobile = 320,
  heightDesktop = 580,
}: Props) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hMobile =
    typeof heightMobile === "number" ? `${heightMobile}px` : heightMobile;
  const hDesktop =
    typeof heightDesktop === "number" ? `${heightDesktop}px` : heightDesktop;

  const styleVars: VarStyle = {
    ["--h-mobile"]: hMobile,
    ["--h-desktop"]: hDesktop,
  };

  if (!mounted) return null;

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "min-h-[var(--h-mobile)] sm:min-h-[var(--h-desktop)]",
        className
      )}
      style={styleVars}
    >
      {/* Background plein écran */}
      <div className="absolute inset-0">
        <TopLabHeroBackground />
      </div>

      {/* Décorations SVG */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
      >
        <Image
          src="/svg/coeur.svg"
          alt=""
          width={200}
          height={200}
          className="absolute left-[100px] top-[12%] w-20 sm:w-24 lg:w-32 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)]"
          priority
        />
        <Image
          src="/svg/etoile.svg"
          alt=""
          width={220}
          height={220}
          className="absolute right-[100px] top-[34%] w-20 sm:w-24 lg:w-36 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
      </div>

      {/* Titre + SocialProof */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-4 gap-8 sm:gap-6 pb-16 sm:pb-0">
        <div className="mx-auto max-w-3xl text-center transform translate-y-16 sm:translate-y-0">
          <h2 className="font-bold leading-[0.98] tracking-tight text-[clamp(2.8rem,12vw,3.75rem)] sm:text-[clamp(2.2rem,8vw,7rem)]">
            <span className="block mt-[0.25em] text-white whitespace-nowrap">
              {t("prix.bigtitle", "Nos Tarifs")}
            </span>
          </h2>
        </div>

        {/* espace sous le titre surtout sur mobile */}
        {/* espace sous le titre surtout sur mobile */}
        <div className="mt-16 sm:mt-6 translate-y-6 sm:translate-y-0">
          <SocialProof
            images={[
              {
                src: "https://app.lezard-agency.com/api/ig/pdp/theo.leraillez",
                alt: "Alice",
              },
              {
                src: "https://app.lezard-agency.com/api/ig/pdp/julia_nadal_?cb=1756323670092",
                alt: "Bob",
              },
              {
                src: "https://app.lezard-agency.com/api/ig/pdp/ericflag?cb=1756323886796",
                alt: "Carla",
              },
              {
                src: "https://app.lezard-agency.com/api/ig/pdp/alextournier_?cb=1756323986311",
                alt: "David",
              },
              {
                src: "https://app.lezard-agency.com/api/ig/pdp/mavii.off?cb=1756323775730",
                alt: "Eva",
              },
            ]}
            rating={5}
            usersCount={1200}
            sizePx={56}
          />
        </div>
      </div>
    </section>
  );
}
