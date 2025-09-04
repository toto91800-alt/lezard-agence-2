"use client";

import React from "react";
import Image from "next/image";

const SVGMobileFr = () => {
  return (
    <div
      style={{
        width: "390px",
        height: "415px",
        position: "relative", // Required for Image fill
      }}
    >
      <Image
        src="/svg/common/SVG-Mobile/SVGmobile-fr.svg"
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

export default SVGMobileFr;
