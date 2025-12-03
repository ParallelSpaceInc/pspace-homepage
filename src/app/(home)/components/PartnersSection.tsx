import { PARTNER_LOGOS } from '@/lib/images';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PartnersSection() {
  const { t } = useLanguage();
  return (
    <section className='partners-section bg-gray-50 relative size-full py-20 px-4 overflow-hidden'>
      <div className='flex flex-col items-center size-full justify-center max-w-[1280px] mx-auto gap-12'>
        <div className='w-full flex justify-start'>
          <div className='flex flex-col font-bold leading-[1.4] text-[#191f28] text-heading-base sm:text-heading-sm md:text-heading-md text-left whitespace-pre-line'>
            {t('partners.title')}
          </div>
        </div>

        <div className='w-full overflow-hidden'>
          <Marquee gradient={false} speed={40} pauseOnHover={false}>
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={index}
                className='mx-8 flex items-center justify-center h-20 w-30 relative transition-all duration-300'
              >
                <Image src={logo.src} alt={logo.alt} fill className='object-contain' />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
