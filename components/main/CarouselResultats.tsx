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
    profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/clemencebertrand?cb=1756895944230", name: "Clémence Bertrand", username: "@clemencebertrand", instagramHref: "https://www.instagram.com/clemencebertrand", mediaSrc: "https://scontent-cdg4-2.cdninstagram.com/v/t51.2885-15/491439463_18499534324016583_4547987346675526169_n.jpg?stp=dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5oZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-cdg4-2.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QHQe5VZUMxMraPI97U9wTblJRjvbl6jnKPgOb15hKBqF_Fx92nTz7GQ-X1b8MGTd7mZwwYHqxU6h7GR_VEqBfqj&_nc_ohc=yagwlUN6k5oQ7kNvwEEq3WB&_nc_gid=DX6hyCKb6WFpk5ZuBIZslg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzYwOTg4MjY2ODk0MzMzNTAzOA%3D%3D.3-ccb7-5&oh=00_AfZt1Z6p-jvVojmkprqswdJNGu0tq8udiXOodJgjYFUN2Q&oe=68BF4822&_nc_sid=22de04", mediaAlt: "Post Instagram",
  },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/theride.collective?cb=1756986713812", name: "The Ride Collective", username: "@theride.collective", instagramHref: "https://www.instagram.com/theride.collective/", mediaSrc: "https://scontent-cdg4-3.cdninstagram.com/v/t51.29350-15/435064034_1340563519974154_1950478847962587469_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjIwNDh4MjA0OC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-cdg4-3.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2QGkJ7wQyzi8dOinhh8tCrvBzTxQhkgfjs55VsSzJnPl-mibGbcOCS23m1Ddn2mXtrK0R2qv1XVxm-pfeRCh8qcQ&_nc_ohc=Go__hKtqsc0Q7kNvwF2Jc9h&_nc_gid=7Rk_97k4hwLKK8Wtqxo_iQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzMzOTAzODMyMTg0OTExODI0MQ%3D%3D.3-ccb7-5&oh=00_AfbWSmApa5hDkXG0Pw6Sayo4RjbHMi82VjxdC1N4XGtsWA&oe=68BF3C56&_nc_sid=22de04", mediaAlt: "Post Instagram" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/shopnatscafe?cb=1756987915892", name: "Nat’s Cafe", username: "@shopnatscafe", instagramHref: "https://www.instagram.com/shopnatscafe/", mediaSrc: "https://scontent-cdg4-2.cdninstagram.com/v/t51.2885-15/514510160_17866719336409309_8777704276496677482_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTkyMC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-cdg4-2.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2QEpeGPwHp5YnoPK0pRJxW6VSw7T_JO4eWgYalgXRTQqc3kEEbLC60fCZB5J_1Zkzehs7kYula10kbiBa3v_P_A7&_nc_ohc=alUFTYvhYEwQ7kNvwHEBsPQ&_nc_gid=fe65ykjj5_fITEvT5l55Ew&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzY2NzI0Nzg5MTMyNDk5MTIzMQ%3D%3D.3-ccb7-5&oh=00_AfaZqn1zhqXVac-GDCMDG8hqbta0A1QiPLYpeKBUF4T_Bw&oe=68BF6B89&_nc_sid=22de04", mediaAlt: "Post Instagram" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/becaybrand?cb=1756986984070", name: "BECAY", username: "@becaybrand", instagramHref: "https://www.instagram.com/becaybrand/", mediaSrc: "https://scontent-cdg4-2.cdninstagram.com/v/t39.30808-6/459066996_17999361677663671_5580182140457058973_n.jpg?stp=cp6_dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTcwNC5oZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-cdg4-2.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2QE9Pqnfu4q_o_rwfbZiyzSohlX4gOnAvb7K5kXKXmcTCWuzm8NQngTAg_8x7uyL1_GBNowCHMHtt1AG1N48xZkD&_nc_ohc=wrcLluZrC1kQ7kNvwHL-P9o&_nc_gid=9gNyHDzREwKSy2p-YZyRfw&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ1NDIxMDQyNjMwNzkwNTE1Mg%3D%3D.3-ccb7-5&oh=00_AfZ5NtJgpCaoozzg7vOZJyhmXISv4F2qBtw1ln4La2NNBQ&oe=68BF57CB&_nc_sid=22de04", mediaAlt: "Capture du reel" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/mccall.mitchell?cb=1756987773807", name: "McCall Gilbert", username: "@mccall.mitchell", instagramHref: "https://www.instagram.com/mccall.mitchell/", mediaSrc: "https://scontent-cdg4-1.cdninstagram.com/v/t51.2885-15/540621087_18524512591054156_7730933967530948548_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTkxMC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuZXhwZXJpbWVudGFsIn0&_nc_ht=scontent-cdg4-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QGUNZEjoud5n1yLuBTME9uaP8CjihBz6pkqdc_K3C_dz7Zcr8FOBDK1B35PCwl6DEyGWcBkTuGV3pPdzmaod9vo&_nc_ohc=KyxEN6spdBwQ7kNvwGJAZYP&_nc_gid=VbWh9dqN_PS0l9HjPQUVoQ&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzcwOTQxMzkzOTAwOTg5ODI0OQ%3D%3D.3-ccb7-5&oh=00_AfawMEo0Ec7qW3kKyWVNhqgKA8_dgyfJ6Apet8-vaGAFZw&oe=68BF45A7&_nc_sid=7a9f4b", mediaAlt: "Post Instagram" },
  { profileImageSrc: "https://app.lezard-agency.com/api/ig/pdp/tealer?cb=1756987561441", name: "Tealerlab", username: "@tealer", instagramHref: "https://www.instagram.com/tealer/", mediaSrc: "https://scontent-cdg4-1.cdninstagram.com/v/t51.29350-15/352757242_714500697351677_3628725759250565252_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-cdg4-1.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QF24XFhhuzVKAXjBbjCiOp7DVWxcjR33RmRbC74INBgN0b3-DA-OZnj6VuQOpOaKuRijU8kg9Sl1Aj03OIt3uoR&_nc_ohc=qgb-c-Nh5G8Q7kNvwEBKyFM&_nc_gid=7VTrDGDTE66NC2_3J5VKWA&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzEyMTQ2NTQ3MzM1NzU4NjYzMw%3D%3D.3-ccb7-5&oh=00_AfZABTzvFJyMuWCk383LA0QXmyTQZ4bUNqbsbmriIIJaMQ&oe=68BF3E10&_nc_sid=22de04", mediaAlt: "Post Instagram" },
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
