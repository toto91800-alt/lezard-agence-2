// components/Seo.tsx
import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  url?: string; // Optionnel : pour les liens canoniques
  type?: "article" | "website"; // OG type
  publishedTime?: string; // Pour les articles
  modifiedTime?: string; // Pour les articles
};

export default function Seo({
  title,
  description,
  image,
  url = "https://www.lezard-agency.com/", 
  type = "article",
  publishedTime,
  modifiedTime,
}: SeoProps) {
  const defaultImage = "/images/blog/insta1.jpg";
  const fullTitle = title;

  return (
    <Head>
      {/* Balises classiques */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Propulse Blog" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
}
