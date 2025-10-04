import * as React from "react";
import { BadgeCheck } from "lucide-react";

type Props = { className?: string };

export default function BannerAvantages({ className }: Props) {
  return (
    <div className={`w-full px-3 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl rounded-3xl sm:rounded-full bg-neutral-900/80 backdrop-blur text-white px-4 py-3 sm:px-6 sm:py-3 shadow-lg border border-white/10">
        <ul
          aria-label="Avantages"
          className="
            flex flex-col sm:flex-row sm:flex-wrap
            items-start sm:items-center justify-center
            gap-3 sm:gap-x-10 sm:gap-y-4
            text-[15px] sm:text-base leading-tight sm:leading-normal
          "
        >
          <li className="flex w-full sm:w-auto items-center gap-3 sm:gap-3">
            <span className="inline-flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-orange-500 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-white" aria-hidden />
            </span>
            <span className="sm:whitespace-nowrap">
              Premiers résultats sous 24 heures
            </span>
          </li>

          <li className="flex w-full sm:w-auto items-center gap-3 sm:gap-3">
            <span className="inline-flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-orange-500 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-white" aria-hidden />
            </span>
            <span className="sm:whitespace-nowrap">
              Configuration en 7 minutes
            </span>
          </li>

          <li className="flex w-full sm:w-auto items-center gap-3 sm:gap-3">
            <span className="inline-flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-orange-500 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-white" aria-hidden />
            </span>
            <span className="sm:whitespace-nowrap">
              Aucun risque pour votre compte
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
