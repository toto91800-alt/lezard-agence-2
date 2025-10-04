import Seo from "@/components/blog/Seo"; // ✅ Composant SEO
import HeaderArticle from "@/components/blog/HeaderArticle";
import FooterBlog from "@/components/blog/FooterBlog";
import WriterBlog from "@/components/blog/WriterBlog";
import Image from "next/image";

export default function EvolutionInstagram2025Page() {
  // 🔹 Données SEO spécifiques à cet article
  const title = "Instagram 2025 : Comment booster votre visibilité | Lezard Agence";
  const description =
    "Découvrez comment renforcer votre visibilité sur Instagram en 2025 avec nos bonnes pratiques : régularité, interactions et stratégie basée sur les données.";
  const image = "/images/blog/insta5.jpg";
  const url =
    "https://www.lezard-agency.com/blog/tendances-algorithme/evolution-instagram-2025";
  const publishedTime = "2025-10-04";
  const modifiedTime = "2025-10-04";

  return (
    <>
      {/* ✅ Composant SEO */}
      <Seo
        title={title}
        description={description}
        image={image}
        url={url}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
      />

      <section className="w-full">
        {/* ✅ En-tête */}
        <HeaderArticle />

        {/* ✅ Contenu principal */}
        <article
          className="mx-auto max-w-4xl px-4 py-12"
          style={{ color: "var(--blog-text)" }}
        >
          {/* 🖼️ Image principale */}
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="Instagram : Comment booster votre visibilité"
              fill
              className="object-cover"
            />
          </div>

          {/* 📝 Titre */}
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--blog-title)" }}
          >
            Instagram : Comment booster votre visibilité
          </h1>

          {/* 👤 Auteur */}
          <div className="flex justify-start py-6">
            <WriterBlog
              image="/images/blog/auteur-theo.webp"
              name="Théo Leraillez"
              date="4 octobre 2025"
            />
          </div>

          {/* 🧠 Introduction */}
          <p className="text-lg leading-relaxed mb-4">
            Instagram évolue rapidement. Entre nouvelles fonctionnalités et
            ajustements d’algorithmes, il est essentiel d’adapter sa stratégie
            pour rester visible et performant. Voici les bonnes pratiques clés
            recommandées par Propulse pour renforcer durablement votre présence
            sur la plateforme.
          </p>

          {/* ✅ 1 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            1. Publier régulièrement avec les bons formats
          </h2>
          <p className="leading-relaxed mb-4">
            Instagram valorise les comptes actifs et cohérents. Pour maximiser
            votre visibilité, publiez entre trois et cinq Reels par semaine et
            maintenez une présence régulière en story. Ce format éphémère reste un
            excellent levier pour entretenir la proximité et stimuler
            l’engagement.
          </p>
          <p className="mb-4">
            <strong>Conseil Propulse :</strong> misez sur la régularité et la
            valeur. Mieux vaut publier moins souvent, mais avec un contenu
            pertinent et structuré, qu’une série de posts sans stratégie claire.
          </p>

          {/* ✅ 2 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            2. Interagir avant et après chaque publication
          </h2>
          <p className="leading-relaxed mb-4">
            L’algorithme repose sur la réciprocité. Plus vous interagissez avec
            votre audience, plus Instagram mettra vos publications en avant.
            Commentez, répondez aux messages, partagez du contenu pertinent et
            échangez avec les comptes de votre secteur.
          </p>
          <p className="mb-4">
            <strong>Conseil Propulse :</strong> consacrez 15 à 30 minutes avant et
            après chaque publication pour interagir. Cet investissement régulier
            améliore significativement votre portée organique.
          </p>

          {/* ✅ 3 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            3. Analyser ses statistiques et ajuster sa stratégie
          </h2>
          <p className="leading-relaxed mb-4">
            Les outils Insights et les nouvelles fonctionnalités d’analyse
            d’Instagram permettent d’identifier ce qui fonctionne réellement :
            types de contenus, taux d’engagement, horaires d’activité ou encore
            taux de partage.
          </p>
          <p className="mb-4">
            <strong>Conseil Propulse :</strong> prenez l’habitude d’analyser vos
            performances chaque semaine. Les données orientent vos choix et
            garantissent une amélioration continue.
          </p>

          {/* ✅ 4 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            4. Miser sur le partage plutôt que sur les likes
          </h2>
          <p className="leading-relaxed mb-4">
            En 2025, l’algorithme d’Instagram privilégie les publications
            partagées. Un contenu diffusé en message privé ou en story indique une
            forte valeur perçue, ce qui renforce sa portée organique.
          </p>
          <p className="mb-4">
            <strong>Conseil Propulse :</strong> favorisez les formats à fort
            potentiel de partage : carrousels pratiques, études de cas, citations
            inspirantes ou tutoriels synthétiques. Plus votre contenu sera utile,
            plus il sera relayé.
          </p>

          {/* ✅ Conclusion */}
          <h2 className="text-2xl font-semibold mt-10 mb-3" style={{ color: "var(--blog-title)" }}>
            Conclusion
          </h2>
          <p className="leading-relaxed mb-6">
            Instagram récompense la constance, la pertinence et la proximité. En
            appliquant ces bonnes pratiques, vous développerez une visibilité
            accrue, un engagement plus qualifié et une stratégie durable.
          </p>

          <p className="leading-relaxed font-medium">
            Besoin d’un accompagnement pour structurer votre stratégie Instagram ?
            L’équipe Propulse vous aide à concevoir une approche claire,
            mesurable et performante, adaptée à votre marque et à vos objectifs.
          </p>
        </article>

        {/* ✅ Footer dynamique */}
        <FooterBlog
          nextArticle={{
            title: "9 conseils pour engager et vendre sur Instagram",
            href: "/blog/croissance-optimisation/strategie-growth-marketing",
          }}
        />
      </section>
    </>
  );
}
