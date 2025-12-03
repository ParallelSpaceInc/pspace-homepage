import { P_HOUSE_INTRO_IMG0, P_HOUSE_LOGO } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function RaemianSection() {
  const { t } = useLanguage();
  return (
    <section className='raemian-section bg-[#e8f1f8] relative size-full py-20 px-4'>
      <div className='max-w-[1280px] mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8'>
        <div className='relative w-full max-w-[600px] aspect-[760/720] order-1 md:mr-auto'>
          <Image src={P_HOUSE_INTRO_IMG0} alt='Raemian' fill className='object-contain' />
        </div>

        <div className='flex flex-col gap-8 items-end max-w-[300px] md:max-w-[500px] w-full order-2 self-end md:self-center mr-10 md:mr-40 md:ml-auto'>
          <div className='flex flex-col gap-1 text-right'>
            <h2 className='font-bold text-[#191f28] text-[32px] md:text-[48px] leading-tight whitespace-pre-line'>
              {t('raemian.title')}
            </h2>
          </div>

          <p className='font-medium text-[#6b7684] text-[18px] md:text-[22px] leading-relaxed whitespace-pre-line text-right'>
            {t('raemian.desc')}
          </p>

          <div className='relative w-[60px] h-[83px] md:w-[90px] md:h-[120px]'>
            <Image
              src={P_HOUSE_LOGO}
              alt='P-House Logo'
              fill
              className='object-contain object-right'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
