'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import pEngineImage from '@/assets/d148b9c998e00fa8c1ed922a264dbb3a0dfc49af.png';

export default function PEngineSection() {
  const { t } = useLanguage();

  return (
    <section className='w-full relative'>
      <div className='bg-gray-50 box-border content-center flex flex-wrap gap-0 items-center justify-center px-0 py-[150px] relative size-full'>
        <div className='basis-0 grow min-h-px min-w-px relative shrink-0'>
          <div className='flex flex-row items-center justify-center size-full'>
            <div className='box-border content-center flex flex-wrap gap-[20px] items-center justify-center px-[320px] py-0 relative w-full'>
              {/* Text Content */}
              <div className='content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[400px]'>
                {/* Title & Subtitle */}
                <div className='content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0'>
                  <div className='content-stretch flex gap-[10px] items-center relative shrink-0'>
                    <div className='flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#276bb4] text-[22px] text-nowrap'>
                      <p className='leading-[1.45] whitespace-pre'>{t('pEngine.subTitle')}</p>
                    </div>
                  </div>
                  <div className='content-stretch flex flex-col gap-[20px] items-start relative shrink-0'>
                    <div className='flex flex-col font-bold justify-center leading-[1.45] not-italic relative shrink-0 text-[#191f28] text-[48px] text-nowrap whitespace-pre-line'>
                      <p className='mb-0'>{t('pEngine.title')}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className='relative shrink-0 w-full'>
                  <div className='flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full'>
                    <div className='box-border content-stretch flex gap-[10px] items-center justify-end px-[8px] py-[20px] relative w-full'>
                      <div className='basis-0 flex flex-col font-semibold grow justify-center leading-[1.55] min-h-px min-w-px not-italic relative shrink-0 text-[#6b7684] text-[22px]'>
                        <p className='whitespace-pre-line mb-0'>{t('pEngine.desc')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div
                  className='bg-[#38beed] box-border content-stretch flex gap-[10px] h-[60px] items-center justify-center overflow-clip px-[92px] py-[16px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#31a8d1] transition-colors'
                  data-name='button'
                >
                  <div className='flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-gray-50 text-nowrap'>
                    <p className='leading-none whitespace-pre'>{t('pEngine.button')}</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className='aspect-[3441/2701] basis-0 grow min-h-[259.032px] min-w-[330px] relative shrink-0'
                data-name='자산 21 1'
              >
                <Image
                  alt='P-Engine'
                  className='absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full'
                  src={pEngineImage}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

