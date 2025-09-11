"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
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
        color: "var(--Footertextcolor)", // Assure-toi que cette variable CSS est bien définie
      }}
    >
      {/* Titre principal */}
      <h1
        className="text-center font-semibold text-current"
        suppressHydrationWarning={true}
        style={{
          fontSize,
          lineHeight,
          wordSpacing,
          whiteSpace: "normal",
          textAlign: "center",
          margin: 0,
        }}
      >
        {t("footer.banner.brand", "Lezard Agence")}
      </h1>

      <span
        className="text-center font-semibold text-current mt-2"
        suppressHydrationWarning={true}
      >
        {t("footer.banner.rights", "© 2025 All rights reserved.")}
      </span>
    </div>
  );
};

export default Portfolio;
