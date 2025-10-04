import HeaderBlog from "@/components/blog/HeaderBlog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ HEADER */}
      <HeaderBlog />

      {/* ✅ CONTENU */}
      <main className="flex-1 mx-auto max-w-3xl px-4 py-8">{children}</main>

      {/* ✅ FOOTER */}
      <footer className="border-t py-6 px-4 bg-gray-50 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
        >
          <ArrowLeft className="w-4 h-4" /> Retour au blog
        </Link>
      </footer>
    </div>
  );
}
