"use client";

import Image from "next/image";
import { Cake } from "lucide-react"; // ✅ icône gâteau

const products = [
  {
    img: "/images/cedric.jpg",
    title: "FLEUR CHOCOLAT VANILLE",
    price: "À partir de 18,00 €",
    description: "Un gâteau délicat aux notes de vanille et de chocolat, monté avec précision.",
  },
  {
    img: "/images/cedric.jpg",
    title: "GOUSSE DE VANILLE",
    price: "À partir de 18,00 €",
    description: "Des gousses entières infusées dans une crème légère à la vanille.",
  },
  {
    img: "/images/cedric.jpg",
    title: "FLEUR PAVLOVA FRAISE",
    price: "À partir de 45,00 €",
    description: "Meringue croquante et crème fouettée, nappée de fraises fraîches.",
  },
  {
    img: "/images/cedric.jpg",
    title: "FLEUR VANILLE CHOCOLAT",
    price: "À partir de 45,00 €",
    description: "Alliance parfaite entre ganache chocolat noir et mousse vanillée.",
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-start group">
            <div className="relative w-full aspect-[2/3] overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4 text-white">
                <h3 className="text-lg font-bold uppercase">{product.title}</h3>
                <p className="text-sm mt-2">{product.description}</p>

                {/* 🧁 Rounded Icon Button */}
                <button className="mt-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-neutral-200 transition">
                  <Cake className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Infos visibles */}
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
