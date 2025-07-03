"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UtopiaCharterCard() {
  return (
    <div className="w-full flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-xl h-72 rounded-3xl overflow-hidden shadow-2xl group transition-transform duration-300 transform hover:scale-105">
        {/* Background Image */}
        <Image
          src="/images/branding/NEW SEQUENCE-1-5.jpg"
          alt="Charte graphique"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 space-y-4">
          <h2 className="text-white text-xl md:text-2xl font-semibold drop-shadow-md">
            Découvrir la charte graphique
          </h2>

          <Link
            href="/pdf/CHARTE UTOPIA copy FIN.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group px-6 py-2 text-sm md:text-base bg-white text-black hover:bg-gray-200 rounded-full shadow-md transition flex items-center gap-2">
              Découvrir
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
