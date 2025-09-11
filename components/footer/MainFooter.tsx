"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import BackgroundFooter from "@/components/background/BackgroundFooter";
import Footerprincipal from "@/components/footer/footer-principal";
import dynamic from "next/dynamic";

// Chargement dynamique uniquement côté client
const Portfolio = dynamic(() => import("@/components/footer/footerExpert"), {
  ssr: false,
});

type Props = {
  className?: string;
  /** hauteur mini du bloc (le bg s’adapte) */
  minHeight?: number | string;
};

export default function MainFooter({
  className,
  minHeight = 680,
}: Props) {
  const minH = typeof minHeight === "number" ? `${minHeight}px` : minHeight;

  return (
    <section className={cn("relative w-full", className)} style={{ minHeight: minH }}>
      {/* BG plein écran derrière le contenu */}
      <BackgroundFooter
        className="absolute inset-0 -z-10 pointer-events-none"
        height="100%"
      />

      {/* Contenu en flux normal → ordre garanti */}
      <div className="mx-auto w-full pt-8 sm:pt-12">
        {/* 1) Footerprincipal */}
        <Footerprincipal />

        {/* 2) Portfolio */}
        <div className="mt-10 sm:mt-12">
          <Portfolio />
        </div>
      </div>
    </section>
  );
}
