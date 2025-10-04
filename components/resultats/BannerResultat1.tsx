"use client";

import { useTranslation } from "react-i18next";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TopLabHeroBackground from "@/components/background/TopLabHeroBackground";
import { bannerResultatsDatasets } from "@/components/resultats/charts/data/banner-resultats-data";

type Props = {
  dataset:
    | "resultats-1"
    | "resultats-2"
    | "resultats-3"
    | "resultats-4"
    | "resultats-5"
    | "resultats-6";
  className?: string;
  heightMobile?: number | string;
  heightDesktop?: number | string;
};

type VarStyle = React.CSSProperties & {
  ["--h-mobile"]?: string;
  ["--h-desktop"]?: string;
};

export default function BannerResultat1({
  dataset,
  className,
  heightMobile = 620,
  heightDesktop = 580,
}: Props) {
  const markerColor = "#FF9800";
  const markerStrokeWidth = 10;
  const { t } = useTranslation();

  const hMobile =
    typeof heightMobile === "number" ? `${heightMobile}px` : heightMobile;
  const hDesktop =
    typeof heightDesktop === "number" ? `${heightDesktop}px` : heightDesktop;

  const styleVars: VarStyle = {
    ["--h-mobile"]: hMobile,
    ["--h-desktop"]: hDesktop,
  };

  const data = bannerResultatsDatasets[dataset];

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
          className="absolute left-[80px] top-[10%] w-20 sm:w-24 lg:w-32 opacity-80 drop-shadow-[0_10px_25px_rgba(0,0,0,.2)]"
          priority
        />
        <Image
          src="/svg/fleur1.svg"
          alt=""
          width={200}
          height={200}
          className="absolute left-[200px] top-[45%] w-20 sm:w-24 lg:w-32 opacity-80 drop-shadow-[0_10px_25px_rgba(0,0,0,.2)]"
          priority
        />
        <Image
          src="/svg/coeur.svg"
          alt=""
          width={220}
          height={220}
          className="absolute right-[80px] top-[55%] w-20 sm:w-24 lg:w-36 opacity-90 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
        <Image
          src="/svg/fleur1.svg"
          alt=""
          width={220}
          height={220}
          className="absolute right-[200px] top-[25%] w-20 sm:w-24 lg:w-36 opacity-90 drop-shadow-[0_10px_25px_rgba(0,0,0,.25)] -scale-x-100 transform-gpu"
          priority
        />
      </div>

      {/* Titre */}
      <div className="absolute z-[2] left-1/2 top-1/2 w-full px-4 -translate-x-1/2 -translate-y-1/2">
        <div className="pointer-events-auto mx-auto max-w-[min(92vw,64rem)] text-center">
          <div className="w-full px-4 text-white pb-10 sm:pb-12">
            <h1
              className="flex flex-col items-center text-center font-bold leading-[0.98] tracking-tight overflow-visible
               text-[clamp(2.8rem,12vw,7rem)] sm:text-[clamp(2.5rem,10vw,7rem)]"
            >
              {/* Ligne 1 */}
              <span className="title-rise block text-center whitespace-normal break-words sm:whitespace-nowrap">
                {data.title}
              </span>

              {/* Ligne 2 + SVG dessous */}
              <span className="relative inline-flex items-center justify-center mt-[0.35em] sm:mt-[0.45em] title-rise title-rise-2">
                <span className="relative z-10 text-center whitespace-normal break-words sm:whitespace-nowrap">
                  {t("resultats.subtitle", "Résultats")}
                </span>

                {/* Soulignement SVG */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.5em] sm:-bottom-[0.45em] flex justify-center"
                  style={{ zIndex: 0 }}
                >
                  <span className="block w-[170%] max-w-[95vw] h-[2.2em] sm:w-[150%] sm:h-[2em]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full overflow-visible"
                      viewBox="-24 -24 433 177"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M215.442 5C199.384 6.28166 189.712 8.19886 181.62 9.88801C127.621 21.16 69.206 39.2134 24.9607 63.5668C-0.197097 77.4138 -1.59652 92.2424 24.4723 105.897C48.4911 118.477 85.7342 121.86 114.829 123.293C160.794 125.556 207.277 122.382 251.585 113.849C288.712 106.699 332.791 98.606 365.141 83.365C375.079 78.6832 383.641 65.879 377.352 54.786C366.167 35.0582 344.067 20.0418 312.637 17.2606C265.525 13.0916 214.814 17.391 172.218 31.84"
                        stroke={markerColor}
                        strokeWidth={markerStrokeWidth}
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        className="marker-path"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* 🎨 Animation styles */}
      <style>{`
        .title-rise {
          opacity: 0;
          transform: translate3d(0, 40px, 0) scale(0.985);
          filter: blur(6px);
          animation: title-in 600ms cubic-bezier(.22, 1, .36, 1) var(--delay, 0ms) forwards;
        }
        .title-rise-2 {
          --delay: 120ms;
        }
        @keyframes title-in {
          60% {
            opacity: 1;
            transform: translate3d(0, -3px, 0) scale(1.01);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        .marker-path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: draw-marker 900ms ease-out 700ms forwards;
        }
        @keyframes draw-marker {
          to {
            stroke-dashoffset: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .title-rise {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
          .marker-path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
