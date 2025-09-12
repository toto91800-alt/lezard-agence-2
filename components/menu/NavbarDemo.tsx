"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/menu/ModeToggle";
import { LanguageSwitcher } from "@/components/menu/LanguageSwitcher";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function NavbarDemo() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = mounted
    ? [
        { name: t("menu.howiswork", "How it works"), link: "/how-is-work" },
        { name: t("menu.results", "Results"), link: "/resultats" },
        { name: t("menu.pricing", "Pricing"), link: "/pricing" },
        { name: t("menu.about", "About us"), link: "/about-us" },
      ]
    : [];

  const ctaLabel = mounted ? t("menu.cta", "5 jours d’essai gratuits") : "";

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          {/* Liens desktop (via <Link /> dans NavItems) */}
          {mounted && <NavItems items={navItems} />}

          <div className="relative z-50 flex items-center gap-4">
            <LanguageSwitcher />
            <ModeToggle />

            {/* CTA desktop */}
            {mounted && (
              <Link
                href="https://app.lezard-agency.com/registerv2"
                className="cta-strike group relative inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-white font-medium shadow-sm transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 overflow-hidden"
              >
                <span className="icon-wrap mr-2 inline-grid size-6 place-items-center rounded-full bg-white/15">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    aria-hidden="true"
                    className="icon-thunder"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
                  </svg>
                </span>
                <span>{ctaLabel}</span>
                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />
              </Link>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {mounted &&
              navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative block text-neutral-600 dark:text-neutral-300"
                >
                  {item.name}
                </Link>
              ))}

            {/* Lang switcher + CTA mobile */}
            <div className="mt-4 flex w-full flex-col gap-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>

              {mounted && (
                <Link
                  href="https://app.lezard-agency.com/registerv2"
                  className="cta-strike group relative inline-flex items-center justify-center w-full rounded-full bg-orange-500 px-4 py-3 text-white font-medium shadow-sm transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="icon-wrap mr-2 inline-grid size-6 place-items-center rounded-full bg-white/15">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      className="icon-thunder"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>{ctaLabel}</span>
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15" />
                </Link>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Styles (shine + tilt) */}
      <style jsx>{`
        .cta-strike::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.35) 20%,
            rgba(255, 255, 255, 0.35) 22%,
            transparent 35%
          );
          transform: translateX(-200%);
          pointer-events: none;
          will-change: transform;
        }
        .cta-strike:hover::after {
          animation: btnShine 900ms ease-out forwards;
        }
        @keyframes btnShine {
          to {
            transform: translateX(200%);
          }
        }
        .icon-wrap {
          transition: transform 0.2s ease, filter 0.2s ease;
          color: #fff;
        }
        .cta-strike:hover .icon-wrap {
          transform: rotate(-12deg) scale(1.1);
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.45));
        }
        .icon-thunder {
          transition: transform 0.2s ease;
          display: block;
        }
        .cta-strike:hover .icon-thunder {
          transform: translateX(1px);
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-strike:hover::after {
            animation: none;
          }
          .cta-strike:hover .icon-wrap {
            transform: none;
            filter: none;
          }
          .cta-strike:hover .icon-thunder {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
