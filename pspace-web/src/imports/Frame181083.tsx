import img211 from "@/assets/d148b9c998e00fa8c1ed922a264dbb3a0dfc49af.png";
import { useLanguage } from "../contexts/LanguageContext";

function Frame4() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#276bb4] text-[22px] text-nowrap">
        <p className="leading-[1.45] whitespace-pre">{t('pEngine.subTitle')}</p>
      </div>
    </div>
  );
}

function Frame1() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[1.45] not-italic relative shrink-0 text-[#191f28] text-[48px] text-nowrap whitespace-pre-line">
        <p className="mb-0">{t('pEngine.title')}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame4 />
      <Frame1 />
    </div>
  );
}

function Frame6() {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[8px] py-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard:SemiBold',sans-serif] grow justify-center leading-[1.55] min-h-px min-w-px not-italic relative shrink-0 text-[#6b7684] text-[22px]">
            <p className="whitespace-pre-line mb-0">
              {t('pEngine.desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#38beed] box-border content-stretch flex gap-[10px] h-[60px] items-center justify-center overflow-clip px-[92px] py-[16px] relative rounded-[6px] shrink-0" data-name="button">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-gray-50 text-nowrap">
        <p className="leading-none whitespace-pre">{t('pEngine.button')}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[400px]">
      <Frame5 />
      <Frame6 />
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[20px] items-center justify-center px-[320px] py-0 relative w-full">
          <Frame />
          <div className="aspect-[3441/2701] basis-0 grow min-h-[259.032px] min-w-[330px] relative shrink-0" data-name="자산 21 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img211.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-gray-50 box-border content-center flex flex-wrap gap-0 items-center justify-center px-0 py-[150px] relative size-full">
      <Frame3 />
    </div>
  );
}
