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
    <div className='flex gap-[8px] items-center relative shrink-0'>
      <div className='relative shrink-0 size-[22px]'>
        <div className='absolute inset-[8.33%]'>
          <Image src={CHECK_ICON} alt='' width={22} height={22} className='block size-full' />
        </div>
      </div>
      <div className='flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#276bb4] text-lg md:text-xl text-nowrap'>
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
  reverse = false,
}: {
  imageSrc: any;
  title: string;
  description: string;
  subFeatures: string[];
  reverse?: boolean;
}) {
  return (
    <div className='min-h-[550px] h-auto relative shrink-0 w-full'>
      <div className='flex flex-col md:flex-row items-center size-full'>
        <div
          className={`box-border content-stretch flex flex-col ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-[40px] md:gap-[68px] min-h-[550px] h-auto items-center px-[20px] md:px-[70px] py-[40px] md:py-0 relative w-full`}
        >
          {/* Image */}
          <div className='relative shrink-0 w-full max-w-[460px] h-auto rounded-[30px] overflow-hidden flex justify-center'>
            <Image
              src={imageSrc}
              alt={title}
              className='w-auto h-auto max-h-[460px] block'
              sizes='(max-width: 768px) 100vw, 460px'
            />
          </div>

          {/* Content */}
          <div className='basis-0 content-stretch flex flex-col gap-[28px] grow items-start justify-center min-h-px min-w-px relative shrink-0'>
            <div className='content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full'>
              <div className='content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full'>
                {subFeatures.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </div>
              <div className='flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#333d4b] text-2xl md:text-4xl w-full'>
                <p className='leading-[normal] whitespace-pre-line'>{title}</p>
              </div>
            </div>
            <div className='flex flex-col font-semibold justify-center leading-[34px] not-italic relative shrink-0 text-[#6b7684] text-lg md:text-xl w-full'>
              <p className='mb-0 whitespace-pre-line'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PDashFeatures() {
  const { t } = useLanguage();

  return (
    <section id='PDashFeatures' className='w-full relative'>
      <div className='bg-[#e8f1f8] box-border content-stretch flex flex-col items-center relative size-full py-20 px-4'>
        {/* Header */}
        <div className='content-stretch flex flex-col items-center md:items-start relative shrink-0 w-full max-w-[1280px] mb-[50px]'>
          <div className='content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full px-[20px]'>
            <div className='flex flex-col font-bold justify-center leading-[1.45] not-italic relative shrink-0 text-[#191f28] text-heading-base sm:text-heading-sm md:text-heading-md text-wrap md:text-nowrap whitespace-pre-wrap md:whitespace-pre text-center md:text-left'>
              <p className='mb-0 whitespace-pre-line'>{t('pdashPage.features.title')}</p>
            </div>
          </div>
          <div className='content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full px-[20px]'>
            <div className='flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7684] text-subheading-base sm:text-subheading-sm md:text-subheading-md text-wrap md:text-nowrap text-center md:text-left'>
              <p className='leading-[1.55] whitespace-pre-wrap md:whitespace-pre'>
                {t('pdashPage.features.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className='content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1280px] gap-10 md:gap-0'>
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
            reverse
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
        <div className='box-border content-stretch flex flex-col gap-[32px] items-center justify-center pb-0 pt-[100px] px-[20px] relative shrink-0 w-full max-w-[1280px]'>
          <div className='flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191f28] text-2xl md:text-4xl text-center w-full text-wrap md:text-nowrap'>
            <p className='leading-[1.45]'>{t('pdashPage.features.ctaTitle')}</p>
          </div>
          <div className='content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full'>
            <button className='bg-[#38beed] box-border content-stretch flex gap-[10px] h-[60px] items-center justify-center overflow-clip px-[40px] md:px-[92px] py-[16px] relative rounded-[6px] shrink-0 hover:bg-[#31a8d1] transition-colors'>
              <div className='flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-xl md:text-2xl text-gray-50 text-nowrap'>
                <p className='leading-none whitespace-pre'>{t('pdashPage.features.ctaButton')}</p>
              </div>
              <Image
                src={CHEVRON_ICON}
                alt=''
                width={24}
                height={24}
                className='block shrink-0 brightness-0 invert'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
