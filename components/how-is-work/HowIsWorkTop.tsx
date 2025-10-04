"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TopLabHeroBackground from "@/components/background/TopLabHeroBackground";
import ButtonDemoOrange from "@/components/background/extra/ButtonDemoOrange";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
  heightMobile?: number | string;
  heightDesktop?: number | string;
};

type VarStyle = React.CSSProperties & {
  ["--h-mobile"]?: string;
  ["--h-desktop"]?: string;
};

export default function HowIsWorkTop({
  className,
  heightMobile = 420,
  heightDesktop = 580,
}: Props) {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
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
          className="absolute right-[100px] top-[54%] w-20 sm:w-24 lg:w-36 opacity-100 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
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
              text-[clamp(3rem,12vw,3.75rem)]
              sm:text-[clamp(2.2rem,8vw,7rem)]
            "
          >
            {mounted && t("howwork.topTitle", "Comment ça marche étape par étape")}
          </h2>

          <ButtonDemoOrange />
        </div>
      </div>
    </section>
  );
}
