"use client";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { twMerge } from "tailwind-merge";

export function PrivacyPolicyPage() {
  const { t } = useTranslation();

  const legalContent = [
    {
      title: t("components.PrivacyPolicy.section1.title"),
      description: (
        <>
          <p>{t("components.PrivacyPolicy.section1.p1")}</p>
          <p>{t("components.PrivacyPolicy.section1.p2")}</p>
          <p>{t("components.PrivacyPolicy.section1.p3")}</p>
          <p>{t("components.PrivacyPolicy.section1.p4")}</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>{t("components.PrivacyPolicy.section1.list.item1")}</li>
            <li>{t("components.PrivacyPolicy.section1.list.item2")}</li>
          </ul>

          <p>{t("components.PrivacyPolicy.section1.p5")}</p>
        </>
      ),
    },
    {
      title: t("components.PrivacyPolicy.section2.title"),
      description: (
        <>
          <p>{t("components.PrivacyPolicy.section2.p1")}</p>

          <p className="text-center font-semibold">
            {t("components.PrivacyPolicy.section2.address")}
          </p>

          <p>{t("components.PrivacyPolicy.section2.p2")}</p>
          <p>{t("components.PrivacyPolicy.section2.p3")}</p>

          <p className="text-center font-semibold">
            📧{" "}
            <a
              href="mailto:contact@lezard-agency.com"
              className="text-blue-500 underline"
            >
              {t("components.PrivacyPolicy.section2.email")}
            </a>
          </p>
        </>
      ),
    },
    {
      title: t("components.PrivacyPolicy.section3.title"),
      description: (
        <>
          <p>{t("components.PrivacyPolicy.section3.p1")}</p>
          <p>{t("components.PrivacyPolicy.section3.p2")}</p>

          <ul className="list-decimal pl-6 space-y-4">
            <li>
              <strong>{t("components.PrivacyPolicy.section3.data1.title")}</strong>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("components.PrivacyPolicy.section3.data1.item1")}</li>
                <li>{t("components.PrivacyPolicy.section3.data1.item2")}</li>
                <li>{t("components.PrivacyPolicy.section3.data1.item3")}</li>
              </ul>
            </li>

            <li>
              <strong>{t("components.PrivacyPolicy.section3.data2.title")}</strong>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("components.PrivacyPolicy.section3.data2.item1")}</li>
                <li>{t("components.PrivacyPolicy.section3.data2.item2")}</li>
                <li>{t("components.PrivacyPolicy.section3.data2.item3")}</li>
                <li>{t("components.PrivacyPolicy.section3.data2.item4")}</li>
                <li>
                  <Trans i18nKey="components.PrivacyPolicy.section3.data2.item5">
                    See more at{" "}
                    <a
                      href="https://lezard-agency.com"
                      className="text-blue-500 underline"
                    >
                      https://lezard-agency.com
                    </a>
                  </Trans>
                </li>
              </ul>
            </li>
          </ul>

          <p>{t("components.PrivacyPolicy.section3.p3")}</p>
        </>
      ),
    },
    {
        title: t("components.PrivacyPolicy.section4.title"),
        description: (
          <>
            <p className="space-y-4 leading-relaxed">
              <strong>Lezard Agency</strong> {t("components.PrivacyPolicy.section4.p1")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section4.p2")}
            </p>
      
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>📌 {t("components.PrivacyPolicy.section4.list.item1")}</li>
              <li>📝 {t("components.PrivacyPolicy.section4.list.item2")}</li>
              <li>📩 {t("components.PrivacyPolicy.section4.list.item3")}</li>
              <li>📞 {t("components.PrivacyPolicy.section4.list.item4")}</li>
              <li>💼 {t("components.PrivacyPolicy.section4.list.item5")}</li>
              <li>🆘 {t("components.PrivacyPolicy.section4.list.item6")}</li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section4.p3")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section4.p4")}
            </p>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section5.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.PrivacyPolicy.section5.subtitle")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section5.p1")}
            </p>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section5.p2")}
            </p>
      
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.PrivacyPolicy.section5.list.item1")}</li>
              <li>{t("components.PrivacyPolicy.section5.list.item2")}</li>
              <li>{t("components.PrivacyPolicy.section5.list.item3")}</li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section5.p3")}
            </p>
      
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>
                <strong>📜 {t("components.PrivacyPolicy.section5.legalBasis.contract.title")}</strong>
                {t("components.PrivacyPolicy.section5.legalBasis.contract.description")}
              </li>
      
              <li>
                <strong>⚖️ {t("components.PrivacyPolicy.section5.legalBasis.legalObligations.title")}</strong>
                {t("components.PrivacyPolicy.section5.legalBasis.legalObligations.description")}
              </li>
      
              <li>
                <strong>📈 {t("components.PrivacyPolicy.section5.legalBasis.legitimateInterest.title")}</strong>
                {t("components.PrivacyPolicy.section5.legalBasis.legitimateInterest.description")}
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("components.PrivacyPolicy.section5.legalBasis.legitimateInterest.item1")}</li>
                  <li>{t("components.PrivacyPolicy.section5.legalBasis.legitimateInterest.item2")}</li>
                  <li>{t("components.PrivacyPolicy.section5.legalBasis.legitimateInterest.item3")}</li>
                  <li>{t("components.PrivacyPolicy.section5.legalBasis.legitimateInterest.item4")}</li>
                </ul>
              </li>
      
              <li>
                <strong>📩 {t("components.PrivacyPolicy.section5.legalBasis.consent.title")}</strong>
                {t("components.PrivacyPolicy.section5.legalBasis.consent.description")}
              </li>
            </ul>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section6.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.PrivacyPolicy.section6.subtitle")}
            </p>
  
            <p className="space-y-4 leading-relaxed">{t("components.PrivacyPolicy.section6.p1")}</p>
  
            <p className="space-y-4 leading-relaxed">{t("components.PrivacyPolicy.section6.p2")}</p>
  
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.staff.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.staff.description")}
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.providers.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.providers.description")}
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("components.PrivacyPolicy.section6.recipients.providers.list.item1")}</li>
                  <li>{t("components.PrivacyPolicy.section6.recipients.providers.list.item2")}</li>
                  <li>{t("components.PrivacyPolicy.section6.recipients.providers.list.item3")}</li>
                  <li>{t("components.PrivacyPolicy.section6.recipients.providers.list.item4")}</li>
                </ul>
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.partners.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.partners.description")}
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.legal.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.legal.description")}
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.government.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.government.description")}
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.ads.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.ads.description")}
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.seo.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.seo.description")}
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.consent.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.consent.description")}
              </li>
  
              <li>
                <strong>{t("components.PrivacyPolicy.section6.recipients.sale.title")}</strong>
                <br />
                {t("components.PrivacyPolicy.section6.recipients.sale.description")}
              </li>
            </ul>
          </>
        ),
      },  
      {
        title: t("components.PrivacyPolicy.section7.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.PrivacyPolicy.section7.subtitle")}
            </p>
    
            <p className="space-y-4 leading-relaxed">
              <strong>Lezard Agency</strong> {t("components.PrivacyPolicy.section7.p1")}
            </p>
    
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>{t("components.PrivacyPolicy.section7.list.item1")}</li>
              <li>{t("components.PrivacyPolicy.section7.list.item2")}</li>
            </ul>
    
            <p className="space-y-4 leading-relaxed">
              📌 <strong>{t("components.PrivacyPolicy.section7.p2")}</strong>
            </p>
    
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>
                <strong>🛍️ {t("components.PrivacyPolicy.section7.dataRetention1.title")}</strong>
                {t("components.PrivacyPolicy.section7.dataRetention1.description")}
              </li>
    
              <li>
                <strong>📜 {t("components.PrivacyPolicy.section7.dataRetention2.title")}</strong>
                {t("components.PrivacyPolicy.section7.dataRetention2.description")}
              </li>
            </ul>
          </>
        ),
      },   
      {
        title: t("components.PrivacyPolicy.section8.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.PrivacyPolicy.section8.subtitle")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              <strong>Lezard Agency</strong> {t("components.PrivacyPolicy.section8.p1")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              ✅ <strong>{t("components.PrivacyPolicy.section8.subtitle2")}</strong> :
            </p>
  
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>🔑 {t("components.PrivacyPolicy.section8.protection1")}</li>
              <li>🔒 {t("components.PrivacyPolicy.section8.protection2")}</li>
            </ul>
  
            <p className="space-y-4 leading-relaxed">
              ⚠️ <strong>{t("components.PrivacyPolicy.section8.subtitle3")}</strong>,{" "}
              <strong>Lezard Agency</strong> {t("components.PrivacyPolicy.section8.p2")}
            </p>
  
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>📢 {t("components.PrivacyPolicy.section8.alert1")}</li>
              <li>📨 {t("components.PrivacyPolicy.section8.alert2")}</li>
              <li>🛡️ {t("components.PrivacyPolicy.section8.alert3")}</li>
            </ul>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section9.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.PrivacyPolicy.section9.subtitle")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section9.p1")}
            </p>
  
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>
                🔍 <strong>{t("components.PrivacyPolicy.section9.rights.access.title")}</strong> :{" "}
                {t("components.PrivacyPolicy.section9.rights.access.description")}
              </li>
              <li>
                ✏️ <strong>{t("components.PrivacyPolicy.section9.rights.modification.title")}</strong> :{" "}
                {t("components.PrivacyPolicy.section9.rights.modification.description")}
              </li>
              <li>
                🗑️ <strong>{t("components.PrivacyPolicy.section9.rights.deletion.title")}</strong> :{" "}
                {t("components.PrivacyPolicy.section9.rights.deletion.description")}
              </li>
              <li>
                ⛔ <strong>{t("components.PrivacyPolicy.section9.rights.restriction.title")}</strong> :{" "}
                {t("components.PrivacyPolicy.section9.rights.restriction.description")}
              </li>
              <li>
                📂 <strong>{t("components.PrivacyPolicy.section9.rights.portability.title")}</strong> :{" "}
                {t("components.PrivacyPolicy.section9.rights.portability.description")}
              </li>
              <li>
                🚫 <strong>{t("components.PrivacyPolicy.section9.rights.opposition.title")}</strong> :{" "}
                {t("components.PrivacyPolicy.section9.rights.opposition.description")}
              </li>
              <li>
                ⚖️ <strong>{t("components.PrivacyPolicy.section9.rights.consent.title")}</strong> :{" "}
                {t("components.PrivacyPolicy.section9.rights.consent.description")}
              </li>
            </ul>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section9.p2")}{" "}
              <a href="https://www.cnil.fr/" className="text-blue-500 underline">
                CNIL
              </a>{" "}
              {t("components.PrivacyPolicy.section9.p3")}
            </p>
  
            <p className="space-y-4 leading-relaxed">
              {t("components.PrivacyPolicy.section9.p4")}
            </p>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section10.title"),
        description: (
          <>
            <p>{t("components.PrivacyPolicy.section10.p1")}</p>
          </>
        ),
      },   
      {
        title: t("components.PrivacyPolicy.section11.title"),
        description: (
          <>
            <p>{t("components.PrivacyPolicy.section11.p1")}</p>
          </>
        ),
      },  
      {
        title: t("components.PrivacyPolicy.section12.title"),
        description: (
          <>
            <p>{t("components.PrivacyPolicy.section12.p1")}</p>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section13.title"),
        description: (
          <>
            <p className="text-xl font-bold mt-6 mb-2">
              {t("components.PrivacyPolicy.section13.subtitle")}
            </p>
      
            <p className="space-y-4 leading-relaxed">{t("components.PrivacyPolicy.section13.p1")}</p>
      
            <p className="space-y-4 leading-relaxed">
              📌 <strong>{t("components.PrivacyPolicy.section13.subtitle2")}</strong>
            </p>
      
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>✅ <strong>{t("components.PrivacyPolicy.section13.option1")}</strong></li>
              <li>
                ❌ <strong>{t("components.PrivacyPolicy.section13.option2")}</strong> 
                <a href="#desactiver-cookies" className="text-blue-500 underline">
                  {t("components.PrivacyPolicy.section13.link")}
                </a>.
              </li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">{t("components.PrivacyPolicy.section13.p2")}</p>
      
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>🔍 <strong>{t("components.PrivacyPolicy.section13.info1")}</strong></li>
              <li>⚙️ <strong>{t("components.PrivacyPolicy.section13.info2")}</strong></li>
              <li>🛠️ <strong>{t("components.PrivacyPolicy.section13.info3")}</strong></li>
            </ul>
      
            <p className="space-y-4 leading-relaxed">
              ⚠️ <strong>{t("components.PrivacyPolicy.section13.warning")}</strong>
            </p>
      
            <p className="space-y-4 leading-relaxed">{t("components.PrivacyPolicy.section13.p3")}</p>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section14.title"),
        description: (
          <>
            <p>{t("components.PrivacyPolicy.section14.p1")}</p>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section15.title"),
        description: (
          <>
            <p>{t("components.PrivacyPolicy.section15.p1")}</p>
          </>
        ),
      },
      {
        title: t("components.PrivacyPolicy.section16.title"),
        description: (
          <>
            <p>
              {t("components.PrivacyPolicy.section16.p1")}{" "}
              <a href="mailto:contact@lezardagency.com" className="text-blue-500 underline">
                contact@lezard-agency.com
              </a>.
            </p>
          </>
        ),
      }
    ];

  return (
    <div className="max-w-2xl mx-auto antialiased pt-4 pb-8 relative">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {legalContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className={twMerge("text-2xl font-bold mb-4")}>
                {item.title}
              </h2>
              <div className="text-sm prose dark:prose-invert space-y-4">
                {item.description}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
