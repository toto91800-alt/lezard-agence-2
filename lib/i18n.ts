import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Minimal client-side i18n instance so consumers can import it.
// You can extend resources/languages later as needed.
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .init({
      lng: 'fr',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      resources: {},
      // Set this to 'languageOnly' if you add region-specific locales later
      load: 'languageOnly',
      react: { useSuspense: false },
    })
    .catch(() => {
      // Avoid throwing during initialization to keep the app resilient
    });
}

// Load translations from /public/locales/{lng}/translation.json on the client
if (typeof window !== 'undefined') {
  const supportedLanguages = ['en', 'fr', 'es', 'de'];
  const loadLanguage = async (lang: string) => {
    try {
      const response = await fetch(`/locales/${lang}/translation.json`, { cache: 'no-store' });
      if (!response.ok) return;
      const json = await response.json();
      const namespace = 'translation';
      const hasBundle = i18next.hasResourceBundle(lang, namespace);
      if (!hasBundle) {
        i18next.addResourceBundle(lang, namespace, json, true, true);
      }
    } catch {
      // Silently ignore missing locale files
    }
  };

  // Preload all known languages once
  Promise.all(supportedLanguages.map(loadLanguage)).then(() => {
    // Try to use the browser language if supported, otherwise default to French
    const browserLang = navigator?.language?.slice(0, 2);
    if (browserLang && supportedLanguages.includes(browserLang)) {
      i18next.changeLanguage(browserLang).catch(() => {
        // If browser language fails, fallback to French
        i18next.changeLanguage('fr').catch(() => {});
      });
    } else {
      // Default to French if browser language is not supported
      i18next.changeLanguage('fr').catch(() => {});
    }
  });
}

export default i18next;


