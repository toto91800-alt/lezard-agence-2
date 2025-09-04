"use client";

import React from "react";
import Image from "next/image";

const SVGMobileDe = () => {
  return (
    <div
      style={{
        width: "390px",
        height: "415px",
        position: "relative", // Required for Image layout="fill"
      }}
    >
      <Image
        src="/svg/common/SVG-Mobile/SVGmobile-de.svg"
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

export default SVGMobileDe;
