import { setRequestLocale } from 'next-intl/server';
import HomeClient from './HomeClient';
import { redirect } from 'next/navigation';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  setRequestLocale(locale);
  return <HomeClient />;
}
