import { setRequestLocale } from 'next-intl/server';
import IntroductionClient from './IntroductionClient';

export default async function IntroductionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IntroductionClient />;
}
