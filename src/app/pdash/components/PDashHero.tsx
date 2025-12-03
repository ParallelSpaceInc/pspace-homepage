import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { P_DASH_HERO_IMAGE } from '@/lib/images';
import { Wand } from 'lucide-react';

export default function PDashHero() {
  const { t } = useLanguage();

  return (
    <section id='PDashHero' className='w-full relative bg-[#e8f1f8]'>
      <div className='max-w-[1280px] mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
        {/* Text Content */}
        <div className='flex flex-col items-start gap-8 w-full lg:w-1/2'>
          {/* Badge & Title */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Wand className='w-5 h-5 md:w-6 md:h-6 text-[#276bb4]' />
              <span className='font-bold text-[#276bb4] text-lg md:text-xl'>
                {t('pdashPage.hero.badge')}
              </span>
            </div>
            <h1 className='font-bold text-[#191f28] text-4xl md:text-5xl lg:text-6xl leading-tight whitespace-pre-line'>
              {t('pdashPage.hero.title')}
            </h1>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {[
              t('pdashPage.hero.tags.realtime'),
              t('pdashPage.hero.tags.custom'),
              t('pdashPage.hero.tags.heatmap'),
              t('pdashPage.hero.tags.webMobile'),
              t('pdashPage.hero.tags.sensors'),
            ].map((tag, index) => (
              <span
                key={index}
                className='bg-[#276bb4] text-white px-3 py-1 rounded-full text-sm md:text-base font-semibold'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className='font-medium text-[#6b7684] text-lg md:text-xl leading-relaxed whitespace-pre-line'
            dangerouslySetInnerHTML={{ __html: t('pdashPage.hero.desc') }}
          />
        </div>

        {/* Hero Image */}
        <div className='w-full lg:w-1/2 relative'>
          <div className='relative w-full rounded-[20px] overflow-hidden'>
            <Image
              src={P_DASH_HERO_IMAGE}
              alt='P-Dash Hero'
              className='w-full h-auto block'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
