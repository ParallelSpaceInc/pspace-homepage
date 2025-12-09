'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirector() {
  const router = useRouter();

  useEffect(() => {
    // Only redirect if user explicitly chose Korean
    const savedLocale = localStorage.getItem('preferred-locale');

    if (savedLocale === 'ko') {
      router.replace('/ko');
    }
    // Default is English - no redirect needed
  }, [router]);

  return null;
}
