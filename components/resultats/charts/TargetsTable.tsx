"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { tableDatasets, UserTarget } from "./data/table-data";

export default function TargetsTable({
  dataset,
}: {
  dataset:
    | "resultats-1"
    | "resultats-2"
    | "resultats-3"
    | "resultats-4"
    | "resultats-5"
    | "resultats-6";
}) {
  const { t } = useTranslation();
  const data: UserTarget[] = tableDatasets[dataset];
  const maxScore = Math.max(...data.map((d) => d.score));

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Titre */}
      <div className="px-4 py-3 border-b border-gray-200 text-left">
        <h2 className="text-lg font-semibold text-gray-800">
          {t("resultats.targets.title", "Les meilleures cibles")}
        </h2>
        <p className="text-sm text-gray-500">
          {t(
            "resultats.targets.subtitle",
            "Classement des 10 comptes les plus pertinents"
          )}
        </p>
      </div>

      {/* Table pour desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="px-4 py-3">
                {t("resultats.targets.header.position", "Position")}
              </th>
              <th className="px-4 py-3">
                {t("resultats.targets.header.target", "Cible")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("resultats.targets.header.likes", "Likes")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("resultats.targets.header.follows", "Follows")}
              </th>
              <th className="px-4 py-3 text-right">
                {t("resultats.targets.header.score", "Score")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              const usernameClean = user.username.replace("@", "");
              const avatarUrl = `https://app.lezard-agency.com/api/ig/pdp/${usernameClean}`;

              return (
                <tr
                  key={user.position}
                  className={`
                    ${user.position === 1 ? "bg-orange-50" : ""}
                    ${user.position === 2 ? "bg-gray-50" : ""}
                    ${user.position === 3 ? "bg-orange-100" : ""}
                    hover:bg-gray-50 transition
                    border-b last:border-0 border-gray-200
                  `}
                >
                  {/* Position */}
                  <td className="px-4 py-3 font-medium">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold
                        ${
                          user.position === 1
                            ? "bg-orange-500 text-white"
                            : user.position === 2
                            ? "bg-gray-400 text-white"
                            : user.position === 3
                            ? "bg-orange-300 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      #{user.position}
                    </span>
                  </td>

                  {/* Cible avec avatar + username */}
                  <td className="px-4 py-3">
                    <a
                      href={`https://instagram.com/${usernameClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      {/* Avatar rond */}
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                        <Image
                          src={avatarUrl}
                          alt={user.username}
                          fill
                          className="object-cover"
                          loading="lazy"     // ✅ chargement différé
                          priority={false}   // ✅ pas de préchargement
                        />
                      </div>
                      <span>{user.username}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>

                  {/* Likes */}
                  <td className="px-4 py-3 text-center">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm">
                      {user.likes}
                    </span>
                  </td>

                  {/* Follows */}
                  <td className="px-4 py-3 text-center">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 font-semibold text-sm">
                      {user.follows}
                    </span>
                  </td>

                  {/* Score */}
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700">
                        {user.score}
                      </span>
                      <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden max-w-[160px]">
                        <div
                          className="h-full bg-gradient-to-r from-orange-400 to-pink-500"
                          style={{
                            width: `${(user.score / maxScore) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Version mobile */}
      <div className="sm:hidden divide-y divide-gray-200">
        {data.map((user) => {
          const usernameClean = user.username.replace("@", "");
          const avatarUrl = `https://app.lezard-agency.com/api/ig/pdp/${usernameClean}`;

          return (
            <div key={user.position} className="flex flex-col gap-2 px-4 py-3 text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {/* Avatar */}
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={avatarUrl}
                      alt={user.username}
                      fill
                      className="object-cover"
                      loading="lazy"     // ✅ lazy load
                      priority={false}   // ✅ désactive le préchargement
                    />
                  </div>
                  <span className="font-semibold text-gray-700">
                    #{user.position} {user.username}
                  </span>
                </div>
                <span className="font-bold">{user.score}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>
                  {t("resultats.targets.label.likes", "Likes")}: {user.likes}
                </span>
                <span>
                  {t("resultats.targets.label.follows", "Follows")}: {user.follows}
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-pink-500"
                  style={{ width: `${(user.score / maxScore) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
