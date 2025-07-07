"use client";

import Image from "next/image";

const products = [
  {
    img: "/images/branding/utopia/1.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/2.jpg",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/3.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/4.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/5.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/6.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/7.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/8.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/9.png",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/10.jpg",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/11.jpg",
    title: "UTOPIA DESIGN",
  },
  {
    img: "/images/branding/utopia/12.jpg",
    title: "UTOPIA DESIGN",
  },

];

export default function UtopiaBrand() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-start group">
            {/* Image carré avec effet hover */}
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Nom du produit */}
            <h3 className="mt-4 text-sm font-bold uppercase text-black dark:text-white">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
