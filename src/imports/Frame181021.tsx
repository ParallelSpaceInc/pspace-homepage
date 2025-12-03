import imgFrame181021 from '@/assets/a6d1a0399eb7347ee90ace06ec3c022584f96ae6.png';
import { useLanguage } from '@/contexts/LanguageContext';

function Frame1() {
  const { t } = useLanguage();
  return (
    <div className='content-stretch flex flex-col gap-[5px] items-center leading-[0] not-italic relative shrink-0 text-[#4b4b4b] text-center w-full'>
      <div className='flex flex-col font-black justify-center relative shrink-0 text-[48px] w-full'>
        <p className='leading-[1.713]'>{t('quote.title')}</p>
      </div>
      <div className='flex flex-col font-normal justify-center relative shrink-0 text-[24px] w-full'>
        <p className='leading-[1.36]'>{t('quote.subtitle')}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className='content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full'>
      <div aria-hidden='true' className='absolute inset-0 pointer-events-none'>
        <div className='absolute bg-gray-50 inset-0' />
        <img
          alt=''
          className='absolute max-w-none object-50%-50% object-cover size-full'
          src={imgFrame181021.src}
        />
      </div>
      <Frame1 />
    </div>
  );
}

