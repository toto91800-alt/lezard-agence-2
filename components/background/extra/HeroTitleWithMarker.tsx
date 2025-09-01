"use client";

import * as React from "react";

type HeroTitleWithMarkerProps = { className?: string };

export default function HeroTitleWithMarker({ className }: HeroTitleWithMarkerProps) {
  const markerColor = "#FF9800";
  const markerStrokeWidth = 10;

  return (
    <div className={`mx-auto max-w-3xl text-center text-white pb-8 sm:pb-10 ${className ?? ""}`}>
      <h1 className="font-bold leading-[0.98] tracking-tight overflow-visible text-[clamp(2.5rem,10vw,7rem)]">
        {/* ⬇️ Reste sur UNE seule ligne */}
        <span className="block relative z-20 title-rise whitespace-nowrap break-keep">
          Explorer, Toucher,
        </span>

        <span className="relative inline-block align-baseline mt-[0.25em] sm:mt-[0.35em] title-rise title-rise-2">
          <span className="relative z-20 inline-block">Visualiser</span>

          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10
                       block bottom-[-0.5em] w-[190%] h-[2.3em]
                       sm:bottom-[-0.4em] sm:w-[170%] sm:h-[2.0em]
                       md:bottom-[-0.3em] md:w-[145%] md:h-[1.7em]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animated-marker-svg h-full w-full overflow-visible"
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
                fill="none"
                className="marker-path"
              />
            </svg>
          </span>
        </span>
      </h1>

      <style>{`
        .title-rise{
          opacity:0; transform:translate3d(0,40px,0) scale(.985); filter:blur(6px);
          animation:title-in 600ms cubic-bezier(.22,1,.36,1) var(--delay,0ms) forwards;
          will-change:transform,opacity,filter;
        }
        .title-rise-2{ --delay:120ms; }
        @keyframes title-in{
          60%{opacity:1; transform:translate3d(0,-3px,0) scale(1.01); filter:blur(0)}
          100%{opacity:1; transform:translate3d(0,0,0) scale(1); filter:blur(0)}
        }
        .animated-marker-svg .marker-path{
          stroke-dasharray:1200;
          stroke-dashoffset:1200;
          animation:draw-marker 900ms ease-out 700ms forwards;
          will-change:stroke-dashoffset;
          filter:none;
        }
        @keyframes draw-marker{ to{ stroke-dashoffset:0; } }
        @media (prefers-reduced-motion: reduce){
          .title-rise{ animation:none; opacity:1; transform:none; filter:none }
          .animated-marker-svg .marker-path{ animation:none; stroke-dashoffset:0 }
        }
      `}</style>
    </div>
  );
}
