"use client";

import * as React from "react";


type StatBlockProps = {
  content?: React.ReactNode;
};

const stats: StatBlockProps[] = [
  {
    content: <div className="text-gray-500">Placeholder contenu</div>,
  },
  {
    content: <div className="text-gray-500">Placeholder contenu</div>,
  },
  {
    content: <div className="text-gray-500">Placeholder contenu</div>,
  },
  {
    content: <div className="text-gray-500">Statistiques du trafic</div>,
  },
];

export default function StatsBlockResultats1() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white shadow-md p-6 flex flex-col gap-4"
            >
              <div className="w-full">{stat.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
