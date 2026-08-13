'use client';

import { usePathname } from 'next/navigation';
// Figma-redesign header/footer, now the site-wide header/footer (previously homepage-only —
// see MainHeader/MainFooter for the anchor links that only resolve on the homepage).
import MainHeader from '@/app/[locale]/(home)/components/MainHeader';
import MainFooter from '@/app/[locale]/(home)/components/MainFooter';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHiddenPage =
    pathname === '/about/terms-of-service' || pathname === '/about/privacy-policy';

  return (
    <div className='w-full max-w-full flex flex-col min-h-screen overflow-x-hidden'>
      {!isHiddenPage && <MainHeader />}
      <main className='flex-grow flex flex-col'>{children}</main>
      {!isHiddenPage && <MainFooter />}
    </div>
  );
}
