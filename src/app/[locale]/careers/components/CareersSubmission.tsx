import { useLanguage } from '@/contexts/LanguageContext';
import { PDF_ICON } from '@/lib/images';
import Image from 'next/image';

function SubmissionHeader() {
  const { t } = useLanguage();
  return (
    <div className='flex flex-col items-center gap-[30px] mb-[40px]'>
      <h2 className='text-heading-base sm:text-heading-sm md:text-heading-md font-bold text-black leading-none'>
        {t('careers.submission.apply')}
      </h2>
      <div className='border-b-2 border-black pb-2'>
        <a
          href={`mailto:${t('careers.submission.email')}`}
          className='text-xl md:text-2xl font-bold text-black leading-none'
        >
          {t('careers.submission.email')}
        </a>
      </div>
      <p className='text-base md:text-lg text-[#4b4b4b] text-center whitespace-pre-line leading-[1.6]'>
        {t('careers.submission.greeting')}
      </p>
    </div>
  );
}

function InfoCard({
  type,
  title,
  desc,
  bgColor,
}: {
  type: string;
  title: string;
  desc: string;
  bgColor: string;
}) {
  return (
    <div
      className={`w-full max-w-[640px] p-6 flex flex-row gap-4 items-center justify-between shrink-0 text-white`}
      style={{ backgroundColor: bgColor }}
    >
      <div className='flex flex-col gap-2 items-start'>
        <span className='text-sm md:text-base font-bold leading-none opacity-90'>{type}</span>
        <span className='text-lg md:text-xl font-bold leading-none mt-1'>{title}</span>
        <p className='text-sm md:text-base leading-[1.5] font-normal whitespace-pre-line opacity-90'>
          {desc}
        </p>
      </div>
      <div className='relative w-8 h-8 md:w-10 md:h-10 shrink-0'>
        <Image src={PDF_ICON} alt='PDF' fill className='object-contain' />
      </div>
    </div>
  );
}

function FooterNote() {
  const { t } = useLanguage();
  return (
    <div className='mt-[20px] text-center'>
      <p className='text-[#e10800] text-sm md:text-base whitespace-pre-line leading-[1.5]'>
        {t('careers.submission.footer')}
      </p>
    </div>
  );
}

export default function CareersSubmission() {
  const { t } = useLanguage();

  return (
    <section id='CareersSubmission' className='w-full relative pb-20'>
      <div className='relative w-full flex flex-col items-center py-20 px-4'>
        <div className='w-full max-w-[1280px] flex flex-col items-center'>
          <hr className='w-full border-t border-[#ABABAB] mb-[60px]' aria-hidden='true' />

          <SubmissionHeader />

          <div className='flex flex-col gap-[20px]'>
            <InfoCard
              bgColor='#004592'
              type={t('careers.submission.required')}
              title={t('careers.submission.resumeTitle')}
              desc={t('careers.submission.resumeDesc')}
            />
            <InfoCard
              bgColor='#727272'
              type={t('careers.submission.optional')}
              title={t('careers.submission.coverLetterTitle')}
              desc={t('careers.submission.coverLetterDesc')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
