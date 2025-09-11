"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function ButtonContact({ className, href, onClick }: Props) {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const base =
    "btn-strike group relative inline-flex items-center justify-center rounded-full overflow-hidden " +
    "px-6 py-3 font-semibold text-white " +
    "bg-orange-500 shadow-[0_10px_20px_rgba(255,153,0,.25)] " +
    "transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 " +
    "btn-strike-shine";

  const content = (
    <>
      <span className="icon-wrap mr-2 inline-grid size-6 place-items-center rounded-full bg-white/15">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="icon-thunder">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
        </svg>
      </span>

      <span>{t("components.buttoncontact.label", "Prendre rendez-vous")}</span>

      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />
    </>
  );

  return href ? (
    <a
      href={href}
      className={cn(base, className)}
      aria-label={t("components.buttoncontact.aria", "Prendre rendez-vous")}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={cn(base, className)}
      aria-label={t("components.buttoncontact.aria", "Prendre rendez-vous")}
    >
      {content}
    </button>
  );
}
