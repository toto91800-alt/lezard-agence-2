// components/main/cards/cards6.tsx
"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { className?: string; title?: string; text?: string; };

export default function Cards6({ className, title, text }: Props) {
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
        {/* Conteneur icône (grand) avec pulse */}
        <div className="relative mt-0.5 flex-none text-rose-500 h-14 w-14 sm:h-16 sm:w-16">
          <div className="relative h-full w-full like-anim" aria-hidden="true">
            <Image
              src="/svg/benefits/shield1.svg"
              alt="Likes"
              fill
              className="object-contain pointer-events-none"
              priority={false}
            />
          </div>
        </div>

        <div>
          {title && (
            <h3 className="mt-2 text-lg font-semibold leading-tight text-neutral-900">
              {title}
            </h3>
          )}
          {text && (
            <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-600">
              {text}
            </p>
          )}
        </div>
      </div>

      {/* Animation pulse uniquement */}
      <style jsx>{`
        .like-anim {
          animation: heartbeat 1.15s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.12); }
          45% { transform: scale(1.18); }
          65% { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .like-anim { animation: none; }
        }
      `}</style>
    </article>
  );
}
