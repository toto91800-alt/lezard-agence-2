import HeaderBlog from "@/components/blog/HeaderBlog";
import FooterBlog from "@/components/blog/FooterBlog";
import Image from "next/image";

export default function Nouveautes2025() {
  return (
    <section className="w-full">
      <HeaderBlog />

      <article className="mx-auto max-w-4xl px-4 py-12">
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/image/blog/digital-news.jpg"
            alt="Nouveautés 2025"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h1 className="text-4xl font-bold mb-2">
          Nouveautés 2025 : Ce qui change dans le digital
        </h1>
        <p className="text-gray-500 text-sm mb-6">Publié le 4 octobre 2025</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Découvrez les grandes tendances du marketing digital en 2025, les
          innovations des réseaux sociaux et les outils à surveiller.
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
  );
}
