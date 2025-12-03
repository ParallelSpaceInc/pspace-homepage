import { useLanguage } from '@/contexts/LanguageContext';

export default function Frame() {
  const { t } = useLanguage();
  return (
    <div className="bg-gradient-to-t from-32% from-[#f2f2f2] relative size-full to-[#f9fafb]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[140px] items-center pb-[60px] pt-[150px] px-[320px] relative size-full">
          <div className="basis-0 flex flex-col font-bold grow justify-center leading-[1.45] min-h-px min-w-px not-italic relative shrink-0 text-[#191f28] text-[48px]">
            <p className="mb-0 whitespace-pre-line">
              {t('mission.title')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

