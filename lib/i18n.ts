'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importe les fichiers JSON (assure-toi que ces chemins existent)
import en from '@/locales/en/translation.json';
import fr from '@/locales/fr/translation.json';
import es from '@/locales/es/translation.json';
import de from '@/locales/de/translation.json';

// Les ressources embarquées dans le bundle
const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  de: { translation: de },
} as const;

type SupportedLng = keyof typeof resources;

// Évite de réinitialiser i18n si déjà initialisé (HMR / React strict mode)
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector) // détection côté client
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      supportedLngs: Object.keys(resources) as SupportedLng[],
      debug: process.env.NODE_ENV === 'development',
      interpolation: { escapeValue: false },
      // La détection ne doit s’exécuter que dans le navigateur
      detection:
        typeof window !== 'undefined'
          ? {
              order: ['cookie', 'localStorage', 'navigator'],
              caches: ['cookie'],
            }
          : undefined,
      // Empêche i18next d'attendre un backend
      initImmediate: false,
      returnEmptyString: false,
    });
}

export default i18n;
