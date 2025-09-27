"use client";

import * as React from "react";
import CardResultat from "./CardResultat";
import { searchInstagram, NormalizedUser, SearchState } from "@/app/actions/getUser";

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
};

export default function MainResultats() {
  // Liste des usernames que tu veux charger
  const usernames = [
    "theo.leraillez",
    "emmanuelmacron",
    "therock",
    "dualipa",
    "sundarpichai",
    "elonmusk",
  ];

  const [profiles, setProfiles] = React.useState<InstaProfile[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetched = await Promise.all(
          usernames.map(async (username) => {
            try {
              const state: SearchState = await searchInstagram(
                { user: null, error: null }, // ou état initial selon ton implémentation
                new FormData().append("username", username) && new FormData()
              );
              if (!state.user) {
                throw new Error("Utilisateur non trouvé");
              }
              const u = state.user;

              return {
                avatar: u.profilePic || "", // ou une URL alternative s’il y en a
                fullName: u.fullName,
                username: u.username,
                bio: u.bio || "",
                website: u.website || "",
                stats: {
                  posts: u.posts,
                  followers: u.followers,
                  following: u.following,
                },
                linkButton: `https://instagram.com/${encodeURIComponent(u.username)}`,
              } as InstaProfile;
            } catch (e) {
              console.error("Erreur fetch profil", username, e);
              return null;
            }
          })
        );

        const valid = fetched.filter((p): p is InstaProfile => p !== null);
        setProfiles(valid);
      } catch (e: any) {
        setError(e.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Chargement des profils...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <CardResultat key={idx} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
