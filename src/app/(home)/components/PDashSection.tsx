import { P_DASH_INTRO_IMG0 } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

import { Wand } from 'lucide-react';

export default function PDashSection() {
  const { t } = useLanguage();
  return (
    <section className='p-dash-section bg-[#e8f1f8] relative size-full py-20 px-4'>
      <div className='max-w-[1280px] mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8'>
        <div className='relative w-full max-w-[600px] aspect-[4/3] order-1'>
          <Image src={P_DASH_INTRO_IMG0} alt='P-Dash' fill className='object-contain' />
        </div>

        <div className='flex flex-col gap-8 items-start max-w-[500px] w-full order-2 md:ml-10'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2 font-bold text-[#276bb4] text-[18px] md:text-[22px]'>
              <Wand className='w-5 h-5 md:w-6 md:h-6' />
              <p>{t('pDash.subTitle')}</p>
            </div>
            <h2 className='font-bold text-[#191f28] text-[32px] md:text-[48px] leading-tight whitespace-pre-line'>
              {t('pDash.title')}
            </h2>
          </div>

          <p className='font-bold text-[#6b7684] text-[18px] md:text-[22px] leading-relaxed whitespace-pre-line'>
            {t('pDash.desc')}
          </p>

          <button className='bg-[#38beed] text-white font-bold text-[20px] md:text-[25px] px-16 py-2  rounded-md hover:bg-[#2da8d3] transition-colors'>
            {t('pDash.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
