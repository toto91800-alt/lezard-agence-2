// components/resultats/CardResultat.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Instagram as InstagramIcon } from "lucide-react";

// Type util: "9/16", "4/3", etc.
type AspectRatio = `${number}/${number}`;

export type CardResultatProps = {
  className?: string;
  profileImageSrc: string;
  name: string;
  username: string;
  instagramHref: string;
  mediaSrc: string;
  mediaAlt?: string;

  fixedHeightPx?: number;   // si fourni → override CSS var
  fixedWidthPx?: number;    // si fourni → override CSS var
  mediaAspect?: AspectRatio;

  cornerRadiusPx?: number;
  borderWidthPx?: number;
  igButtonSizePx?: number;
  avatarSizePx?: number;
  mediaBottomPaddingPx?: number;
};

export default function CardResultat({
  className,
  profileImageSrc,
  name,
  username,
  instagramHref,
  mediaSrc,
  mediaAlt = "",

  fixedHeightPx,
  fixedWidthPx,
  mediaAspect,

  cornerRadiusPx = 24,
  borderWidthPx = 2,
  igButtonSizePx = 44,
  avatarSizePx = 56,
  mediaBottomPaddingPx = 12,
}: CardResultatProps) {
  const HEADER_H = Math.max(avatarSizePx + 8, 56);
  const PAD_Y = 16;
  const aspect: AspectRatio = mediaAspect ?? "9/16";

  const articleStyle: React.CSSProperties = {
    height: fixedHeightPx ? `${fixedHeightPx}px` : "var(--card-h)",
    width:  fixedWidthPx ? `${fixedWidthPx}px` : "var(--card-w)",
    borderRadius: cornerRadiusPx,
    border: `${borderWidthPx}px solid rgba(0,0,0,0.12)`,
  };

  const mediaWrapperStyle: React.CSSProperties = {
    borderRadius: cornerRadiusPx - 6,
    border: `${borderWidthPx}px solid rgba(0,0,0,0.12)`,
  };

  // Hauteur du média — stable SSR: CSS calc si pas d'override.
  const mediaBoxStyle: React.CSSProperties = fixedHeightPx
    ? { height: Math.max(80, fixedHeightPx - PAD_Y * 2 - HEADER_H - mediaBottomPaddingPx), aspectRatio: aspect }
    : { height: `calc(var(--card-h) - ${PAD_Y * 2}px - ${HEADER_H}px - ${mediaBottomPaddingPx}px)`, aspectRatio: aspect };

  return (
    <article
      className={cn(
        "bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
        "backdrop-blur supports-[backdrop-filter]:bg-white/85",
        "p-4 mx-auto transition-shadow hover:shadow-[0_10px_32px_rgba(0,0,0,0.10)]",
        className
      )}
      style={articleStyle}
    >
      {/* Header */}
      <header className="flex items-center gap-3" style={{ height: HEADER_H }}>
        <div className="relative shrink-0" style={{ height: avatarSizePx, width: avatarSizePx }}>
          <Image
            src={profileImageSrc}
            alt={`${name} avatar`}
            fill
            sizes={`${avatarSizePx}px`}
            className="object-cover"
            style={{ borderRadius: 9999, border: `${borderWidthPx}px solid rgba(0,0,0,0.1)` }}
            priority
          />
        </div>

        <div className="min-w-0">
          <div className="text-[16px] font-semibold text-neutral-900 leading-tight truncate">{name}</div>
          <div className="text-sm text-neutral-500 leading-tight truncate">{username}</div>
        </div>

        <div className="flex-1" />

        <a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir sur Instagram"
          className="inline-grid place-items-center transition-colors"
          style={{
            height: igButtonSizePx,
            width: igButtonSizePx,
            borderRadius: 9999,
            background: "rgba(0,0,0,0.04)",
            border: `${borderWidthPx}px solid rgba(0,0,0,0.08)`,
          }}
          title="Ouvrir sur Instagram"
        >
          <InstagramIcon width={22} height={22} strokeWidth={2} />
        </a>
      </header>

      {/* Media */}
      <div className="mt-3 relative overflow-hidden" style={mediaWrapperStyle}>
        <div className="relative w-full" style={mediaBoxStyle}>
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            fill
            // Aligne avec --card-w du carrousel: 260px <640px, 320px sinon
            sizes="(max-width: 639px) 260px, 320px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Espace sous l'image */}
      {mediaBottomPaddingPx > 0 && <div aria-hidden style={{ height: mediaBottomPaddingPx }} />}
    </article>
  );
}
