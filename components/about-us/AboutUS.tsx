'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type TeamMember = { name: string; roleKey: string; image: string };

const team: TeamMember[] = [
  { name: 'Gabriel Frojal', roleKey: 'gabriel', image: '/images/about-us/gabriel.webp' },
  { name: 'Romain Lambert', roleKey: 'romain', image: '/images/about-us/romain.webp' },
  { name: 'Hugo Lisoir', roleKey: 'hugo', image: '/images/about-us/hugo.webp' },
  { name: 'Mathis Giraud', roleKey: 'mathis', image: '/images/about-us/mathis.webp' },
  { name: 'Théo Leraillez', roleKey: 'theo', image: '/images/about-us/TheoLeraillez.webp' },
  { name: 'Lucien Maynard', roleKey: 'lucien', image: '/images/about-us/lucien-maynard.webp' },
];

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="px-4 pb-16 -mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="
                bg-[var(--AboutBackground)]
                rounded-3xl
                shadow-xl
                w-full
                overflow-hidden
                transform transition-transform duration-300
                hover:-translate-y-1
                flex flex-col
              "
            >
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

              <div className="px-6 py-4 text-center">
                <h3 className="text-xl font-semibold text-[var(--AboutTitle)]">
                  {member.name}
                </h3>
                <p className="text-base mt-2 text-[var(--AboutText)]">
                  {t(`aboutus.teamlarge.roles.${member.roleKey}`)}
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
