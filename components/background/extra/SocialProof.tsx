// components/trial/SocialProof.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Avatar = { src: string; alt?: string };

type Props = {
  images: Avatar[];
  rating?: number;      // 0..5
  usersCount?: number;
  className?: string;
  sizePx?: number;      // diamètre
};

export default function SocialProof({
  images,
  rating = 5,
  usersCount = 1200,
  className,
  sizePx = 52,
}: Props) {
  const formattedUsers = new Intl.NumberFormat("fr-FR").format(usersCount);

  // Recouvrement horizontal (≈ 28% de la taille, min 8px)
  const overlap = Math.max(8, Math.round(sizePx * 0.28));

  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {/* Avatars en cascade */}
      <div className="flex">
        {images.slice(0, 5).map((img, i) => (
          <span
            key={`${img.src}-${i}`}
            className="relative inline-block rounded-full ring-[4px] ring-black bg-white shadow-sm"
            style={{
              width: sizePx,
              height: sizePx,
              marginLeft: i === 0 ? 0 : -overlap, // chevauchement
              zIndex: 10 + i, // chaque suivant au-dessus
            }}
            aria-hidden
          >
            <span className="relative block h-full w-full overflow-hidden rounded-full">
              <Image
                src={img.src}
                alt={img.alt ?? "User avatar"}
                fill
                sizes={`${sizePx}px`}
                className="object-cover"
                priority={i === 0}
              />
            </span>
          </span>
        ))}
      </div>

      {/* Étoiles + libellé */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {Array.from({ length: full }).map((_, i) => (
            <Star key={`f-${i}`} className="h-5 w-5 text-orange-500" fill="currentColor" stroke="none" />
          ))}

          {hasHalf && (
            <span className="relative inline-block h-5 w-5">
              <Star
                className="absolute inset-0 text-orange-500"
                fill="currentColor"
                stroke="none"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
              <Star className="absolute inset-0 text-orange-500" stroke="currentColor" />
            </span>
          )}

          {Array.from({ length: empty }).map((_, i) => (
            <Star key={`e-${i}`} className="h-5 w-5 text-orange-500" />
          ))}
        </div>

        <span className="text-base text-neutral-900">by {formattedUsers} users</span>
      </div>
    </div>
  );
}
