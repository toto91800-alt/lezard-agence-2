// components/resultats/charts/data/banner-resultats-data.ts

export type BannerResultat = {
  title: string; // Ligne 1 (nom)
};

export const bannerResultatsDatasets: Record<
  | "resultats-1"
  | "resultats-2"
  | "resultats-3"
  | "resultats-4"
  | "resultats-5"
  | "resultats-6",
  BannerResultat
> = {
  "resultats-1": {
    title: "Maria Rodri 🤠",
  },
  "resultats-2": {
    title: "Tealerlab",
  },
  "resultats-3": {
    title: "BECAY",
  },
  "resultats-4": {
    title: "The Ride Collective",
  },
  "resultats-5": {
    title: "Clemence Bertrand",
  },
  "resultats-6": {
    title: "Shopnats Cafe",
  },
};
