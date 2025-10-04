import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tendances et Algorithme | Blog Lézard Agency",
  description: "Articles sur les tendances et les évolutions d'algorithmes.",
};

export default function TendancesAlgorithmePage() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Tendances et Algorithme Instagram</h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-center">Parcourez nos sujets</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/blog/tendances-algorithme/comprendre-algorithme-2025" className="p-4 rounded-lg border hover:bg-muted transition">
            Comprendre l’algorithme 2025
          </a>
          <a href="/blog/tendances-algorithme/tendances-reseaux-sociaux-2024-2025" className="p-4 rounded-lg border hover:bg-muted transition">
            Tendances des réseaux sociaux 2024‑2025
          </a>
          <a href="/blog/tendances-algorithme/innovations-et-ia" className="p-4 rounded-lg border hover:bg-muted transition">
            Innovations et IA
          </a>
          <a href="/blog/tendances-algorithme/evolution-des-algorithmes-par-format" className="p-4 rounded-lg border hover:bg-muted transition">
            Évolution des algorithmes par format
          </a>
        </div>
      </div>
    </section>
  );
}


