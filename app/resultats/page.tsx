// app/resultats/page.tsx
import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Résultats — Lezard Agence",
  description: "Études de cas, chiffres et ROI — bientôt disponibles.",
};

export default function ResultatsPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <ComingSoon
        title="Bientôt disponible"
        subtitle="La page Résultats arrive très bientôt : études de cas, chiffres et ROI."
        backHref="/"
        notifyHref="mailto:hello@example.com?subject=Prévenez-moi%20pour%20les%20résultats"
        className="w-full"
      />
    </main>
  );
}
