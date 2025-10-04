interface ArticlePageProps {
    params: { category: string; slug: string };
  }
  
  export default function ArticlePage({ params }: ArticlePageProps) {
    return (
      <div>
        <h1>Catégorie : {params.category}</h1>
        <p>Article : {params.slug}</p>
      </div>
    );
  }
  