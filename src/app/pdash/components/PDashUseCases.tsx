import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { P_DASH_STRAWBERRY_FACTORY, P_DASH_STAR_ICON, P_DASH_PROFILE_ICON } from '@/lib/images';

export default function PDashUseCases() {
  const { t } = useLanguage();
  const features = t('pdashPage.useCases.smartFarmFeatures') as string[];

  return (
    <section id='PDashUseCases' className='w-full relative'>
      <div className='bg-[#e8f1f8] box-border flex flex-col items-center relative size-full py-20 px-4'>
        {/* Header */}
        <div className='flex flex-col items-center gap-4 mb-12 max-w-[1280px] w-full text-center md:text-left'>
          <h2 className='font-bold text-[#191f28] text-heading-base sm:text-heading-sm md:text-heading-md whitespace-pre-line'>
            {t('pdashPage.useCases.title')}
          </h2>
          <p className='font-semibold text-[#6b7684] text-subheading-base sm:text-subheading-sm md:text-subheading-md whitespace-pre-line'>
            {t('pdashPage.useCases.subtitle')}
          </p>
        </div>

        {/* Use Case Card */}
        <div className='relative w-full max-w-[1280px] rounded-[30px] overflow-hidden shadow-xl flex flex-col group'>
          {/* Blurred Background Layer */}
          <div className='absolute inset-0 z-0'>
            <Image
              src={P_DASH_STRAWBERRY_FACTORY}
              alt=''
              fill
              className='object-cover blur-2xl scale-110 brightness-[0.5]'
            />
          </div>

          {/* Content Layer - Grid Layout */}
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 p-6 md:p-10'>
            {/* Text Info - Order 1 on Mobile, Col 1 on Desktop */}
            <div className='order-1 lg:col-span-7 flex flex-col gap-6 text-white text-left items-start'>
              {/* Badge */}
              <div className='bg-[#276bb4] px-5 py-2 rounded-full w-fit'>
                <span className='font-semibold text-sm md:text-base text-white'>
                  {t('pdashPage.useCases.smartFarmBadge')}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-3xl md:text-4xl leading-tight'>
                  {t('pdashPage.useCases.smartFarmTitle')}
                </h3>
                <p className='font-medium text-[#70bbeb] text-xl md:text-2xl'>
                  {t('pdashPage.useCases.smartFarmSubtitle')}
                </p>
              </div>

              {/* Features List */}
              <ul className='flex flex-col gap-3 mt-2'>
                {features.map((feature, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#70bbeb] mt-2.5 shrink-0' />
                    <span className='text-lg text-gray-100 leading-relaxed'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Review Card - Order 3 on Mobile, Col 2 on Desktop (Aligned Bottom) */}
            <div className='order-3 lg:order-2 lg:col-span-5 w-full lg:w-[420px] lg:justify-self-end self-end shrink-0'>
              <div className='bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl flex flex-col gap-4'>
                {/* Stars */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src={P_DASH_STAR_ICON} alt='star' width={24} height={24} />
                  ))}
                </div>

                {/* Review Text */}
                <p className='text-[#191f28] text-lg leading-relaxed font-medium whitespace-pre-line'>
                  {t('pdashPage.useCases.review')}
                </p>

                {/* Reviewer */}
                <div className='flex items-center gap-4 pt-4 border-t border-gray-200'>
                  <div className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden'>
                    <Image src={P_DASH_PROFILE_ICON} alt='reviewer' width={48} height={48} />
                  </div>
                  <div className='flex flex-col'>
                    <span className='font-bold text-[#191f28] text-lg'>
                      {t('pdashPage.useCases.reviewer')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - Order 2 on Mobile, Row 2 on Desktop */}
            <div className='order-2 lg:order-3 lg:col-span-12 relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#F8F6F4] py-12 px-4'>
              <Image
                src={P_DASH_STRAWBERRY_FACTORY}
                alt='Smart Farm'
                className='w-full h-auto block rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
