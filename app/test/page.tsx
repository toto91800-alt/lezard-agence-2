"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import TopLabHeroBackground from "@/components/background/TopLabHeroBackground";
import ComingSoon from "@/components/ui/ComingSoon";

type VarStyle = React.CSSProperties & {
  ["--h-mobile"]?: string;
  ["--h-desktop"]?: string;
};

export default function ResultatsPage() {
  const heightMobile = 420;
  const heightDesktop = 580;

  const hMobile =
    typeof heightMobile === "number" ? `${heightMobile}px` : heightMobile;
  const hDesktop =
    typeof heightDesktop === "number" ? `${heightDesktop}px` : heightDesktop;

  const styleVars: VarStyle = {
    ["--h-mobile"]: hMobile,
    ["--h-desktop"]: hDesktop,
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex items-center justify-center",
        "min-h-[var(--h-mobile)] sm:min-h-[var(--h-desktop)]"
      )}
      style={styleVars}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <TopLabHeroBackground />
      </div>

      {/* Contenu Coming Soon */}
      <main className="w-full flex items-center justify-center px-4">
        <ComingSoon className="w-full max-w-2xl" />
      </main>
    </section>
  );
}