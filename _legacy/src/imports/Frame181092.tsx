import svgPaths from "./svg-okmnwezc02";
import imgImage11 from "figma:asset/34e49ee122f845c3a10d43178a9fcc8cae1ddc64.png";
import { useLanguage } from "../contexts/LanguageContext";

function Frame() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1792)" id="Frame">
          <path d={svgPaths.p3c0a4c80} fill="var(--fill-0, #276BB4)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1792">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame />
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#276bb4] text-[22px] text-nowrap">
        <p className="leading-[1.45] whitespace-pre">{t('pDash.subTitle')}</p>
      </div>
    </div>
  );
}

function Frame2() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191f28] text-[48px] text-nowrap">
        <p className="leading-[1.45] whitespace-pre">{t('pDash.title')}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
      <Frame5 />
      <Frame2 />
    </div>
  );
}

function Frame7() {
  const { t } = useLanguage();
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[8px] py-[20px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6b7684] text-[22px] text-right">
            <p className="leading-[1.55] mb-0 whitespace-pre-line">
              {t('pDash.desc')}
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
        <p className="leading-none whitespace-pre">{t('pDash.button')}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end justify-center relative shrink-0 w-[400px]">
      <Frame6 />
      <Frame7 />
      <Button />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[20px] items-center justify-center px-[320px] py-0 relative w-full">
          <div className="aspect-[2268/1780] basis-0 grow min-h-[258.995px] min-w-[330px] relative shrink-0" data-name="image 11">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-gradient-to-b box-border content-center flex flex-wrap from-[#f9fafb] gap-0 items-center justify-center px-0 py-[150px] relative size-full to-12% to-[#e8f1f8]">
      <Frame4 />
    </div>
  );
}
