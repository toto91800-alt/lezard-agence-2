import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monétisation & Influence | Blog Lézard Agency",
  description: "Articles sur la monétisation des contenus et l'influence.",
};

export default function MonetisationInfluencePage() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Monétisation & Influence Instagram</h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-center">Parcourez nos sujets</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/blog/monetisation-influence/evaluer-son-potentiel-d-influenceur" className="p-4 rounded-lg border hover:bg-muted transition">
            Évaluer son potentiel d’influenceur
          </a>
          <a href="/blog/monetisation-influence/methodes-de-monetisation" className="p-4 rounded-lg border hover:bg-muted transition">
            Méthodes de monétisation
          </a>
          <a href="/blog/monetisation-influence/construire-une-marque-personnelle" className="p-4 rounded-lg border hover:bg-muted transition">
            Construire une marque personnelle
          </a>
          <a href="/blog/monetisation-influence/etat-du-marche-des-influenceurs" className="p-4 rounded-lg border hover:bg-muted transition">
            État du marché des influenceurs
          </a>
        </div>
      </div>
    </section>
  );
}


