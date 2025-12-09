import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import '../../styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import { pretendard } from '@/lib/fonts';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import HomeClient from '../[locale]/(home)/HomeClient';
import RootRedirector from '@/app/(root)/RootRedirector';

// This is a Server Component
export const dynamic = 'force-static';

export default async function RootPage() {
  const messages = await getMessages({ locale: 'en' });
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang='en'>
      <body className={`${pretendard.variable} font-sans`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale='en'>
          <LanguageProvider>
            <DataProvider>
              <LayoutContent>
                <RootRedirector />
                <HomeClient />
              </LayoutContent>
            </DataProvider>
          </LanguageProvider>
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && (
          <>
            {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
            {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
          </>
        )}
      </body>
    </html>
  );
}
