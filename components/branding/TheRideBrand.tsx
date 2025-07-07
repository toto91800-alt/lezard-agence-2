"use client";

import Image from "next/image";

const products = [
  {
    img: "/images/branding/theride/1.1.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/1.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/2.jpg",
 title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/2.1.jpg",
   title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/3.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/4.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/5.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/6.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/7.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/8.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/9.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/10.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/12.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/13.jpg",
  title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/14.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/15.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/16.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/17.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/18.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/19.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/20.jpg",
    title: "THE RIDE COLLECTIVE",
  },
   {
    img: "/images/branding/theride/21.jpg",
    title: "THE RIDE COLLECTIVE",
  },
  {
    img: "/images/branding/theride/22.jpg",
    title: "THE RIDE COLLECTIVE",
  },
    {
    img: "/images/branding/theride/23.jpg",
    title: "THE RIDE COLLECTIVE",
  },
    {
    img: "/images/branding/theride/24.jpg",
    title: "THE RIDE COLLECTIVE",
  },
    {
    img: "/images/branding/theride/25.jpg",
    title: "THE RIDE COLLECTIVE",
  },
];

export default function TheRideBrand() {
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
