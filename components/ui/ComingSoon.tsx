// components/ui/ComingSoon.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  backHref?: string;
};

// Type utilitaire pour autoriser la custom property CSS
type CSSVars = React.CSSProperties & Record<"--Prixtextcolor", string>;

export default function ComingSoon({
  className,
  title = "Coming soon",
  subtitle = "Cette page arrive bientôt.",
  backHref = "/",
}: Props) {
  const styleVars: CSSVars = { "--Prixtextcolor": "#f97316" };

  return (
    <section
      className={cn("relative w-full grid place-items-center py-20 sm:py-28", className)}
      style={styleVars}
    >
      <div className="text-center px-6">
        <h1 className="font-extrabold leading-none tracking-tight text-[clamp(2.5rem,8vw,6rem)]">
          <span className="text-[var(--Prixtextcolor)]">{title}</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[var(--Prixtextcolor)]">
          {subtitle}
        </p>

        <div className="mt-8 inline-flex items-center gap-3">
          <a
            href={backHref}
            className="rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-md hover:shadow-lg transition"
          >
            Retour
          </a>
        </div>
      </div>

      {/* léger glow de fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 blur-3xl opacity-30"
        style={{
          height: 320,
          background:
            "radial-gradient(60% 40% at 50% 50%, #ff7a00 0%, transparent 60%)",
        }}
      />
    </section>
  );
}
