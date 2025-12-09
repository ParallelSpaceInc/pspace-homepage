import fs from 'fs';
import path from 'path';
import styles from './page.module.css';
import MarkdownViewer from '@/components/MarkdownViewer';
import { setRequestLocale } from 'next-intl/server';

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const filePath = path.join(
    process.cwd(),
    'src/app/[locale]/about/terms-of-service/terms-of-service.md',
  );
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <MarkdownViewer content={content} />
      </div>
    </div>
  );
}
