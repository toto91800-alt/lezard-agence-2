"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TopLabHeroBackground from "@/components/background/TopLabHeroBackground";
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

export default function HeaderArticle({
  className,
  heightMobile = 420,
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
      {/* 🌌 Background */}
      <div className="absolute inset-0">
        <TopLabHeroBackground />
      </div>

      {/* ✨ Décors */}
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

      {/* 📰 Titre centré */}
      <div className="absolute z-[2] inset-0 flex items-center justify-center px-4">
        <h2 className="mx-auto max-w-[min(92vw,1200px)] text-center font-bold leading-[0.98] tracking-tight text-[clamp(2.8rem,10vw,7rem)] text-white">
          {t("blog.header.title", "Blog")}
        </h2>
      </div>
    </section>
  );
}
