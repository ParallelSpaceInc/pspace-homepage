import {
  USE_CASES0,
  USE_CASES1,
  USE_CASES2,
  USE_CASES3,
  USE_CASES4,
  USE_CASES5,
} from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

import { StaticImageData } from 'next/image';

interface UseCaseCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  subtitle?: string;
  desc: string;
}

function UseCaseCard({ imageSrc, title, subtitle, desc }: UseCaseCardProps) {
  return (
    <div className='flex flex-col gap-8 w-full max-w-xl mx-auto p-4'>
      <div className='relative aspect-square w-full max-w-[300px] mx-auto p-2.5'>
        <div className='relative w-full h-full'>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className='object-contain object-center'
            sizes='(max-width: 768px) 100vw, 300px'
          />
        </div>
      </div>
      <div className='flex flex-col gap-5 items-start text-left w-full'>
        <h3 className='font-bold text-[#333d4b] text-2xl md:text-3xl leading-tight'>
          {title}
          {subtitle && <span className='text-xl md:text-2xl font-normal ml-2'>{subtitle}</span>}
        </h3>
        <p className='font-semibold text-[#6b7684] text-lg md:text-xl leading-relaxed whitespace-pre-line'>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function UseCasesSection() {
  const { t } = useLanguage();

  const useCases = [
    {
      imageSrc: USE_CASES0,
      title: t('useCases.smartFactory.title'),
      desc: t('useCases.smartFactory.desc'),
    },
    {
      imageSrc: USE_CASES1,
      title: t('useCases.smartMarine.title'),
      desc: t('useCases.smartMarine.desc'),
    },
    {
      imageSrc: USE_CASES2,
      title: t('useCases.asBuilt.title'),
      desc: t('useCases.asBuilt.desc'),
    },
    {
      imageSrc: USE_CASES3,
      title: t('useCases.robotSim.title'),
      desc: t('useCases.robotSim.desc'),
    },
    {
      imageSrc: USE_CASES4,
      title: t('useCases.print3d.title'),
      desc: t('useCases.print3d.desc'),
    },
    {
      imageSrc: USE_CASES5,
      title: t('useCases.vfx.title'),
      subtitle: t('useCases.vfx.subtitle'),
      desc: t('useCases.vfx.desc'),
    },
  ];

  return (
    <section className='use-cases-section bg-[#F9FAFB] py-20 px-4 w-full'>
      <div className='max-w-[1280px] mx-auto w-full'>
        {/* Header - left aligned with underline */}
        <div className='text-left border-b-2 border-gray-300 pb-6 mb-8'>
          <h3 className='font-bold text-heading-base sm:text-heading-sm md:text-heading-md text-[#191f28] whitespace-pre-line'>
            {t('useCases.title')}
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 w-full'>
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              imageSrc={useCase.imageSrc}
              title={useCase.title}
              subtitle={useCase.subtitle}
              desc={useCase.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
