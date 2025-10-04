import Seo from "@/components/blog/Seo"; // ✅ Import du composant SEO
import HeaderArticle from "@/components/blog/HeaderArticle";
import FooterBlog from "@/components/blog/FooterBlog";
import WriterBlog from "@/components/blog/WriterBlog";
import Image from "next/image";

export default function InstagramNouveautesVideoPage() {
  // 🔹 Définir les données SEO propres à cet article
  const title = "Instagram : 3 nouveautés vidéo à intégrer | Lezard Agence";
  const description =
    "Découvrez les nouvelles fonctionnalités vidéo sur Instagram en 2025 : grille verticale, Reels plus longs et nouvel éditeur intégré. Conseils concrets à appliquer.";
  const image = "/images/blog/insta7.jpg";
  const url =
    "https://www.lezard-agency.com/blog/actualites-infos/instagram-nouveautes-video";
  const publishedTime = "2025-01-15";
  const modifiedTime = "2025-01-15";

  return (
    <>
      {/* ✅ Composant SEO professionnel */}
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
          {/* Image principale */}
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="Instagram : 3 nouveautés vidéo à intégrer"
              fill
              className="object-cover"
            />
          </div>

          {/* Titre */}
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--blog-title)" }}
          >
            Instagram : 3 nouveautés vidéo à intégrer
          </h1>

          {/* Auteur */}
          <div className="flex justify-start py-6">
            <WriterBlog
              image="/images/blog/auteur-theo.webp"
              name="Théo Leraillez"
              date="15 janvier 2025"
            />
          </div>

          {/* Contenu */}
          <p className="text-lg leading-relaxed mb-4">
            Lancées en janvier 2025, ces fonctionnalités transforment la manière
            dont les créateurs et les marques conçoivent leurs vidéos sur
            Instagram. Ces nouveautés offrent de réelles opportunités pour créer
            des contenus plus immersifs, engageants et performants.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            1. Grille verticale (format 4:5) : valoriser vos contenus dès le
            profil
          </h2>
          <p className="leading-relaxed mb-4">
            Instagram adopte désormais une grille verticale optimisée pour le
            mobile. Les visuels et vidéos au format portrait prennent plus de
            place, attirant mieux l’attention des visiteurs et renforçant
            l’impact de votre univers visuel.
          </p>
          <p className="mb-4">
            <strong>Conseil Propulse :</strong> réalisez vos visuels et vignettes
            en 4:5 pour qu’ils s’intègrent parfaitement à la grille. Construisez
            votre profil comme une vitrine cohérente et inspirante.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            2. Reels jusqu’à 3 minutes : plus de liberté pour raconter et
            convaincre
          </h2>
          <p className="leading-relaxed mb-4">
            La durée des Reels passe à trois minutes, contre 90 secondes
            auparavant. Une évolution majeure qui permet de développer des
            formats narratifs plus complets, à forte valeur ajoutée.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Présentations de services ou de produits</li>
            <li>Témoignages clients détaillés</li>
            <li>Tutoriels pratiques et démonstrations</li>
            <li>Coulisses et moments de marque</li>
          </ul>
          <p className="mb-4">
            <strong>Conseil Propulse :</strong> captez l’attention dès les
            premières secondes, structurez votre message et intégrez des
            sous-titres pour maintenir l’intérêt de votre audience.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            3. Edits : un nouvel éditeur vidéo intégré à Instagram
          </h2>
          <p className="leading-relaxed mb-4">
            Instagram introduit Edits, son nouvel outil de montage vidéo intégré.
            Il permet de créer et modifier vos vidéos directement sur la
            plateforme, avec ajout de texte, musique, transitions et effets
            visuels, sans application tierce ni watermark.
          </p>
          <p className="mb-4">
            <strong>Conseil Propulse :</strong> privilégiez les montages natifs
            réalisés sur Instagram pour bénéficier d’une meilleure portée
            organique et respecter les codes visuels promus par l’algorithme.
          </p>

          <h2
            className="text-2xl font-semibold mt-10 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            Conclusion
          </h2>
          <p className="leading-relaxed mb-6">
            Ces évolutions confirment une tendance forte : la qualité prime sur
            la quantité. Publier moins, mais mieux, devient la clé pour se
            démarquer et renforcer son image de marque. Les créateurs qui
            sauront exploiter ces formats immersifs auront une longueur d’avance
            sur la concurrence.
          </p>

          <p className="leading-relaxed font-medium">
            Focalisez-vous sur du contenu pertinent, bien structuré et adapté aux
            attentes de votre audience. En 2025, l’efficacité passe par la
            créativité maîtrisée.
          </p>
        </article>

        {/* ✅ Footer dynamique */}
        <FooterBlog
          nextArticle={{
            title: "Plus d’interactions sociales sur Instagram",
            href: "/blog/actualites-infos/plus-d-interactions",
          }}
        />
      </section>
    </>
  );
}
