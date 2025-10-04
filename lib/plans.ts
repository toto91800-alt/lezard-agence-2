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
  EUR: { monthly: { decouverte: 39.99, Professionnel: 199.99 }, threeMonths: { decouverte: 39.99, Professionnel: 179.99 }, sixMonths: { decouverte: 39.99, Professionnel: 159.99 } },
  USD: { monthly: { decouverte: 49.99, Professionnel: 229.99 }, threeMonths: { decouverte: 49.99, Professionnel: 209.99 }, sixMonths: { decouverte: 49.99, Professionnel: 179.99 } },
  CAD: { monthly: { decouverte: 69.99, Professionnel: 299.99 }, threeMonths: { decouverte: 69.99, Professionnel: 279.99 }, sixMonths: { decouverte: 69.99, Professionnel: 249.99 } },
  CHF: { monthly: { decouverte: 39.99, Professionnel: 199.99 }, threeMonths: { decouverte: 39.99, Professionnel: 169.99 }, sixMonths: { decouverte: 39.99, Professionnel: 149.99 } },
  AUD: { monthly: { decouverte: 69.99, Professionnel: 339.99 }, threeMonths: { decouverte: 69.99, Professionnel: 319.99 }, sixMonths: { decouverte: 69.99, Professionnel: 289.99 } },
  GBP: { monthly: { decouverte: 39.99, Professionnel: 169.99 }, threeMonths: { decouverte: 39.99, Professionnel: 149.99 }, sixMonths: { decouverte: 39.99, Professionnel: 139.99 } },
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

/** Fonction de traduction typée */
export type TranslateFn = (key: string, options?: Record<string, unknown>) => string;

export const getPlans = (t: TranslateFn): PLAN[] => [
  // DEMO
  {
    id: "demo",
    title: t("tarif.card.demo.title"),
    desc: t("tarif.card.demo.desc"),
    monthlyPrice: 0,
    threeMonths: 0,
    sixMonths: 0,
    buttonText: t("tarif.card.demo.button"),
    features: [
      t("tarif.card.demo.features.0"),
      t("tarif.card.demo.features.1"),
      t("tarif.card.demo.features.2"),
      t("tarif.card.demo.features.3"),
    ],
    link: "https://demo.lezard-agency.com/lezard-agence/trial",
  },

  // DISCOVERY
  {
    id: "free",
    title: t("tarif.card.free.title"),
    desc: t("tarif.card.free.desc"),
    monthlyPrice: 79.99,
    threeMonths: 79.99,
    sixMonths: 79.99,
    buttonText: t("tarif.card.free.button"),
    features: [
      t("tarif.card.free.features.0"),
      t("tarif.card.free.features.1"),
      t("tarif.card.free.features.2"),
      t("tarif.card.free.features.3"),
      t("tarif.card.free.features.4"),
    ],
    extraFeatures: [
      t("tarif.card.free.extra.0"),
      t("tarif.card.free.extra.1"),
      t("tarif.card.free.extra.2"),
    ],
    soustitle: t("tarif.card.free.soustitle"),
    link: "https://app.lezard-agency.com/registerv2",
  },

  // PROFESSIONAL
  {
    id: "pro",
    title: t("tarif.card.pro.title"),
    desc: t("tarif.card.pro.desc"),
    monthlyPrice: 199.99,
    threeMonths: 179.99,
    sixMonths: 159.99,
    badge: t("tarif.card.pro.badge"),
    buttonText: t("tarif.card.pro.button"),
    features: [
      t("tarif.card.pro.features.0"),
      t("tarif.card.pro.features.1"),
      t("tarif.card.pro.features.2"),
      t("tarif.card.pro.features.3"),
      t("tarif.card.pro.features.4"),
      t("tarif.card.pro.features.5"),
      t("tarif.card.pro.features.6"),
      t("tarif.card.pro.features.7"),
    ],
    soustitle: t("tarif.card.pro.soustitle"),
    link: "https://app.lezard-agency.com/registerv2",
  },
];

// ✅ Export direct
export const PLANS = getPlans;
