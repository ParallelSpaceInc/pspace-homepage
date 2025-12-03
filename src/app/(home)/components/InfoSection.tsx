import { useLanguage } from '@/contexts/LanguageContext';

export default function InfoSection() {
  const { t } = useLanguage();
  return (
    <section className='info-section bg-gray-50 relative size-full py-20 px-4'>
      <div className='flex flex-row items-center size-full justify-center'>
        <div className='box-border content-stretch flex gap-8 items-center relative size-full max-w-[1280px] mx-auto'>
          <div className='basis-0 flex flex-col font-bold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191f28] text-heading-base sm:text-heading-sm md:text-heading-md text-center'>
            <p className='leading-[1.45] whitespace-pre-line'>{t('info.title')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

