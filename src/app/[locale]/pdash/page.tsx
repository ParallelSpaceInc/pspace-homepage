import { setRequestLocale } from 'next-intl/server';
import PDashClient from './PDashClient';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PDashClient />;
}
