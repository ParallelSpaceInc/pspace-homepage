'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  BIZ_EXPANSION_HMGMA_FACTORY,
  BIZ_EXPANSION_HMGMA_DIGITAL_TWIN,
  BIZ_EXPANSION_MOBILE_CONNECTOR,
  BIZ_EXPANSION_DESKTOP_CONNECTOR,
} from '@/lib/images';

export default function BizExpansion() {
  const { t, language } = useLanguage();
  // ponytail: mobile-only 4-line break for en's newBodyLine1Bold ("every object and relationship
  // within a space") -- split at " and " instead of hardcoding the halves, so it still tracks the
  // translation if the copy changes.
  const line1Bold = t('bizExpansion.newBodyLine1Bold');
  const line1BoldBreakAt = line1Bold.indexOf(' and ');

  return (
    <section className='w-full flex justify-center bg-[#f0f2f5] border-y border-[#eef1f4] px-4 md:px-[60px] lg:px-[120px] py-16 lg:py-[105px]'>
      {/* mobile: stacked vertical layout (Figma node 519:296) */}
      <div className='w-full max-w-[1200px] flex sm:hidden flex-col items-center gap-7'>
        <div className='w-full flex flex-col items-start gap-4'>
          <h2 className='text-[#0a2540] font-extrabold text-[20px] leading-[1.4] tracking-[-0.88px]'>
            {t('bizExpansion.titleLine1')}
            <br />
            {t('bizExpansion.titleLine2')}
          </h2>
          <p className='text-[#53616f] text-[12px] leading-[1.4]'>
            {t('bizExpansion.newBodyLine1Pre')}
            {/* mobile-only line break: en's newBodyLine1Bold splits mid-clause ("every object" /
                "and relationship within a space") to match the intended 4-line mobile wrap */}
            <b className='font-extrabold'>
              {language === 'ko' || line1BoldBreakAt === -1 ? (
                line1Bold
              ) : (
                <>
                  {line1Bold.slice(0, line1BoldBreakAt)}
                  <br />
                  {line1Bold.slice(line1BoldBreakAt + 1)}
                </>
              )}
            </b>
            {t('bizExpansion.newBodyLine1Post')}
            <br />
            <b className='font-extrabold'>{t('bizExpansion.newBodyLine2Bold1')}</b>
            {/* mobile-only line break: en's newBodyLine2Mid1 starts a new line after Bold1 to
                match the intended 4-line mobile wrap */}
            {language !== 'ko' && <br />}
            {t('bizExpansion.newBodyLine2Mid1')}
            <b className='font-extrabold'>{t('bizExpansion.newBodyLine2Bold2')}</b>
            {/* mobile-only 3rd line break: split newBodyLine2Mid2 (", 평행공간의 ") right after
                its leading comma so "," stays on line 2 and "평행공간의" starts line 3 */}
            {language === 'ko' ? (
              <>
                ,
                <br />
                {t('bizExpansion.newBodyLine2Mid2').replace(/^,\s*/, '')}
              </>
            ) : (
              t('bizExpansion.newBodyLine2Mid2')
            )}
            <b className='font-extrabold'>{t('bizExpansion.newBodyLine2Bold3')}</b>
            {t('bizExpansion.newBodyLine2Post')}
          </p>
          <div className='flex flex-col gap-2 w-full'>
            <div className='h-px w-full bg-[#e6ebf0]' />
            <p className='text-[#666] text-[10px] leading-[1.6] flex flex-wrap gap-x-2'>
              <span className='shrink-0'>{t('bizExpansion.footnoteLabel')}</span>
              <span>{t('bizExpansion.footnoteText')}</span>
            </p>
          </div>
        </div>
        <div className='w-full flex flex-col items-center gap-2'>
          <div className='w-full aspect-[3/2] rounded-xl overflow-hidden'>
            <img
              alt='HMGMA 공장'
              className='size-full object-cover'
              src={BIZ_EXPANSION_HMGMA_FACTORY.src}
            />
          </div>
          <img
            alt=''
            className='h-[152px] w-[104px] object-contain'
            src={BIZ_EXPANSION_MOBILE_CONNECTOR.src}
          />
          <div className='w-full aspect-[3/2] rounded-xl overflow-hidden'>
            <img
              alt='HMGMA 디지털트윈 관리화면'
              className='size-full object-cover'
              src={BIZ_EXPANSION_HMGMA_DIGITAL_TWIN.src}
            />
          </div>
        </div>
      </div>

      {/* tablet/desktop: side-by-side layout */}
      <div className='w-full max-w-[1200px] hidden sm:flex flex-col items-center gap-8'>
        <div className='w-full flex flex-col items-start gap-6 lg:gap-[48px]'>
          <h2 className='text-[#0b2239] font-extrabold text-[38px] lg:text-[44px] leading-[1.4] tracking-tight'>
            {t('bizExpansion.titleLine1')}
            <br />
            {t('bizExpansion.titleLine2')}
          </h2>
          <p className='text-[#53616f] text-[20px] lg:text-[24px] leading-[1.4]'>
            {t('bizExpansion.newBodyLine1Pre')}
            <b className='font-extrabold'>{t('bizExpansion.newBodyLine1Bold')}</b>
            {t('bizExpansion.newBodyLine1Post')}
            <br />
            <b className='font-extrabold'>{t('bizExpansion.newBodyLine2Bold1')}</b>
            {t('bizExpansion.newBodyLine2Mid1')}
            <b className='font-extrabold'>{t('bizExpansion.newBodyLine2Bold2')}</b>
            {t('bizExpansion.newBodyLine2Mid2')}
            <b className='font-extrabold'>{t('bizExpansion.newBodyLine2Bold3')}</b>
            {t('bizExpansion.newBodyLine2Post')}
          </p>
          <div className='flex flex-col gap-2 w-full'>
            <div className='h-px w-full bg-[#e6ebf0]' />
            <p className='text-[#666] text-[14px] leading-[1.6] flex flex-wrap gap-x-2'>
              <span className='shrink-0'>{t('bizExpansion.footnoteLabel')}</span>
              <span>{t('bizExpansion.footnoteText')}</span>
            </p>
          </div>
        </div>
        <div className='w-full flex items-center gap-4'>
          <div className='flex-1 min-w-0 aspect-[1536/1024] rounded-xl overflow-hidden'>
            <img
              alt='HMGMA 공장'
              className='size-full object-cover'
              src={BIZ_EXPANSION_HMGMA_FACTORY.src}
            />
          </div>
          <img
            alt=''
            className='h-[104px] w-auto object-contain shrink-0'
            src={BIZ_EXPANSION_DESKTOP_CONNECTOR.src}
          />
          <div className='flex-1 min-w-0 aspect-[1536/1024] rounded-xl overflow-hidden'>
            <img
              alt='HMGMA 디지털트윈 관리화면'
              className='size-full object-cover'
              src={BIZ_EXPANSION_HMGMA_DIGITAL_TWIN.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
