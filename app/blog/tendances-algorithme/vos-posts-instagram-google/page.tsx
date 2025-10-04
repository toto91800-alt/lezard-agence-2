import Seo from "@/components/blog/Seo"; // ✅ Import du composant SEO
import HeaderArticle from "@/components/blog/HeaderArticle";
import FooterBlog from "@/components/blog/FooterBlog";
import WriterBlog from "@/components/blog/WriterBlog";
import Image from "next/image";

export default function VosPostsInstagramGooglePage() {
  // 🔹 Données SEO spécifiques à cette page
  const title = "Vos posts Instagram indexés sur Google | Lezard Agence";
  const description =
    "Instagram indexé par Google ? Découvrez comment vos publications pro apparaissent désormais dans les résultats de recherche, et comment en tirer profit.";
  const image = "/images/blog/insta6.jpg";
  const url =
    "https://www.lezard-agency.com/blog/tendances-algorithme/vos-posts-instagram-google";
  const publishedTime = "2025-07-10";
  const modifiedTime = "2025-07-10";

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
              alt="Vos posts Instagram indexés sur Google"
              fill
              className="object-cover"
            />
          </div>

          {/* 📝 Titre */}
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--blog-title)" }}
          >
            Vos posts Instagram indexés sur Google
          </h1>

          {/* 👤 Auteur */}
          <div className="flex justify-start py-6">
            <WriterBlog
              image="/images/blog/auteur-theo.webp"
              name="Théo Leraillez"
              date="10 juillet 2025"
            />
          </div>

          {/* 🧠 Introduction */}
          <p className="text-lg leading-relaxed mb-4">
            Depuis le 10 juillet 2025, Instagram a franchi une étape majeure : les
            publications publiques des comptes professionnels — Business et
            Créateur — sont désormais indexées par Google et d’autres moteurs de
            recherche. Vos Reels, carrousels, photos et vidéos peuvent désormais
            apparaître dans les résultats de recherche, offrant une visibilité
            bien au-delà de la plateforme.
          </p>

          {/* ✅ Section 1 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            Une évolution qui change la donne
          </h2>
          <p className="leading-relaxed mb-4">
            Jusqu’ici, les publications Instagram avaient une durée de vie très
            courte. Désormais, vos contenus peuvent continuer à générer du trafic
            des mois, voire des années après leur publication. C’est une
            véritable révolution SEO : vos publications deviennent des micro
            contenus capables d’attirer une audience au-delà de votre communauté
            Instagram.
          </p>

          {/* ✅ Section 2 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            Comment tirer parti de cette opportunité
          </h2>
          <p className="leading-relaxed mb-4">
            Pour maximiser cette nouvelle visibilité, intégrez des pratiques SEO à
            votre stratégie de contenu :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Rédigez vos légendes comme de véritables titres d’article avec des
              mots-clés pertinents et recherchés.
            </li>
            <li>
              Utilisez un texte alternatif (alt-text) clair et descriptif pour
              chaque image afin d’améliorer l’accessibilité et le référencement.
            </li>
            <li>
              Combinez hashtags génériques et localisés pour toucher à la fois le
              public social et celui des moteurs de recherche.
            </li>
            <li>
              Optimisez votre biographie avec des mots-clés liés à votre activité,
              votre secteur et votre localisation.
            </li>
          </ul>

          {/* ✅ Section 3 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            Vers un nouvel équilibre entre social et SEO
          </h2>
          <p className="leading-relaxed mb-4">
            Instagram devient un point d’entrée vers le web. Vos contenus
            remplissent désormais une double fonction : entretenir l’engagement
            sur la plateforme et attirer une audience via les moteurs de
            recherche. En combinant les codes du social media et du SEO, chaque
            publication devient un levier d’acquisition omnicanal.
          </p>

          {/* ✅ Section 4 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            Ce qu’il faut surveiller
          </h2>
          <p className="leading-relaxed mb-4">
            Cette exposition accrue implique une vigilance particulière. Les
            contenus publics peuvent apparaître dans des contextes externes ou
            refléter une image datée de votre marque. Il est donc essentiel de
            maintenir un profil cohérent et à jour.
          </p>
          <p className="leading-relaxed mb-4">
            Si vous préférez rester discret, deux options existent : passer votre
            compte en privé ou désactiver l’indexation via les paramètres de
            confidentialité.
          </p>

          {/* ✅ Conclusion */}
          <h2 className="text-2xl font-semibold mt-10 mb-3" style={{ color: "var(--blog-title)" }}>
            En résumé
          </h2>
          <p className="leading-relaxed mb-6">
            L’indexation d’Instagram par Google transforme chaque publication en
            actif digital durable. En adoptant une logique SEO, vous renforcez
            votre présence sur le long terme et multipliez les points de contact
            avec votre audience. Une évolution majeure pour toutes les entreprises
            souhaitant gagner en visibilité et en autorité.
          </p>
        </article>

        {/* ✅ Footer dynamique */}
        <FooterBlog
          nextArticle={{
            title: "Instagram : Comment booster votre visibilité",
            href: "/blog/tendances-algorithme/evolution-instagram-2025",
          }}
        />
      </section>
    </>
  );
}
