"use client";

import React, { useState, useEffect } from "react";

const Portfolio: React.FC = () => {
  const [fontSize, setFontSize] = useState("14rem");
  const [lineHeight, setLineHeight] = useState("1.1");
  const [wordSpacing, setWordSpacing] = useState("0.2rem");
  const [height, setHeight] = useState("500px");

  useEffect(() => {
    const updateStyles = () => {
      const width = window.innerWidth;

      if (width <= 680) {
        setFontSize("2.5rem");
        setLineHeight("1");
        setWordSpacing("0.1rem");
        setHeight("200px");
      } else if (width <= 1366) {
        setFontSize("9rem");
        setLineHeight("1.1");
        setWordSpacing("0.2rem");
        setHeight("250px");
      } else {
        setFontSize("12rem");
        setLineHeight("1.1");
        setWordSpacing("0.2rem");
        setHeight("300px");
      }
    };

    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => window.removeEventListener("resize", updateStyles);
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        height,
        // ✅ toute la zone hérite de la couleur du footer
        color: "var(--Footertextcolor)", // ajoute la var dans ton CSS (root/dark/custom)
      }}
    >
      {/* Titre principal */}
      <h1
        className="text-center font-semibold text-current"
        style={{
          fontSize,
          lineHeight,
          wordSpacing,
          whiteSpace: "normal",
          textAlign: "center",
          margin: 0,
        }}
      >
        Lezard Agence
      </h1>

      {/* Texte de footer */}
      <span className="text-center font-semibold text-current mt-2">
        © 2025 All rights reserved.
      </span>
    </div>
  );
};

export default Portfolio;
