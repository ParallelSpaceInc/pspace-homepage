'use client';

import React, { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useData } from '@/contexts/DataContext';
import Title from './title';

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

export default function TimelineSectionCached() {
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

  return (
    <div className='flex flex-col items-center gap-8 w-full max-w-[600px] py-20 px-4'>
      <Title title={t('history.kTitle')} />
      <div className='timeline_list flex flex-col gap-8 w-full'>
        {timeline.map(({ year, months }) => (
          <div key={String(year)} className='timeline_item flex flex-col gap-4 w-full max-w-full'>
            <h2 className='text-[#00274a] font-bold text-2xl'>{year}</h2>
            {months.map(({ month, events }) => (
              <div key={String(month)} className='flex items-start gap-2'>
                <span className='w-24 font-semibold text-base whitespace-nowrap'>{month}</span>
                <div className='flex flex-col w-full'>
                  {events.map((event: string, idx: number) => (
                    <div
                      key={idx}
                      className='text-sm text-[#334155] leading-6'
                      dangerouslySetInnerHTML={{ __html: event }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
