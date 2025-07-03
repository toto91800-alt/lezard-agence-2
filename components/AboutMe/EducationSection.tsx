"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type EducationItem = {
  img: string;
  school: string;
  degree: string;
  date: string;
  description: string;
};

const educations: EducationItem[] = [
  {
    img: "/images/education/uni1.png",
    school: "Université de Montréal",
    degree: "Bachelor in Communication & Digital Media",
    date: "2019 - 2022",
    description:
      "Studied media theory, content production, and digital strategy. Participated in several creative projects and collaborated with real clients as part of applied workshops.",
  },
  {
    img: "/images/education/college1.png",
    school: "Collège André-Grasset",
    degree: "DEC in Arts, Literature & Communication",
    date: "2017 - 2019",
    description:
      "Focused on audiovisual communication and graphic design fundamentals. Developed strong storytelling and visual composition skills.",
  },
];

export default function EducationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">Education</h2>
      <div className="flex flex-col gap-8">
        {educations.map((edu, index) => (
          <div key={index} className="border-b pb-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-white">{edu.school}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.degree}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{edu.date}</span>
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
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
