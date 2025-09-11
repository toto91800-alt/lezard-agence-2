"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function ButtonResultats({ className, href, onClick }: Props) {
  const { t } = useTranslation();

  const base =
    "btn-resultat group relative inline-flex items-center justify-center rounded-full overflow-hidden " +
    "px-6 py-3 font-semibold text-white " +
    "bg-orange-500 shadow-[0_10px_20px_rgba(255,153,0,.25)] " +
    "transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 " +
    "btn-resultat-shine";

  const content = (
    <>
      <span className="icon-wrap mr-2 inline-grid size-6 place-items-center rounded-full bg-white/15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          aria-hidden="true"
          className="icon-heart"
        >
          <path
            d="M8.59,6.09c.99-.07,1.9.35,2.61.99.14.21.35.42.49.56.21.28.35.21.56-.07.64-.78,1.55-1.34,2.54-1.55,1.2-.14,2.4.35,3.17,1.34,1.48,1.76,1.41,3.67.28,5.64-.85,1.34-1.98,2.47-3.32,3.32-.85.56-1.76,1.06-2.75,1.62-.14.07-.35.07-.49,0-1.41-.71-2.68-1.55-3.88-2.47-1.48-1.06-2.54-2.75-2.89-4.73-.21-2.05,1.06-3.95,3.03-4.59.21,0,.42-.07.63-.07Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span>{t("components.buttonresultats.label")}</span>

      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />
    </>
  );

  return (
    <>
      {href ? (
        <a
          href={href}
          className={cn(base, className)}
          aria-label={t("components.buttonresultats.aria")}
        >
          {content}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn(base, className)}
          aria-label={t("components.buttonresultats.aria")}
        >
          {content}
        </button>
      )}

      <style>{`
        /* Reflet (shine) CLIPÉ à l'intérieur du bouton grâce à overflow-hidden */
        .btn-resultat.btn-resultat-shine::after{
          content:"";
          position:absolute;
          inset:0;
          border-radius:inherit;
          background: linear-gradient(120deg,
            transparent 0%,
            rgba(255,255,255,.35) 20%,
            rgba(255,255,255,.35) 22%,
            transparent 35%
          );
          transform: translateX(-200%);
          pointer-events:none;
          will-change: transform;
        }
        .btn-resultat:hover::after{
          animation: btnResultatShine 900ms ease-out forwards;
        }
        @keyframes btnResultatShine{
          to { transform: translateX(200%); }
        }

        /* Icône cœur: petite translation + glow au hover */
        .btn-resultat .icon-wrap { transition: transform .2s ease, filter .2s ease; color:#fff; }
        .btn-resultat:hover .icon-wrap { transform: translateX(2px) scale(1.05); filter: drop-shadow(0 0 10px rgba(255,255,255,.45)); }
        .btn-resultat .icon-heart { display:block; transition: transform .2s ease; }
        .btn-resultat:hover .icon-heart { transform: translateX(1px); }
      `}</style>
    </>
  );
}
