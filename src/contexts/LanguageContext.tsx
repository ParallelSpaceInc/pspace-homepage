'use client';
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Language;
  const router = useRouter();
  const pathname = usePathname();
  const tNextIntl = useTranslations();
  const [pendingScroll, setPendingScroll] = useState<number | null>(null);

  const handleSetLanguage = (lang: Language) => {
    // Save user's explicit language preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', lang);
      const scrollY = window.scrollY;
      setPendingScroll(scrollY);
    }
    router.replace(pathname, { locale: lang });
  };

  useEffect(() => {
    if (pendingScroll !== null) {
      window.scrollTo(0, pendingScroll);
      setPendingScroll(null);
    }
  }, [locale]);

  const t = (key: string): any => {
    return tNextIntl.raw(key);
  };

  return (
    <LanguageContext.Provider value={{ language: locale, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
