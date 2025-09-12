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

export default i18next;


