"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroVideoProps {
  image: string;
  video: string;
  title: string;
  subtitle: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ image, video, title, subtitle }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Animation plus réactive
  });

  // Transformations des éléments
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.4]); // ✅ Commence à 1 et grandit à 1.4 plus tôt
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0]); // ✅ L’image disparaît plus tôt
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]); // ✅ Le titre apparaît plus vite
  const subtitleOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]); // ✅ Le sous-titre apparaît aussi plus tôt

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[100vh] md:h-[110vh] lg:h-[110vh] overflow-hidden"
    >
      {/* Vidéo en arrière-plan */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Image visible uniquement sur desktop */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 hidden lg:flex"
        style={{ scale, opacity }}
      >
        <Image
          src={image}
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Titre et sous-titre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold"
          style={{ opacity: titleOpacity }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-white text-lg md:text-2xl mt-4 max-w-[600px]"
          style={{ opacity: subtitleOpacity }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroVideo;
