import type { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import '../../styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import { pretendard } from '@/lib/fonts';
import { metadataConfig } from '@/config/metadata';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const metadata: Metadata = metadataConfig.pSpace;

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

const locales = ['en', 'ko'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${pretendard.variable} font-sans`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            <DataProvider>
              <LayoutContent>{children}</LayoutContent>
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
