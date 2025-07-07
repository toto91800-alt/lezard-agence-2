import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Experience = {
  img: string;
  title: string;
  role: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    img: "/images/work/LezardLogo.jpg",
    title: "Lezard Agency",
    role: "Chef de projet digital & contenu / Montréal",
    date: "Octobre 2024 - Juin 2025",
    description:
      "Gestion de projets de création de contenu (photo, vidéo, réseaux sociaux) pour divers clients. Conseil en stratégie digitale, production audiovisuelle et accompagnement de la vision de marque. Participation active au développement commercial et relation client.",
  },
  {
    img: "/images/work/Ride.svg",
    title: "Photographe & vidéaste",
    role: "freelance",
    date: "Septembre 2021 – Septembre 2024",
    description:
      "Création de contenu photo et vidéo pour des marques locales et internationales en Australie, Asie, Europe et Amérique. Gestion de projets de A à Z : direction artistique, production, montage et livraison. Collaboration avec des entreprises variées, du commerce familial aux grandes enseignes, avec une approche humaine et personnalisée.",
  },
  {
    img: "/images/octopus_securite_logo.webp",
    title: "Octopus Sécurité | Business Developer",
    role: "Alternant",
    date: "Septembre 2020 – Août 2022",
    description:
      "Alternance au sein de l’une des 50 plus grandes entreprises de sécurité en Europe. Prospection B2B, gestion de leads, élaboration d’offres commerciales et suivi client. Participation active à la stratégie de développement commercial, en lien avec les équipes techniques et marketing. Contribution directe à l’expansion du portefeuille client sur plusieurs régions.",
  },
];

export default function AboutMe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b pb-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{exp.date}</span>
                <button onClick={() => toggle(index)}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Accordion Body */}
            {openIndex === index && (
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-4 leading-relaxed">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
