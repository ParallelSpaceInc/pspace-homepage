'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  TECH3_P_ENGINE_BANNER,
  TECH3_P_HOUSE_BANNER,
  TECH3_MESH_POINTCLOUD,
  TECH3_SOLID_FACTORY_SIM,
  TECH3_MOVE_IN_2D_TO_3D,
} from '@/lib/images';
import MultilineText from './MultilineText';

function Tag({ label }: { label: string }) {
  const { language } = useLanguage();
  // ponytail: en labels ("Shipbuilding"/"Construction"/"Manufacturing") are much wider than ko's
  // 2 chars -- shrink size/padding/tracking for en only so all 3 still fit on one row, down to
  // the narrowest mobile card width (320px viewport).
  const sizeClass =
    language === 'en'
      ? 'text-[9px] tracking-normal px-1.5 py-1'
      : 'text-[12px] tracking-[0.96px] px-[18px] py-[4px]';
  return (
    <span className={`rounded-full bg-[#b3c0cd] text-white font-bold whitespace-nowrap ${sizeClass}`}>
      {label}
    </span>
  );
}

function Card({
  tag,
  title,
  image,
  caption,
  tags,
}: {
  tag: string;
  title: string;
  image: string;
  caption: string;
  tags: string[];
}) {
  const { language } = useLanguage();
  const tagGap = language === 'en' ? 'gap-x-1' : 'gap-x-2';
  return (
    <div className='w-full 2xl:w-[364px] flex flex-col gap-3 items-center rounded-lg bg-white p-6 shadow-[0_0_6px_1px_rgba(0,0,0,0.2)]'>
      <div className='w-full flex flex-col'>
        <p className='text-[#0a2540] font-extrabold text-[24px]'>{tag}</p>
        <p className='text-[#53616f] font-semibold text-[18px]'>{title}</p>
      </div>
      <div className='w-full aspect-[316/240] overflow-hidden'>
        <img alt='' className='size-full object-cover' src={image} />
      </div>
      <p className='w-full text-[#53616f] font-semibold text-[14px] leading-[1.4] min-h-[calc(1.4em*3)]'>
        <MultilineText text={caption} />
      </p>
      <div className='h-px w-full bg-[#cdd6df]' />
      <div className={`flex flex-wrap ${tagGap} gap-y-2 w-full`}>
        {tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

export default function Tech3() {
  const { t } = useLanguage();
  const industryTags = [t('tech3.shipbuilding'), t('tech3.construction'), t('tech3.manufacturing')];

  return (
    <section className='w-full flex justify-center bg-white px-4 md:px-[60px] lg:px-[120px] pb-10'>
      <div className='w-full max-w-[1200px] flex flex-col 2xl:flex-row border-t border-[#cdd6df]'>
        <div className='flex-1 flex flex-col gap-5 items-start py-6 px-0 2xl:p-6'>
          <img
            alt='P-Engine'
            className='h-[48px] w-auto object-contain'
            src={TECH3_P_ENGINE_BANNER.src}
          />
          <div className='flex flex-col 2xl:flex-row gap-2 w-full'>
            <Card
              tag={t('tech3.meshTag')}
              title={t('tech3.meshTitle')}
              image={TECH3_MESH_POINTCLOUD.src}
              caption={t('tech3.meshCaption')}
              tags={industryTags}
            />
            <Card
              tag={t('tech3.solidTag')}
              title={t('tech3.solidTitle')}
              image={TECH3_SOLID_FACTORY_SIM.src}
              caption={t('tech3.solidCaption')}
              tags={industryTags}
            />
          </div>
        </div>
        <div className='flex flex-col items-start 2xl:items-end gap-5 py-6 px-0 2xl:p-6'>
          <img
            alt='P-House'
            className='h-[48px] w-auto self-start object-contain'
            src={TECH3_P_HOUSE_BANNER.src}
          />
          <Card
            tag={t('tech3.moveInTag')}
            title={t('tech3.moveInTitle')}
            image={TECH3_MOVE_IN_2D_TO_3D.src}
            caption={t('tech3.moveInCaption')}
            tags={[t('tech3.constructionWork'), t('tech3.facilityMgmt')]}
          />
        </div>
      </div>
    </section>
  );
}
