interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Catégorie : {category}</h1>
      <p className="text-gray-700 text-lg">Article : {slug}</p>
    </div>
  );
}
