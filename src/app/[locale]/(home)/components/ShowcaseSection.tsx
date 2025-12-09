import { INTRO_IMG, INTRO_SECTION_BACKGROUND, P_ENGINE_LOGO } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ShowcaseSection() {
  const { t } = useLanguage();
  return (
    <section className='showcase-section box-border content-center flex flex-wrap gap-12 items-center justify-center relative size-full py-20 px-4 min-h-[800px]'>
      <img
        alt=''
        className='absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full z-0'
        src={INTRO_SECTION_BACKGROUND.src}
      />
      <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 px-4 relative z-10'>
        <div className='flex-1 min-w-[330px] min-w-0'>
          <div className='aspect-[2788/2405] w-full relative'>
            <img
              alt=''
              className='absolute inset-0 w-full h-full object-contain pointer-events-none'
              src={INTRO_IMG.src}
            />
          </div>
        </div>
        <div className='flex-1 max-w-[400px] min-w-0 flex flex-col items-end gap-6 py-8'>
          <h2 className='font-bold text-[32px] md:text-[48px] leading-tight text-center md:text-right text-[#191f28] whitespace-pre-line'>
            {t('showcase.title')}
          </h2>
          <img src={P_ENGINE_LOGO} alt='' className='w-[120px] h-auto' />
        </div>
      </div>
    </section>
  );
}

