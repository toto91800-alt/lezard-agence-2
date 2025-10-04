"use client";

import { useState } from "react";
import Image from "next/image";
import HeaderBlog from "@/components/blog/HeaderBlog";
import {
  Newspaper,
  Lightbulb,
  BarChart,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// ✅ Liste des articles
const articles = [
  {
    title: "Instagram : 3 nouveautés vidéo à intégrer",
    subtitle:
      "Trois mises à jour lancées en janvier 2025 qui transforment votre façon de créer du contenu sur Instagram.",
    date: "2025-01-15",
    category: "actualites-infos",
    image: "/images/blog/insta7.jpg",
    href: "/blog/actualites-infos/instagram-nouveautes-video",
  },
  {
    title: "Plus d’interactions sociales sur Instagram",
    subtitle:
      "Instagram déploie de nouvelles fonctionnalités pour renforcer les échanges entre amis : onglet Amis, repost natif et partage de lieu.",
    date: "2025-10-10",
    category: "actualites-infos",
    image: "/images/blog/insta2.jpg",
    href: "/blog/actualites-infos/plus-d-interactions",
  },
  {
    title: "Nouveautés 2025 : Ce qui change dans le digital",
    subtitle:
      "Découvrez les grandes tendances du marketing digital en 2025, les innovations des réseaux sociaux et les outils à surveiller.",
    date: "2025-10-04",
    category: "actualites-infos",
    image: "/images/blog/insta1.jpg",
    href: "/blog/actualites-infos/nouveautes-2025",
  },
  {
    title: "Vos posts Instagram indexés sur Google",
    subtitle:
      "Depuis juillet 2025, les contenus des comptes pros sont indexés par Google. Découvrez comment optimiser vos posts pour renforcer votre visibilité.",
    date: "2025-07-10",
    category: "tendances-algorithme",
    image: "/images/blog/insta6.jpg",
    href: "/blog/tendances-algorithme/vos-posts-instagram-google",
  },
  {
    title: "L’évolution de l’algorithme Instagram en 2025",
    subtitle:
      "Comprenez comment les nouvelles règles de visibilité d’Instagram influencent votre stratégie de contenu cette année.",
    date: "2025-09-20",
    category: "tendances-algorithme",
    image: "/images/blog/insta5.jpg",
    href: "/blog/tendances-algorithme/evolution-instagram-2025",
  },
  {
    title: "5 conseils pour booster ta créativité en 2025",
    subtitle:
      "Découvre des astuces concrètes pour libérer ton potentiel créatif et te démarquer sur les réseaux sociaux.",
    date: "2025-09-28",
    category: "astuces-tendances",
    image: "/images/blog/insta3.jpg",
    href: "/blog/astuces-tendances/conseils-creativite",
  },
  {
    title: "Stratégie de growth marketing : les bases à connaître",
    subtitle:
      "Apprends les fondamentaux du growth marketing pour accélérer la croissance de ton entreprise en ligne.",
    date: "2025-09-10",
    category: "croissance-optimisation",
    image: "/images/blog/insta4.jpg",
    href: "/blog/croissance-optimisation/strategie-growth-marketing",
  },
];

// ✅ Catégories avec icônes
const categories = [
  { value: "all", label: "Toutes les catégories", icon: Sparkles },
  { value: "actualites-infos", label: "Actualités & Infos", icon: Newspaper },
  { value: "astuces-tendances", label: "Astuces & Tendances", icon: Lightbulb },
  { value: "tendances-algorithme", label: "Tendances & Algorithme", icon: BarChart },
  { value: "croissance-optimisation", label: "Croissance & Optimisation", icon: TrendingUp },
];

export default function BlogPage() {
  const [filter, setFilter] = useState("all");

  // ✅ Tri des articles du plus récent au plus ancien
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // ✅ Filtrage
  const filteredArticles =
    filter === "all"
      ? sortedArticles
      : sortedArticles.filter((a) => a.category === filter);

  return (
    <section className="w-full">
      <HeaderBlog />

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* ✅ Titre du blog */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">Nos articles</h1>
          <p className="text-gray-600 text-sm">
            Découvrez nos dernières actualités et conseils pour booster votre présence digitale.
          </p>
        </div>

        {/* ✅ Boutons de catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.value;

            return (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition ${
                  isActive
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ✅ Grille des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Contenu texte */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{article.subtitle}</p>
                <p className="text-xs text-gray-400">
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
