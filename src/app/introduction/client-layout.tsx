'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface IntroductionLayoutProps {
  children: React.ReactNode;
}

function SearchParamsIntroductionLayout({ children }: IntroductionLayoutProps) {
  const search_params = useSearchParams();
  const router = useRouter();
  const contact_us_section_ref = useRef<HTMLDivElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [newsLoaded, setNewsLoaded] = useState(false);

  const scrollToContactSection = () => {
    if (contact_us_section_ref.current) {
      const offset = -120;
      const top = contact_us_section_ref.current.offsetTop + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const section_idx = search_params.get('intro');
    if (section_idx === '4' && newsLoaded) {
      // 뉴스 로딩이 완료된 후 스크롤
      setTimeout(() => {
        scrollToContactSection();
      }, 100);
    }
    setIsInitialLoad(false);
  }, [search_params, router, isInitialLoad, newsLoaded]);

  return (
    <div className='content flex flex-col items-center p-4 mx-auto mt-0 sm:mt-16 w-full max-w-[1200px] justify-start min-h-screen gap-12 md:gap-16'>
      {children}
    </div>
  );
}

export default function IntroductionClientLayout({ children }: IntroductionLayoutProps) {
  return (
    <Suspense
      fallback={
        <div className='content flex flex-col items-center p-4 mx-auto mt-32 w-full max-w-[1200px] justify-start min-h-screen gap-12 md:gap-16'>
          <div>Loading...</div>
        </div>
      }
    >
      <SearchParamsIntroductionLayout>{children}</SearchParamsIntroductionLayout>
    </Suspense>
  );
}
