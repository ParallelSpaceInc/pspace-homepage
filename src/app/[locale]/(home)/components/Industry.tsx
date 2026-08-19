'use client';

import type { ReactNode } from 'react';
import { Boxes, Lock, RulerDimensionLine, Settings, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  INDUSTRY_P_ENGINE_BANNER,
  INDUSTRY_CASE_CJ_DEVIATION,
  INDUSTRY_CASE_KITECH_DEVIATION,
  INDUSTRY_CASE_HMG_DEVIATION,
} from '@/lib/images';
import MultilineText from './MultilineText';

function StrengthChip({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className='flex-1 min-w-[140px] flex flex-col gap-2 rounded-lg border border-[#eef1f4] bg-white/[0.08] px-3 pt-3 pb-2'>
      <div className='flex items-center gap-2'>
        <Icon className='size-5 text-[#e1f6fb]' />
        <p className='text-[#e1f6fb] font-extrabold text-[15px] sm:text-[16px]'>{title}</p>
      </div>
      <p className='text-[#e1f6fb] text-[13px] sm:text-[14px] leading-[1.6]'>{desc}</p>
    </div>
  );
}

function IndustryTag({ label }: { label: string }) {
  const { language } = useLanguage();
  // ponytail: en labels ("Shipbuilding"/"Construction"/"Manufacturing") are much wider than ko's
  // 2 chars -- shrink size/padding/tracking for en only so all 3 still fit on one row.
  const sizeClass =
    language === 'en'
      ? 'text-[8px] tracking-normal px-2 py-0.5'
      : 'text-[12px] tracking-[0.96px] px-[18px] py-[2px]';
  return (
    <span className={`rounded-full bg-[#aec0ce] border border-[#aec0ce] text-white font-bold whitespace-nowrap ${sizeClass}`}>
      {label}
    </span>
  );
}

