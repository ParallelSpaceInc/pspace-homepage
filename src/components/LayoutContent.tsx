'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHiddenPage =
    pathname === '/about/terms-of-service' || pathname === '/about/privacy-policy';

  return (
    <div className='w-full max-w-full flex flex-col min-h-screen overflow-x-hidden'>
      {!isHiddenPage && <Header />}
      <main className='flex-grow flex flex-col'>{children}</main>
      {!isHiddenPage && <Footer />}
    </div>
  );
}
