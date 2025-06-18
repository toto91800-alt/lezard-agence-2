"use client";

import React from "react";
import Image from "next/image"; // ✅ Import next/image

interface ButtonArrowProps {
  direction: "left" | "right"; // Direction de la flèche
  onClick: () => void; // Fonction pour gérer les clics
  disabled?: boolean; // Optionnel : désactive le bouton
}

const ButtonArrow: React.FC<ButtonArrowProps> = ({ direction, onClick, disabled = false }) => {
  // Chemins pour les fichiers SVG
  const leftArrowPath = "/svg/arrow gauche.svg";
  const rightArrowPath = "/svg/arrow droite.svg";

  return (
    <button
      className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
      style={{
        cursor: disabled ? "not-allowed" : "pointer", // Désactiver l'interaction si nécessaire
      }}
    >
      {/* ✅ Updated to use next/image */}
      <Image
        src={direction === "left" ? leftArrowPath : rightArrowPath}
        alt={`${direction} arrow`}
        width={24} // ✅ Width and height optimized (6 * 4px)
        height={24}
        className={`h-6 w-6 ${disabled ? "opacity-50" : "opacity-100"}`}
        style={{
          filter:
            "invert(43%) sepia(12%) saturate(482%) hue-rotate(180deg) brightness(87%) contrast(89%)", // Convertir SVG en gris correspondant à rgb(107, 114, 128)
        }}
        loading="lazy" // ✅ Lazy loading enabled
      />
    </button>
  );
};

export default ButtonArrow;
