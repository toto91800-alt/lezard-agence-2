"use client";

import React, { useRef, useEffect, useState } from "react";
import SliderCard1 from "./SliderCard1";
import ButtonArrow from "./ButtonArrow";

const SliderProjets1: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

  const scrollLeft = () => {
    if (containerRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      containerRef.current.scrollLeft -= cardWidth;
    }
  };

  const scrollRight = () => {
    if (containerRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      containerRef.current.scrollLeft += cardWidth;
    }
  };

  const cardData = [
    {
      img: "/images/slider/ride.webp",
      title: "The Ride Collective",
      text: "Un projet immersif combinant design et technologie.",
      link: "/menu/features/production/the-ride-collective",
    },
    {
      img: "/images/slider/kora.webp",
      title: "Igloofest",
      text: "Festival en plein air emblématique de Montréal.",
      link: "/menu/features/production/Igloofest",
    },
    {
      img: "/images/slider/kat.webp",
      title: "Catherine Project",
      text: "Exploration visuelle et narrative puissante.",
      link: "/menu/features/production/catherine",
    },
    {
      img: "/images/slider/madeleine.webp",
      title: "Coffee Series",
      text: "Une série photo autour du rituel du café.",
      link: "/menu/features/production/coffee",
    },
     {
      img: "/images/slider/hos.webp",
      title: "Hospitality",
      text: "Une série photo autour de la food.",
      link: "/menu/features/production/coffee",
    },
  ];

  return (
  <div style={{ position: "relative", width: "100%", paddingBottom: "3rem" }}>
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
        <div
          style={{
            display: "flex",
            gap: isMobile ? "10px" : "15px",
            minWidth: "100%",
          }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              style={{ display: "inline-block" }}
            >
              <SliderCard1
                img={card.img}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

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

export default SliderProjets1;
