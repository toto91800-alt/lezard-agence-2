"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentIcons from "@/components/footer/PaymentIcons";
import SocialMediaIcons from "@/components/footer/SocialMediaIcons";

const FooterPrincipal: React.FC = () => {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black rounded-3xl p-10 md:p-20 mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Section gauche */}
        <div className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:w-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white dark:text-black">
            {t("footer.brandName", "Lezard Agence")}
          </h2>
          {/* Icônes sociales */}
          <SocialMediaIcons />
        </div>

        {/* Section droite */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 text-sm mt-8 lg:mt-0 w-full lg:w-auto">
          {/* Colonne 1 */}
          <div className="flex flex-col gap-3">
            <a
              href="https://tutorial.lezard-agency.com/"
              className="hover:text-gray-400 dark:hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.links.tutorial", "Tutorial")}
            </a>
            <a
              href="https://calendly.com/lezard-agence/mmm?back=1&month=2025-02"
              className="hover:text-gray-400 dark:hover:text-gray-600 transition"
              aria-label={t("footer.links.contact", "Contact")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.links.contact", "Contact")}
            </a>
          <a
            href="/blog"
            className="hover:text-gray-400 dark:hover:text-gray-600 transition"
            aria-label={t("footer.links.blog", "Blog")}
          >
            {t("footer.links.blog", "Blog")}
          </a>
          </div>

          {/* Colonne 2 */}
          <div className="flex flex-col gap-3">
            <a
              href="/terms-&-conditions"
              className="hover:text-gray-400 dark:hover:text-gray-600 transition"
              aria-label={t("footer.links.terms", "Terms & Conditions")}
            >
              {t("footer.links.terms", "Terms & Conditions")}
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-gray-400 dark:hover:text-gray-600 transition"
              aria-label={t("footer.links.privacy", "Privacy Policy")}
            >
              {t("footer.links.privacy", "Privacy Policy")}
            </a>
          </div>

          {/* Colonne 3 */}
          <div className="flex flex-col gap-3">
            <a
              href="/conditions-of-sale"
              className="hover:text-gray-400 dark:hover:text-gray-600 transition"
              aria-label={t("footer.links.sales", "Conditions of Sale")}
            >
              {t("footer.links.sales", "Conditions of Sale")}
            </a>
          </div>
        </div>
      </div>

      {/* Icônes de paiement avec padding top pour PC */}
      <div className="mt-8 lg:mt-12 lg:pt-6">
        <PaymentIcons />
      </div>
    </footer>
  );
};

export default FooterPrincipal;
