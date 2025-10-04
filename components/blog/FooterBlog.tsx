"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface FooterBlogProps {
  nextArticle?: { title: string; href: string };
}

export default function FooterBlog({ nextArticle }: FooterBlogProps) {
  return (
    <footer className="py-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        {/* 🔙 Bouton retour au blog */}
        <Link href="/blog" className="group">
          <span
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-transparent transition hover:opacity-90"
            style={{
              backgroundColor: "var(--blog-title)",
              color: "var(--blog-card-bg)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </span>
        </Link>

        {/* ⏩ Bouton suivant (optionnel) */}
        {nextArticle ? (
          <Link href={nextArticle.href} className="group">
            <span
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-transparent transition text-right hover:opacity-90"
              style={{
                backgroundColor: "var(--blog-title)",
                color: "var(--blog-card-bg)",
              }}
            >
              {nextArticle.title}
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </footer>
  );
}
