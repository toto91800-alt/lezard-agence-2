// components/trial/ButtonTechnologie.tsx
"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;          // si présent -> <a>
  onClick?: () => void;   // sinon -> <button>
};

export default function ButtonShow({ className, href, onClick }: Props) {
  const { t } = useTranslation();

  const base =
  "btn-strike btn-strike-shine group relative inline-flex items-center justify-center w-full " +
  "rounded-full overflow-hidden px-6 py-3 font-semibold text-white " +
  "bg-orange-500 shadow-[0_10px_20px_rgba(255,153,0,.25)] " +
  "transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500";


  const content = (
    <>
      {/* Éclair SVG inline */}
      <span className="icon-wrap mr-2 inline-grid size-6 place-items-center rounded-full bg-white/15">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="icon-thunder">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
        </svg>
      </span>

      <span>{t("components.ButtonShow.label")}</span>

      {/* fine ring overlay */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />
    </>
  );

  return (
    <>
      {href ? (
        <a
          href={href}
          className={cn(base, className)}
          aria-label={t("components.buttontechnologie.aria")}
        >
          {content}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn(base, className)}
          aria-label={t("components.buttontechnologie.aria")}
        >
          {content}
        </button>
      )}

      <style>{`
        /* Reflet (shine) CLIPÉ à l'intérieur du bouton grâce à overflow-hidden */
        .btn-strike.btn-strike-shine::after{
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
        .btn-strike:hover::after{
          animation: btnShine 900ms ease-out forwards;
        }
        @keyframes btnShine{
          to { transform: translateX(200%); }
        }

        /* Éclair: tilt + léger glow au hover */
        .btn-strike .icon-wrap { transition: transform .2s ease, filter .2s ease; color:#fff; }
        .btn-strike:hover .icon-wrap { transform: rotate(-12deg) scale(1.1); filter: drop-shadow(0 0 10px rgba(255,255,255,.45)); }
        .btn-strike .icon-thunder { transition: transform .2s ease; display:block; }
        .btn-strike:hover .icon-thunder { transform: translateX(1px); }
      `}</style>
    </>
  );
}
