import imgGroup180938 from "figma:asset/ff034f4cdd0c055bf2e61d15e2a6f00daa393fad.png";
import imgGroup180939 from "figma:asset/c92c829b14c84adb2a78f781e26cd234d2d8820a.png";
import imgGroup1809461 from "figma:asset/c248a91f6db1c22a97aae6e389c6e9a7c5804ec6.png";
import { useLanguage } from "../contexts/LanguageContext";

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[450px] items-end min-h-[225px] min-w-[320px] px-[40px] py-0 relative shrink-0 w-[640px]">
      <div className="h-[481.914px] relative shadow-[-17px_17px_21px_0px_rgba(0,0,0,0.35)] shrink-0 w-[234px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup180938} />
      </div>
    </div>
  );
}

function Frame() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[1.25] whitespace-pre-line">{t('mobileFeatures.reality.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('mobileFeatures.reality.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[450px] items-start justify-center pl-[40px] pr-0 py-0 relative shrink-0 w-[640px]">
      <Frame />
    </div>
  );
}

function Frame1() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-right">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[1.25] whitespace-pre-line">{t('mobileFeatures.mobile.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('mobileFeatures.mobile.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[450px] items-end justify-center pl-0 pr-[40px] py-0 relative shrink-0 w-[640px]">
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[450px] items-start justify-center min-h-[225px] min-w-[320px] px-[40px] py-0 relative shrink-0 w-[640px]">
      <div className="h-[481.914px] relative shadow-[-17px_17px_21px_0px_rgba(0,0,0,0.35)] shrink-0 w-[234px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup180939} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[450px] items-end justify-end min-h-[225px] min-w-[320px] px-[40px] py-0 relative shrink-0 w-[640px]">
      <div className="h-[482px] relative shadow-[-17px_17px_21px_0px_rgba(0,0,0,0.35)] shrink-0 w-[234px]" data-name="Group 180946 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup1809461} />
      </div>
    </div>
  );
}

function Frame2() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[1.25] whitespace-pre-line">{t('mobileFeatures.viewer.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('mobileFeatures.viewer.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[450px] items-start justify-center pl-[40px] pr-0 py-0 relative shrink-0 w-[640px]">
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
      <Frame7 />
      <Frame6 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#e8f1f8] relative size-full">
      <div className="flex flex-col items-center justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center min-w-inherit px-[320px] py-[150px] relative size-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}
