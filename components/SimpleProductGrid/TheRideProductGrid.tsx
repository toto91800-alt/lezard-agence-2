"use client";

import Image from "next/image";

const products = [
  {
    img: "/images/ride/ride1.webp",
    title: "FLEUR CHOCOLAT VANILLE",
    price: "À partir de 18,00 €",
  },
  {
    img: "/images/ride/ride2.webp",
    title: "GOUSSE DE VANILLE",
    price: "À partir de 18,00 €",
  },
  {
    img: "/images/ride/ride3.webp",
    title: "FLEUR PAVLOVA FRAISE",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride4.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride5.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride6.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride7.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride8.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride9.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride10.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride11.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride12.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride13.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride14.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride15.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride16.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride17.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride18.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
  {
    img: "/images/ride/ride19.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },
   {
    img: "/images/ride/ride21.webp",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
  },


];

export default function TheRideProductGrid() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-start group">
            {/* Image avec bordures arrondies + effet hover */}
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl">
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
