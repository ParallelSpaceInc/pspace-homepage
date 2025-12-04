import type { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import '../styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import { pretendard } from '@/lib/fonts';

import { metadataConfig } from '@/config/metadata';

export const metadata: Metadata = metadataConfig.pSpace;

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} font-sans`} suppressHydrationWarning>
        <LanguageProvider>
          <DataProvider>
            <LayoutContent>{children}</LayoutContent>
          </DataProvider>
        </LanguageProvider>
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
