"use client";

import React from "react";
import Image from "next/image";

const SVGTabletDe = () => {
  return (
    <div
      style={{
        width: "768px",
        height: "825px",
        position: "relative", // Required for layout="fill"
      }}
    >
      <Image
        src="/svg/common/SVG-Tablet/SVGtablet-de.svg"
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

export default SVGTabletDe;
