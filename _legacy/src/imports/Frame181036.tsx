import { useLanguage } from "../contexts/LanguageContext";

export default function Frame() {
  const { t } = useLanguage();
  return (
    <div className="bg-gray-50 relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[140px] items-center pb-[60px] pt-[150px] px-[320px] relative size-full">
          <div className="basis-0 flex flex-col font-['Pretendard:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191f28] text-[48px]">
            <p className="leading-[1.45] whitespace-pre-line">
              {t('info.title')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
