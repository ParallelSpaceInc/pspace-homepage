'use client';

import { Suspense } from 'react';

import EventSection from './components/event-section';
import NewsSection from './components/news-section';
import VendorSection from './components/vendor-section';
import TimelineSection from './components/timeline-section-cached';

function IntroductionPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <EventSection />
      <NewsSection />
      <VendorSection />
      <TimelineSection />
    </Suspense>
  );
}

export default IntroductionPage;
