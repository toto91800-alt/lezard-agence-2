'use client';

import React from 'react';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: 'Joe Pizzella',
    role: 'Founder | Vision & Experience',
    image: '/avif/joe.avif',
  },
  {
    name: 'Anton Chalk',
    role: 'Co-Founder | Operations',
    image: '/avif/anton.avif',
  },
  {
    name: 'Ross Orr',
    role: 'Co-Founder | Technology',
    image: '/avif/Ross.avif',
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-wrap justify-center gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="
              bg-[var(--card)] 
              rounded-3xl 
              shadow-xl 
              max-w-sm w-full 
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
                sizes="(max-width: 768px) 100vw, 400px"
                priority={index === 0}
              />
            </div>

            {/* TEXT */}
            <div className="p-6 text-center">
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
    </section>
  );
};

export default AboutUs;
