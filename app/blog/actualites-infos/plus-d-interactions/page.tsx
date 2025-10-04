import HeaderArticle from "@/components/blog/HeaderArticle";
import FooterBlog from "@/components/blog/FooterBlog";
import WriterBlog from "@/components/blog/WriterBlog";
import Image from "next/image";

export default function PlusDInteractions() {
  return (
    <section className="w-full">
      {/* ✅ En-tête */}
      <HeaderArticle />

      {/* ✅ Contenu de l’article */}
      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* 🖼️ Image de couverture */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src="/images/blog/insta2.jpg"
            alt="Plus d’interactions sociales sur Instagram"
            fill
            className="object-cover"
          />
        </div>

        {/* 📝 Titre */}
        <h1 className="text-4xl font-bold mb-2">
          Plus d’interactions sociales sur Instagram : les nouveautés d’août 2025
        </h1>

        {/* 👤 Auteur */}
        <div className="flex justify-start py-6">
          <WriterBlog
            image="/images/blog/auteur-theo.webp"
            name="Théo Leraillez"
            date="10 octobre 2025"
          />
        </div>

        {/* 🧠 Contenu principal */}
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Instagram renforce sa dimension sociale avec une série de nouveautés
          déployées en août 2025. L’objectif : rapprocher les utilisateurs de
          leurs cercles proches et favoriser des échanges plus authentiques.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Un nouvel onglet “Amis” dans les Reels
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un espace dédié mettra désormais en avant les Reels aimés ou partagés
          par vos amis. Vous découvrirez ainsi des contenus recommandés par vos
          proches, renforçant la dimension sociale de la découverte sur la
          plateforme.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Le repost natif enfin intégré
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Instagram introduit la possibilité de repartager un contenu directement
          depuis l’application. Chaque repost créditera automatiquement le
          créateur original, simplifiant la diffusion des contenus tout en
          respectant la paternité.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. Partage de localisation dans les DMs
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vous pourrez bientôt envoyer votre position via une carte interactive
          dans vos messages privés. Une fonctionnalité idéale pour planifier des
          rencontres ou recommander des lieux, avec des options de confidentialité
          renforcées.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Confidentialité et contrôle total
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Instagram promet un contrôle complet sur ces nouveautés : visibilité
          personnalisable, gestion des autorisations et possibilité de désactiver
          les options à tout moment. Le réseau veut encourager la proximité sans
          compromettre la sécurité.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Pourquoi ces changements comptent
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ces mises à jour confirment une tendance de fond : les utilisateurs
          recherchent moins de visibilité publique et plus de connexions
          sincères. Instagram s’aligne sur ce mouvement, à l’image de BeReal ou
          Snapchat, pour proposer une expérience plus humaine.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          🌟 <strong>En résumé :</strong> Instagram mise sur la proximité,
          l’authenticité et la confidentialité. Trois ingrédients essentiels
          pour renforcer la fidélité et la confiance des utilisateurs.
        </p>
      </article>

      {/* ✅ Footer dynamique */}
      <FooterBlog
        nextArticle={{
          title: "DM Instagram : 3 nouveautés pour grandir",
          href: "/blog/actualites-infos/nouveautes-2025",
        }}
      />
    </section>
  );
}
