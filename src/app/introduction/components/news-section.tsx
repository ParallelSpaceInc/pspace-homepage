'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import Title from './title';
import { fetchIntroData } from '@/lib/fetchIntroData';

interface NewsDataItem {
  date?: string;
  newsSrc?: string;
  imgSrc?: string;
  newsTitle?: string;
  newsInfo?: string;
  newsContent?: string;
}

function NewsSection({ onDataLoaded }: { onDataLoaded?: () => void }) {
  const { t } = useLanguage();

  const [newsData, setNewsData] = useState<NewsDataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(newsData.length / ITEMS_PER_PAGE));

  function handlePage(page: number, e?: React.MouseEvent<HTMLButtonElement>) {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    const prevScroll = typeof window !== 'undefined' ? window.scrollY || window.pageYOffset : 0;
    setCurrentPage(page);
    try {
      // remove focus from the button to avoid browser auto-scrolling the focused element
      if (e && e.currentTarget) {
        (e.currentTarget as HTMLElement).blur();
      }
      if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
        // If some element still has focus, blur it to avoid accidental scrolls
        document.activeElement.blur();
      }
      // Restore scroll to previous position after a frame to avoid reflow jumping to another spot.
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            try {
              window.scrollTo({ top: prevScroll, behavior: 'auto' });
            } catch (e) {
              // ignore
            }
          });
        });
      }
    } catch (err) {
      // ignore
    }
  }

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setIsLoading(true);
      setNewsData([]);
      try {
        const json = await fetchIntroData();
        let rows = (json?.sheets?.news_info?.rows ?? []) as NewsDataItem[];
        rows = rows.sort((a, b) => {
          const ta = a.date ? new Date(a.date).getTime() : 0;
          const tb = b.date ? new Date(b.date).getTime() : 0;
          return tb - ta;
        });
        if (!cancelled) setNewsData(rows);
        if (!cancelled && onDataLoaded) onDataLoaded();
      } catch (e) {
        // ignore
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [onDataLoaded]);

  useEffect(() => {
    setCurrentPage(1);
  }, [newsData]);

  return (
    <div className='news_section flex flex-col items-center gap-8 w-full max-w-[1200px] p-4'>
      <Title title={t('pressReleases')} />

      {isLoading ? (
        <div>Loading...</div>
      ) : newsData.length > 0 ? (
        <>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[480px] sm:min-h-0'>
            {newsData
              .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
              .map((n, idx) => (
                <article
                  key={`${idx}-${n.date ?? ''}-${n.newsTitle ?? ''}`}
                  className='card card-compact bg-white shadow-md overflow-hidden'
                >
                  {n.imgSrc ? (
                    <figure>
                      <Image
                        src={n.imgSrc}
                        alt={n.newsTitle ?? 'news'}
                        width={640}
                        height={360}
                        className='w-full h-[180px] object-cover'
                        unoptimized
                      />
                    </figure>
                  ) : null}
                  <div className='card-body'>
                    <h2 className='card-title text-base font-semibold'>{n.newsTitle}</h2>
                    <p className='text-xs text-gray-500'>{n.newsInfo}</p>
                    <p className='text-sm text-gray-700 line-clamp-4'>{n.newsContent}</p>
                    <div className='card-actions justify-end'>
                      {n.newsSrc ? (
                        <a
                          className='btn btn-sm btn-primary'
                          href={n.newsSrc}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Read
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
          </div>
          <div className='w-full flex items-center justify-center mt-6'>
            <div
              className='flex flex-wrap gap-1 justify-center'
              role='navigation'
              aria-label='Pagination'
            >
              <button
                type='button'
                className='btn btn-xs sm:btn-sm btn-outline'
                onClick={(e) => handlePage(currentPage - 1, e)}
                disabled={currentPage === 1}
                aria-label='Previous page'
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  type='button'
                  className={`btn btn-xs sm:btn-sm ${
                    currentPage === i + 1 ? 'btn-primary' : 'btn-outline'
                  }`}
                  onClick={(e) => handlePage(i + 1, e)}
                  aria-label={`Page ${i + 1}`}
                  aria-current={currentPage === i + 1}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type='button'
                className='btn btn-xs sm:btn-sm btn-outline'
                onClick={(e) => handlePage(currentPage + 1, e)}
                disabled={currentPage === totalPages}
                aria-label='Next page'
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center p-8 text-gray-500 text-center'>
          <p>{t('noNewsData')}</p>
        </div>
      )}
    </div>
  );
}

export default NewsSection;

