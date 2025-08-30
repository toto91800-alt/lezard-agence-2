"use client";

import Image from "next/image"; // Import next/image

const PaymentIcons = () => {
  const icons = [
    { src: "/svg/payment/paypal.svg", alt: "PayPal" },
    { src: "/svg/payment/mastro.svg", alt: "Mastercard" },
    { src: "/svg/payment/mastercard1.svg", alt: "Maestro" },
    { src: "/svg/payment/visa.svg", alt: "Visa" },
    { src: "/svg/payment/american-express.svg", alt: "American Express" },
    { src: "/svg/payment/klarna.svg", alt: "Klarna" },
    { src: "/svg/payment/jcb.svg", alt: "JCB" },
    { src: "/svg/payment/venmo.svg", alt: "Venmo" },
    { src: "/svg/payment/apple-pay.svg", alt: "Apple Pay" },
    { src: "/svg/payment/google-pay.svg", alt: "Google Pay" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-12 mt-8">
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={icon.alt}
          width={24} // Define a default width
          height={24} // Define a default height for icons
          className="h-4 sm:h-5 lg:h-6 w-auto filter transition duration-300 dark:brightness-0"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default PaymentIcons;
