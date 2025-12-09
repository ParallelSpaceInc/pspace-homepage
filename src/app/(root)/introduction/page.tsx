import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DataProvider } from '@/contexts/DataContext';
import LayoutContent from '@/components/LayoutContent';
import IntroductionClient from '@/app/[locale]/introduction/IntroductionClient';

export const dynamic = 'force-static';

export default async function IntroductionPage() {
  const messages = await getMessages({ locale: 'en' });

  return (
    <NextIntlClientProvider messages={messages} locale='en'>
      <LanguageProvider>
        <DataProvider>
          <LayoutContent>
            <IntroductionClient />
          </LayoutContent>
        </DataProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}
