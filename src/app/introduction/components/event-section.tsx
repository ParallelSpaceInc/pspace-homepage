'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useData } from '@/contexts/DataContext';
import Title from './title';

function EventSection() {
  const { t } = useLanguage();
  const { events, loading } = useData();

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const ta = a.date ? new Date(a.date).getTime() : 0;
      const tb = b.date ? new Date(b.date).getTime() : 0;
      return tb - ta;
    });
  }, [events]);

  return (
    <section className='event_section flex flex-col items-center gap-8 w-full py-20 px-4'>
      <Title title={t('eventsAndOngoing')} />
      <div className='image_container flex flex-row items-center justify-center gap-8 flex-wrap w-full max-w-[1200px]'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          sortedEvents.map((img, idx) =>
            img.external_link && img.external_link !== '' ? (
              <a
                key={idx}
                className='image_wrapper relative w-[min(500px,90vw)] max-w-[1000px]'
                href={img.external_link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={img.image_link?.trim() ?? ''}
                  alt={img.alt}
                  width={500}
                  height={200}
                  className='w-full h-auto max-w-[1024px]'
                  unoptimized
                />
              </a>
            ) : (
              <div key={idx} className='image_wrapper relative w-[min(500px,90vw)] max-w-[1000px]'>
                <Image
                  src={img.image_link?.trim() ?? ''}
                  alt={img.alt}
                  width={500}
                  height={200}
                  className='w-full h-auto max-w-full'
                  unoptimized
                />
              </div>
            ),
          )
        )}
      </div>
    </section>
  );
}

export default EventSection;
