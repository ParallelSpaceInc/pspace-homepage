import { setRequestLocale } from 'next-intl/server';
import RevitClient from './RevitClient';

export default async function RevitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RevitClient />;
}
