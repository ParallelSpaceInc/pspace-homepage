'use client';

import { Link } from '@/i18n/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useData, type NewsDataItem } from '@/contexts/DataContext';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const PLACEHOLDER_BG = {
  backgroundImage:
    'repeating-linear-gradient(135deg, #eef3f8 0px, #eef3f8 6px, #e5ecf3 6px, #e5ecf3 12px)',
};

function NewsCard({ item, imagePlaceholder }: { item: NewsDataItem; imagePlaceholder: string }) {
  const source = item.newsInfo?.split(',')[0]?.trim() || '';
  const year = item.date?.slice(0, 4) || '';
  const Card = item.newsSrc ? 'a' : 'div';

  return (
    <Card
      {...(item.newsSrc
        ? { href: item.newsSrc, target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      // `block` is load-bearing: an <a> defaults to display:inline, which is invisible here
      // because CSS auto-blockifies flex items — the desktop grid (a flex row) hid the bug,
      // but inside the mobile Carousel this card sits in a plain (non-flex) div, so it stayed
      // inline. A border/background on an inline box wrapping block children paints in
      // fragmented line-box pieces instead of one rect, which is why the outline only ever
      // showed at the corners. `block` makes this render the same in both places.
      className='block w-full flex-1 min-w-[260px] rounded-2xl border border-[#d5dbe1] bg-white overflow-hidden transition-transform duration-200 hover:scale-[1.03]'
    >
      <div className='h-[170px] border-b border-[#dbe3ec] overflow-hidden'>
        {item.imgSrc ? (
          <img src={item.imgSrc} alt={item.newsTitle} className='w-full h-full object-cover' />
        ) : (
          <div className='h-full flex items-center justify-center' style={PLACEHOLDER_BG}>
            <span className='rounded-xl bg-white/85 text-[#9aa7b4] text-[11px] px-[10px] py-[7px]'>
              {imagePlaceholder}
            </span>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-3 p-6'>
        <span className='text-[#37bdec] font-semibold text-[12px] tracking-[0.96px]'>{source}</span>
        <p className='text-[#0a2540] font-extrabold text-[17px] leading-[1.45] line-clamp-2'>
          {item.newsTitle}
        </p>
        <div className='flex items-center gap-2 text-[#9aa7b4] text-[13px] font-semibold pt-1'>
          <span>{year}</span>
          {item.newsSrc && <span>· Read ↗</span>}
        </div>
      </div>
    </Card>
  );
}

export default function News() {
  const { t } = useLanguage();
  const { news, loading } = useData();

  const items = [...news]
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())
    .slice(0, 3);

  return (
    <section
      id='news'
      className='w-full flex justify-center bg-white px-4 md:px-[60px] lg:px-[120px] py-16 lg:py-[104px]'
    >
      <div className='w-full max-w-[1200px] flex flex-col gap-8 lg:gap-11'>
        <div className='flex items-end justify-between'>
          <h2 className='text-[#0a2540] font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] tracking-tight'>
            {t('news.title')}
          </h2>
          <Link
            href='/introduction#press-releases'
            className='text-[#004592] font-semibold text-[15px] whitespace-nowrap'
          >
            {t('news.viewAll')}
          </Link>
        </div>
        {!loading && items.length === 0 ? (
          <p className='text-[#9aa7b4] text-[15px]'>{t('noNewsData')}</p>
        ) : (
          <>
            {/* mobile: swipeable card carousel (peek-next, fixed card width) */}
            <div className='sm:hidden'>
              <Carousel opts={{ align: 'start', dragFree: true }}>
                <CarouselContent className='-ml-4'>
                  {items.map((item) => (
                    <CarouselItem
                      key={item.newsSrc || item.newsTitle}
                      className='pl-4 basis-[280px] shrink-0'
                    >
                      <NewsCard item={item} imagePlaceholder={t('news.imagePlaceholder')} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* tablet/desktop: side by side, no slider needed */}
            <div className='hidden sm:flex gap-6'>
              {items.map((item) => (
                <NewsCard
                  key={item.newsSrc || item.newsTitle}
                  item={item}
                  imagePlaceholder={t('news.imagePlaceholder')}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
