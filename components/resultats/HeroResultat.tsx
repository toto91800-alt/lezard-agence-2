"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import TopLabHeroBackground from "@/components/background/TopLabHeroBackground";
import ButtonDemo from "@/components/background/extra/ButtonDemo";
import ButtonStrike from "@/components/background/extra/ButtonStrike";
import SocialProof from "@/components/background/extra/SocialProof";

type Props = {
  className?: string;
  heightMobile?: number | string;
  heightDesktop?: number | string;
};

type VarStyle = React.CSSProperties & {
  ["--h-mobile"]?: string;
  ["--h-desktop"]?: string;
};

export default function HeroResultat({
  className,
  heightMobile = 620,
  heightDesktop = 580,
}: Props) {
  const { t } = useTranslation();

  const hMobile =
    typeof heightMobile === "number" ? `${heightMobile}px` : heightMobile;
  const hDesktop =
    typeof heightDesktop === "number" ? `${heightDesktop}px` : heightDesktop;

  const styleVars: VarStyle = {
    ["--h-mobile"]: hMobile,
    ["--h-desktop"]: hDesktop,
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "min-h-[var(--h-mobile)] sm:min-h-[var(--h-desktop)]",
        className
      )}
      style={styleVars}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <TopLabHeroBackground />
      </div>

      {/* Décors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden sm:block"
      >
        <Image
          src="/svg/fleur1.svg"
          alt=""
          width={200}
          height={200}
          className="absolute left-[80px] top-[10%] w-20 sm:w-24 lg:w-32 opacity-80 drop-shadow-[0_10px_25px_rgba(0,0,0,.2)]"
          priority
        />
        <Image
          src="/svg/fleur2.svg"
          alt=""
          width={220}
          height={220}
          className="absolute right-[80px] top-[55%] w-20 sm:w-24 lg:w-36 opacity-90 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
      </div>

      {/* Titre + bouton */}
      <div
        className="absolute z-[2] left-1/2 top-1/2 w-full px-4"
        style={{ transform: "translate(-50%, calc(-50% - 4vh))" }}
      >
        <div className="mx-auto max-w-[min(92vw,1200px)] text-center flex flex-col items-center">
          <h2
            className="
              font-bold leading-[0.98] tracking-tight text-white
              pb-10 sm:pb-6
              text-[clamp(2.5rem,10vw,4rem)]
              sm:text-[clamp(2rem,8vw,6rem)]
            "
          >
            {t("resultats.bigtitle")}
          </h2>

          <div className="pointer-events-auto w-full px-4 sm:px-0">
            <div className="mx-auto flex w-full max-w-[20rem] flex-col gap-5 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <ButtonStrike
                href="https://app.lezard-agency.com/dashboard/plan"
                className="w-full sm:w-auto"
              />
              <ButtonDemo
                href="https://demo.lezard-agency.com/lezard-agence/trial"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Social proof */}
          <div className="pointer-events-auto mt-10 sm:mt-6">
            <SocialProof
              images={[
                { src: "https://app.lezard-agency.com/api/ig/pdp/theo.leraillez", alt: "Alice" },
                { src: "https://app.lezard-agency.com/api/ig/pdp/meryyrodriguezz?cb=1758981685139", alt: "Bob" },
                { src: "https://app.lezard-agency.com/api/ig/pdp/ericflag?cb=1756323886796", alt: "Carla" },
                { src: "https://app.lezard-agency.com/api/ig/pdp/alextournier_?cb=1756323986311", alt: "David" },
                { src: "https://app.lezard-agency.com/api/ig/pdp/mavii.off?cb=1756323775730", alt: "Eva" },
              ]}
              rating={5}
              usersCount={1200}
              sizePx={44}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
