'use client';

import React, { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useData } from '@/contexts/DataContext';
import Title from './title';
import { CHECK_ICON } from '@/lib/images';

type TimelineMonth = { month: string; events: string[] };
type TimelineYear = { year: string | number; months: TimelineMonth[] };

function buildFromTranslations(t: any) {
  const historyData = t('history');
  if (!historyData || typeof historyData !== 'object') return [] as TimelineYear[];
  const years = Object.keys(historyData)
    .filter((k) => !['kTitle', 'kMonths'].includes(k))
    .sort((a, b) => Number(b.replace('k', '')) - Number(a.replace('k', '')));
  return years.map((yearKey) => ({
    year: yearKey.replace('k', ''),
    months: Object.keys(historyData[yearKey])
      .sort((a, b) => Number(b.replace('k', '')) - Number(a.replace('k', '')))
      .map((mKey) => ({
        month: t(`history.kMonths.k${mKey.replace('k', '')}`),
        events: (historyData[yearKey][mKey] as string[]).map((s: string) => s),
      })),
  }));
}

export default function TimelineSection() {
  const { t, language } = useLanguage();
  const { history, loading } = useData();

  const timeline = useMemo(() => {
    if (loading) return [];
    if (!history || history.length === 0) {
      return buildFromTranslations(t);
    }

    const map = new Map<number, Map<number, string[]>>();
    history.forEach((r) => {
      const y = Number(r.Year);
      const m = Number(r.Month);
      const content = language === 'ko' ? r.Content : r.Content_en;
      const events =
        typeof content === 'string'
          ? content
              .split('\n')
              .map((s) => s.trim())
              .filter(Boolean)
          : [];
      if (!map.has(y)) map.set(y, new Map<number, string[]>());
      const months = map.get(y)!;
      if (!months.has(m)) months.set(m, []);
      months.get(m)!.push(...events);
    });

    return [...map.entries()]
      .sort((a, b) => Number(b[0]) - Number(a[0]))
      .map(([year, months]) => ({
        year,
        months: [...months.entries()]
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([month, events]) => ({
            month: t(`history.kMonths.k${month}`) ?? String(month),
            events,
          })),
      }));
  }, [history, loading, language, t]);

  const flatTimeline = useMemo(() => {
    const flat: { year: string | number; month: string; events: string[] }[] = [];
    timeline.forEach((y) => {
      y.months.forEach((m) => {
        flat.push({ year: y.year, month: m.month, events: m.events });
      });
    });
    return flat;
  }, [timeline]);

  return (
    <div className='flex flex-col items-center gap-8 w-full max-w-[1000px] py-20 px-4'>
      <Title title={t('history.kTitle')} />
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full'>
        {flatTimeline.map((item, index) => (
          <li key={`${item.year}-${item.month}-${index}`}>
            {index !== 0 && <hr className='bg-[#00274a]' />}
            <div className='timeline-middle'>
              <div className='w-6 h-6 bg-[#00274a] rounded-full flex items-center justify-center p-1'>
                <img src={CHECK_ICON} alt='check' className='w-full h-full brightness-0 invert' />
              </div>
            </div>
            <div
              className={`${
                index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'
              } mb-10 px-4`}
            >
              <time className='font-mono italic text-gray-500 block mb-2 font-bold'>
                {item.year} {item.month}
              </time>
              <div className='flex flex-col gap-1'>
                {item.events.map((event, idx) => (
                  <div
                    key={idx}
                    className='text-lg font-bold text-[#00274a]'
                    dangerouslySetInnerHTML={{ __html: event }}
                  />
                ))}
              </div>
            </div>
            {index !== flatTimeline.length - 1 && <hr className='bg-[#00274a]' />}
          </li>
        ))}
      </ul>
    </div>
  );
}
