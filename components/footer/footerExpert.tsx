"use client";

import React, { useState, useEffect } from "react";

const Portfolio: React.FC = () => {
  const [fontSize, setFontSize] = useState("14rem");
  const [lineHeight, setLineHeight] = useState("1.1");
  const [wordSpacing, setWordSpacing] = useState("0.2rem"); // Default word spacing
  const [height, setHeight] = useState("500px"); // Initial height

  // Dynamically update styles based on screen width
  useEffect(() => {
    const updateStyles = () => {
      const width = window.innerWidth;

      if (width <= 680) {
        // Mobile styles
        setFontSize("2.5rem");
        setLineHeight("1");
        setWordSpacing("0.1rem");
        setHeight("200px");
      } else if (width <= 1366) {
        // Tablet styles
        setFontSize("9rem");
        setLineHeight("1.1");
        setWordSpacing("0.2rem");
        setHeight("250px");
      } else {
        // Desktop styles
        setFontSize("12rem");
        setLineHeight("1.1");
        setWordSpacing("0.2rem");
        setHeight("300px");
      }
    };

    updateStyles(); // Set initial styles
    window.addEventListener("resize", updateStyles); // Listen for window resize

    return () => {
      window.removeEventListener("resize", updateStyles); // Cleanup
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        height,
      }}
    >
      {/* Main title */}
      <h1
        className="text-center font-semibold text-black dark:text-white"
        style={{
          fontSize,       // Dynamic font size
          lineHeight,     // Dynamic line height
          wordSpacing,    // Dynamic word spacing
          whiteSpace: "normal", // Allow line breaking if needed
          textAlign: "center",
          margin: 0,
        }}
      >
        Lezard Agence
      </h1>

      {/* Footer text */}
      <span
        className="text-center font-semibold text-black dark:text-white mt-2"
      >
        © 2025 All rights reserved.
      </span>
    </div>
  );
};

export default Portfolio;
