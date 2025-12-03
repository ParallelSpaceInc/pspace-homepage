import { P_HOUSE_FEATURE0, P_HOUSE_FEATURE1, P_HOUSE_FEATURE2 } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function MobileFeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      image: P_HOUSE_FEATURE0,
      titleKey: 'mobileFeatures.reality.title',
      descKey: 'mobileFeatures.reality.desc',
      imageAlt: 'Reality Based 3D Space',
      reverse: false,
    },
    {
      image: P_HOUSE_FEATURE1,
      titleKey: 'mobileFeatures.mobile.title',
      descKey: 'mobileFeatures.mobile.desc',
      imageAlt: 'Mobile Optimized Digital Twin',
      reverse: true,
    },
    {
      image: P_HOUSE_FEATURE2,
      titleKey: 'mobileFeatures.viewer.title',
      descKey: 'mobileFeatures.viewer.desc',
      imageAlt: 'Usability Centric 3D Viewer',
      reverse: false,
    },
  ];

  return (
    <section className='mobile-features-section bg-[#e8f1f8] relative size-full py-20 px-4'>
      <div className='max-w-[800px] mx-auto w-full flex flex-col gap-20 md:gap-32'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8'
          >
            {/* Image Container */}
            <div
              className={`relative w-[234px] h-[482px] shadow-[-17px_17px_21px_0px_rgba(0,0,0,0.35)] rounded-[30px] overflow-hidden order-1 ${
                feature.reverse ? 'md:order-2 md:ml-auto' : 'md:mr-auto'
              }`}
            >
              <Image src={feature.image} alt={feature.imageAlt} fill className='object-cover' />
            </div>

            {/* Text Container */}
            <div
              className={`flex flex-col gap-4 items-center ${
                feature.reverse
                  ? 'md:items-end text-center md:text-right md:order-1 md:mr-auto'
                  : 'md:items-start text-center md:text-left order-2 md:ml-auto'
              } max-w-[500px] w-full order-2`}
            >
              <h3 className='font-bold text-[#333d4b] text-[28px] md:text-[32px] leading-tight whitespace-pre-line'>
                {t(feature.titleKey)}
              </h3>
              <p className='font-medium text-[#6b7684] text-[18px] md:text-[22px] leading-relaxed whitespace-pre-line'>
                {t(feature.descKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
