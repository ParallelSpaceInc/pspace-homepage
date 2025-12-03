import imgFrame181021 from '@/assets/a6d1a0399eb7347ee90ace06ec3c022584f96ae6.png';
import { useLanguage } from '@/contexts/LanguageContext';

function QuoteText() {
  const { t } = useLanguage();
  return (
    <div className='content-stretch flex flex-col gap-2 sm:gap-4 items-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-center w-full'>
      <p className='font-black text-heading-base sm:text-heading-sm md:text-heading-md leading-[1.713] mb-0 whitespace-pre-line'>
        {t('quote.title')}
      </p>
      <p className='font-normal text-subheading-base sm:text-subheading-sm md:text-subheading-md leading-[1.36] mb-0 whitespace-pre-line'>
        {t('quote.subtitle')}
      </p>
    </div>
  );
}

export default function QuoteSection() {
  return (
    <section className='quote-section content-stretch flex flex-col gap-4 items-center justify-center relative size-full py-20 px-4'>
      <div aria-hidden='true' className='absolute inset-0 pointer-events-none'>
        <div className='absolute bg-gray-50 inset-0' />
        <img
          alt=''
          className='absolute max-w-none object-50%-50% object-cover size-full'
          src={imgFrame181021.src}
        />
      </div>
      <QuoteText />
    </section>
  );
}
