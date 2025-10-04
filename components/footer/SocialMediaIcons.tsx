"use client";

import Image from "next/image"; // Import next/image

const SocialMediaIcons = () => {
  const socialIcons = [
    {
      src: "/svg/social/insta.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/lezard_agency/",
    },
    {
      src: "/svg/social/linkedin.svg",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/company/l%C3%A9zard-agence/",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8">
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#1a1a1a] rounded-lg transition-transform transform hover:scale-110"
          style={{
            width: "clamp(2.5rem, 5vw, 3rem)", // Taille responsive
            height: "clamp(2.5rem, 5vw, 3rem)",
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={24} // Define base width
            height={24} // Define base height
            className="object-contain"
            style={{
              width: "clamp(1.25rem, 2.5vw, 1.5rem)", // Icône responsive
              height: "clamp(1.25rem, 2.5vw, 1.5rem)",
            }}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
