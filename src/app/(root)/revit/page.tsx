import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import RevitClient from '@/app/[locale]/revit/RevitClient';

export const dynamic = 'force-static';

export default async function RevitPage() {
  const messages = await getMessages({ locale: 'en' });

  return (
    <NextIntlClientProvider messages={messages} locale='en'>
      <LanguageProvider>
        <DataProvider>
          <LayoutContent>
            <RevitClient />
          </LayoutContent>
        </DataProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
