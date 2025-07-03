"use client";

import Image from "next/image";

const cardData = [
  {
    img: "/images/branding/theride.png",
    title: "The Ride Collective",
    text: "Designer le sport extreme.",
    link: "/projects/the-ride-collective",
  }, 
  {
    img: "/images/branding/1.png",
    title: "Utopia Events",
    text: "Designer la nuit montrealaise et sa ferveur.",
    link: "/projects/igloofest",
  },
];

export default function AlternatingPairCards() {
  const pairs = [];
  for (let i = 0; i < cardData.length; i += 2) {
    pairs.push(cardData.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col gap-12 px-4 ">
      {pairs.map((pair, index) => (
        <div key={index} className="flex gap-8 justify-center flex-wrap">
          {pair.map((card, subIndex) => (
            <a
              key={subIndex}
              href={card.link}
              className="group relative rounded-xl overflow-hidden bg-neutral-900 text-white w-[500px] h-[300px] flex transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="absolute top-4 left-4 z-10 max-w-[85%]">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-base mt-1 text-white/70">{card.text}</p>
              </div>
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
