'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirector() {
  const router = useRouter();

  useEffect(() => {
    // 1. 사용자가 명시적으로 선택한 언어 확인
    const savedLocale = localStorage.getItem('preferred-locale');

    if (savedLocale === 'ko') {
      router.replace('/ko/');
      return;
    }

    if (savedLocale === 'en') {
      return; // 영어 선택 시 루트에 유지
    }

    // 2. 저장된 선호도가 없으면 브라우저 언어 감지
    const browserLang = navigator.language || '';
    const isKorean = browserLang.toLowerCase().startsWith('ko');

    if (isKorean) {
      router.replace('/ko/');
    }
    // 그 외는 영어로 유지 (기본 루트)
  }, [router]);

  return null;
}
