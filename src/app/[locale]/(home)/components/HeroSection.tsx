import imgFrame180921 from '@/assets/d6917183a9cc6294df8c4d6baa3bb545f71dfaa7.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { PSPACE_LOGO_EN_WHITE, PSPACE_LOGO_KR_WHITE, CHEVRON_ICON } from '@/lib/images';

function HeroText() {
  const { t } = useLanguage();
  return (
    <div className='box-border content-stretch flex flex-col items-center gap-4 sm:gap-8 leading-[normal] not-italic relative text-center text-white w-full shrink-0 size-full'>
      <p className='[text-shadow:rgba(0,0,0,0.3)_0px_4px_4px] font-bold relative shrink-0 text-heading-base sm:text-heading-sm md:text-heading-md w-full max-w-[800px] mx-auto whitespace-pre-line break-keep'>
        {t('hero.title')
          .split('\n')
          .map((line: string, idx: number) => (
            <span key={idx} className='block'>
              {line}
            </span>
          ))}
      </p>
      <p className='[text-shadow:rgba(0,0,0,0.3)_0px_4px_4px] font-normal relative shrink-0 text-subheading-base sm:text-subheading-sm md:text-subheading-md uppercase w-full max-w-[800px] mx-auto whitespace-pre-line break-keep'>
        {t('hero.subtitle')
          .split('\n')
          .map((line: string, idx: number) => (
            <span key={idx} className='block'>
              {line}
            </span>
          ))}
      </p>
    </div>
  );
}

export default function HeroSection() {
  const { language } = useLanguage();
  return (
    <section className='hero-section w-full min-h-screen relative content-stretch flex flex-col gap-[30px] items-center justify-center size-full py-20 px-4'>
      <div aria-hidden='true' className='absolute inset-0 pointer-events-none'>
        <img
          alt=''
          className='absolute max-w-none object-50%-50% object-cover size-full'
          src={imgFrame180921.src}
        />
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(249, 250, 251) 95.381%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)',
          }}
        />
      </div>
      <div className='content-stretch flex flex-col gap-8 sm:gap-12 md:gap-16 items-center justify-center relative shrink-0 size-full -translate-y-[12vh] sm:-translate-y-[8vh] md:-translate-y-[6vh]'>
        <img
          src={language === 'en' ? PSPACE_LOGO_EN_WHITE : PSPACE_LOGO_KR_WHITE}
          alt='Main Hero Image'
          className='h-[100px] w-[405.32px]'
        />
        <HeroText />
      </div>
      <button
        onClick={() => {
          const nextSection = document.querySelector('.hero-section')
            ?.nextElementSibling as HTMLElement;
          if (nextSection) {
            const header = document.querySelector('header');
            const offset = header?.getBoundingClientRect().bottom || 0;
            const elementPosition = nextSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }}
        className='absolute bottom-20 sm:bottom-28 md:bottom-36 left-1/2 -translate-x-1/2 opacity-80 hover:opacity-100 transition-opacity motion-safe:animate-[bounce_4s_infinite] cursor-pointer z-10 p-3 rounded-full'
        aria-label='Scroll to next section'
      >
        <img
          src={CHEVRON_ICON}
          alt='Scroll to next section'
          className='w-16 h-[80px] object-contain'
        />
      </button>
    </section>
  );
}
