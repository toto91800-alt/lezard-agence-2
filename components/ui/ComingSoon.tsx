"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  backHref?: string;
};

type CSSVars = React.CSSProperties & Record<"--Prixtextcolor", string>;

export default function ComingSoon({
  className,
  title,
  subtitle,
  backHref = "/",
}: Props) {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const styleVars: CSSVars = { "--Prixtextcolor": "#f97316" };

  const finalTitle = title ?? t("components.comingsoon.title", "Coming soon");
  const finalSubtitle = subtitle ?? t("components.comingsoon.subtitle", "Cette page arrive bientôt.");
  const backLabel = t("components.comingsoon.back", "Retour");

  return (
    <section
      className={cn("relative w-full grid place-items-center py-20 sm:py-28", className)}
      style={styleVars}
    >
      <div className="text-center px-6">
        {mounted && (
          <>
            <h1 className="font-extrabold leading-none tracking-tight text-[clamp(2.5rem,8vw,6rem)]">
              <span className="text-[var(--Prixtextcolor)]">{finalTitle}</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[var(--Prixtextcolor)]">
              {finalSubtitle}
            </p>

            <div className="mt-8 inline-flex items-center gap-3">
              <a
                href={backHref}
                className="rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-md hover:shadow-lg transition"
              >
                {backLabel}
              </a>
            </div>
          </>
        )}
      </div>

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
