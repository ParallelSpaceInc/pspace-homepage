import { P_ENGINE_FOR_REVIT_INTRO_IMG0 } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

import { Wand } from 'lucide-react';

export default function PEngineForRevitSection() {
  const { t } = useLanguage();
  return (
    <section className='p-engine-section bg-gradient-to-b from-[#f9fafb] to-[#e8f1f8] to-12% relative size-full py-20 px-4'>
      <div className='max-w-[1280px] mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8'>
        <div className='flex flex-col gap-8 items-start max-w-[500px] w-full order-2 md:order-1 md:ml-10'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2 font-bold text-[#276bb4] text-[18px] md:text-[22px]'>
              <Wand className='w-5 h-5 md:w-6 md:h-6' />
              <p>{t('pEngine.subTitle')}</p>
            </div>
            <h2 className='font-bold text-[#191f28] text-[32px] md:text-[48px] leading-tight whitespace-pre-line'>
              {t('pEngine.title')}
            </h2>
          </div>

          <p
            className='font-medium text-[#6b7684] text-[18px] md:text-[22px] leading-relaxed whitespace-pre-line'
            dangerouslySetInnerHTML={{ __html: t('pEngine.desc') }}
          />

          <button className='bg-[#38beed] text-white font-bold text-[20px] md:text-[25px] px-16 py-2 rounded-md hover:bg-[#2da8d3] transition-colors'>
            {t('pEngine.button')}
          </button>
        </div>

        <div className='relative w-full max-w-[600px] aspect-[4/3] order-1 md:order-2 '>
          <Image
            src={P_ENGINE_FOR_REVIT_INTRO_IMG0}
            alt='P-Engine for Revit'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
}
