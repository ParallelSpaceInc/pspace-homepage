import svgPaths from "./svg-xknsr3zus6";
import { useLanguage } from "../contexts/LanguageContext";

function Frame6() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center relative shrink-0 text-[#191f28] text-[60px] w-full">
        <p className="leading-[1.45]">{t('cta.mainTitle')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#333d4b] text-[29px] w-full">
        <p className="leading-[1.45] whitespace-pre-line">
          {t('cta.mainSubtitle')}
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  const { t } = useLanguage();
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start leading-[0] min-h-px min-w-[200px] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#333d4b] text-[0px] w-full">
        <p className="leading-[0]">
          <span className="leading-[1.3] text-[30px]">{t('cta.pEngineWebTitle')}</span>
          <span className="leading-[1.3] text-[30px] text-[red]">{t('cta.pEngineWebTag')}</span>
          <span className="leading-[1.3] text-[30px]"> </span>
          <span className="leading-[1.5] text-[20px]">{t('cta.pEngineWebType')}</span>
        </p>
      </div>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[1.6] relative shrink-0 text-[#6b7684] text-[20px] w-full">
        <p className="whitespace-pre-line">
          {t('cta.pEngineWebDesc')}
        </p>
      </div>
    </div>
  );
}

function Button() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#38beed] h-[40px] relative rounded-[6px] shrink-0 w-[84px] hover:bg-[#2da8d1] transition-colors cursor-pointer" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[20px] py-[16px] relative w-auto min-w-[84px]">
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.883px] text-gray-50 text-nowrap">
            <p className="leading-[18px] whitespace-pre">{t('cta.pEngineWebBtn')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end justify-end relative shrink-0 w-full">
      <Frame2 />
      <Button />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[40px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 40">
        <g id="Frame 181070">
          <line id="Line 1" stroke="var(--stroke-0, #ABABAB)" x2="280" y1="19.5" y2="19.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  const { t } = useLanguage();
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start leading-[0] min-h-px min-w-[200px] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#333d4b] text-[0px] w-full">
        <p className="leading-[0]">
          <span className="leading-[1.3] text-[30px]">{t('cta.pEngineDesktopTitle')}</span>
          <span className="leading-[1.5] text-[20px]">{` ${t('cta.pEngineDesktopType')}`}</span>
        </p>
      </div>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[1.6] relative shrink-0 text-[#6b7684] text-[20px] w-full">
        <p className="whitespace-pre-line">
          {t('cta.pEngineDesktopDesc')}
        </p>
      </div>
    </div>
  );
}

function Button1() {
  const { t } = useLanguage();
  return (
    <div className="bg-neutral-500 h-[40px] relative rounded-[6px] shrink-0 w-[84px] hover:bg-neutral-600 transition-colors cursor-pointer" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[20px] py-[16px] relative w-auto min-w-[84px]">
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.883px] text-gray-50 text-nowrap">
            <p className="leading-[18px] whitespace-pre">{t('cta.pEngineDesktopBtn')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end justify-end relative shrink-0 w-full">
      <Frame5 />
      <Button1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[grid-area:1_/_1] bg-[#d9f5ff] box-border content-stretch flex flex-col gap-[10px] items-start justify-center ml-0 mt-0 p-[40px] relative rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] w-[360px]">
      <Frame3 />
      <Frame9 />
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-[197.47px] min-w-[273px] place-items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame7() {
  const { t } = useLanguage();
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-[200px] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#333d4b] text-[30px] w-full">
        <p className="leading-[1.3]">{t('cta.pHouseTitle')}</p>
      </div>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.6] relative shrink-0 text-[#6b7684] text-[20px] w-full whitespace-pre-line">
        {t('cta.pHouseDesc')}
      </p>
    </div>
  );
}

function Button2() {
  const { t } = useLanguage();
  return (
    <div className="bg-neutral-500 h-[40px] relative rounded-[6px] shrink-0 w-[84px] hover:bg-neutral-600 transition-colors cursor-pointer" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[20px] py-[16px] relative w-auto min-w-[84px]">
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.883px] text-gray-50 text-nowrap">
            <p className="leading-[18px] whitespace-pre">{t('cta.pHouseBtn')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-end flex flex-wrap gap-0 grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <Button2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[grid-area:1_/_1] bg-[#d9f5ff] box-border content-center flex flex-wrap gap-[16px] items-center ml-0 mt-0 p-[40px] relative rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] w-[360px]">
      <Frame8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-[103.285px] min-w-[273px] place-items-start relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-start flex flex-wrap gap-[80px] items-start justify-center leading-[0] overflow-clip pb-[40px] pt-[100px] px-0 relative shrink-0 w-full">
      <Group />
      <Group1 />
    </div>
  );
}

export default function CTASection() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(rgba(178, 235, 255, 0) 18.75%, rgb(178, 235, 255) 100%), linear-gradient(90deg, rgb(232, 241, 248) 0%, rgb(232, 241, 248) 100%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[100px] items-center justify-center px-[320px] py-[160px] relative size-full">
          <Frame6 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}
