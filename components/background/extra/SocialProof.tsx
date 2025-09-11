"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type Avatar = { src: string; alt?: string };

type Props = {
  images: Avatar[];
  rating?: number;
  usersCount?: number;
  className?: string;
  sizePx?: number;
};

export default function SocialProof({
  images,
  rating = 5,
  usersCount = 1200,
  className,
  sizePx = 52,
}: Props) {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const formattedUsers = new Intl.NumberFormat().format(usersCount);
  const overlap = Math.max(8, Math.round(sizePx * 0.28));

  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4",
        className
      )}
    >
      {/* Avatars */}
      <div className="flex justify-center sm:justify-start">
        {images.slice(0, 5).map((img, i) => (
          <span
            key={`${img.src}-${i}`}
            className="relative inline-block rounded-full ring-[4px] ring-black bg-white shadow-sm"
            style={{
              width: sizePx,
              height: sizePx,
              marginLeft: i === 0 ? 0 : -overlap,
              zIndex: 10 + i,
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

      {/* Étoiles + texte */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1 sm:mt-0 text-center sm:text-left">
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

        <span className="text-sm sm:text-base text-[oklch(var(--secondary))]">
          {t("mainpage.socialproof.text", { count: usersCount, formatted: formattedUsers })}
        </span>
      </div>
    </div>
  );
}
