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

  const handleSetLanguage = async (lang: Language) => {
    console.log('LanguageContext: setLanguage called', { lang, pathname, currentLocale: locale });

    if (typeof window === 'undefined') return;

    // Save user's explicit language preference
    localStorage.setItem('preferred-locale', lang);
    const scrollY = window.scrollY;
    setPendingScroll(scrollY);

    // Compute base path (strip /ko or /en if present)
    const rawPath = window.location.pathname || '/';
    const basePath = rawPath.replace(/^\/(ko|en)(?=\/|$)/, '') || '/';
    console.log('LanguageContext: basePath', basePath);

    // Prefer client-side navigation with locale option
    try {
      if (router) {
        // next-intl router.push signature is (pathname, options)
        router.push(basePath, { locale: lang });
        return;
      }
    } catch (err) {
      console.warn('router.push failed, falling back to window.location', err);
    }

    // Fallback: build URL with prefix when needed (ko uses /ko prefix, en is default no-prefix)
    const fallbackUrl = lang === 'ko' ? (basePath === '/' ? '/ko' : `/ko${basePath}`) : basePath;
    window.location.href = fallbackUrl;
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
