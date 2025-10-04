import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Management & Engagement | Blog Lézard Agency",
  description: "Articles sur le community management et l'engagement.",
};

export default function CommunityManagementEngagementPage() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Community Management & Engagement Instagram</h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-center">Parcourez nos sujets</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/blog/community-management-engagement/techniques-de-community-management" className="p-4 rounded-lg border hover:bg-muted transition">
            Techniques de community management
          </a>
          <a href="/blog/community-management-engagement/utilisation-des-stories" className="p-4 rounded-lg border hover:bg-muted transition">
            Utilisation des stories
          </a>
          <a href="/blog/community-management-engagement/moments-d-interaction" className="p-4 rounded-lg border hover:bg-muted transition">
            Moments d’interaction
          </a>
          <a href="/blog/community-management-engagement/collaborations-et-partenariats" className="p-4 rounded-lg border hover:bg-muted transition">
            Collaborations et partenariats
          </a>
        </div>
      </div>
    </section>
  );
}


