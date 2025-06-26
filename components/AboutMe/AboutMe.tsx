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
    img: "/images/lezard.png",
    title: "Lezard Agency",
    role: "UX Engineer",
    date: "October 2024 - December 2024",
    description:
      "Designed and developed a dashboard using React, HTML, and CSS, with a strong focus on UX and intuitive interface design. Took full responsibility for the visual identity, including logo creation and branding. Additionally contributed to the back-end to ensure seamless technical integration. This dashboard helps users gain real and qualified followers on Instagram, boosting their digital growth.",
  },
  {
    img: "/images/ride-logo.png",
    title: "The Ride Collective",
    role: "Web & Brand Designer",
    date: "January 2023 - January 2024",
    description:
      "Built and launched the brand's e-commerce website on Shopify using HTML, CSS, and Liquid, while designing the entire brand identity. Handled the creation and sale of clothing, from product design to online integration. Managed social media presence through content creation (photos, videos, and production) and editing with Adobe Suite, ensuring impactful storytelling and audience engagement.",
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
