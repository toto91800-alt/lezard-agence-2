import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lézard Agency",
  description: "Découvrez nos articles et ressources pour booster votre croissance.",
};

export default function BlogPage() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Blog</h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-center">
          Parcourez nos sujets de blog — nous parlons uniquement d&apos;Instagram.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/blog/croissance-optimisation" className="p-4 rounded-lg border hover:bg-muted transition">
            Croissance & Optimisation
          </a>
          <a href="/blog/tendances-algorithme" className="p-4 rounded-lg border hover:bg-muted transition">
            Tendances et Algorithme
          </a>
          <a href="/blog/community-management-engagement" className="p-4 rounded-lg border hover:bg-muted transition">
            Community Management & Engagement
          </a>
          <a href="/blog/monetisation-influence" className="p-4 rounded-lg border hover:bg-muted transition">
            Monétisation & Influence
          </a>
        </div>
      </div>
    </section>
  );
}


