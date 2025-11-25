import svgPaths from "./svg-zefrqe457v";
import img2 from "figma:asset/ac068e1512e508b071ab9c58ee3b4e293455d7a3.png";
import imgFrame181070 from "figma:asset/dcacfd4826368850b80716779d5a10148578b2ec.png";
import { useLanguage } from "../contexts/LanguageContext";

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-[330px] relative shrink-0">
      <div className="aspect-[2788/2405] relative shrink-0 w-full" data-name="이미지 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

function Frame1() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191f28] text-[48px] text-nowrap text-right">
        <p className="leading-[1.45] whitespace-pre-line">
          {t('showcase.title')}
        </p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-end pl-[285px] pr-0 py-0 relative w-full">
          <div className="aspect-[115.5/156.895] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 157">
              <g id="Vector">
                <path d={svgPaths.p37a54c00} fill="#00428A" />
                <path d={svgPaths.p35c23400} fill="#00428A" />
                <path d={svgPaths.p26fc670} fill="#00428A" />
                <path d={svgPaths.p11827200} fill="#00428A" />
                <path d={svgPaths.p69db9a0} fill="#00428A" />
                <path d={svgPaths.p3d83f880} fill="#00428A" />
                <path d={svgPaths.p243d4800} fill="#00428A" />
                <path d={svgPaths.p3c5d0600} fill="#00428A" />
                <path d={svgPaths.p2d70a980} fill="var(--fill-0, #3EB3DE)" />
                <path d={svgPaths.pef9ea30} fill="#2264B0" />
                <path d={svgPaths.p251e6100} fill="#00428A" />
                <path d={svgPaths.p470d00} fill="#00428A" />
                <path d={svgPaths.p116a35f0} fill="var(--fill-0, #3EB3DE)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-end justify-center px-0 py-[28px] relative shrink-0 w-[400px]">
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[180px] items-center justify-center px-[320px] py-0 relative w-full">
          <Frame3 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[120px] items-center justify-center px-0 py-[120px] relative size-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame181070} />
      <Frame4 />
    </div>
  );
}
