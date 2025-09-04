"use client";

import React from "react";
import Image from "next/image";

const SVGMobileEn = () => {
  return (
    <div
      style={{
        width: "390px",
        height: "415px",
        position: "relative", // Required for Image fill layout
      }}
    >
      <Image
        src="/svg/common/SVG-Mobile/SVGmobile-en.svg"
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

export default SVGMobileEn;
