interface CategoryPageProps {
    params: Promise<{ category: string }>;
  }
  
  export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params;
  
    return <div>Catégorie : {category}</div>;
  }
  