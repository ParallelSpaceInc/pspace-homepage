import { useLanguage } from '@/contexts/LanguageContext';
import { VISION0, VISION1, VISION2 } from '@/lib/images';
import Image from 'next/image';

export default function VisionSection() {
  const { t } = useLanguage();
  const features = [
    { icon: VISION0, title: t('features.innovationTitle'), desc: t('features.innovationDesc') },
    { icon: VISION1, title: t('features.realityTitle'), desc: t('features.realityDesc') },
    { icon: VISION2, title: t('features.clarityTitle'), desc: t('features.clarityDesc') },
  ];
  return (
    <section className='vision-section bg-gradient-to-b box-border content-center flex flex-wrap from-[#f9fafb] gap-[80px] items-center lg:items-start justify-center md:flex-col lg:flex-row min-h-[480px] relative size-full to-[#d4d4d4] py-20 px-4 mx-auto'>
      {features.map((feature, index) => (
        <div
          key={index}
          className='content-stretch flex flex-col gap-[20px] items-center justify-between min-w-[273px] text-center relative shrink-0 w-[372px] p-4 h-[320px] md:h-[360px] lg:h-[400px]'
        >
          <div className='flex flex-col gap-4 items-center justify-center'>
            <Image src={feature.icon} width={100} height={100} alt='' />
            <p className='font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#191f28] text-2xl md:text-4xl text-center w-full'>
              {feature.title}
            </p>
          </div>
          <p className='font-semibold leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333d4b] text-lg md:text-xl text-center w-full whitespace-pre-line'>
            {feature.desc}
          </p>
        </div>
      ))}
    </section>
  );
}
