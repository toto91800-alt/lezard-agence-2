"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Check } from "@/components/ui/Check";
import { X } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import { Button } from "../ui/button";
import { SectionBadge } from "@/components/ui/section-bade";
import { fixedPrices, getPlans } from "@/lib/plans"; // ⬅️ on tire les plans du TS
import { useState, useEffect, useMemo } from "react";
import CurrencySelector from "@/components/prix/CurrencySelector";
import { PlayCircle, Sparkles, Rocket, Medal } from "lucide-react";

type Currency = "EUR" | "USD" | "CAD" | "CHF" | "AUD" | "GBP";
type PlanType = "monthly" | "threeMonths" | "sixMonths";

const currencySymbols: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
  CAD: "CAD",
  CHF: "CHF",
  AUD: "AUD",
  GBP: "£",
};

const New_Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("monthly");
  const [timeLeft, setTimeLeft] = useState(0);

  // ⬇️ on récupère les plans depuis lib/plans.ts
  // Si tu as un système i18n, remplace l’identity function par ton "t"
  const plans = useMemo(() => getPlans((k) => k), []);

  // Timer (inchangé)
  useEffect(() => {
    const initializeTimer = () => {
      const savedStartTime = localStorage.getItem("timer_start_time");
      const timerDuration = 6 * 60 * 60 * 1000; // 6h

      let startTime: number;
      if (savedStartTime) {
        startTime = parseInt(savedStartTime);
      } else {
        startTime = Date.now();
        localStorage.setItem("timer_start_time", startTime.toString());
      }

      const calculateTimeLeft = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const cyclePosition = elapsed % timerDuration;
        const remaining = timerDuration - cyclePosition;
        return Math.ceil(remaining / 1000);
      };

      setTimeLeft(calculateTimeLeft());
    };

    initializeTimer();

    const interval = setInterval(() => {
      const savedStartTime = localStorage.getItem("timer_start_time");
      if (savedStartTime) {
        const startTime = parseInt(savedStartTime);
        const timerDuration = 6 * 60 * 60 * 1000;
        const now = Date.now();
        const elapsed = now - startTime;
        const cyclePosition = elapsed % timerDuration;
        const remaining = timerDuration - cyclePosition;
        const timeLeftSeconds = Math.ceil(remaining / 1000);

        setTimeLeft(timeLeftSeconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <SectionBadge title="Tarifs" />
        </div>
      </Container>

      <div className="mt-8 w-full relative flex flex-col items-center justify-center">
        <Container>
          <Tabs
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as PlanType)}
            className="w-full flex flex-col items-center justify-center"
          >
            <TabsList className="relative bg-black dark:bg-white rounded-full p-2 min-h-[50px]">
              <TabsTrigger
                value="monthly"
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all",
                  "text-white dark:text-black",
                  "data-[state=active]:bg-white data-[state=active]:text-black",
                  "dark:data-[state=active]:bg-gray-300 dark:data-[state=active]:text-gray-900",
                  "data-[state=inactive]:bg-transparent"
                )}
              >
                Mensuel
              </TabsTrigger>

              <div className="relative">
                <TabsTrigger
                  value="threeMonths"
                  className={cn(
                    "px-6 py-2 rounded-full font-medium transition-all",
                    "text-white dark:text-black",
                    "data-[state=active]:bg-white data-[state=active]:text-black",
                    "dark:data-[state=active]:bg-gray-300 dark:data-[state=active]:text-gray-900",
                    "data-[state=inactive]:bg-transparent"
                  )}
                >
                  3 mois
                </TabsTrigger>
                <span className="absolute -top-4 -right-2 bg-orange-500 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow-md whitespace-nowrap">
                  Promo 3 mois
                </span>
              </div>

              <div className="relative">
                <TabsTrigger
                  value="sixMonths"
                  className={cn(
                    "px-6 py-2 rounded-full font-medium transition-all",
                    "text-white dark:text-black",
                    "data-[state=active]:bg-white data-[state=active]:text-black",
                    "dark:data-[state=active]:bg-gray-300 dark:data-[state=active]:text-gray-900",
                    "data-[state=inactive]:bg-transparent"
                  )}
                >
                  6 mois
                </TabsTrigger>
                <span className="absolute -top-4 -right-5 bg-orange-500 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow-md">
                  Promo 6 mois
                </span>
              </div>
            </TabsList>

            {/* Devises */}
            <CurrencySelector currency={currency} setCurrency={setCurrency} />

            {/* Grilles */}
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:[grid-template-columns:repeat(3,minmax(380px,1fr))] gap-6 w-full mt-14">
                {plans.map((plan, index) => (
                  <PlanCard
                    key={index}
                    index={index}
                    {...plan}
                    plan="monthly" // adapte à threeMonths / sixMonths dans les autres onglets
                    currency={currency}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="threeMonths">
              <div className="grid grid-cols-1 md:[grid-template-columns:repeat(3,minmax(380px,1fr))] gap-6 w-full mt-14">
                {plans.map((plan, index) => (
                  <PlanCard
                    key={index}
                    index={index}
                    {...plan}
                    plan="threeMonths" // adapte à threeMonths / sixMonths dans les autres onglets
                    currency={currency}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sixMonths">
              <div className="grid grid-cols-1 md:[grid-template-columns:repeat(3,minmax(380px,1fr))] gap-6 w-full mt-14">
                {plans.map((plan, index) => (
                  <PlanCard
                    key={index}
                    index={index}
                    {...plan}
                    plan="sixMonths" // adapte à threeMonths / sixMonths dans les autres onglets
                    currency={currency}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </div>
    </div>
  );
};

const PlanCard = ({
  id,
  title,
  desc,
  monthlyPrice,
  threeMonths,
  sixMonths,
  extraFeatures,
  buttonText,
  features,
  link,
  index,
  plan,
  currency,
  soustitle,
}: {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number | null;
  threeMonths: number | null;
  sixMonths?: number | null;
  buttonText: string;
  features: string[];
  extraFeatures?: string[];
  link: string;
  index: number;
  plan: PlanType;
  currency: Currency;
  soustitle?: string;
}) => {
  const planTypeMap: Record<string, "decouverte" | "Professionnel"> = {
    free: "decouverte",
    pro: "Professionnel",
    demo: "decouverte",
    enterprise: "decouverte",
  };

  const getPriceByPlan = () => {
    let basePrice = 0;
    switch (plan) {
      case "monthly":
        basePrice = monthlyPrice ?? 0;
        break;
      case "threeMonths":
        basePrice = threeMonths ?? 0;
        break;
      case "sixMonths":
        basePrice = sixMonths ?? 0;
        break;
      default:
        basePrice = monthlyPrice ?? 0;
    }
    if (
      Object.keys(fixedPrices[currency]).includes(plan) &&
      fixedPrices[currency][plan]
    ) {
      return fixedPrices[currency][plan]?.[planTypeMap[id]] ?? basePrice;
    }
    return basePrice;
  };
  const displayedPrice = getPriceByPlan();
  const isPro = id === "pro";
  const isDemo = id === "demo";
  const TitleIcon: React.ElementType = isDemo
    ? PlayCircle
    : isPro
    ? Rocket
    : Sparkles;
  return (
    <div className="w-full relative flex flex-col saturate-150 rounded-2xl">
      <div
        className={cn(
          "flex flex-col size-full border rounded-2xl relative p-3",
          "bg-[rgb(254,250,246)] dark:bg-[rgba(254,250,246,1)]",
          isPro
            ? "border-[hsl(36,100%,50%)]"
            : isDemo
            ? "border-[#7C5CFF]"
            : "border-gray-300"
        )}
      >
        {/* Badge médaille en haut à droite pour le plan Pro */}
        {isPro && (
          <div className="absolute -top-3 right-6">
            <div className="size-10 rounded-xl border-2 border-orange-500 bg-white/90 shadow-md backdrop-blur-sm flex items-center justify-center">
              <Medal
                className="w-5 h-5 text-orange-500"
                strokeWidth={2.4}
                aria-hidden="true"
              />
              <span className="sr-only">Plan recommandé</span>
            </div>
          </div>
        )}

        {/* Titre */}
        <div className="flex flex-col items-center p-3 w-full mb-4">
          <h2
            className={cn(
              "text-2xl font-bold text-center flex items-center justify-center gap-2",
              isPro
                ? "text-orange-500"
                : isDemo
                ? "text-[#7C5CFF]"
                : "text-orange-500"
            )}
          >
            <TitleIcon
              className="h-6 w-6 md:h-7 md:w-7"
              strokeWidth={2.4}
              aria-hidden="true"
            />
            <span>{title}</span>
          </h2>
        </div>

        {/* Bandeau description (ce qui manquait) */}
        {desc && (
          <div
            className={cn(
              "mx-3 mb-6 rounded-2xl py-3 text-center font-semibold",
              isDemo
                ? "bg-[#edeaff] text-[#6a56ff]"
                : "bg-orange-500/10 text-orange-600"
            )}
          >
            {desc}
          </div>
        )}
        {/* Sous-titre (followers / month) */}
        {soustitle ? (
          <div className="mx-3 -mt-1 mb-2 text-center text-sm md:text-base text-muted-foreground">
            {soustitle}
          </div>
        ) : null}

        {/* Corps */}
        <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left">
          {/* Zone prix / remplaçante pour DEMO */}
          <div className="flex flex-col items-center justify-center w-full mb-4 gap-3">
            {isDemo ? (
              // Démo : pas de prix, on montre la vidéo
              <div className="w-full max-w-md rounded-xl overflow-hidden border border-[#7C5CFF]/40 shadow-sm bg-white/60">
                <div className="relative aspect-video">
                  <video
                    src="https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/OQ101%20Shot%20on/F72_OQ101_%E2%89%A410s_DJI_home_page_Shot_on_Video_CLEAN_2400x1440_N_N.mp4.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    controls
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover bg-black/5"
                  />
                </div>
              </div>
            ) : (
              displayedPrice > 0 && (
                <div className="flex items-center">
                  {/* ← On a retiré le bandeau "0€ /5 jours puis" */}
                  <div className="flex items-center">
                    <span
                      className="text-2xl md:text-3xl font-bold leading-none dark:bg-black px-2 rounded"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {displayedPrice.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    <span className="text-2xl md:text-2xl font-bold leading-none">
                      {currencySymbols[currency]}
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground font-medium leading-none ml-1">
                      {id === "free" ? "/2 semaines" : "/mois"}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Features */}
          <ul className="flex flex-col gap-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex items-center justify-center w-6 h-6 rounded-full",
                    isPro && i >= features.length - 4
                      ? "bg-green-400"
                      : isDemo
                      ? "bg-[#7C5CFF]"
                      : "bg-orange-400"
                  )}
                >
                  <Check aria-hidden="true" className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          {/* Extra features (grisées pour free, sauf conseiller WhatsApp en rond vert) */}
         {/* Extra features (grisées pour free, sauf l’icône WhatsApp en vert) */}
{id === "free" && extraFeatures?.length ? (
  <ul className="mt-3 space-y-2">
    {extraFeatures.map((extra, i) => {
      const isWaAdvisor = /conseiller\s+dédié\s*7\s*\/\s*7\s+sur\s+whatsapp/i.test(extra);
      return (
        <li key={i} className="flex items-center gap-2">
          {isWaAdvisor ? (
            // pastille verte avec check
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-400">
              <Check aria-hidden="true" className="h-4 w-4 text-white" />
              <span className="sr-only">Disponible dans le plan Pro</span>
            </span>
          ) : (
            // pastille grise avec X (indisponible)
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#D6DAE1]">
              <X aria-hidden="true" className="h-4 w-4 text-white" />
            </span>
          )}
          {/* le texte reste grisé dans tous les cas sur Découverte */}
          <span className="text-[15px] leading-6 text-gray-500">{extra}</span>
        </li>
      );
    })}
  </ul>
) : null}

        </div>

        {/* Bouton */}
        <div className="p-3 h-auto flex w-full items-center">
          <Button
            asChild
            variant={isPro || isDemo ? "default" : "secondary"}
            className={cn(
              // texte blanc en permanence + au hover
              "w-full shadow-none bg-black text-white hover:text-white focus-visible:text-white active:text-white",
              // couleur de fond au hover
              "hover:bg-orange-500",
              // style spécial pour la démo
              isDemo && "hover:bg-[#7C5CFF] hover:text-white"
            )}
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default New_Pricing;
