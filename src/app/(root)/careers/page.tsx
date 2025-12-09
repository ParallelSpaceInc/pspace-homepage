import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import CareersClient from '@/app/[locale]/careers/CareersClient';

export const dynamic = 'force-static';

export default async function CareersPage() {
  const messages = await getMessages({ locale: 'en' });

  return (
    <NextIntlClientProvider messages={messages} locale='en'>
      <LanguageProvider>
        <DataProvider>
          <LayoutContent>
            <CareersClient />
          </LayoutContent>
        </DataProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
