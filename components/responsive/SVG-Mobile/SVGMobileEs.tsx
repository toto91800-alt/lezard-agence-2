"use client";

import React from "react";
import Image from "next/image";

const SVGMobileEs = () => {
  return (
    <div
      style={{
        width: "390px",
        height: "415px",
        position: "relative", // Required for layout="fill"
      }}
    >
      <Image
        src="/svg/common/SVG-Mobile/SVGmobile-es.svg"
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

export default SVGMobileEs;
