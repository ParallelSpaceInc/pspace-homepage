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
    if (typeof window === 'undefined') return;

    // Save user's explicit language preference
    localStorage.setItem('preferred-locale', lang);
    const scrollY = window.scrollY;
    setPendingScroll(scrollY);

    // Compute base path (strip /ko or /en prefix if present) and normalize trailing slash
    const rawPath = window.location.pathname || '/';
    const basePathRaw = rawPath.replace(/^\/(ko|en)(?=\/|$)/, '') || '/';
    const basePath = basePathRaw === '/' ? '/' : basePathRaw.replace(/\/$/, '');

    // Prefer client-side navigation with locale option
    try {
      const targetPath = basePath;
      if (router && typeof (router as any).push === 'function') {
        // try next-intl createNavigation (App Router) style: push(href, options)
        try {
          await (router as any).push(targetPath, { locale: lang });
          // Ensure location updates; if it doesn't, fallback after a short delay
          setTimeout(() => {
            if (
              typeof window !== 'undefined' &&
              !window.location.pathname.replace(/\/$/, '').startsWith(targetPath.replace(/\/$/, ''))
            ) {
              console.warn(
                'LanguageContext: router.push did not update location, falling back to full reload',
                { current: window.location.pathname, targetPath },
              );
              window.location.href = targetPath;
            }
          }, 300);
          return;
        } catch (err) {
          console.warn('LanguageContext: router.push threw an error, trying replace', err);
          if (typeof (router as any).replace === 'function') {
            await (router as any).replace(targetPath, { locale: lang });
            console.log('LanguageContext: router.replace succeeded', { targetPath });
            setTimeout(() => {
              if (
                typeof window !== 'undefined' &&
                !window.location.pathname
                  .replace(/\/$/, '')
                  .startsWith(targetPath.replace(/\/$/, ''))
              ) {
                console.warn(
                  'LanguageContext: router.replace did not update location, falling back to full reload',
                  { current: window.location.pathname, targetPath },
                );
                window.location.href = targetPath;
              }
            }, 300);
            return;
          }
        }
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
