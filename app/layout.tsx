// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/menu/providers";
import { NavbarDemo } from "@/components/menu/NavbarDemo";
import MainFooter from "@/components/footer/MainFooter";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lézard Agency",
  description: "Boostez votre Instagram avec notre solution de croissance automatisée 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <NavbarDemo />
          {children}
          <MainFooter />

          {/* Bulle WhatsApp fixée en bas à droite */}
          <WhatsAppBubble
            phone="33781225913"
            message="Hi! Feel free to send me a message — I’ll be happy to take some time to help you."
          />
        </Providers>
      </body>
    </html>
  );
}
