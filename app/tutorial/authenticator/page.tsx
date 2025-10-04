"use client";
import Image from "next/image";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const TutorialGoogleAuth: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("tutorial_authentificator.Titre_1"),
      description: t("tutorial_authentificator.Description_1"),
      image: "/images/tutorial_authenticator/base_tutoriel.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_2"),
      image: "/images/tutorial_authenticator/2.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_3"),
      image: "/images/tutorial_authenticator/3.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_4"),
      image: "/images/tutorial_authenticator/4.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_5"),
      image: "/images/tutorial_authenticator/5.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_6"),
      image: "/images/tutorial_authenticator/6.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_7"),
      image: "/images/tutorial_authenticator/7.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_8"),
      image: "",
      links: {
        appStore:
          "https://apps.apple.com/fr/app/google-authenticator/id388497605",
        googlePlay:
          "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=fr&gl=US&pli=1",
      },
    },
    {
      title: t("tutorial_authentificator.Titre_9"),
      image: "/images/tutorial_authenticator/9.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_10"),
      image: "/images/tutorial_authenticator/10.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_11"),
      image: "/images/tutorial_authenticator/11.webp",
    },
    {
      title: t("tutorial_authentificator.Titre_12"),
      image: "/images/tutorial_authenticator/12.webp",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        position: "relative",
        paddingTop: "60px",
      }}
    >
      {/* Lang switch */}
 

      {/* ✅ Centered H1 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            color: "#222",
            fontSize: "28px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {t("tutorial_authentificator.Titre_Main")}
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
          {/* ✅ Centered H2 */}
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

          {/* ✅ Responsive Image Block */}
          {step.image && (
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "360px", // smaller for desktop
                margin: "30px auto",
              }}
            >
              <Image
                src={step.image}
                alt={step.title}
                layout="responsive"
                width={360}
                height={225}
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

          {/* App links */}
          {step.links && (
            <p style={{ fontSize: "16px", marginTop: "10px", textAlign: "center" }}>
              {t("tutorial_authentificator.Description_APP_1")}{" "}
              <a
                href={step.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "underline" }}
              >
                App Store
              </a>{" "}
              {t("tutorial_authentificator.Description_APP_2")}
              <a
                href={step.links.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "underline" }}
              >
                Google Play Store
              </a>
              .
            </p>
          )}
        </div>
      ))}

      {/* Navigation Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link href="/tutorial/recovery_code">
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
            {t("tutorial_authentificator.Titre_Recovery_Button")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorialGoogleAuth;
