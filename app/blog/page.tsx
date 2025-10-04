import type { Metadata } from "next";
import HeaderBlog from "@/components/blog/HeaderBlog";

export const metadata: Metadata = {
  title: "Blog | Lézard Agency",
  description: "Découvrez nos articles et ressources pour booster votre croissance.",
};
 
export default function BlogPage() {
  return (
    <section className="w-full">
        <HeaderBlog />
      <div className="mx-auto max-w-5xl px-4">
       

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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


