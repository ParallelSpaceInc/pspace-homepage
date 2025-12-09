import fs from 'fs';
import path from 'path';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import MarkdownViewer from '@/components/MarkdownViewer';
import styles from '@/app/[locale]/about/terms-of-service/page.module.css';

export const dynamic = 'force-static';

export default async function TermsOfServicePage() {
  const messages = await getMessages({ locale: 'en' });

  const filePath = path.join(
    process.cwd(),
    'src/app/[locale]/about/terms-of-service/terms-of-service.md',
  );
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <NextIntlClientProvider messages={messages} locale='en'>
      <div className={styles.page}>
        <div className={styles.container}>
          <MarkdownViewer content={content} />
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
