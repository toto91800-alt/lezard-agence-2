"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

interface LegalSection {
  title: string;
  description: React.ReactNode;
}

export function ConditionsOfSalePage() {
  const { t, i18n } = useTranslation();
  const [legalContent, setLegalContent] = useState<LegalSection[]>([]);

  useEffect(() => {
    if (!i18n.isInitialized) return;

    setLegalContent([
    {
      title: t("components.ConditionsOfSale.block.section1.title"),
      description: (
        <>
          <p>{t("components.ConditionsOfSale.block.section1.p1")}</p>
          <p>
            <strong>A.</strong> {t("components.ConditionsOfSale.block.section1.p2")}
          </p>
          <p>
            <strong>B.</strong> {t("components.ConditionsOfSale.block.section1.p3")}
          </p>
          <p>
            <strong>C.</strong> {t("components.ConditionsOfSale.block.section1.p4")}
          </p>
          <p>
            <strong>E.</strong> {t("components.ConditionsOfSale.block.section1.p5")}{" "}
            <a href="https://lezard-agency.com" className="text-blue-500 underline">
              https://lezard-agency.com
            </a>
          </p>
          <p>
            <strong>F.</strong> {t("components.ConditionsOfSale.block.section1.p6")}{" "}
            <a href="https://lezard-agency.com" className="text-blue-500 underline">
              https://lezard-agency.com
            </a>
          </p>
        </>
      ),
    },
    {
      title: t("components.ConditionsOfSale.block.section2.title"),
      description: (
        <>
          <p>{t("components.ConditionsOfSale.block.section2.p1")}</p>
          <p>
            {t("components.ConditionsOfSale.block.section2.p2")}{" "}
            <a href="https://lezard-agency.com" className="text-blue-500 underline">
              https://lezard-agency.com
            </a>
            .
          </p>
          <p>{t("components.ConditionsOfSale.block.section2.p3")}</p>
          <p>{t("components.ConditionsOfSale.block.section2.p4")}</p>
          <p>{t("components.ConditionsOfSale.block.section2.p5")}</p>

          <p className="text-center font-bold">
            {t("components.ConditionsOfSale.block.section2.line1")} <br />
            {t("components.ConditionsOfSale.block.section2.line2")} <br />
            {t("components.ConditionsOfSale.block.section2.line3")} <br />
            {t("components.ConditionsOfSale.block.section2.line4")}
          </p>

          <p>{t("components.ConditionsOfSale.block.section2.p6")}</p>
          <p>{t("components.ConditionsOfSale.block.section2.p7")}</p>
          <p>{t("components.ConditionsOfSale.block.section2.p8")}</p>
          <p>{t("components.ConditionsOfSale.block.section2.p9")}</p>
          <p>{t("components.ConditionsOfSale.block.section2.p10")}</p>
        </>
      ),
    },
    {
        title: t("components.ConditionsOfSale.block.section3.title"),
        description: (
          <>
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section3.p1")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section3.p2")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section3.p3")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section3.p4")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section3.p5")}
            </p>
          </>
        ),
      },
      {
        title: t("components.ConditionsOfSale.block.section4.title"),
        description: (
          <>
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section4.p1")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section4.p2")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section4.p3")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section4.p4")}
            </p>
  
            <p className="space-y-4 leading-relaxed font-bold text-center">
              {t("components.ConditionsOfSale.block.section4.address.line1")}{" "}
              <br />
              {t("components.ConditionsOfSale.block.section4.address.line2")}{" "}
              <br />
              <br />
              <a
                href="mailto:contact@lezard-agency.com"
                className="text-blue-500 underline"
              >
                {t("components.ConditionsOfSale.block.section4.address.email")}
              </a>
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section4.p5")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section4.p6")}
            </p>
          </>
        ),
      },
      {
        title: t("components.ConditionsOfSale.block.section5.title"),
        description: (
          <>
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p1")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p2")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p3")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p4")}{" "}
              <a
                href="https://lezard-agency.com"
                className="text-blue-500 underline"
              >
                https://lezard-agency.com
              </a>
              .
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p5")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p6")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p7")}{" "}
              <a
                href="https://lezard-agency.com"
                className="text-blue-500 underline"
              >
                https://lezard-agency.com
              </a>
              .
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p8")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section5.p9")}{" "}
              <a
                href="https://lezard-agency.com"
                className="text-blue-500 underline"
              >
                https://lezard-agency.com
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: t("components.ConditionsOfSale.block.section6.title"),
        description: (
          <>
            <p className="space-y-4 leading-relaxed text-justify">
              {t("components.ConditionsOfSale.block.section6.p1")}
            </p>
  
            <p className="space-y-4 leading-relaxed text-justify">
              {t("components.ConditionsOfSale.block.section6.p2")}
            </p>
  
            <p className="space-y-4 leading-relaxed italic border-l-4 border-gray-300 pl-4">
              {t("components.ConditionsOfSale.block.section6.p3")}
            </p>
  
            <p className="space-y-4 leading-relaxed italic border-l-4 border-gray-300 pl-4">
              {t("components.ConditionsOfSale.block.section6.p4")}
            </p>
  
            <p className="space-y-4 leading-relaxed italic border-l-4 border-gray-300 pl-4">
              {t("components.ConditionsOfSale.block.section6.p5")}
            </p>
  
            <p className="space-y-4 leading-relaxed text-justify">
              {t("components.ConditionsOfSale.block.section6.p6")}
            </p>
          </>
        ),
      },
      {
        title: t("components.ConditionsOfSale.block.section7.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section7.subtitle1")}
            </p>
      
            <ul className="space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section7.tarif1")}</li>
              <li>{t("components.ConditionsOfSale.block.section7.tarif2")}</li>
              <li>{t("components.ConditionsOfSale.block.section7.tarif3")}</li>
              <li>{t("components.ConditionsOfSale.block.section7.tarif4")}</li>
              <li>{t("components.ConditionsOfSale.block.section7.tarif5")}</li>
              <li>{t("components.ConditionsOfSale.block.section7.tarif6")}</li>
            </ul>
      
            <p className="space-y-4 leading-relaxed mt-4">
              {t("components.ConditionsOfSale.block.section7.p1")}
            </p>
      
            <ul className="space-y-2">
              <li>
                📧{" "}
                <a
                  href="mailto:contact@lezard-agency.com"
                  className="text-blue-500 underline"
                >
                  contact@lezard-agency.com
                </a>
              </li>
              <li>
                📱{" "}
                <a href="tel:+33781225913" className="text-blue-500 underline">
                  +33 7 81 22 59 13 (WhatsApp)
                </a>
              </li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p2")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p3")}
            </p>
      
            <hr className="my-6 border-gray-300" />
      
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section7.subtitle2")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p4")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p5")}
            </p>
      
            <ul className="space-y-2">
              <li>
                💳 {t("components.ConditionsOfSale.block.section7.payment1")}
              </li>
              <li>
                💳 {t("components.ConditionsOfSale.block.section7.payment2")}
              </li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p6")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p7")}{" "}
              <a
                href="mailto:contact@lezard-agency.com"
                className="text-blue-500 underline"
              >
                contact@lezard-agency.com
              </a>
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p8")}
            </p>
      
            <hr className="my-6 border-gray-300" />
      
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section7.subtitle3")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p9")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p10")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section7.p11")}
            </p>
      
            <ul className="space-y-2">
              <li>
                ⚠️ {t("components.ConditionsOfSale.block.section7.penalty1")}
              </li>
              <li>
                ⚠️ {t("components.ConditionsOfSale.block.section7.penalty2")}
              </li>
              <li>
                ⚠️ {t("components.ConditionsOfSale.block.section7.penalty3")}
              </li>
            </ul>
          </>
        ),
      },    
      {
        title: t("components.ConditionsOfSale.block.section8.title"),
        description: (
          <>
            <p>{t("components.ConditionsOfSale.block.section8.p1")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p2")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p3")}</p>
            <ul>
              <li>{t("components.ConditionsOfSale.block.section8.list1")}</li>
              <li>{t("components.ConditionsOfSale.block.section8.list2")}</li>
              <li>{t("components.ConditionsOfSale.block.section8.list3")}</li>
            </ul>
            <p>{t("components.ConditionsOfSale.block.section8.p4")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p5")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p6")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p7")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p8")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p9")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p10")}</p>
            <p>{t("components.ConditionsOfSale.block.section8.p11")}</p>
          </>
        ),
      },
      {
        title: t("components.ConditionsOfSale.block.section9.title"),
        description: (
          <>
            <p>{t("components.ConditionsOfSale.block.section9.p1")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p2")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p3")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p4")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p5")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p6")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p7")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p8")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p9")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p10")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p11")}</p>
            <p>{t("components.ConditionsOfSale.block.section9.p12")}</p>
          </>
        ),
      },
      {
        title: t("components.ConditionsOfSale.block.section10.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section10.subtitle1")}
            </p>
      
            <p>{t("components.ConditionsOfSale.block.section10.p1")}</p>
      
            <p>
              {t("components.ConditionsOfSale.block.section10.reason1")},{" "}
              {t("components.ConditionsOfSale.block.section10.reason2")},{" "}
              {t("components.ConditionsOfSale.block.section10.reason3")}{" "}
              et {t("components.ConditionsOfSale.block.section10.reason4")}.
            </p>
      
            <p>{t("components.ConditionsOfSale.block.section10.p2")}</p>
            <p>{t("components.ConditionsOfSale.block.section10.p3")}</p>
      
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section10.subtitle2")}
            </p>
      
            <p>{t("components.ConditionsOfSale.block.section10.p4")}</p>
      
            <p>
              {t("components.ConditionsOfSale.block.section10.reason5")},{" "}
              {t("components.ConditionsOfSale.block.section10.reason6")},{" "}
              {t("components.ConditionsOfSale.block.section10.reason7")},{" "}
              {t("components.ConditionsOfSale.block.section10.reason8")},{" "}
              {t("components.ConditionsOfSale.block.section10.reason9")},{" "}
              {t("components.ConditionsOfSale.block.section10.reason10")}{" "}
              et {t("components.ConditionsOfSale.block.section10.reason11")}.
            </p>
      
            <p>{t("components.ConditionsOfSale.block.section10.p5")}</p>
          </>
        ),
      },    
      {
        title: t("components.ConditionsOfSale.block.section11.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section11.subtitle1")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p1")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p2")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p3")}{" "}
              <a
                href="https://lezard-agency.com"
                className="text-blue-500 underline"
              >
                https://lezard-agency.com
              </a>
              .
            </p>
  
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section11.subtitle2")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p4")}
            </p>
  
            <p className="text-center font-bold">
              {t("components.ConditionsOfSale.block.section11.address.line1")}{" "}
              <br />
              {t(
                "components.ConditionsOfSale.block.section11.address.line2"
              )}{" "}
              <br />
              {t(
                "components.ConditionsOfSale.block.section11.address.line3"
              )}{" "}
              <br />
            </p>
  
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section11.subtitle3")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p5")}
            </p>
  
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section11.subtitle4")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p6")}
            </p>
  
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section11.purpose1")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose2")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose3")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose4")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose5")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose6")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose7")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose8")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.purpose9")}</li>
              <li>
                {t("components.ConditionsOfSale.block.section11.purpose10")}
              </li>
              <li>
                {t("components.ConditionsOfSale.block.section11.purpose11")}
              </li>
            </ul>
  
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section11.subtitle5")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p7")}
            </p>
  
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>
                {t("components.ConditionsOfSale.block.section11.retention1")}
              </li>
              <li>
                {t("components.ConditionsOfSale.block.section11.retention2")}
              </li>
              <li>
                {t("components.ConditionsOfSale.block.section11.retention3")}
              </li>
            </ul>
  
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section11.subtitle6")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p8")}
            </p>
  
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>
                {t("components.ConditionsOfSale.block.section11.recipient1")}
              </li>
              <li>
                {t("components.ConditionsOfSale.block.section11.recipient2")}
              </li>
            </ul>
  
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section11.subtitle7")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p9")}
            </p>
  
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section11.rights1")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.rights2")}</li>
              <li>{t("components.ConditionsOfSale.block.section11.rights3")}</li>
            </ul>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p10")}
            </p>
  
            <p className="text-center font-bold">
              <strong>
              </strong>
              {t("components.ConditionsOfSale.block.section11.address.line1")}{" "}
              <br />
              {t(
                "components.ConditionsOfSale.block.section11.address.line2"
              )}{" "}
              <br />
              {t(
                "components.ConditionsOfSale.block.section11.address.line3"
              )}{" "}
              <br />
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p11")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p12")}{" "}
              <a
                href="https://lezard-agency.com"
                className="text-blue-500 underline"
              >
                https://lezard-agency.com
              </a>
              .
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section11.p13")}
            </p>
          </>
        ),
      },
      {
        title: t("components.ConditionsOfSale.block.section12.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section12.subtitle")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section12.p1")}{" "}
              <a
                href="https://lezard-agency.com"
                className="text-blue-500 underline"
              >
                https://lezard-agency.com
              </a>{" "}
              {t("components.ConditionsOfSale.block.section12.p2")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section12.p3")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section12.p4")}
            </p>
      
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section12.list1")}</li>
              <li>{t("components.ConditionsOfSale.block.section12.list2")}</li>
              <li>{t("components.ConditionsOfSale.block.section12.list3")}</li>
              <li>{t("components.ConditionsOfSale.block.section12.list4")}</li>
              <li>{t("components.ConditionsOfSale.block.section12.list5")}</li>
              <li>{t("components.ConditionsOfSale.block.section12.list6")}</li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section12.p5")}
            </p>
          </>
        ),
      }, 
      {
        title: t("components.ConditionsOfSale.block.section13.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section13.subtitle")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section13.p1")}{" "}
              <a
                href="https://lezard-agency.com"
                className="text-blue-500 underline"
              >
                https://lezard-agency.com
              </a>.
            </p>
      
            <p className="space-y-4 leading-relaxed">
              <strong>{t("components.ConditionsOfSale.block.section13.p2")}</strong>
            </p>
      
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section13.method1")}</li>
              <li>{t("components.ConditionsOfSale.block.section13.method2")}</li>
              <li>{t("components.ConditionsOfSale.block.section13.method3")}</li>
            </ul>
          </>
        ),
      }, 
      {
        title: t("components.ConditionsOfSale.block.section14.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section14.subtitle1")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section14.p1")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section14.p2")}
            </p>
          </>
        ),
      },     
      {
        title: t("components.ConditionsOfSale.block.section15.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.ConditionsOfSale.block.section15.subtitle1")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section15.p1")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section15.p2")}
            </p>
      
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section15.reason1")}</li>
              <li>{t("components.ConditionsOfSale.block.section15.reason2")}</li>
              <li>
                {t("components.ConditionsOfSale.block.section15.reason3")}{" "}
                <a
                  href="https://lezard-agency.com"
                  className="text-blue-500 underline"
                >
                  https://lezard-agency.com
                </a>
              </li>
              <li>{t("components.ConditionsOfSale.block.section15.reason4")}</li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section15.p3")}
            </p>
      
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section15.option1")}</li>
              <li>{t("components.ConditionsOfSale.block.section15.option2")}</li>
              <li>{t("components.ConditionsOfSale.block.section15.option3")}</li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.ConditionsOfSale.block.section15.p4")}
            </p>
      
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.ConditionsOfSale.block.section15.gdpr1")}</li>
              <li>{t("components.ConditionsOfSale.block.section15.gdpr2")}</li>
              <li>{t("components.ConditionsOfSale.block.section15.gdpr3")}</li>
            </ul>
          </>
        ),
    }
    ]);
}, [i18n.isInitialized, t]);

return (
  <div className="max-w-2xl mx-auto antialiased pt-4 pb-8 relative px-6">
    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
      {legalContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-10">
          <h2 className={twMerge("text-2xl font-bold mb-4")}>{item.title}</h2>
          <div className="text-sm prose prose-sm dark:prose-invert">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
