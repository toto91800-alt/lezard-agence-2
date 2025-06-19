import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Next.js Link

interface SliderCardProps {
  img: string;
  title: string;
  text: string;
  link?: string;
}

const SliderCard1: React.FC<SliderCardProps> = ({
  img,
  title,
  text,
  link = "#",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
        borderRadius: "15px",
        overflow: "hidden",
        width: isMobile ? "250px" : "350px",
        height: isMobile ? "450px" : "450px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      {/* Lien cliquable autour de l'image */}
      {link.startsWith("http") ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 2, // ✅ Met l'image devant
          }}
        >
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </a>
      ) : (
        <Link href={link}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 2,
            }}
          >
            <Image
              src={img}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </Link>


      )}

      {/* Overlay sombre pour améliorer la lisibilité, mais ne bloque pas les clics */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          pointerEvents: "none", // ✅ Permet le clic sur l'image en dessous
        }}
      ></div>

      {/* ✅ Contenu texte bien ajusté pour mobile */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "#fff",
          textAlign: "left",
          zIndex: 3, // ✅ Texte au-dessus de tout
          width: isMobile ? "85%" : "90%", // ✅ Réduit la largeur sur mobile pour éviter le dépassement
          wordBreak: "break-word", // ✅ Force le retour à la ligne si nécessaire
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? "16px" : "20px", // ✅ Taille de police réduite sur mobile
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: isMobile ? "12px" : "14px", // ✅ Réduction de la taille du texte sur mobile
            lineHeight: "1.4",
            whiteSpace: "normal",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default SliderCard1;
