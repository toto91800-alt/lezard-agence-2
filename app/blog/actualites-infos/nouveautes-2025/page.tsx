import Seo from "@/components/blog/Seo"; // ✅ Composant SEO
import HeaderArticle from "@/components/blog/HeaderArticle";
import FooterBlog from "@/components/blog/FooterBlog";
import WriterBlog from "@/components/blog/WriterBlog";
import Image from "next/image";

export default function Nouveautes2025() {
  // 🔹 SEO spécifique à cet article
  const title = "DM Instagram : 3 nouveautés pour grandir | Lezard Agence";
  const description =
    "Instagram enrichit les DMs en 2025 avec 3 fonctionnalités puissantes : transcription, messages longs et follow all. Découvrez comment les exploiter pour croître.";
  const image = "/images/blog/insta1.jpg";
  const url =
    "https://www.lezard-agency.com/blog/actualites-infos/nouveautes-2025";
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

        {/* ✅ Contenu de l’article */}
        <article
          className="mx-auto max-w-4xl px-4 py-12"
          style={{ color: "var(--blog-text)" }}
        >
          {/* 🖼️ Image de couverture */}
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="DM Instagram : 3 nouveautés pour grandir"
              fill
              className="object-cover"
            />
          </div>

          {/* 📝 Titre */}
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "var(--blog-title)" }}
          >
            DM Instagram : 3 nouveautés pour grandir
          </h1>

          {/* 👤 Auteur */}
          <div className="flex justify-start py-6">
            <WriterBlog
              image="/images/blog/auteur-theo.webp"
              name="Théo Leraillez"
              date="4 octobre 2025"
            />
          </div>

          {/* 🧠 Contenu principal */}
          <p className="text-lg leading-relaxed mb-4">
            Instagram continue de renforcer son écosystème de messagerie privée.
            Trois nouvelles fonctionnalités lancées en mai 2025 viennent
            transformer la façon dont les marques et créateurs échangent avec
            leurs communautés. Voici notre analyse des opportunités à saisir pour
            booster votre croissance grâce aux DMs.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            1. Transcription automatique des messages vocaux
          </h2>
          <p className="leading-relaxed mb-3">
            Instagram introduit désormais un bouton “Voir la transcription” sous
            chaque message audio. Le contenu est affiché instantanément, même
            pendant la lecture, et s’adapte automatiquement à la langue utilisée.
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Accessibilité renforcée pour les personnes malentendantes</li>
            <li>
              Consultation possible dans tous les contextes (réunion, transport,
              etc.)
            </li>
            <li>Support client vocal plus fluide et professionnel</li>
            <li>Augmentation du taux d’écoute et de lecture</li>
          </ul>

          <p className="mb-4">
            <strong>Conseil Propulse :</strong> exploitez cette fonction pour
            créer des messages vocaux personnalisés et engageants, même pour vos
            audiences pressées.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            2. Messages vocaux prolongés jusqu’à 5 minutes
          </h2>
          <p className="leading-relaxed mb-3">
            La durée maximale passe de 1 à 5 minutes — une évolution idéale pour
            des échanges plus riches, plus authentiques et propices au
            storytelling.
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Témoignages clients complets et sincères</li>
            <li>Mini-podcasts ou capsules vocales pour vos abonnés</li>
            <li>Explications produits vocales immersives</li>
            <li>Contenus vocaux éducatifs ou inspirants</li>
          </ul>

          <p className="mb-4">
            <strong>Conseil Propulse :</strong> structurez vos messages avec une
            introduction percutante, un développement clair et une conclusion
            engageante.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            3. “Follow All” : suivez tout le monde en un clic
          </h2>
          <p className="leading-relaxed mb-3">
            Instagram facilite le networking avec un nouveau bouton “Follow All”
            dans les discussions de groupe. En un clic, vous pouvez suivre tous les
            participants sans passer par chaque profil individuellement.
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Création de synergies dans les groupes thématiques</li>
            <li>Networking accéléré pour les masterminds ou communautés privées</li>
            <li>Gestion simplifiée pour les créateurs et modérateurs</li>
            <li>Croissance organique au sein des groupes engagés</li>
          </ul>

          <p className="mb-4">
            <strong>Conseil Propulse :</strong> animez vos groupes avec du contenu
            exclusif et utilisez “Follow All” pour renforcer le lien entre les
            membres.
          </p>

          <h2
            className="text-2xl font-semibold mt-10 mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            Ce que ces nouveautés révèlent de l’avenir d’Instagram
          </h2>
          <p className="leading-relaxed mb-3">
            Ces mises à jour confirment la stratégie d’Instagram : encourager des
            échanges plus personnels, inclusifs et de qualité.
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li>Les DMs deviennent le cœur de la croissance</li>
            <li>L’accessibilité est désormais une priorité</li>
            <li>La qualité d’interaction prime sur la quantité</li>
          </ul>

          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: "var(--blog-title)" }}
          >
            Nos recommandations d’experts
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Vocal-first :</strong> intégrez le format audio dans votre
              stratégie relationnelle.
            </li>
            <li>
              <strong>Groupes privés :</strong> développez des communautés
              thématiques exclusives.
            </li>
            <li>
              <strong>Formation :</strong> formez vos équipes aux nouveaux usages
              des DMs et à la réactivité client.
            </li>
            <li>
              <strong>Test & Learn :</strong> expérimentez progressivement ces
              outils et mesurez leur impact sur l’engagement.
            </li>
          </ul>

          <p className="leading-relaxed font-medium">
            <strong>Chez Propulse</strong>, nous intégrons dès maintenant ces
            innovations dans nos stratégies de croissance. Les DMs ne sont plus
            seulement un canal d’échange : ils deviennent un levier de proximité,
            d’authenticité et de performance durable.
          </p>
        </article>

        {/* ✅ Footer dynamique */}
        <FooterBlog
          nextArticle={{
            title: "L’évolution de l’algorithme Instagram en 2025",
            href: "/blog/tendances-algorithme/evolution-instagram-2025",
          }}
        />
      </section>
    </>
  );
}