function CaseStudy({
  title,
  code,
  desc,
  rows,
  industries,
  image,
  industryLabel,
}: {
  title: string;
  code: string;
  desc: string;
  rows: { label: string; text: ReactNode }[];
  industries: string[];
  image: string;
  industryLabel: string;
}) {
  const { language } = useLanguage();
  // ponytail: ko labels are 2 chars ("문제"/"해결"/"가치"/"구현") so they don't need the 78px
  // column en labels ("Problem"/"Solution") need to avoid wrapping - narrower on mobile for ko only.
  const labelWidth = language === 'ko' ? 'w-[42px] sm:w-[78px]' : 'w-[78px]';
  return (
    <div className='w-full flex flex-col-reverse 2xl:flex-row gap-7 items-stretch border border-[#e6ebf0] bg-white px-6 sm:px-10 py-8 2xl:p-[49px]'>
      <div className='flex-1 w-full flex flex-col justify-between gap-3'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <span className='text-[#0a2540] font-extrabold text-[20px] sm:text-[24px]'>{title}</span>
            <span className='text-[#9aa7b4] font-extrabold text-[18px] sm:text-[22px]'>{code}</span>
            <p className='text-[#6b7885] font-bold text-[15px] sm:text-[16px]'>
              <MultilineText text={desc} />
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            {rows.map((r) => (
              <div key={r.label} className='flex items-baseline gap-1 sm:gap-2'>
                <span className={`shrink-0 ${labelWidth} text-[#37bdec] font-bold text-[14px]`}>{r.label}</span>
                <span className='text-[#3a4a57] text-[14px]'>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-3 flex-wrap'>
          <span className='text-[13.6px] text-[#6b7885]'>{industryLabel}</span>
          <span className='h-4 w-px bg-[#e6ebf0]' />
          <div className={`flex items-center flex-wrap ${language === 'en' ? 'gap-1.5' : 'gap-3'}`}>
            {industries.map((ind) => (
              <IndustryTag key={ind} label={ind} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full 2xl:w-[626px] shrink-0 aspect-[626/368] overflow-hidden bg-white'>
        <img alt='' className='size-full object-cover' src={image} />
      </div>
    </div>
  );
}

export default function Industry() {
  const { t, language } = useLanguage();
  // ponytail: en heading text is longer than ko's, so 23px (tuned for ko at 375px) overflows - shrink for en only.
  const headingSize = language === 'ko' ? 'text-[23px]' : 'text-[20px]';
  // ponytail: en subtitle is much longer than ko's, so 16px (tuned for ko) wraps each half of the
  // mobile-only comma break onto 2 lines each (4 total) - shrink for en only so it's 2 lines total.
  const subtitleSize = language === 'ko' ? 'text-[16px]' : 'text-[13px]';

  const caseRows = (prefix: 'case1' | 'case2' | 'case3') => {
    const rows: { label: string; text: ReactNode }[] = [
      { label: t('industry.caseLabelProblem'), text: t(`industry.${prefix}Problem`) },
      { label: t('industry.caseLabelSolution'), text: t(`industry.${prefix}Solution`) },
      { label: t('industry.caseLabelValue'), text: t(`industry.${prefix}Value`) },
      { label: t('industry.caseLabelImpl'), text: t(`industry.${prefix}Impl`) },
    ];
    // ponytail: case2's problem line wraps mid-word on mobile - force the break after
    // "상태가 달라" so mobile reads as 2 clean clauses instead of an awkward wrap. ko only,
    // en copy doesn't share this wording.
    if (prefix === 'case2' && language === 'ko') {
      const problem = t('industry.case2Problem');
      const marker = '상태가 달라 ';
      const idx = problem.indexOf(marker);
      if (idx !== -1) {
        const breakAt = idx + marker.length;
        rows[0] = {
          ...rows[0],
          text: (
            <>
              {problem.slice(0, breakAt).trimEnd()}
              <br className='sm:hidden' />
              {problem.slice(breakAt)}
            </>
          ),
        };
      }
    }
    return rows;
  };

  return (
    <section
      id='industry'
      className='w-full flex justify-center bg-white px-4 md:px-[60px] lg:px-[120px] py-16 lg:py-24'
    >
      <div className='w-full max-w-[1200px] flex flex-col gap-14'>
        <div className='w-full flex flex-col lg:flex-row items-start justify-between gap-6'>
          <img
            alt='P-Engine'
            className='w-[220px] sm:w-[306px] object-contain'
            src={INDUSTRY_P_ENGINE_BANNER.src}
          />
          <div className='w-full lg:w-auto flex flex-col items-end gap-2 text-right'>
            <h2
              className={`text-[#0a2540]/80 font-extrabold ${headingSize} sm:text-[36px] lg:text-[44px] leading-[1.18] tracking-tight whitespace-nowrap`}
            >
              <span className='font-normal'>{t('industry.headingLead')}</span>
              <br />
              <span className='text-[#0fb6d8]'>{t('industry.headingBold')}</span>
            </h2>
            <p className={`text-[#53616f] ${subtitleSize} sm:text-[18px]`}>
              {(() => {
                const subtitle = t('industry.subtitle');
                const breakAt = subtitle.indexOf(',') + 1;
                return (
                  <>
                    {subtitle.slice(0, breakAt)}
                    <br className='sm:hidden' />
                    {subtitle.slice(breakAt).trimStart()}
                  </>
                );
              })()}
            </p>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <h3 className='text-[#004592] font-bold text-[22px] sm:text-[27px] text-left'>
            {t('industry.coreStrengthTitle')}
          </h3>
          <div className='w-full flex flex-col gap-2 bg-[#00336e] p-6 sm:p-11'>
            <p className='text-white font-extrabold text-[15px] sm:text-[24px]'>
              <MultilineText text={t('industry.coreStrengthHeadline')} />
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-5'>
              <StrengthChip
                icon={RulerDimensionLine}
                title={t('industry.chip1Title')}
                desc={t('industry.chip1Desc')}
              />
              <StrengthChip
                icon={Settings}
                title={t('industry.chip2Title')}
                desc={t('industry.chip2Desc')}
              />
              <StrengthChip
                icon={Lock}
                title={t('industry.chip3Title')}
                desc={t('industry.chip3Desc')}
              />
              <StrengthChip
                icon={Boxes}
                title={t('industry.chip4Title')}
                desc={t('industry.chip4Desc')}
              />
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col gap-5'>
          <h3 className='text-[#004592] font-bold text-[22px] sm:text-[27px] text-left'>
            {t('industry.caseStudiesTitle')}
          </h3>
          <CaseStudy
            title={t('industry.case1Title')}
            code={t('industry.case1Code')}
            desc={t('industry.case1Desc')}
            rows={caseRows('case1')}
            industries={t('industry.case1Industries')}
            image={INDUSTRY_CASE_CJ_DEVIATION.src}
            industryLabel={t('industry.caseIndustryLabel')}
          />
          <CaseStudy
            title={t('industry.case2Title')}
            code={t('industry.case2Code')}
            desc={t('industry.case2Desc')}
            rows={caseRows('case2')}
            industries={t('industry.case2Industries')}
            image={INDUSTRY_CASE_KITECH_DEVIATION.src}
            industryLabel={t('industry.caseIndustryLabel')}
          />
          <CaseStudy
            title={t('industry.case3Title')}
            code={t('industry.case3Code')}
            desc={t('industry.case3Desc')}
            rows={caseRows('case3')}
            industries={t('industry.case3Industries')}
            image={INDUSTRY_CASE_HMG_DEVIATION.src}
            industryLabel={t('industry.caseIndustryLabel')}
          />
        </div>
      </div>
    </section>
  );
}
