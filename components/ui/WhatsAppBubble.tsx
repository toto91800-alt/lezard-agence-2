"use client";

import Image from "next/image";

type WhatsAppBubbleProps = {
  phone?: string;   // Numéro WhatsApp international (ex: "33781225913")
  message?: string; // Message pré-rempli
};

export default function WhatsAppBubble({
  phone = "33781225913",
  message = "Hi, feel free to send me a message! I’ll be happy to take some time to help you out",
}: WhatsAppBubbleProps) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center
                 transition-transform hover:scale-105 active:scale-95"
    >
      <Image
        src="/svg/whatsapp.svg"
        alt="WhatsApp"
        width={56}
        height={56}
        priority
        className="w-14 h-14"
      />
    </a>
  );
}
