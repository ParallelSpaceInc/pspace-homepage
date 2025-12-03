import { useLanguage } from '@/contexts/LanguageContext';

function JobHeader({ title, bgColor }: { title: string; bgColor: string }) {
  return (
    <div
      className='h-[40px] rounded-[5px] shadow-sm flex items-center justify-center w-full max-w-[600px]'
      style={{ backgroundColor: bgColor }}
    >
      <h3 className='font-semibold text-base md:text-lg text-white text-center whitespace-pre-line'>
        {title}
      </h3>
    </div>
  );
}

function JobSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className='flex gap-[30px] items-start w-full max-w-[600px]'>
      <div className='min-w-[80px] flex-shrink-0 flex justify-center'>
        <h4 className='font-bold text-base md:text-lg text-black leading-[22px] text-center whitespace-pre-line'>
          {title}
        </h4>
      </div>
      <ul className='list-disc pl-5 text-sm md:text-base text-black leading-normal'>
        {items.map((item, idx) => (
          <li key={idx} className='mb-1 last:mb-0'>
            <span className='leading-[22px] break-words'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareersJobList() {
  const { t } = useLanguage();

  return (
    <section id='CareersJobList' className='w-full relative py-20 px-4'>
      <div className='max-w-[1280px] mx-auto flex flex-col items-center gap-12'>
        {/* Header Section */}
        <div className='flex flex-col gap-[30px] items-center text-center max-w-[907px] py-10'>
          <h2 className='font-bold text-heading-base sm:text-heading-sm md:text-heading-md leading-[20px] whitespace-pre-line'>
            {t('careers.hero.title')}
          </h2>
          <p className='font-normal text-sm md:text-base leading-[22px] whitespace-pre-line'>
            {t('careers.hero.desc')}
          </p>
        </div>

        {/* Job Columns */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-[60px] w-full items-start'>
          {/* Job 1 */}
          <div className='flex flex-col gap-[30px] w-full lg:w-1/2 items-center'>
            <JobHeader title={t('careers.role1.title')} bgColor='#d4aa60' />
            <JobSection
              title={t('careers.role1.qualifications')}
              items={t('careers.role1.qualList')}
            />
            <JobSection
              title={t('careers.role1.requirements')}
              items={t('careers.role1.reqList')}
            />
            <JobSection
              title={t('careers.role1.responsibilities')}
              items={t('careers.role1.respList')}
            />
            <JobSection title={t('careers.role1.preferred')} items={t('careers.role1.prefList')} />
          </div>

          {/* Job 2 */}
          <div className='flex flex-col gap-[30px] w-full lg:w-1/2 items-center'>
            <JobHeader title={t('careers.role2.title')} bgColor='#f79a9a' />
            <JobSection
              title={t('careers.role2.qualifications')}
              items={t('careers.role2.qualList')}
            />
            <JobSection
              title={t('careers.role2.responsibilities')}
              items={t('careers.role2.respList')}
            />
            <JobSection title={t('careers.role2.preferred')} items={t('careers.role2.prefList')} />
          </div>
        </div>
      </div>
    </section>
  );
}
