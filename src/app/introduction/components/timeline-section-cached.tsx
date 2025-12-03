'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useLanguage } from '@/contexts/LanguageContext';
import Title from './title';

type RawRow = {
  year: number | string;
  month: number | string;
  content_ko: string;
  content_en: string;
};
type TimelineMonth = { month: string; events: string[] };
type TimelineYear = { year: string | number; months: TimelineMonth[] };

// simple session cache (module cache kept to avoid re-builds across instances)
const CACHE_PREFIX = 'pspace_timeline_v1';
const timelineCache = new Map<string, TimelineYear[]>();

const DATA_URL =
  'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgDcCfnHZlno13ksBtVYliuBtF0oZcJb-NqVEbc3bXIbEnXRP8VwfTyesC9Vp0hSKnmkS9tf9e0bxgjdrBbQfPJFsw0EtSNgSmtJBw7-BY9KwQMWAukuOH7i1yz4VfF1xDE2fuTo8ZaSPTXPQSTD0P7WE8sQPdt-SSsvLafkTG2xNlv0PRZsd6fzUl6xaqED_9jyTJONvvH7dsPYnxEULBRaJRPRUDWQDQPVm2Q0Pggpn0jK5cKWkJjVRE2dijZ35F_GHDQjqQirnTOR_yu6C2KGnz3PFUjYDXs20Pccgm7TlPbQa4&lib=M9riBmCoI6vPeyNqzia5YQy-8s-iUc7Ug';

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
  const [timeline, setTimeline] = useState<TimelineYear[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const swrKey = `timeline:${language}`;
  const sessionKey = `${CACHE_PREFIX}_${language}`;

  // check sessionStorage fallback on client
  let initialData: TimelineYear[] | undefined;
  if (typeof window !== 'undefined') {
    try {
      const cached = sessionStorage.getItem(sessionKey);
      if (cached) initialData = JSON.parse(cached).timeline;
    } catch (e) {
      // ignore
    }
  }

  const fetcher = async (): Promise<TimelineYear[]> => {
    const res = await fetch(DATA_URL);
    const json = await res.json();
    const rows: RawRow[] = json?.sheets?.history?.rows ?? [];
    if (!rows.length) {
      const built = buildFromTranslations(t);
      try {
        sessionStorage.setItem(
          sessionKey,
          JSON.stringify({ lastUpdated: json?.lastUpdated, timeline: built }),
        );
        timelineCache.set(language, built);
      } catch (e) {
        // ignore
      }
      return built;
    }
    const map = new Map<number, Map<number, string[]>>();
    rows.forEach((r: RawRow) => {
      const y = Number(r.year);
      const m = Number(r.month);
      const content = language === 'ko' ? r.content_ko : r.content_en;
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
    const built: TimelineYear[] = [...map.entries()]
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
    try {
      sessionStorage.setItem(
        sessionKey,
        JSON.stringify({ lastUpdated: json?.lastUpdated, timeline: built }),
      );
      timelineCache.set(language, built);
    } catch (e) {
      // ignore
    }
    return built;
  };

  const {
    data: swrData,
    error: swrError,
    isLoading,
  } = useSWR<TimelineYear[]>(swrKey, fetcher, {
    fallbackData: initialData,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    dedupingInterval: 60000,
    revalidateIfStale: true,
  });

  useEffect(() => {
    if (swrData) setTimeline(swrData);
  }, [swrData]);

  useEffect(() => {
    if (swrError) setError('Failed to load timeline data');
  }, [swrError]);

  useEffect(() => {
    setLoading(Boolean(isLoading));
  }, [isLoading]);

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
