"use client";

import React from "react";
import Image from "next/image";

const SVGDesktopFr = () => {
  return (
    <div
      style={{
        width: "1069px",
        height: "415px",
        position: "relative", // Required for Image with fill
      }}
    >
      <Image
        src="/svg/common/SVG-Desktop/SVGdesktop-fr.svg"
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

export default SVGDesktopFr;
