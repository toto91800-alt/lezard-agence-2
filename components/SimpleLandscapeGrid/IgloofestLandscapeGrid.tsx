"use client";

import Image from "next/image";

const landscapeProducts = [
  {
    img: "/images/igloofest/portrait-kora1.webp",
    title: "ASSIETTE MANGUE PASSION",
    price: "À partir de 22,00 €",
  },
  {
    img: "/images/igloofest/portrait-kora2.webp",
    title: "DESSERT NOIX DE COCO",
    price: "À partir de 19,00 €",
  },
  {
    img: "/images/igloofest/portrait-kora3.webp",
    title: "TARTELETTE FRAMBOISE",
    price: "À partir de 24,00 €",
  },
  {
    img: "/images/igloofest/portrait-kora4.webp",
    title: "CARRÉ CHOCOLAT CARAMEL",
    price: "À partir de 26,00 €",
  },
];

export default function IgloofestLandscapeGrid() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {landscapeProducts.map((product, index) => (
          <div key={index} className="flex flex-col items-start group">
            {/* Image au format paysage */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Nom et prix */}
            <h3 className="mt-4 text-sm font-bold uppercase text-black dark:text-white">
              {product.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
