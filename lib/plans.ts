"use client";

type Currency = "EUR" | "USD" | "CAD" | "CHF" | "AUD" | "GBP";

// 🔹 PRIX FIXES POUR CHAQUE DEVISE ET ENGAGEMENT
export const fixedPrices: Record<
  Currency,
  {
    monthly: { decouverte: number; Professionnel: number };
    threeMonths: { decouverte: number; Professionnel: number };
    sixMonths: { decouverte: number; Professionnel: number };
  }
> = {
  EUR: { monthly: { decouverte: 39.0, Professionnel: 199.99 }, threeMonths: { decouverte: 39.0, Professionnel: 179.99 }, sixMonths: { decouverte: 39.0, Professionnel: 159.99 } },
  USD: { monthly: { decouverte: 45.0, Professionnel: 229.99 }, threeMonths: { decouverte: 45.0, Professionnel: 209.99 }, sixMonths: { decouverte: 45.0, Professionnel: 179.99 } },
  CAD: { monthly: { decouverte: 63.0, Professionnel: 299.99 }, threeMonths: { decouverte: 63.0, Professionnel: 279.99 }, sixMonths: { decouverte: 63.0, Professionnel: 249.99 } },
  CHF: { monthly: { decouverte: 36.0, Professionnel: 199.99 }, threeMonths: { decouverte: 36.0, Professionnel: 169.99 }, sixMonths: { decouverte: 36.0, Professionnel: 149.99 } },
  AUD: { monthly: { decouverte: 69.0, Professionnel: 339.99 }, threeMonths: { decouverte: 69.0, Professionnel: 319.99 }, sixMonths: { decouverte: 69.0, Professionnel: 289.99 } },
  GBP: { monthly: { decouverte: 33.0, Professionnel: 169.99 }, threeMonths: { decouverte: 33.0, Professionnel: 149.99 }, sixMonths: { decouverte: 33.0, Professionnel: 139.99 } },
};

type PLAN = {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number | null;
  threeMonths: number | null;
  sixMonths?: number | null;
  badge?: string;
  buttonText: string;
  features: string[];
  extraFeatures?: string[];
  link: string;
  soustitle?: string;
};

/** Fonction de traduction typée (évite `any`) */
export type TranslateFn = (key: string, options?: Record<string, unknown>) => string;

export const getPlans = (t: TranslateFn): PLAN[] => [
  // DEMO
  {
    id: "demo",
    title: t("Demo"),
    desc: t("Prévisualiser le logiciel"),
    monthlyPrice: 0,
    threeMonths: 0,
    sixMonths: 0,
    buttonText: t("Découvrir"),
    features: [
      t("Découvrez l’interface"),
      t("Aperçu des principales actions"),
      t("Visualisez comment ça fonctionne"),
      t("Imaginez vos futurs résultats"),
    ],
    link: "https://calendly.com/lezard-agence/mmm?month=2025-02",
  },

  // DISCOVERY
  {
    id: "free",
    title: t("Découverte"),
    desc: t(" ~ 100 - 300 followers / 2 semaines"),
    monthlyPrice: 79.99,
    threeMonths: 79.99,
    sixMonths: 79.99,
    buttonText: t("Commencer maintenant →"),
    features: [
      t("10.000 interactions/mois."),
      t("Ciblage des followers avancé par IA"),
      t("Croissance 100% automatique"),
      t("Message automatique de prospection"),
      t("Tableau de bord de croissance"),
    ],
    extraFeatures: [
      "Conseiller dédié 7/7 sur WhatsApp",      // ✅ pour le rond vert
      "Développement de l’image de marque",
      "Stratégies virales pour votre Instagram",
      "Appel d’optimisation mensuel",
    ],
    soustitle: t("2 semaines sans engagement puis plan professionnel au mois"),
    link: "https://app.lezard-agency.com/registerv2",
  },

  // PROFESSIONAL
  {
    id: "pro",
    title: t("Professionnel"),
    desc: t("~ 300 - 600 followers / mois"),      // ✅ “mois”
    monthlyPrice: 199.99,
    threeMonths: 179.99,
    sixMonths: 159.99,
    badge: t("components.Pricing.Plans.pro.badge"),
    buttonText: t("Essai gratuit de 5 jours →"),
    features: [
      t("15.000 interactions/mois."),
      t("Ciblage des followers avancé par IA"),
      t("Croissance 100% automatique"),
      t("Message automatique de prospection"),
      t("Tableau de bord de croissance"),
      "Conseiller dédié 7/7 sur WhatsApp",       // ✅ idem ici
      t("Développement de l’image de marque"),
      t("Stratégies virales pour votre Instagram"),
      t("Appel d’optimisation mensuel"),
    ],
    soustitle: t("Avec engagement"),
    link: "https://app.lezard-agency.com/registerv2",
  },
];

// ✅ Permet l'import direct de `PLANS`
export const PLANS = getPlans;
