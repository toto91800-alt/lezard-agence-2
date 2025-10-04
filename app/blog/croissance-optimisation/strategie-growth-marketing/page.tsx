import HeaderArticle from "@/components/blog/HeaderArticle";
import FooterBlog from "@/components/blog/FooterBlog";
import WriterBlog from "@/components/blog/WriterBlog";
import Image from "next/image";

export default function StrategieGrowthMarketingPage() {
  return (
    <section className="w-full">
      {/* ✅ En-tête */}
      <HeaderArticle />

      {/* ✅ Contenu principal */}
      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* 🖼️ Image principale */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src="/images/blog/insta4.jpg"
            alt="9 conseils pour engager et vendre sur Instagram"
            fill
            className="object-cover"
          />
        </div>

        {/* 📝 Titre */}
        <h1 className="text-4xl font-bold mb-2">
          9 conseils pour engager et vendre sur Instagram
        </h1>

        {/* 👤 Auteur */}
        <div className="flex justify-start py-6">
          <WriterBlog
            image="/images/blog/auteur-theo.webp"
            name="Théo Leraillez"
            date="10 Septembre 2025"
          />
        </div>

        {/* 🧠 Contenu principal */}
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Instagram n’est plus seulement un réseau social : c’est devenu une
          vitrine stratégique pour les marques, les indépendants et les
          créateurs. Mais pour en faire un véritable levier de performance, il
          faut structurer sa présence avec méthode. Voici 9 conseils issus de la
          méthode Propulse pour maximiser votre impact.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🎯 1. Définir son objectif avant toute chose
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Avant de créer du contenu, clarifiez votre objectif : visibilité,
          notoriété, clients ou ventes. Identifiez votre cible et l’image que
          vous souhaitez incarner. Fixez des objectifs mesurables à moyen terme
          pour suivre vos progrès et ajuster votre stratégie.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          📸 2. Soigner sa photo de profil
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Votre photo de profil est votre carte de visite. Choisissez une image
          claire, professionnelle et reconnaissable. Les comptes personnels
          gagneront à afficher un portrait, tandis qu’une marque privilégiera un
          logo net et identifiable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          ✏️ 3. Structurer sa bio avec la méthode des 3 questions
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Votre bio doit répondre à trois questions : qui êtes-vous ? que
          proposez-vous ? et que souhaitez-vous que vos visiteurs fassent ?
          Utilisez des appels à l’action clairs, des emojis et des mots-clés
          pertinents pour améliorer votre référencement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🚀 4. Rester concentré avant le premier palier
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La phase initiale est souvent la plus exigeante. Continuez à publier,
          étudiez vos concurrents, utilisez les bons hashtags et restez
          constant. C’est la régularité qui déclenche la croissance durable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          📌 5. Optimiser ses stories épinglées
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les stories à la une valorisent votre profil. Limitez-les à 5 ou 6,
          harmonisez vos visuels, et mettez en avant vos points forts : à propos,
          témoignages, coulisses, résultats. Encouragez l’interaction avec des
          stickers ou questions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🎥 6. Créer de la proximité avec les stories
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les stories renforcent le lien avec votre audience. Partagez vos
          coulisses, vos conseils, vos moments de vie. Mixez contenu pro et
          lifestyle, restez authentique et utilisez les stickers pour stimuler
          l’engagement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🛒 7. Adopter le bon état d’esprit pour vendre
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vendre, c’est avant tout offrir de la valeur. Croyez en votre offre,
          montrez son impact et créez un climat de confiance. Soignez votre
          profil et vos stories : la vente doit être perçue comme une aide, pas
          comme une contrainte.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🎁 8. Donner avant de recevoir
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Offrez du contenu gratuit et utile : conseils, retours d’expérience,
          témoignages. Plus vous apportez de valeur, plus votre audience sera
          réceptive à vos offres commerciales.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🤝 9. Cultiver une relation authentique
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Répondez à vos abonnés, interagissez, soyez à l’écoute. La proximité
          humaine, même en ligne, reste la clé d’une relation durable et d’une
          croissance saine.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          🚀 En appliquant ces 9 conseils Propulse, vous poserez les bases d’une
          présence Instagram performante, cohérente et rentable. À vous de jouer
          : testez, ajustez, et faites de votre compte un moteur de croissance !
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
  );
}
