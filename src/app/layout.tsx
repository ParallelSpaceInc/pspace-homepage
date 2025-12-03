import type { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import '../styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LayoutContent from '@/components/LayoutContent';
import { pretendard } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Parallel Space',
  description: 'Parallel Space Homepage',
};

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
          <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
      </body>
      {process.env.NODE_ENV === 'production' && (
        <>
          {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
          {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        </>
      )}
    </html>
  );
}
