interface CategoryPageProps {
    params: { category: string };
  }
  
  export default function CategoryPage({ params }: CategoryPageProps) {
    return <div>Catégorie : {params.category}</div>;
  }
  