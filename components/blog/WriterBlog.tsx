"use client";

import Image from "next/image";

interface WriterBlogProps {
  image: string; // URL de l'image de l'auteur
  name: string;  // Nom de l'auteur
  date: string;  // Date de publication
}

export default function WriterBlog({ image, name, date }: WriterBlogProps) {
  return (
    <div className="flex items-center gap-4 mt-8 mb-10">
      {/* 🖼️ Photo de l'auteur */}
      <div
        className="relative w-16 h-16 rounded-full overflow-hidden border shadow-sm"
        style={{ borderColor: "var(--blog-border, #e5e5e5)" }}
      >
        <Image
          src={image}
          alt={`Photo de ${name}`}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      {/* 👤 Nom + date */}
      <div className="flex flex-col">
        <p
          className="font-semibold text-lg"
          style={{ color: "var(--blog-title)" }}
        >
          {name}
        </p>
        <p
          className="text-base opacity-80"
          style={{ color: "var(--blog-text)" }}
        >
          {date}
        </p>
      </div>
    </div>
  );
}
