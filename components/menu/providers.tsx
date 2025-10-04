'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      themes={['dark', 'custom', 'light']} // j’ai ajouté "light" pour plus de flexibilité
      defaultTheme="custom"               // ✅ custom par défaut
      enableSystem={false}                // ✅ n’applique pas le mode système
    >
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </ThemeProvider>
  );
}
