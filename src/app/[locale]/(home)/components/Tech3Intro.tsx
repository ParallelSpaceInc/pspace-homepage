'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  TECH3_ROW1_SHIPBUILDING,
  TECH3_ROW1_CONSTRUCTION,
  TECH3_ROW1_MANUFACTURING,
  TECH3_ROW2_SHIPBUILDING,
  TECH3_ROW2_CONSTRUCTION,
  TECH3_ROW2_MANUFACTURING,
  TECH3_ROW3_QUALITY,
  TECH3_ROW3_FACILITY,
} from '@/lib/images';

function Tile({ image, label }: { image: string; label: string }) {
  const { language } = useLanguage();
  const fontSize =
    language === 'ko'
      ? 'text-[26px] sm:text-[34px] lg:text-[32px]'
      : 'text-[16px] sm:text-[21px] lg:text-[19px]';
  return (
    <div className='relative flex-1 min-w-0 h-[140px] sm:h-[180px] lg:h-[220px] overflow-hidden'>
      <img alt='' className='absolute inset-0 size-full object-cover' src={image} />
      <div className='absolute inset-0 bg-black/40' />
      <div className='absolute inset-0 flex items-center justify-center px-2'>
        <span className={`block w-full min-w-0 text-center break-words leading-tight text-white font-bold ${fontSize}`}>
          {label}
        </span>
      </div>
    </div>
  );
}

function Row({
  numeral,
  tag,
  title,
  desc,
  tiles,
}: {
  numeral: string;
  tag: string;
  title: string;
  desc: string;
  tiles: { image: string; label: string }[];
}) {
  return (
    <div className='w-full flex flex-col lg:flex-row items-stretch gap-4 border-t border-[#cdd6df] py-2 lg:py-0'>
      <div className='flex-1 flex flex-col gap-4 justify-start lg:pl-4 lg:py-2'>
        <div className='flex items-center gap-3 text-[#0a2540]'>
          <span className='font-bold text-[28px] lg:text-[40px] tracking-tight'>{numeral}</span>
          <span className='font-bold text-[24px] lg:text-[36px] tracking-tight'>{tag}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[#53616f] text-[18px] lg:text-[24px]'>{title}</p>
          <p className='text-[#53616f] text-[13px] lg:text-[14px] leading-[1.6]'>{desc}</p>
        </div>
      </div>
      <div className='flex-1 flex'>
        {tiles.map((tile) => (
          <Tile key={tile.label} image={tile.image} label={tile.label} />
        ))}
      </div>
    </div>
  );
}

export default function Tech3Intro() {
  const { t, language } = useLanguage();
  // ponytail: "Three Technology Areas" doesn't fit the ko-sized heading on one line -- shrink for en only.
  const headingSize = language === 'en' ? 'text-[24px] lg:text-[32px]' : 'text-[32px] lg:text-[44px]';
  const industryTiles = (row: 1 | 2) => [
    {
      image: row === 1 ? TECH3_ROW1_SHIPBUILDING.src : TECH3_ROW2_SHIPBUILDING.src,
      label: t('tech3.shipbuilding'),
    },
    {
      image: row === 1 ? TECH3_ROW1_CONSTRUCTION.src : TECH3_ROW2_CONSTRUCTION.src,
      label: t('tech3.construction'),
    },
    {
      image: row === 1 ? TECH3_ROW1_MANUFACTURING.src : TECH3_ROW2_MANUFACTURING.src,
      label: t('tech3.manufacturing'),
    },
  ];

  return (
    <section
      id='tech3'
      className='w-full flex justify-center bg-white px-4 md:px-[60px] lg:px-[120px] py-16 lg:py-24'
    >
      <div className='w-full max-w-[1200px] flex flex-col gap-8 lg:gap-12'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-start'>
            <span className={`text-[#0a2540] font-extrabold ${headingSize} tracking-tight leading-[1.18]`}>
              {t('tech3.introHeadingLine1')}
            </span>
            <span className={`bg-[#37bdec] text-white font-extrabold ${headingSize} tracking-tight leading-[1.18] px-1`}>
              {t('tech3.introHeadingLine2')}
            </span>
          </div>
          <p className='text-[#475e74] text-[16px] lg:text-[18px] leading-[1.6] tracking-tight'>
            {t('tech3.introSubtitleLine1Pre')}
            <b className='font-bold'>{t('tech3.introSubtitleLine1Bold1')}</b>
            {t('tech3.introSubtitleLine1Mid')}
            <b className='font-bold'>{t('tech3.introSubtitleLine1Bold2')}</b>
            {t('tech3.introSubtitleLine1Post')}
            <br />
            <b className='font-bold'>{t('tech3.introSubtitleLine2Bold1')}</b>
            {t('tech3.introSubtitleLine2Mid')}
            <b className='font-bold'>{t('tech3.introSubtitleLine2Bold2')}</b>
            {t('tech3.introSubtitleLine2Post')}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <Row
            numeral={t('tech3.row1Numeral')}
            tag={t('tech3.row1Tag')}
            title={t('tech3.row1Title')}
            desc={t('tech3.row1Desc')}
            tiles={industryTiles(1)}
          />
          <Row
            numeral={t('tech3.row2Numeral')}
            tag={t('tech3.row2Tag')}
            title={t('tech3.row2Title')}
            desc={t('tech3.row2Desc')}
            tiles={industryTiles(2)}
          />
          <Row
            numeral={t('tech3.row3Numeral')}
            tag={t('tech3.row3Tag')}
            title={t('tech3.row3Title')}
            desc={t('tech3.row3Desc')}
            tiles={[
              { image: TECH3_ROW3_QUALITY.src, label: t('tech3.qualityMgmt') },
              { image: TECH3_ROW3_FACILITY.src, label: t('tech3.facilityMgmt') },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
