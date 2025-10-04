"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Percent, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  heroBlockDatasets,
  BlockProps,
} from "@/components/resultats/charts/data/hero-block-data";

const icons = [
  <Users className="w-5 h-5" key="users" />,
  <Heart className="w-5 h-5" key="heart" />,
  <Percent className="w-5 h-5" key="percent" />,
  <Globe className="w-5 h-5" key="globe" />,
];

export default function HeroBlockResultats({
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
  const labels: string[] = t("resultats.blocks", { returnObjects: true }) as string[];


  const data: BlockProps[] | undefined = heroBlockDatasets[dataset];

  if (!data) {
    return (
      <section className="w-full py-6">
        <div className="container mx-auto px-4 text-center text-red-500">
          Aucun dataset trouvé pour <b>{dataset}</b>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {data.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
              }}
              className="rounded-2xl bg-white shadow-md p-6 flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-4xl font-bold text-black">
                {block.value}
              </span>

              <div className="mt-2 flex items-center gap-2 text-base sm:text-lg text-orange-500 font-medium">
                {icons[idx]}
                <span>{labels[idx]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
