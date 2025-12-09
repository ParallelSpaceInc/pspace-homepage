import { useLanguage } from '@/contexts/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section
      className='getting-started-section relative size-full py-20 px-4'
      style={{
        backgroundImage:
          'linear-gradient(rgba(178, 235, 255, 0) 18.75%, rgb(178, 235, 255) 100%), linear-gradient(90deg, rgb(232, 241, 248) 0%, rgb(232, 241, 248) 100%)',
      }}
    >
      <div className='max-w-[1280px] mx-auto w-full flex flex-col gap-16 md:gap-24 items-center'>
        {/* Header */}
        <div className='flex flex-col gap-4 text-center w-full'>
          <h2 className='font-extrabold text-[#191f28] text-heading-base sm:text-heading-sm md:text-heading-md leading-tight'>
            {t('cta.mainTitle')}
          </h2>
          <p className='font-bold text-[#333d4b] text-[16px] md:text-[20px] lg:text-[29px] leading-relaxed whitespace-pre-line'>
            {t('cta.mainSubtitle')}
          </p>
        </div>

        {/* Cards Container */}
        <div className='flex flex-col justify-center lg:items-start lg:flex-row gap-8 md:gap-20 w-full justify-center items-center'>
          {/* Card 1: P-Engine */}
          <div className='bg-[#d9f5ff] rounded-[20px] p-8 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] flex flex-col gap-8 w-full max-w-[500px]'>
            {/* Top Half: Web Solution */}
            <div className='flex flex-col gap-4'>
              <div className='flex flex-wrap items-baseline gap-2'>
                <span className='font-bold text-[#333d4b] text-[24px] md:text-[30px] leading-tight'>
                  {t('cta.pEngineWebTitle')}
                </span>
                <span className='font-bold text-[#333d4b] text-[16px] md:text-[20px] leading-tight'>
                  {t('cta.pEngineWebType')}
                </span>
              </div>
              <p className='font-semibold text-[#6b7684] text-[16px] md:text-[20px] leading-relaxed whitespace-pre-line'>
                {t('cta.pEngineWebDesc')}
              </p>
              <div className='flex justify-end mt-auto'>
                <button className='bg-[#38beed] text-white font-semibold text-[15px] px-5 py-2.5 rounded-[6px] hover:bg-[#2da8d1] transition-colors'>
                  {t('cta.pEngineWebBtn')}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className='h-px bg-[#ABABAB] w-full' />

            {/* Bottom Half: Desktop Solution */}
            <div className='flex flex-col gap-4'>
              <div className='flex flex-wrap items-baseline gap-2'>
                <span className='font-bold text-[#333d4b] text-[24px] md:text-[30px] leading-tight'>
                  {t('cta.pEngineDesktopTitle')}
                </span>
                <span className='font-bold text-[#333d4b] text-[16px] md:text-[20px] leading-tight'>
                  {t('cta.pEngineDesktopType')}
                </span>
              </div>
              <p className='font-semibold text-[#6b7684] text-[16px] md:text-[20px] leading-relaxed whitespace-pre-line'>
                {t('cta.pEngineDesktopDesc')}
              </p>
              <div className='flex justify-end mt-auto'>
                <button className='bg-neutral-500 text-white font-semibold text-[15px] px-5 py-2.5 rounded-[6px] hover:bg-neutral-600 transition-colors'>
                  {t('cta.pEngineDesktopBtn')}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: P-House */}
          <div className='bg-[#d9f5ff] rounded-[20px] p-8 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] flex flex-col gap-4 w-full max-w-[500px]'>
            <div className='flex flex-col gap-4'>
              <h3 className='font-bold text-[#333d4b] text-[24px] md:text-[30px] leading-tight'>
                {t('cta.pHouseTitle')}
              </h3>
              <p className='font-semibold text-[#6b7684] text-[16px] md:text-[20px] leading-relaxed whitespace-pre-line'>
                {t('cta.pHouseDesc')}
              </p>
              <div className='flex justify-end mt-auto'>
                <button className='bg-neutral-500 text-white font-semibold text-[15px] px-5 py-2.5 rounded-[6px] hover:bg-neutral-600 transition-colors'>
                  {t('cta.pHouseBtn')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
