import Seo from "@/components/blog/Seo"; // ✅ Composant SEO
import HeaderArticle from "@/components/blog/HeaderArticle";
import FooterBlog from "@/components/blog/FooterBlog";
import WriterBlog from "@/components/blog/WriterBlog";
import Image from "next/image";

export default function StrategieGrowthMarketingPage() {
  // 🔹 Données SEO spécifiques à cet article
  const title = "9 conseils pour engager et vendre sur Instagram | Lezard Agence";
  const description =
    "Découvrez 9 conseils stratégiques pour engager votre audience et vendre sur Instagram. Une méthode structurée pour booster votre présence et vos ventes.";
  const image = "/images/blog/insta4.jpg";
  const url =
    "https://www.lezard-agency.com/blog/croissance-optimisation/strategie-growth-marketing";
  const publishedTime = "2025-09-10";
  const modifiedTime = "2025-09-10";

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
              alt="9 conseils pour engager et vendre sur Instagram"
              fill
              className="object-cover"
            />
          </div>

          {/* 📝 Titre */}
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--blog-title)" }}
          >
            9 conseils pour engager et vendre sur Instagram
          </h1>

          {/* 👤 Auteur */}
          <div className="flex justify-start py-6">
            <WriterBlog
              image="/images/blog/auteur-theo.webp"
              name="Théo Leraillez"
              date="10 septembre 2025"
            />
          </div>

          {/* 🧠 Introduction */}
          <p className="text-lg leading-relaxed mb-4">
            Instagram n’est plus un simple réseau social : c’est une véritable
            vitrine stratégique pour les entreprises, les créateurs et les
            indépendants. Pour en faire un levier de croissance durable, il est
            essentiel de structurer sa présence avec méthode. Voici neuf conseils
            issus de la méthode Propulse pour maximiser votre impact et vos ventes.
          </p>

          {/* ✅ 1 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            1. Définir un objectif clair avant toute action
          </h2>
          <p className="leading-relaxed mb-4">
            Avant de créer du contenu, définissez votre objectif : gagner en
            visibilité, renforcer votre crédibilité, attirer des clients ou
            augmenter vos ventes. Identifiez votre cible et l’image que vous
            souhaitez transmettre. Fixez des objectifs mesurables à trois ou six
            mois pour suivre vos progrès et ajuster votre stratégie.
          </p>

          {/* ✅ 2 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            2. Soigner sa photo de profil
          </h2>
          <p className="leading-relaxed mb-4">
            Votre photo de profil est la première impression que vous donnez.
            Choisissez une image claire, professionnelle et reconnaissable. Pour un
            compte personnel, optez pour un portrait. Pour une marque, privilégiez
            un logo net et identifiable, aligné avec votre charte graphique.
          </p>

          {/* ✅ 3 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            3. Structurer sa biographie avec la méthode des 3 questions
          </h2>
          <p className="leading-relaxed mb-4">
            Votre bio doit répondre à trois questions : qui êtes-vous, que
            proposez-vous, et que souhaitez-vous que vos visiteurs fassent ?
            Utilisez des appels à l’action clairs, des séparateurs lisibles et des
            mots-clés pertinents pour améliorer le référencement naturel de votre
            compte.
          </p>

          {/* ✅ 4 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            4. Rester concentré avant d’atteindre le premier palier
          </h2>
          <p className="leading-relaxed mb-4">
            La phase initiale est souvent la plus difficile. Continuez à publier,
            analysez vos concurrents pour identifier les bonnes pratiques, et
            tenez-vous à une ligne éditoriale claire. La régularité est la clé pour
            franchir les premiers paliers et amorcer une croissance durable.
          </p>

          {/* ✅ 5 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            5. Optimiser ses stories à la une
          </h2>
          <p className="leading-relaxed mb-4">
            Les stories épinglées valorisent votre profil et structurent votre
            image de marque. Limitez-les à cinq ou six, harmonisez les visuels et
            organisez-les par thématique : présentation, témoignages, coulisses ou
            résultats. Encouragez l’interaction grâce aux stickers et questions.
          </p>

          {/* ✅ 6 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            6. Créer de la proximité avec les stories
          </h2>
          <p className="leading-relaxed mb-4">
            Les stories renforcent la relation avec votre audience. Montrez vos
            coulisses, partagez vos réussites et vos apprentissages. Mixez contenu
            professionnel et moments authentiques. Utilisez les fonctionnalités
            interactives pour maintenir un lien constant avec votre communauté.
          </p>

          {/* ✅ 7 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            7. Adopter le bon état d’esprit pour vendre
          </h2>
          <p className="leading-relaxed mb-4">
            Vendre sur Instagram, c’est avant tout apporter de la valeur. Croyez en
            votre produit ou service et présentez-le comme une solution utile.
            Instaurez un climat de confiance grâce à la transparence, la cohérence
            et une communication sincère.
          </p>

          {/* ✅ 8 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            8. Donner avant de recevoir
          </h2>
          <p className="leading-relaxed mb-4">
            La meilleure stratégie de conversion repose sur la générosité.
            Partagez du contenu gratuit et utile : conseils, retours d’expérience,
            analyses ou témoignages. En offrant avant de vendre, vous renforcez la
            confiance et la fidélité de votre audience.
          </p>

          {/* ✅ 9 */}
          <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--blog-title)" }}>
            9. Cultiver une relation authentique et professionnelle
          </h2>
          <p className="leading-relaxed mb-6">
            L’interaction humaine reste au cœur de la performance sur Instagram.
            Répondez à vos messages, engagez la conversation, et soignez votre
            service client. Une relation sincère et constante transforme vos
            abonnés en ambassadeurs de votre marque.
          </p>

          {/* ✅ Conclusion */}
          <p className="leading-relaxed font-medium">
            En appliquant ces neuf conseils, vous poserez les bases d’une présence
            Instagram efficace, cohérente et rentable. Testez, ajustez et
            optimisez : chaque action compte pour faire de votre profil un véritable
            levier de croissance.
          </p>
        </article>

        {/* ✅ Footer dynamique */}
        <FooterBlog
          nextArticle={{
            title: "Instagram 2025 : 3 best practices clés",
            href: "/blog/astuces-tendances/conseils-creativite",
          }}
        />
      </section>
    </>
  );
}
