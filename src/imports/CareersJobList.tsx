import { useLanguage } from '@/contexts/LanguageContext';

function Frame7() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center leading-[0] not-italic relative shrink-0 text-black text-center w-[907px]">
      <div className="flex flex-col font-bold justify-center relative shrink-0 text-[22.875px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">{t('careers.hero.title')}</p>
      </div>
      <div className="flex flex-col font-normal justify-center min-w-full relative shrink-0 text-[14px] w-[min-content]">
        <p className="leading-[22px] whitespace-pre-line">
          {t('careers.hero.desc')}
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Frame7 />
    </div>
  );
}

function BackgroundShadow({ title }: { title: string }) {
  return (
    <div className="bg-[#d4aa60] h-[40px] relative rounded-[5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow1({ title }: { title: string }) {
  return (
    <div className="bg-[#f79a9a] h-[40px] relative rounded-[5px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListSection({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col items-center relative shrink-0 min-w-[80px]" data-name="Container">
        <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
          <p className="leading-[22px] whitespace-pre">{title}</p>
        </div>
      </div>
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <ul className="list-disc">
          {items.map((item, idx) => (
            <li key={idx} className={`ms-[21px] ${idx !== items.length - 1 ? 'mb-0' : ''}`}>
              <span className="leading-[22px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Job1Column() {
  const { t } = useLanguage();
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start min-h-px min-w-px relative shrink-0">
      <BackgroundShadow title={t('careers.role1.title')} />
      <ListSection title={t('careers.role1.qualifications')} items={t('careers.role1.qualList')} />
      <ListSection title={t('careers.role1.requirements')} items={t('careers.role1.reqList')} />
      <ListSection title={t('careers.role1.responsibilities')} items={t('careers.role1.respList')} />
      <ListSection title={t('careers.role1.preferred')} items={t('careers.role1.prefList')} />
    </div>
  );
}

function Job2Column() {
  const { t } = useLanguage();
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start min-h-px min-w-px relative shrink-0">
      <BackgroundShadow1 title={t('careers.role2.title')} />
      <ListSection title={t('careers.role2.qualifications')} items={t('careers.role2.qualList')} />
      <ListSection title={t('careers.role2.responsibilities')} items={t('careers.role2.respList')} />
      <ListSection title={t('careers.role2.preferred')} items={t('careers.role2.prefList')} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-start flex flex-wrap gap-[60px] items-start justify-center min-w-[390px] relative shrink-0 w-[1200px]">
      <Job1Column />
      <Job2Column />
    </div>
  );
}

export default function CareersJobList() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-start flex flex-wrap gap-[30px] items-start justify-center p-[20px] relative size-full">
          <Container />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

