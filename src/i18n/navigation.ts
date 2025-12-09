import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ko'] as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
