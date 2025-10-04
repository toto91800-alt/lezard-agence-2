import Image from "next/image";
import HeaderBlog from "@/components/blog/HeaderBlog";
import FooterBlog from "@/components/blog/FooterBlog";

export default function ArticlePage() {
  return (
    <section className="w-full">
      {/* ✅ En-tête du blog */}
      <HeaderBlog />

      {/* ✅ Contenu principal */}
      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-gray">
        {/* Image principale */}
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src="/image/blog/creativite.jpg"
            alt="5 conseils pour booster ta créativité en 2025"
            fill
            className="object-cover"
          />
        </div>

        {/* Titre + date */}
        <h1 className="text-4xl font-bold mb-2">
          5 conseils pour booster ta créativité en 2025
        </h1>
        <p className="text-gray-500 text-sm mb-6">Publié le 4 octobre 2025</p>

        {/* Contenu */}
        <p>
          La créativité est une compétence essentielle dans le monde digital —
          que tu sois designer, créateur de contenu ou entrepreneur. Voici cinq
          conseils concrets pour stimuler ton imagination et créer des projets
          plus inspirants :
        </p>

        <h2>1. Change ton environnement</h2>
        <p>
          Travailler toujours au même endroit limite ton inspiration. Essaie de
          nouvelles atmosphères : un café, un espace vert ou une bibliothèque.
        </p>

        <h2>2. Note tout ce qui te vient</h2>
        <p>
          Les idées passent vite. Garde toujours un carnet ou une app de notes à
          portée de main pour capturer tes pensées.
        </p>

        <h2>3. Inspire-toi d’autres domaines</h2>
        <p>
          La créativité se nourrit du croisement d’univers différents : art,
          science, mode, nature. Plus tu élargis ton horizon, plus tu stimules
          ton imagination.
        </p>

        <h2>4. Collabore avec d’autres profils</h2>
        <p>
          Travailler avec des personnes aux visions différentes t’aidera à voir
          les choses sous un nouvel angle.
        </p>

        <h2>5. Prends du recul</h2>
        <p>
          L’inspiration naît souvent quand tu t’éloignes du problème. Fais une
          pause, médite, marche, respire.
        </p>

        <p>
          💡 <strong>Conclusion :</strong> ta créativité n’est pas un don
          magique, mais une compétence qui se cultive chaque jour.
        </p>
      </article>

      {/* ✅ Footer navigation */}
      <FooterBlog
        nextArticle={{
          title: "L’évolution de l’algorithme Instagram en 2025",
          href: "/blog/tendances-algorithme/evolution-instagram-2025",
        }}
      />
    </section>
  );
}
