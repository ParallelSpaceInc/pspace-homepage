import {
  P_DASH_FEATURE_1,
  P_DASH_FEATURE_2,
  P_DASH_FEATURE_3,
  CHEVRON_ICON,
  CHECK_ICON,
} from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

function FeatureItem({ text }: { text: string }) {
  return (
    <div className='flex flex-row gap-2 lg:gap-2 items-center relative shrink-0'>
      <div className='flex shrink-0 w-[22px] h-[22px] items-center justify-center'>
        <Image src={CHECK_ICON} alt='' width={22} height={22} className='block w-full h-full' />
      </div>
      <div className='flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#276bb4] text-lg md:text-xl text-center lg:text-left'>
        <p className='leading-[1.45] whitespace-pre'>{text}</p>
      </div>
    </div>
  );
}

function FeatureSection({
  imageSrc,
  title,
  description,
  subFeatures,
}: {
  imageSrc: any;
  title: string;
  description: string;
  subFeatures: string[];
}) {
  return (
    <div
      className={`box-border content-stretch w-full max-w-[800px] lg:max-w-full mx-auto flex flex-col lg:flex-row gap-10 items-start lg:justify-start px-4 py-10 lg:py-0 lg:min-h-[400px] h-auto relative shrink-0`}
    >
      {/* Image */}
      <div className='relative w-full max-w-[460px] h-auto rounded-[30px] overflow-hidden flex justify-center'>
        <Image
          src={imageSrc}
          alt={title}
          className='w-auto h-auto max-h-[460px] block'
          sizes='(max-width: 768px) 100vw, 460px'
        />
      </div>

      {/* Content */}
      <div className='flex-1 flex flex-col gap-7 items-start justify-center min-w-0 relative w-full max-w-[500px]'>
        <div className='content-start flex flex-wrap gap-3 items-start relative shrink-0 w-full'>
          {subFeatures.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </div>
        <p className='flex flex-col font-bold justify-center not-italic relative text-[#333d4b] text-2xl lg:text-4xl w-full leading-[normal] whitespace-pre-line'>
          {title}
        </p>
        <p className='flex flex-col font-semibold justify-center leading-[34px] not-italic relative text-[#6b7684] text-lg lg:text-xl w-full mb-0 whitespace-pre-line'>
          {description}
        </p>
      </div>

      {/* (image moved above) */}
    </div>
  );
}

export default function PDashFeatures() {
  const { t } = useLanguage();

  return (
    <section id='PDashFeatures' className='w-full relative'>
      <div className='bg-[#e8f1f8] box-border content-stretch flex flex-col items-center relative size-full py-20 px-4'>
        {/* Header */}
        <div className='content-stretch flex flex-col items-start relative shrink-0 w-full max-w-7xl mb-[50px]'>
          <p className='w-full px-4 font-bold leading-[1.45] not-italic text-[#191f28] text-heading-base sm:text-heading-sm md:text-heading-md text-left mb-0 whitespace-pre-wrap md:whitespace-pre'>
            {t('pdashPage.features.title')}
          </p>
          <p className='w-full px-5 font-semibold leading-[1.55] not-italic text-[#6b7684] text-subheading-base sm:text-subheading-sm md:text-subheading-md text-left whitespace-pre-wrap md:whitespace-pre'>
            {t('pdashPage.features.subtitle')}
          </p>
        </div>
        {/* Features List */}
        <div className='content-stretch flex flex-col items-center relative shrink-0 w-full max-w-7xl gap-10 lg:gap-40'>
          {/* Feature 1 */}
          <FeatureSection
            imageSrc={P_DASH_FEATURE_1}
            title={t('pdashPage.features.interfaceTitle')}
            description={t('pdashPage.features.interfaceDesc')}
            subFeatures={[t('pdashPage.features.sensorViz'), t('pdashPage.features.customDisplay')]}
          />

          {/* Feature 2 */}
          <FeatureSection
            imageSrc={P_DASH_FEATURE_2}
            title={t('pdashPage.features.customDashboard')}
            description={t('pdashPage.features.customDashboardDesc')}
            subFeatures={[
              t('pdashPage.features.timeSeriesAnalysis'),
              t('pdashPage.features.intuitiveManagement'),
            ]}
          />

          {/* Feature 3 */}
          <FeatureSection
            imageSrc={P_DASH_FEATURE_3}
            title={t('pdashPage.features.multiDevice')}
            description={t('pdashPage.features.multiDeviceDesc')}
            subFeatures={[
              t('pdashPage.features.fastTransfer'),
              t('pdashPage.features.anytimeAnywhere'),
            ]}
          />
        </div>

        {/* CTA Section */}
        <div className='box-border content-stretch flex flex-col gap-8 items-center justify-center pb-0 pt-[100px] px-5 relative shrink-0 w-full max-w-7xl'>
          <div className='flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191f28] text-2xl md:text-4xl text-center w-full text-wrap md:text-nowrap'>
            <p className='leading-[1.45]'>{t('pdashPage.features.ctaTitle')}</p>
          </div>
          <div className='content-stretch flex flex-col gap-3 items-center justify-center relative shrink-0 w-full'>
            <button className='bg-[#38beed] box-border content-stretch flex gap-2.5 h-[60px] items-center justify-center overflow-clip px-10 md:px-[92px] py-4 relative rounded-[6px] shrink-0 hover:bg-[#31a8d1] transition-colors'>
              <div className='flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-xl md:text-2xl text-gray-50 text-nowrap'>
                <p className='leading-none whitespace-pre'>{t('pdashPage.features.ctaButton')}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
