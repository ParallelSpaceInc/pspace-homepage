import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import PDashClient from '@/app/[locale]/pdash/PDashClient';

export const dynamic = 'force-static';

export default async function PDashPage() {
  const messages = await getMessages({ locale: 'en' });

  return (
    <NextIntlClientProvider messages={messages} locale='en'>
      <LanguageProvider>
        <DataProvider>
          <LayoutContent>
            <PDashClient />
          </LayoutContent>
        </DataProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
