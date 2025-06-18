"use client";

import React, { useRef, useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import ButtonArrow from "./ButtonArrow";
import Reveal from "@/components/sliderproject/reveal";
import TextReveal from "@/components/sliderproject/text-reveal";

const SliderProjets: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging && containerRef.current) {
      containerRef.current.scrollLeft -= e.movementX;
    }
  };

  // Scroll functions using card width
  const scrollLeft = () => {
    if (containerRef.current && cardRef.current) {
      containerRef.current.scrollLeft -= cardRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (containerRef.current && cardRef.current) {
      containerRef.current.scrollLeft += cardRef.current.offsetWidth;
    }
  };

  // Example card data
  const cardData = [
    {
      img: "/image/project/Software.jpg",
      title: "Dashboard Lezard Agency",
      text: "GECKO your new ally to revolutionize your organic growth strategy on social networks.",
      skills: ["Next.js", "React", "JavaScript", "HTML", "CSS", "Shadcn UI"],
      link: "/Portfolio-Projects/portfolio",
    },
    {
      img: "/image/project/website.png",
      title: "Website Lezard Agency",
      text: "Discover the first version of the Lezard Agence website.",
      skills: ["HTML", "CSS", "Gsap", "JavaScript", "Shopify"],
      link: "/Portfolio-Projects/website-agence",
    },
    {
      img: "/image/project/utopia.jpg",
      title: "Utopia Brand Identity",
      text: "Discover Utopia's elegant graphic charter.",
      skills: ["Brand Identity", "Photoshop", "Illustrator", "InDesign"],
      link: "/Portfolio-Projects/utopia",
    },
    {
      img: "/image/project/TheRide.jpg",
      title: "The Ride Collective",
      text: "Discover the brand identity we created for The Ride.",
      skills: ["Brand Identity", "Graphic Design", "Photoshop"],
      link: "/Portfolio-Projects/TheRideCollective",
    },
    {
      img: "/image/project/Shopify.webp",
      title: "Website E-commerce",
      text: "Coming Soon.",
      skills: ["HTML", "CSS", "Gsap", "JavaScript", "Shopify"],
      link: "/Portfolio-Projects/e-commerce",
    },
    {
      img: "/image/project/colorimetrie.webp",
      title: "Website E-commerce",
      text: "Coming Soon.",
      skills: ["HTML", "CSS", "Gsap", "JavaScript", "Shopify"],
      link: "/Portfolio-Projects/travel",
    },
  ];

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Header Section */}
      <div className="leading-wide tracking-relaxed mx-auto max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
        <div className="flex flex-col ">
          <Reveal>
            <h2 className="text-4xl font-bold">My</h2>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-bold">Projects</h2>
          </Reveal>
        </div>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
          <TextReveal>
            I am a passionate and creative Web Developer with a love for
            functional websites. Constantly learning and eager to take on new challenges.
          </TextReveal>
        </p>
      </div>

      {/* Cards Container */}
      <div
        className="w-full hide-scrollbar"
        style={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          cursor: dragging ? "grabbing" : "grab",
          padding: isMobile ? "10px" : "20px",
          paddingLeft: isMobile ? "10px" : "13%",
          whiteSpace: "nowrap",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <div style={{ display: "flex", gap: isMobile ? "10px" : "15px" }}>
          {cardData.map((card, index) => (
            <div key={index} ref={index === 0 ? cardRef : null}>
              <SliderCard
                img={card.img}
                title={card.title}
                text={card.text}
                skills={card.skills}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
          gap: "10px",
          paddingRight: "40px",
        }}
      >
        <ButtonArrow direction="left" onClick={scrollLeft} />
        <ButtonArrow direction="right" onClick={scrollRight} />
      </div>
    </div>
  );
};

export default SliderProjets;
