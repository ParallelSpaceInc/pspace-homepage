'use client';

import { Suspense } from 'react';

import EventSection from './components/event-section';
import NewsSection from './components/news-section';
import VendorSection from './components/vendor-section';
import TimelineSection from './components/timeline-section';
import ContactSection from './components/contact-section';

function IntroductionClient() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <div className='w-full flex flex-col items-center'>
        <EventSection />
        <NewsSection />
        <VendorSection />
        <TimelineSection />
        <ContactSection />
      </div>
    </Suspense>
  );
}

export default IntroductionClient;
