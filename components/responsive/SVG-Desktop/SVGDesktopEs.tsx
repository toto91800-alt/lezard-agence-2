"use client";

import React from "react";
import Image from "next/image";

const SVGDesktopEs = () => {
  return (
    <div
      style={{
        width: "1069px",
        height: "415px",
        position: "relative", // Required for layout="fill"
      }}
    >
      <Image
        src="/svg/common/SVG-Desktop/SVGdesktop-es.svg"
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

export default SVGDesktopEs;
