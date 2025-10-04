"use client";

import React from "react";
import Image from "next/image";

const SVGDesktopEn = () => {
  return (
    <div
      style={{
        width: "1069px",
        height: "415px",
        position: "relative", // Required for Image fill layout
      }}
    >
      <Image
        src="/svg/common/SVG-Desktop/SVGdesktop-en.svg"
        alt="Background SVG"
        fill
        style={{
          objectFit: "cover",
          display: "block",
        }}
        priority
      />
    </div>
  );
};

export default SVGDesktopEn;
