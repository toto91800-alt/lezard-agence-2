"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { storyResultatsDatasets } from "@/components/resultats/charts/data/story-resultats-data";

export default function StoryResultats({
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
  const data = storyResultatsDatasets[dataset];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 lg:gap-12"
        >
          {/* Image ronde */}
          <div className="flex-shrink-0">
            <Image
              src={data.image}
              alt={data.title}
              width={160}
              height={160}
              className="rounded-full object-cover w-40 h-40 mx-auto lg:mx-0 border-4 border-white shadow-md"
            />
          </div>

          {/* Texte */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {data.title}
            </h2>
            <p className="mt-2 text-lg text-gray-600">{t(data.translationKey)}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
