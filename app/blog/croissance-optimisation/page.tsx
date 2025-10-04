import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Croissance & Optimisation | Blog Lézard Agency",
  description: "Articles sur la croissance et l'optimisation de vos performances.",
};

export default function CroissanceOptimisationPage() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Croissance & Optimisation Instagram</h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-center">
          Parcourez nos sujets
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/blog/croissance-optimisation/croissance-optimisation-du-profil" className="p-4 rounded-lg border hover:bg-muted transition">
            Croissance & Optimisation du profil
          </a>
          <a href="/blog/croissance-optimisation/optimiser-votre-compte" className="p-4 rounded-lg border hover:bg-muted transition">
            Optimiser votre compte
          </a>
          <a href="/blog/croissance-optimisation/hashtags-et-mots-cles" className="p-4 rounded-lg border hover:bg-muted transition">
            Hashtags et mots‑clés
          </a>
          <a href="/blog/croissance-optimisation/meilleurs-moments-pour-publier" className="p-4 rounded-lg border hover:bg-muted transition">
            Meilleurs moments pour publier
          </a>
          <a href="/blog/croissance-optimisation/types-de-contenu-performants" className="p-4 rounded-lg border hover:bg-muted transition">
            Types de contenu performants
          </a>
        </div>
      </div>
    </section>
  );
}


