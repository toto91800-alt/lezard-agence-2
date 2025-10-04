// components/trial/ButtonDemoOrange.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;          // si présent -> <a> (sinon on utilise l'URL par défaut)
  onClick?: () => void;   // si présent -> <button>
};

const DEFAULT_HREF = "https://demo.lezard-agency.com/lezard-agence/trial";

export default function ButtonDemoOrange({ className, href, onClick }: Props) {
  const base =
    "btn-demo-orange group relative inline-flex items-center justify-center rounded-full overflow-hidden " +
    "px-6 py-3 font-semibold text-white " +
    "bg-orange-500 shadow-[0_10px_20px_rgba(255,153,0,.25)] " +
    "transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 " +
    "btn-demo-orange-shine";

  const content = (
    <>
      {/* Icône éclair */}
      <span className="icon-wrap mr-2 inline-grid size-6 place-items-center rounded-full bg-white/15 text-white">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="icon-thunder">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
        </svg>
      </span>

      <span>Demo</span>

      {/* fine ring overlay */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />
    </>
  );

  // Priorité au onClick => <button>, sinon <a> qui s'ouvre dans un NOUVEL onglet
  return (
    <>
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className={cn(base, className)}
          aria-label="Demo"
        >
          {content}
        </button>
      ) : (
        <a
          href={href ?? DEFAULT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(base, className)}
          aria-label="Demo (ouvre dans un nouvel onglet)"
        >
          {content}
        </a>
      )}

      <style>{`
        /* Reflet (shine) clipé à l'intérieur du bouton */
        .btn-demo-orange.btn-demo-orange-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,.35) 20%,
            rgba(255,255,255,.35) 22%,
            transparent 35%
          );
          transform: translateX(-200%);
          pointer-events: none;
          will-change: transform;
        }
        .btn-demo-orange:hover::after {
          animation: btnDemoOrangeShine 900ms ease-out forwards;
        }
        @keyframes btnDemoOrangeShine {
          to { transform: translateX(200%); }
        }

        /* Icône: tilt + léger glow au hover */
        .btn-demo-orange .icon-wrap { transition: transform .2s ease, filter .2s ease; }
        .btn-demo-orange:hover .icon-wrap { transform: rotate(-12deg) scale(1.1); filter: drop-shadow(0 0 10px rgba(255,255,255,.45)); }
        .btn-demo-orange .icon-thunder { transition: transform .2s ease; display: block; }
        .btn-demo-orange:hover .icon-thunder { transform: translateX(1px); }

        @media (prefers-reduced-motion: reduce) {
          .btn-demo-orange:hover::after { animation: none; }
          .btn-demo-orange:hover .icon-wrap { transform: none; filter: none; }
          .btn-demo-orange:hover .icon-thunder { transform: none; }
        }
      `}</style>
    </>
  );
}
