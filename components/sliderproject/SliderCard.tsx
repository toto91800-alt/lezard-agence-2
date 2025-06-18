"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import next/image

interface SliderCardProps {
  img: string;
  title: string;
  text: string;
  skills: string[];
  link?: string; // Optional prop for the page URL
}

const SliderCard: React.FC<SliderCardProps> = ({
  img,
  title,
  text,
  skills,
  link = "#",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile defined as width <= 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: isMobile ? "10px" : "20px",
        margin: "10px",
        minWidth: isMobile ? "250px" : "350px",
        maxWidth: isMobile ? "250px" : "350px",
        height: isMobile ? "450px" : "450px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* ✅ Updated to use next/image for main image */}
      <Image
        src={img}
        alt={title}
        width={350}
        height={180}
        className="w-full rounded-lg"
        style={{
          height: isMobile ? "120px" : "180px",
          objectFit: "cover",
        }}
        loading="lazy"
      />
      <h3
        style={{
          margin: "15px 0 10px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
          padding: "0 10px",
          wordBreak: "break-word",
          whiteSpace: "normal",
          textAlign: "center",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "15px",
          padding: "0 10px",
          wordBreak: "break-word",
          whiteSpace: "normal",
          textAlign: "justify",
        }}
      >
        {text}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: isMobile ? "5px" : "10px",
          justifyContent: "center",
          marginBottom: isMobile ? "40px" : "70px",
        }}
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "20px",
              padding: "5px 15px",
              fontSize: "12px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      <Link href={link} passHref>
        <button
          className="rotatable-button"
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            backgroundColor: "#fff",
            border: "1.5px solid #000",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginTop: "20px",
            overflow: "hidden",
          }}
        >
          {/* ✅ Updated to use next/image for SVG */}
          <Image
            src="/image/sliderproject/plus.svg"
            alt="Arrow"
            width={18}
            height={18}
            style={{
              filter:
                "invert(43%) sepia(12%) saturate(482%) hue-rotate(180deg) brightness(87%) contrast(89%)",
            }}
            loading="lazy"
          />
          <span className="wave-fill"></span>
        </button>
      </Link>
      <style jsx>{`
        /* Button rotation on hover */
        .rotatable-button:hover {
          transform: rotate(90deg);
          transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        /* Wave animation that fills the button */
        .wave-fill {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background-color: rgba(100, 149, 237, 0.5); /* Cornflower Blue */
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: fill-wave 3s infinite ease-in-out;
          z-index: 0;
        }

        @keyframes fill-wave {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          50% {
            width: 60px;
            height: 60px;
            opacity: 0.3;
          }
          100% {
            width: 100px;
            height: 100px;
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default SliderCard;
