"use client";

import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <img
        src="/images/banner.webp" // Remplacez par l'URL de votre image
        alt="Bannière"
        className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] object-cover"
      />
    </div>
  );
};

export default Banner;
