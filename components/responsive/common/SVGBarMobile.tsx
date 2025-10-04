"use client";

import React from "react";
import { motion } from "framer-motion";

const SVGCBarmobile = () => {
  const pathD = `M501,725v1l-314.5.9v-1l169.4-.5c0-56.5,0-113,.1-169.5,0-20.7,0-41.4,0-62.3-1.6,10-5.3,19-10.8,26.5-2.5,3.3-6.2,8.4-12.7,12.3-9.4,5.8-19.6,6.2-29.5,6.6-1.7,0-3.4.1-4.9.1-4.1,0-7.4-.3-9.7-.5v-1c3.2.4,8.2.7,14.5.4,9.8-.4,19.9-.8,29.1-6.4,6.4-3.9,9.9-8.6,12.5-12.1,7.1-9.7,11-21.8,11.5-35.4,0-2,0-4,0-6.1h0c0-23.4,0-46.8,0-70.3-1.6,10.1-5.3,19.2-10.8,26.8-2.5,3.3-6.2,8.4-12.7,12.3-9.4,5.8-19.6,6.2-29.5,6.6-1.7,0-3.4.1-4.9.1-4.1,0-7.4-.3-9.7-.5v-1c3.2.4,8.2.7,14.5.4,9.8-.4,19.9-.8,29.1-6.4,6.4-3.9,9.9-8.6,12.5-12.1,7-9.6,11-21.7,11.6-35.1v-1.2h0c0-1.4,0-2.8,0-4.2,0-58.9,0-118,0-176.7h1c0,60.6,0,121.8,0,182.6.6,13.3,4.5,25.1,11.5,34.6,2.6,3.5,6.1,8.2,12.5,12.1,9.2,5.6,19.3,6,29,6.4,6.3.3,11.3,0,14.4-.4v1c-2.2.3-5.5.5-9.6.5s-3.2,0-4.9-.1c-9.9-.4-20.1-.8-29.5-6.6-6.6-4-10.3-9-12.7-12.3-5.5-7.5-9-16.3-10.7-26.2,0,25.8,0,51.6,0,77.2.7,13,4.6,24.6,11.4,33.9,2.5,3.5,6,8.2,12.5,12.1,9.2,5.6,19.3,6,29,6.4,6.3.3,11.3,0,14.4-.4v1c-2.2.3-5.5.5-9.6.5s-3.1,0-4.9-.1c-9.9-.4-20.1-.8-29.5-6.6-6.6-4-10.3-9-12.7-12.3-5.4-7.3-8.9-16-10.6-25.7,0,20.6,0,41.1,0,61.5,0,56.5,0,113-.1,169.5l144.1-.4Z`;

  return (
    <svg
      width="884"
      height="900"
      viewBox="0 0 1203 1600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="block"
      style={{
        transform: "translateX(50px)",
      }}
    >
      <defs>
        {/* 🌈 Gradient Beam - vertical now */}
        <linearGradient id="whiteSweepGradient7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8400" stopOpacity="0" />
          <stop offset="20%" stopColor="#FF8400" />
          <stop offset="50%" stopColor="#FF6A00" />
          <stop offset="80%" stopColor="#FF5000" />
          <stop offset="100%" stopColor="#FF5000" stopOpacity="0" />
        </linearGradient>

        {/* 🌀 Beam mask - vertical motion */}
        <mask id="beamMask7">
          <motion.rect
            x="0"
            y="-400"
            width="100%"
            height="600"
            fill="white"
            animate={{ y: [-400, 1500] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </mask>
      </defs>

      {/* 🩷 Static path */}
      <path
        d={pathD}
        stroke="#d5d5d5"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ⚡ Animated vertical gradient beam */}
      <path
        d={pathD}
        stroke="url(#whiteSweepGradient7)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        mask="url(#beamMask7)"
      />
    </svg>
  );
};

export default SVGCBarmobile;
