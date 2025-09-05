// components/main/cards/cards5.tsx
"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { className?: string; title?: string; text?: string; };

export default function Cards5({ className, title, text }: Props) {
  const titleContent = title ?? "Reach en hausse";
  const textContent =
    text ?? "Augmentez votre portée (reach) grâce à des optimisations de contenu, d’horaires et de signaux d’engagement.";

  return (
    <article
      className={cn(
        "rounded-2xl border",
        "bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70",
        "border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
        "p-6 sm:p-7",
        "min-h-[170px] sm:min-h-[190px]",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {/* Icône stonks (animée) */}
        <div className="relative mt-0.5 h-14 w-14 sm:h-16 sm:w-16 flex-none followers-anim">
          <Image
            src="/svg/benefits/ia.svg"
            alt="Stonks"
            fill
            className="object-contain"
            priority={false}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-tight text-neutral-900">
            {titleContent}
          </h3>
          <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600">
            {textContent}
          </p>
        </div>
      </div>

      <style jsx>{`
        .followers-anim {
          animation: heartbeat 1.2s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.12); }
          45% { transform: scale(1.18); }
          65% { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .followers-anim { animation: none; }
        }
      `}</style>
    </article>
  );
}
