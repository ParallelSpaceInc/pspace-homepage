'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Language;
  const tNextIntl = useTranslations();
  const router = useRouter();

  const handleSetLanguage = (lang: Language) => {
    if (typeof window === 'undefined') return;

    // Save user's explicit language preference
    localStorage.setItem('preferred-locale', lang);

    // Compute base path (strip /ko or /en prefix if present)
    const rawPath = window.location.pathname || '/';
    const basePath = rawPath.replace(/^\/(ko|en)(?=\/|$)/, '').replace(/\/$/, '') || '/';

    // trailingSlash: true 설정과 일관성 유지
    const targetUrl =
      lang === 'ko'
        ? basePath === '/'
          ? '/ko/'
          : `/ko${basePath}/`
        : basePath === '/'
          ? '/'
          : `${basePath}/`;

    // Next.js 클라이언트 라우터로 이동 — 같은 페이지가 두 로케일 모두 정적으로 생성되어 있어
    // 하드 리로드(window.location.href) 없이도 이동 가능하고, 전환 중 흰 화면이 사라진다.
    router.replace(targetUrl);
  };

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
