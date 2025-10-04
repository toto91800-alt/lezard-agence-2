"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import CardResultat from "./CardResultat";

export type CarouselItem = {
  profileImageSrc: string;
  name: string;
  username: string;
  instagramHref: string;
  mediaSrc: string;
  mediaAlt?: string;
};

type CarouselResultatsProps = {
  className?: string;
  items?: CarouselItem[];
  autoScrollIntervalMs?: number;
  /** largeur des cartes pour ≥640px */
  cardWidthPx?: number;   // desktop/tablet width
  cornerRadiusPx?: number;
  borderWidthPx?: number;
};

const defaultItems: CarouselItem[] = [
  {
    profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/clemencebertrand?cb=1756895944230", name: "Clémence Bertrand", username: "@clemencebertrand", instagramHref: "https://www.instagram.com/clemencebertrand", mediaSrc: "/images/carousel/clemence.webp", mediaAlt: "Post Instagram",
  },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/theride.collective?cb=1756986713812", name: "The Ride Collective", username: "@theride.collective", instagramHref: "https://www.instagram.com/theride.collective/", mediaSrc: "/images/carousel/theride.webp", mediaAlt: "Post Instagram" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/shopnatscafe?cb=1756987915892", name: "Nat’s Cafe", username: "@shopnatscafe", instagramHref: "https://www.instagram.com/shopnatscafe/", mediaSrc: "/images/carousel/shopnatscafe.webp", mediaAlt: "Post Instagram" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/becaybrand?cb=1756986984070", name: "BECAY", username: "@becaybrand", instagramHref: "https://www.instagram.com/becaybrand/", mediaSrc: "/images/carousel/becay.webp", mediaAlt: "Post Instagram" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/tealer?cb=1756987561441", name: "Tealerlab", username: "@tealer", instagramHref: "https://www.instagram.com/tealer/", mediaSrc: "/images/carousel/tealer.webp", mediaAlt: "Post Instagram" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/meryyrodriguezz?cb=1757755531054", name: "maria rodri", username: "@meryyrodriguezz", instagramHref: "https://www.instagram.com/meryyrodriguezz/", mediaSrc: "/images/carousel/rodrigues.webp", mediaAlt: "Post Instagram" },
];


export default function CarouselResultats({
  className,
  items,
  autoScrollIntervalMs = 0,
  cardWidthPx = 320,
  cornerRadiusPx = 24,
  borderWidthPx = 2,
}: CarouselResultatsProps) {
  const data = items && items.length ? items : defaultItems;
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const w = parseFloat(getComputedStyle(el).getPropertyValue("--card-w")) || cardWidthPx;
    el.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  React.useEffect(() => {
    if (!autoScrollIntervalMs) return;
    const id = setInterval(() => scrollByCard(1), autoScrollIntervalMs);
    return () => clearInterval(id);
  }, [autoScrollIntervalMs]);

  return (
    <div
      className={cn("relative w-full cr-vars", className)}
      style={
        {
          // valeurs par défaut (desktop) – seulement du CSS, pas de JS conditionnel
          "--card-h": "320px",
          "--card-w": `${cardWidthPx}px`,
        } as React.CSSProperties
      }
    >
      <div
        ref={trackRef}
        className={cn(
          "overflow-x-auto overflow-y-hidden w-full",
          "flex items-center gap-4 sm:gap-5",
          "scroll-smooth snap-x snap-mandatory",
          "px-2 sm:px-4",
          "no-scrollbar"
        )}
        style={{ scrollbarWidth: "none", height: "var(--card-h)" }}
      >
        {data.map((item, i) => (
          <div key={i} data-card-resultat className="snap-start shrink-0" style={{ width: "var(--card-w)" }}>
            <CardResultat
              profileImageSrc={item.profileImageSrc}
              name={item.name}
              username={item.username}
              instagramHref={item.instagramHref}
              mediaSrc={item.mediaSrc}
              mediaAlt={item.mediaAlt}
              // ⬇️ IMPORTANT: on ne passe PAS fixedHeightPx / fixedWidthPx
              cornerRadiusPx={cornerRadiusPx}
              borderWidthPx={borderWidthPx}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Précédent"
        onClick={() => scrollByCard(-1)}
        className={cn(baseBtn(), "left-2 sm:left-3")}
        style={{ top: "calc(var(--card-h) / 2)" }}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Suivant"
        onClick={() => scrollByCard(1)}
        className={cn(baseBtn(), "right-2 sm:right-3")}
        style={{ top: "calc(var(--card-h) / 2)" }}
      >
        ›
      </button>

      {/* CSS responsives ⇒ aucune divergence SSR/Client */}
      <style jsx>{`
        .cr-vars { --card-h: 320px; --card-w: ${cardWidthPx}px; }
        @media (max-width: 639px) { .cr-vars { --card-h: 280px; --card-w: 260px; } }
        @media (min-width: 640px) and (max-width: 1023px) { .cr-vars { --card-h: 300px; --card-w: ${cardWidthPx}px; } }
        @media (min-width: 1024px) { .cr-vars { --card-h: 320px; --card-w: ${cardWidthPx}px; } }
      `}</style>
    </div>
  );
}

function baseBtn() {
  return [
    "absolute -translate-y-1/2",
    "h-10 w-10 sm:h-11 sm:w-11",
    "rounded-full grid place-items-center",
    "bg-white border border-neutral-200 shadow-lg",
    "backdrop-blur supports-[backdrop-filter]:bg-white/70",
    "text-neutral-800 text-2xl leading-none",
    "hover:bg-white active:scale-95 transition",
    "z-10",
  ].join(" ");
}
