// components/trial/Presentation.tsx
"use client";

import * as React from "react";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Presentation({ className }: Props) {
  return (
    <div
      className={
        "relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-gray-400 p-2 backdrop-blur-lg border-gray-500 bg-neutral-800/50  " +
        (className ?? "")
      }
    >
      <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]" />

      <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
        <picture>
          {/* Mobile Image */}
          <source
            srcSet="/svg/dashboard.svg"
            media="(max-width: 768px)"
            type="image/webp"
          />
          {/* Desktop Image (Next.js Image) */}
          <Image
            src="/svg/dashboard.svg"
            alt="dashboard"
            width={1920}
            height={1080}
            quality={75}
            priority
            className="rounded-lg lg:rounded-[20px]"
          />
        </picture>
      </div>
    </div>
  );
}
