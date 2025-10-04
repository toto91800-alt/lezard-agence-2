"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next"; 
import Link from "next/link";

const TutorialGoogleAuth: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("tutorial_Recovery_Code.Titre_1"),
      image: "/images/tutorial_recovery_code/base_tutoriel.webp",
    },
    {
      title: t("tutorial_Recovery_Code.Titre_2"),
      image: "/images/tutorial_recovery_code/2.webp",
    },
    {
      title: t("tutorial_Recovery_Code.Titre_3"),
      image: "/images/tutorial_recovery_code/3.webp",
    },
    {
      title: t("tutorial_Recovery_Code.Titre_4"),
      image: "/images/tutorial_recovery_code/4.webp",
    },
    {
      title: t("tutorial_Recovery_Code.Titre_5"),
      image: "/images/tutorial_recovery_code/5.webp",
    },
    {
      title: t("tutorial_Recovery_Code.Titre_6"),
      image: "/images/tutorial_recovery_code/6.webp",
    },
    {
      title: t("tutorial_Recovery_Code.Titre_7"),
      image: "/images/tutorial_recovery_code/7.webp",
    },
    {
      title: t("tutorial_Recovery_Code.Titre_8"),
      image: "/images/tutorial_recovery_code/8.webp",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        paddingTop: "60px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        position: "relative",
      }}
    >
      {/* Lang switch */}
      

      {/* ✅ H1 centré */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            color: "#222",
            fontSize: "28px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {t("tutorial_Recovery_Code.Titre_Main")}
        </h1>
      </div>

      {/* Subtitle */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "20px" }}>
          {t("tutorial_authentificator.sous_titre")}
        </p>
        <a 
          href="https://tutorial.lezard-agency.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
        >
          Tutoriel
        </a>
      </div>

      {steps.map((step, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          {/* ✅ H2 centré */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2
              style={{
                color: "#333",
                fontSize: "20px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                  fontSize: "14px",
                }}
              >
                {index + 1}
              </span>
              {step.title}
            </h2>
          </div>

          {step.image && (
          <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "360px", // ✅ Slimmed down for PC
            margin: "30px auto", // Keeps center + spacing
          }}
        >
          <Image
            src={step.image}
            alt={step.title}
            layout="responsive"
            width={360}
            height={225} // Maintains ~16:10 ratio
            sizes="(max-width: 480px) 90vw, (max-width: 768px) 80vw, 360px"
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        
          )}
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link href="/tutorial/authenticator">
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            {t("tutorial_Recovery_Code.Titre_authenticator_Button")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorialGoogleAuth;
