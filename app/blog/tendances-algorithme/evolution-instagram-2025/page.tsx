import Image from "next/image";
import HeaderBlog from "@/components/blog/HeaderBlog";
import FooterBlog from "@/components/blog/FooterBlog";

export default function EvolutionInstagram2025Page() {
  return (
    <section className="w-full">
      {/* ✅ En-tête du blog */}
      <HeaderBlog />

      {/* ✅ Contenu principal */}
      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-gray">
        {/* Image principale */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src="/image/blog/instagram-algo.jpg"
            alt="L’évolution de l’algorithme Instagram en 2025"
            fill
            className="object-cover"
          />
        </div>

        {/* Titre + date */}
        <h1 className="text-4xl font-bold mb-2">
          L’évolution de l’algorithme Instagram en 2025
        </h1>
        <p className="text-gray-500 text-sm mb-6">Publié le 4 octobre 2025</p>

        {/* Contenu */}
        <p>
          Comprends comment les nouvelles règles de visibilité d’Instagram
          influenceront ta stratégie de contenu cette année.
        </p>

        <h2>1. L’accent sur l’engagement authentique</h2>
        <p>
          En 2025, Instagram valorise davantage les interactions réelles : les
          commentaires, partages et discussions comptent plus que les likes.
          Les publications qui suscitent de vraies conversations sont mieux
          mises en avant.
        </p>

        <h2>2. Le retour du contenu long format</h2>
        <p>
          Après des années dominées par les Reels courts, Instagram remet à
          l’honneur le contenu long et narratif : carrousels détaillés,
          storytelling et vidéos pédagogiques.
        </p>

        <h2>3. L’importance du timing et de la cohérence</h2>
        <p>
          La régularité et la cohérence de publication influencent désormais la
          portée. Les créateurs qui publient selon un rythme clair et durable
          voient leur visibilité croître naturellement.
        </p>

        <h2>4. La personnalisation accrue du fil d’actualité</h2>
        <p>
          L’algorithme adapte le contenu selon les préférences et les
          interactions passées de chaque utilisateur. Plus ton contenu est
          aligné avec une audience spécifique, plus il sera diffusé efficacement.
        </p>

        <h2>5. Collaboration et authenticité avant tout</h2>
        <p>
          Les marques et créateurs sont encouragés à collaborer via les formats
          “Collab” et à privilégier la transparence dans leurs messages.
        </p>

        <p>
          💡 <strong>Conclusion :</strong> L’algorithme Instagram 2025 récompense
          la pertinence, la constance et les échanges humains. Reste authentique
          et pense à créer du contenu de valeur avant tout.
        </p>
      </article>

      {/* ✅ Footer navigation */}
      <FooterBlog
        nextArticle={{
          title: "Stratégie de growth marketing : les bases à connaître",
          href: "/blog/croissance-optimisation/strategie-growth-marketing",
        }}
      />
    </section>
  );
}
