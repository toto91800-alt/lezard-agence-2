import * as React from "react";
import Image from "next/image";
import { Image as ImageIcon, Users, Instagram } from "lucide-react";
import ButtonShow from "@/components/background/extra/ButtonShow";

type CardResultatProps = {
  avatar: string;
  fullName: string;
  username: string;
  bio?: string;
  website?: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  linkButton: string;
  extraImage?: string; // 👈 image optionnelle entre stats et bouton
};

export default function CardResultat({
  avatar,
  fullName,
  username,
  bio,
  website,
  stats,
  linkButton,
  extraImage,
}: CardResultatProps) {
  const igProfileUrl = `https://instagram.com/${encodeURIComponent(username)}`;

  return (
    <div className="relative w-full max-w-xl p-4 border rounded-2xl shadow-md bg-white flex flex-col">
      {/* Bouton Instagram (en haut à droite) */}
      <a
        href={igProfileUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Voir le profil Instagram de ${username}`}
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
        title="Voir sur Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>

      {/* Header */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="relative h-14 w-14 overflow-hidden rounded-full border bg-white">
          <Image
            src={avatar}
            alt={`${fullName || username} avatar`}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="text-base font-semibold leading-tight">
            {fullName || username}
          </p>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      {/* Bio + Website */}
      <div className="flex-1 mt-3">
        {bio && (
          <p className="whitespace-pre-line text-[15px] leading-snug text-gray-800">
            {bio}
          </p>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-block text-sm text-blue-600 hover:underline"
          >
            {website}
          </a>
        )}
      </div>

      {/* Bloc du bas (stats + image + bouton) */}
      <div className="mt-4">
        {/* Stats */}
        <div className="grid grid-cols-3 divide-x rounded-xl border text-center">
          <Stat
            icon={<ImageIcon className="h-4 w-4 text-gray-500" />}
            num={stats.posts}
            label="Posts"
          />
          <Stat
            icon={<Users className="h-4 w-4 text-gray-500" />}
            num={stats.followers}
            label="Followers"
          />
          <Stat
            icon={<Users className="h-4 w-4 text-gray-500" />}
            num={stats.following}
            label="Followings"
          />
        </div>

        {/* Extra Image si définie */}
        {extraImage && (
          <div className="mt-4 relative w-full aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={extraImage}
              alt={`Extra content for ${username}`}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Bouton */}
        <div className="mt-4">
          <ButtonShow href={linkButton} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/* 🔹 Composant Stat utilisé dans la grille des stats  */
/* -------------------------------------------------- */
function Stat({
  num,
  label,
  icon,
}: {
  num: number;
  label: string;
  icon: React.ReactNode;
}) {
  const formatted = new Intl.NumberFormat("fr-FR").format(num || 0);
  return (
    <div className="p-3">
      <div className="mx-auto flex items-center justify-center gap-2">
        <span>{icon}</span>
        <span className="text-lg font-semibold">{formatted}</span>
      </div>
      <div className="mt-1 text-xs text-gray-500">{label}</div>
    </div>
  );
}
