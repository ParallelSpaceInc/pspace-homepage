import svgPaths from "./svg-vqx8tdhbfd";
import img20250225141204511 from "figma:asset/35a059cf9d4a51f38f8dffb92112540fa93a4d31.png";
import img11 from "figma:asset/d1a17f6fff1503c98ceaae23841bfcedb8bf7600.png";
import imgDsd01 from "figma:asset/5b966b000a8f8c0ec2d078caf649099023105599.png";
import imgDsd2 from "figma:asset/aee66004d537d515fae447e66af425b480409bfa.png";
import { useLanguage } from "../contexts/LanguageContext";

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[387px] ml-0 mt-0 relative w-[540px]" data-name="스크린샷 2025-02-25 14120451 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.95%] left-0 max-w-none top-0 w-full" src={img20250225141204511} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[387px] ml-[271.18px] mt-0 relative w-0">
        <div className="absolute bottom-0 left-[-2px] right-[-2px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 387">
            <path d="M2 0V387" id="Vector 1" stroke="var(--stroke-0, white)" strokeDasharray="13 10" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Group />
      <div className="[grid-area:1_/_1] h-[48.124px] ml-[233.35px] mt-[169.44px] relative w-[76.84px]" data-name="Vector">
        <div className="absolute inset-[-18.7%_-13.01%_-22.86%_-13.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 69">
            <g filter="url(#filter0_d_1_1935)" id="Vector">
              <path d={svgPaths.p7ddbc80} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68.1244" id="filter0_d_1_1935" width="96.8405" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.43 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1935" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1935" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] px-[50px] py-0 relative shrink-0 w-[640px]" data-name="1">
      <Group1 />
    </div>
  );
}

function Frame5() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] items-start overflow-clip relative shrink-0 text-[#191f28] w-full">
      <div className="flex flex-col justify-center leading-[1.25] relative shrink-0 text-[32px] text-nowrap whitespace-pre">
        <p className="whitespace-pre-line">{t('detail.reconstruction.title')}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[18px] w-[min-content]">
        <p className="leading-[normal]">{t('detail.reconstruction.subtitle')}</p>
      </div>
    </div>
  );
}

function Frame() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start leading-[0] not-italic relative shrink-0 w-[400px]">
      <Frame5 />
      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center leading-[1.5] relative shrink-0 text-[#333d4b] text-[18px] w-full">
        <p className="whitespace-pre-line">{t('detail.reconstruction.desc')}</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] relative shrink-0 w-[640px]" data-name="2">
      <Frame />
    </div>
  );
}

function Frame6() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] items-start relative shrink-0 text-[#191f28] w-[317px]">
      <div className="flex flex-col justify-center leading-[1.25] relative shrink-0 text-[32px] text-nowrap whitespace-pre">
        <p className="whitespace-pre-line">{t('detail.simplification.title')}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[18px] w-[min-content]">
        <p className="leading-[normal]">{t('detail.simplification.subtitle')}</p>
      </div>
    </div>
  );
}

function Frame1() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start leading-[0] not-italic relative shrink-0 w-[400px]">
      <Frame6 />
      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center leading-[1.5] min-w-full relative shrink-0 text-[#333d4b] text-[18px] w-[min-content]">
        <p className="whitespace-pre-line">{t('detail.simplification.desc')}</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] relative shrink-0 w-[640px]" data-name="3">
      <Frame1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] px-[50px] py-0 relative shrink-0 w-[640px]" data-name="4">
      <div className="aspect-[539/301] relative shrink-0 w-full" data-name="이미지1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img11} />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] relative shrink-0 w-[640px]" data-name="5">
      <div className="aspect-[473/458] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="dsd0 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsd01} />
      </div>
    </div>
  );
}

function Frame7() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] items-start relative shrink-0 text-[#191f28] w-full">
      <div className="flex flex-col justify-center leading-[1.25] relative shrink-0 text-[32px] text-nowrap whitespace-pre">
        <p className="whitespace-pre-line">{t('detail.processing.title')}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[18px] w-[min-content]">
        <p className="leading-[normal]">{t('detail.processing.subtitle')}</p>
      </div>
    </div>
  );
}

function Frame2() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start leading-[0] not-italic relative shrink-0 w-[400px]">
      <Frame7 />
      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center leading-[1.5] relative shrink-0 text-[#333d4b] text-[18px] text-nowrap whitespace-pre">
        <p className="whitespace-pre-line">{t('detail.processing.desc')}</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] relative shrink-0 w-[640px]" data-name="6">
      <Frame2 />
    </div>
  );
}

function Frame8() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] items-start relative shrink-0 text-[#191f28] w-full">
      <div className="flex flex-col justify-center leading-[1.25] relative shrink-0 text-[32px] text-nowrap whitespace-pre">
        <p className="whitespace-pre-line">{t('detail.classification.title')}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[18px] w-[min-content]">
        <p className="leading-[normal]">{t('detail.classification.subtitle')}</p>
      </div>
    </div>
  );
}

function Frame3() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start leading-[0] not-italic relative shrink-0 w-[400px]">
      <Frame8 />
      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center leading-[1.5] relative shrink-0 text-[#333d4b] text-[18px] text-nowrap whitespace-pre">
        <p className="whitespace-pre-line">{t('detail.classification.desc')}</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] relative shrink-0 w-[640px]" data-name="8">
      <Frame3 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center max-h-[458px] max-w-[640px] min-h-[281.241px] min-w-[393px] relative shrink-0 w-[640px]" data-name="7">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="dsd0 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsd2} />
      </div>
    </div>
  );
}

function Frame10() {
  return <div className="bg-[#f26969] content-stretch flex flex-col gap-[32px] h-[458px] items-start justify-center shrink-0 w-[640px]" />;
}

function Frame9() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Bold',sans-serif] items-start relative shrink-0 text-[#191f28] w-full">
      <div className="flex flex-col justify-center leading-[1.25] relative shrink-0 text-[32px] text-nowrap whitespace-pre">
        <p className="whitespace-pre-line">{t('detail.texture.title')}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[18px] w-[min-content]">
        <p className="leading-[27px]">{t('detail.texture.subtitle')}</p>
      </div>
    </div>
  );
}

function Frame4() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start leading-[0] not-italic relative shrink-0 w-[400px]">
      <Frame9 />
      <div className="flex flex-col font-['Pretendard:Light',sans-serif] justify-center relative shrink-0 text-[#333d4b] text-[18px] text-nowrap">
        <p className="leading-[27px] whitespace-pre">
          {t('detail.texture.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-center justify-center relative shrink-0 w-[640px]">
      <Frame4 />
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="bg-gray-50 relative size-full">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-start flex flex-wrap gap-0 items-start justify-center pb-[150px] pt-[40px] px-[120px] relative size-full">
          <Component />
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
          <Component5 />
          <Component7 />
          <Component6 />
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}
