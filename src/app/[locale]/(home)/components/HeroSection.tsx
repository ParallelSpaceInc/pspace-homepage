'use client';

import { Link } from '@/i18n/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { HERO_P_ENGINE_MOCKUP, HERO_P_HOUSE_MOCKUP } from '@/lib/images';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import MultilineText from './MultilineText';

function ProductCard({
  image,
  caption,
  anchor,
  className = '',
}: {
  image: string;
  caption: string;
  anchor: string;
  className?: string;
}) {
  return (
    // h-full: the parent's default "stretch" (flex row on mobile's CarouselItem, grid row on the
    // desktop side-by-side layout) already equalizes each slot's height to the tallest sibling -
    // h-full lets this button (and its flex-1 caption box below) fill that stretched height
    // instead of just its own content, so captions of different line counts (long en text vs
    // short ko) still end up with equal-height cards, sized to whichever is actually tallest.
    <button
      type='button'
      onClick={() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })}
      className={`flex h-full flex-col gap-2 items-center cursor-pointer transition-transform duration-200 hover:scale-[1.03] ${className}`}
    >
      {/* aspect matches the mockup's own intrinsic ratio (868x942) so object-cover never crops it */}
      <div className='relative w-full aspect-[868/942] rounded-xl overflow-hidden bg-white'>
        <img alt='' className='absolute inset-0 size-full object-cover' src={image} />
      </div>
      <div className='w-full flex flex-1 flex-col items-center justify-center rounded-xl border border-[#e4eaef] bg-white px-4 py-[19px]'>
        <p className='text-[13px] leading-[18px] text-[#53616f] text-center'>
          <MultilineText text={caption} />
        </p>
      </div>
    </button>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id='hero'
      className='w-full flex justify-center px-4 md:px-[60px] lg:px-[120px] py-10 lg:py-12 bg-white'
    >
      {/* ponytail: side-by-side (fixed 600px image column) only kicks in at xl -- at lg (1024-1279)
          with this section's padding there isn't 600px + readable text room, so it stays stacked
          on the slider layout below until xl guarantees the space. */}
      <div className='w-full max-w-[1200px] flex flex-col xl:flex-row gap-10 lg:gap-[60px] items-center'>
        <div className='flex-1 w-full flex flex-col gap-5 items-start min-w-0'>
          <h1 className='text-[#0b2239] font-bold text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.15]'>
            <MultilineText text={t('mainHero.titleLine1')} />
            <span className='block'>
              <span className='text-[#1cb6ec]'>{t('mainHero.titleLine2Highlight')}</span>
              {t('mainHero.titleLine2Rest')}
            </span>
          </h1>
          <div className='flex flex-col gap-4 w-full'>
            <p className='text-[#475e74] text-[16px] sm:text-[18px] leading-[1.7]'>
              <MultilineText text={t('mainHero.body')} />
            </p>
            <Link
              href='/introduction#contact'
              className='w-full sm:w-auto rounded-xl bg-[#0fb6d8] px-[26px] py-[15px] text-white font-semibold text-[16px] text-center whitespace-nowrap sm:self-start'
            >
              {t('mainHero.ctaPrimary')}
            </Link>
          </div>
        </div>

        {/* mobile/tablet/small-laptop: swipeable card carousel (peek-next, no dots/arrows) */}
        <div className='w-full xl:hidden'>
          <Carousel opts={{ align: 'start', dragFree: true }}>
            <CarouselContent className='-ml-3'>
              <CarouselItem className='pl-3 basis-[78%] sm:basis-[45%]'>
                <ProductCard
                  image={HERO_P_ENGINE_MOCKUP.src}
                  caption={t('mainHero.pEngineCaption')}
                  anchor='industry'
                  className='w-full'
                />
              </CarouselItem>
              <CarouselItem className='pl-3 basis-[78%] sm:basis-[45%]'>
                <ProductCard
                  image={HERO_P_HOUSE_MOCKUP.src}
                  caption={t('mainHero.pHouseCaption')}
                  anchor='phouse'
                  className='w-full'
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* desktop: side by side, no slider needed. grid (not flex) because a flex row's
            "stretch" doesn't reliably fill a `height:100%` item's cross size the way a grid
            row's stretch fills a cell - grid gives both cards the actual tallest-caption height
            for free, per locale, no fixed/guessed pixel value needed. */}
        <div className='hidden xl:grid grid-cols-2 gap-6 w-[600px] shrink-0'>
          <ProductCard
            className='min-w-0'
            image={HERO_P_ENGINE_MOCKUP.src}
            caption={t('mainHero.pEngineCaption')}
            anchor='industry'
          />
          <ProductCard
            className='min-w-0'
            image={HERO_P_HOUSE_MOCKUP.src}
            caption={t('mainHero.pHouseCaption')}
            anchor='phouse'
          />
        </div>
      </div>
    </section>
  );
}
