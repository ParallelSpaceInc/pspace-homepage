'use client';
import Image from 'next/image';
import { REVIT_ADDIN } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RevitPage() {
  const { t } = useLanguage();

  const featureTags = [
    { id: 1, label: t('revitPage.features.autoMesh') },
    { id: 2, label: t('revitPage.features.revitIntegration') },
    { id: 3, label: t('revitPage.features.digitalTwin') },
    { id: 4, label: t('revitPage.features.workEfficiency') },
  ];

  return (
    <section className='flex-grow flex flex-col justify-center w-full bg-gradient-to-b from-[#e8f1f8] to-[#d8e8f4] py-20 px-4'>
      <div className='w-full max-w-[1280px] mx-auto'>
        {/* Hero Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24'>
          {/* Left Content */}
          <div className='flex flex-col gap-6 lg:gap-8'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 self-start'>
              <div className='w-6 h-6 bg-[#276ab3] rounded-full flex items-center justify-center'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z' fill='white' />
                </svg>
              </div>
              <span className='text-[#276ab3] font-semibold text-sm md:text-base'>
                {t('revitPage.badge')}
              </span>
            </div>

            {/* Title */}
            <h1 className='text-heading-base sm:text-heading-sm md:text-heading-md font-bold text-[#191f28] leading-tight'>
              {t('revitPage.title')}
            </h1>

            {/* Feature Tags */}
            <div className='flex flex-wrap gap-2'>
              {featureTags.map((tag) => (
                <span
                  key={tag.id}
                  className='inline-flex items-center px-4 py-2 bg-[#276bb4] text-white font-semibold text-sm rounded-full'
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className='text-[#6b7684] text-subheading-base sm:text-subheading-sm md:text-subheading-md leading-relaxed'
              dangerouslySetInnerHTML={{ __html: t('revitPage.desc') }}
            />
          </div>

          {/* Right Image */}
          <div className='relative w-full aspect-[4/3] flex items-center justify-center'>
            <Image
              src={REVIT_ADDIN}
              alt='P-Engine for Revit demonstration'
              width={600}
              height={450}
              className='w-full h-auto object-contain drop-shadow-2xl'
              priority
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className='flex flex-col items-center gap-6 text-center'>
          <h2 className='text-heading-base sm:text-heading-sm md:text-heading-md font-bold text-[#191f28]'>
            {t('revitPage.ctaTitle')}
          </h2>

          <a
            href='/p-engine-revit-addin-1.0.0-SingleUser.msi'
            download
            className='inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 bg-[#38beed] text-white font-semibold text-lg md:text-xl rounded-lg hover:bg-[#2da8d8] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#38beed]/50 shadow-lg hover:shadow-xl'
            aria-label='Download P-Engine for Revit'
          >
            <span>{t('revitPage.download')}</span>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 3V13M10 13L6 9M10 13L14 9M3 17H17'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
