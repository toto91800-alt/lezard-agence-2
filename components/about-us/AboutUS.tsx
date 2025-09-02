'use client';

import React from 'react';
import Image from 'next/image';

type TeamMember = { name: string; role: string; image: string; };

const team: TeamMember[] = [
  { name: 'Gabriel Frojal', role: 'Freelance | Full-Stack Developer', image: '/avif/gabriel.avif' },
  { name: 'Romain Lambert', role: 'Social Media Manager | Vision & Experience', image: '/avif/romain.avif' },
  { name: 'Hugo Lisoir', role: 'Freelance | Full-Stack Developer', image: '/avif/hugo.avif' },
  { name: 'Mathis Giraud', role: 'Founder | Operations', image: '/images/about-us/mathis.png' },
  { name: 'Théo Leraillez', role: 'Coaching & Development | Operations', image: '/images/about-us/TheoLeraillez.webp' },
  { name: 'Lucien Maynard', role: 'Full-Stack Developer | Operations', image: '/images/about-us/lucien-maynard.webp' },
];

const AboutUs: React.FC = () => {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-7xl">
        {/* 3 colonnes qui s'étirent, espaces plus serrés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="
                bg-[var(--card)]
                rounded-3xl
                shadow-xl
                w-full
                overflow-hidden
                transform transition-transform duration-300
                hover:-translate-y-1
                flex flex-col
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-96 overflow-hidden rounded-b-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* TEXT */}
              <div className="px-6 py-4 text-center">
                <h3 className="text-xl font-semibold text-[var(--AboutTitle)]">
                  {member.name}
                </h3>
                <p className="text-base mt-2 text-[var(--AboutText)]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
