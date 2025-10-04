import Image from "next/image";
import HeaderBlog from "@/components/blog/HeaderBlog";
import FooterBlog from "@/components/blog/FooterBlog";

export default function StrategieGrowthMarketingPage() {
  return (
    <section className="w-full">
      {/* ✅ En-tête du blog */}
      <HeaderBlog />

      {/* ✅ Contenu principal */}
      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-gray">
        {/* Image principale */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src="/image/blog/growth-marketing.jpg"
            alt="Stratégie de growth marketing : les bases à connaître"
            fill
            className="object-cover"
          />
        </div>

        {/* Titre + date */}
        <h1 className="text-4xl font-bold mb-2">
          Stratégie de growth marketing : les bases à connaître
        </h1>
        <p className="text-gray-500 text-sm mb-6">Publié le 4 octobre 2025</p>

        {/* Contenu */}
        <p>
          Le growth marketing repose sur une approche data-driven visant à
          maximiser la croissance d’une entreprise en exploitant les leviers les
          plus efficaces à chaque étape du parcours client.
        </p>

        <h2>1. Comprends ton audience</h2>
        <p>
          Avant de chercher à croître, tu dois connaître parfaitement ton
          audience. Identifie ses besoins, ses points de douleur et ses
          comportements à travers des études, des sondages ou des analyses de
          données.
        </p>

        <h2>2. Expérimente sans cesse</h2>
        <p>
          Le cœur du growth marketing, c’est l’expérimentation. Teste
          constamment de nouvelles idées : landing pages, messages, offres,
          visuels, tunnels de conversion... et mesure les résultats.
        </p>

        <h2>3. Analyse et optimise</h2>
        <p>
          Les données sont ta boussole. Chaque test doit être mesuré pour
          comprendre ce qui fonctionne et éliminer ce qui ne produit pas de
          valeur. Utilise des outils comme Google Analytics, Hotjar ou Mixpanel.
        </p>

        <h2>4. Automatise ce qui fonctionne</h2>
        <p>
          Une fois que tu as identifié les leviers gagnants, automatise-les pour
          gagner du temps et de l’efficacité. Par exemple, mets en place des
          workflows d’emailing ou des scénarios d’onboarding automatisés.
        </p>

        <h2>5. Sois orienté produit</h2>
        <p>
          Le growth marketing ne se limite pas à la publicité : il intègre le
          produit lui-même. Cherche comment ton offre peut encourager la
          recommandation, la rétention et l’engagement.
        </p>

        <p>
          💡 <strong>En résumé :</strong> Le growth marketing repose sur une
          démarche expérimentale continue. Observe, teste, mesure et optimise —
          et tu verras ta croissance s’accélérer de manière durable.
        </p>
      </article>

      {/* ✅ Footer de navigation */}
      <FooterBlog
        nextArticle={{
          title: "Nouveautés 2025 : Ce qui change dans le digital",
          href: "/blog/actualites-infos/nouveautes-2025",
        }}
      />
    </section>
  );
}
