import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import ContactClient from '@/app/[locale]/contact/ContactClient';

export const dynamic = 'force-static';

export default async function ContactPage() {
  const messages = await getMessages({ locale: 'en' });

  return (
    <NextIntlClientProvider messages={messages} locale='en'>
      <LanguageProvider>
        <DataProvider>
          <LayoutContent>
            <ContactClient />
          </LayoutContent>
        </DataProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
