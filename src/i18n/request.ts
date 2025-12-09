import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically varies based on the path (e.g. /en/about vs /ko/about)
  // For static export, requestLocale is populated
  let locale = await requestLocale;

  // Ensure that incoming `locale` is valid
  if (!locale || !['en', 'ko'].includes(locale)) {
    locale = 'en'; // default locale (English)
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
