'use client';

import { Link } from '@/i18n/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import MultilineText from './MultilineText';

export default function Investment() {
  const { t, language } = useLanguage();

  return (
    <section
      className='w-full flex justify-center px-4 md:px-[60px] lg:px-[120px] py-20 lg:py-28'
      style={{
        backgroundImage:
          'radial-gradient(ellipse 1200px 420px at 50% 0%, #00366b 0%, #001c3d 70%, #00142d 100%)',
      }}
    >
      <div className='w-full max-w-[600px] flex flex-col items-center gap-5 text-center'>
        <p className='text-[#7fd3f2] text-[14px] font-semibold tracking-[2.24px]'>
          {t('investment.eyebrow')}
        </p>
        <h2 className='text-white font-extrabold text-[28px] sm:text-[36px] lg:text-[46px] leading-[1.2] tracking-tight'>
          <MultilineText text={t('investment.title')} />
        </h2>
        <p
          className={`text-[#b9c9d8] text-[14px] sm:text-[18px] leading-[1.7] ${language === 'ko' ? 'whitespace-nowrap sm:whitespace-normal' : ''}`}
        >
          <MultilineText text={t('investment.subtitle')} />
        </p>
        <div className='w-full flex flex-col items-center gap-3 pt-2'>
          <Link
            href='/introduction#contact'
            className='w-full sm:w-auto rounded-xl bg-[#37bdec] text-white font-bold text-[17px] text-center px-9 py-4'
          >
            {t('investment.cta')}
          </Link>
          <a href={`mailto:${t('investment.email')}`} className='text-[#7fd3f2] text-[15px] font-semibold'>
            {t('investment.email')}
          </a>
        </div>
      </div>
    </section>
  );
}
