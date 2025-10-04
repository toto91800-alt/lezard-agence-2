"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import CardResultat from "./CardResultat";
import { searchInstagram, SearchState } from "@/lib/getUser";

type InstaProfile = {
  avatar: string;
  fullName: string;
  username: string;
  bio: string;
  website?: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  linkButton: string;
  extraImage?: string;
};

export default function MainResultats() {
  const { t } = useTranslation();
  const usernames = [
    "meryyrodriguezz",
    "tealer",
    "becaybrand",
    "theride.collective",
    "clemencebertrand",
    "shopnatscafe",
  ];

  const imageUrls = [
    "/images/carousel/rodrigues.webp",
    "/images/carousel/tealer.webp",
    "/images/carousel/becay.jpg",
    "/images/carousel/theride.webp",
    "/images/carousel/clemence.webp",
    "/images/carousel/shopnatscafe.webp",
  ];

  const linkUrls = [
    "/test/resultats-1/",
    "/test/resultats-2/",
    "/test/resultats-3/",
    "/test/resultats-4/",
    "/test/resultats-5/",
    "/test/resultats-6/",
  ];

  const [profiles, setProfiles] = React.useState<InstaProfile[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const cached = localStorage.getItem("instagramProfiles");
        if (cached) {
          setProfiles(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const fetched = await Promise.all(
          usernames.map(async (username, idx) => {
            try {
              const formData = new FormData();
              formData.append("username", username);
              const state: SearchState = await searchInstagram(
                { user: null, error: null },
                formData
              );

              if (!state.user) throw new Error("Utilisateur non trouvé");

              const u = state.user;

              return {
                avatar: u.profilePic || "",
                fullName: u.fullName,
                username: u.username,
                bio: u.bio || "",
                website: u.website || "",
                stats: {
                  posts: u.posts,
                  followers: u.followers,
                  following: u.following,
                },
                linkButton: linkUrls[idx],
                extraImage: imageUrls[idx],
              } as InstaProfile;
            } catch (err) {
              console.error(`Erreur sur ${username}:`, err);
              return null;
            }
          })
        );

        const valid = fetched.filter((p): p is InstaProfile => p !== null);
        localStorage.setItem("instagramProfiles", JSON.stringify(valid));
        setProfiles(valid);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        Erreur : {error}
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          {t("resultats.litletitle")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <CardResultat key={idx} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
