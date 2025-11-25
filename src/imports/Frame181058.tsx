import svgPaths from "./svg-skgcj09k8c";
import imgGroup180941 from "@/assets/d74a30e0304237d6d566b9cfe616a651f03d6d3d.png";
import { useLanguage } from "../contexts/LanguageContext";

function Frame3() {
  return (
    <div className="aspect-[760/720] basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-[378.947px] min-w-[400px] relative shrink-0">
      <div className="aspect-[1480/3048] basis-0 grow min-h-px min-w-px relative shadow-[-17px_17px_21px_0px_rgba(0,0,0,0.35)] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup180941.src} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[28.944px] ml-[3.58%] mt-[82.69%] relative w-[107.816px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 29">
        <g id="Group">
          <path d={svgPaths.p21326880} fill="var(--fill-0, #00428A)" id="Vector" />
          <path d={svgPaths.p214c0080} fill="var(--fill-0, #00428A)" id="Vector_2" />
          <path d={svgPaths.pfdaef80} fill="var(--fill-0, #00428A)" id="Vector_3" />
          <path d={svgPaths.p1b354200} fill="var(--fill-0, #00428A)" id="Vector_4" />
          <path d={svgPaths.p2e50ff20} fill="var(--fill-0, #00428A)" id="Vector_5" />
          <path d={svgPaths.p36289680} fill="var(--fill-0, #00428A)" id="Vector_6" />
          <path d={svgPaths.p213bde00} fill="var(--fill-0, #00428A)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[133.134px] ml-0 mt-0 relative w-[115px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 134">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3de93a00} fill="var(--fill-0, #0B2846)" fillRule="evenodd" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p12378b00} fill="var(--fill-0, #3EB3DE)" id="Vector_2" />
            <path d={svgPaths.p1faaad00} fill="var(--fill-0, #00428A)" id="Vector_3" />
            <g id="Group_3">
              <path d={svgPaths.p32e22200} fill="var(--fill-0, #4864AE)" id="Vector_4" />
              <path d={svgPaths.p14133600} fill="var(--fill-0, white)" id="Vector_5" />
            </g>
            <path d={svgPaths.p284e3000} fill="var(--fill-0, #D9D9D9)" id="Vector_6" />
            <path d={svgPaths.pc19f900} fill="var(--fill-0, #3EB3DE)" id="Vector_7" />
            <path d={svgPaths.p1f2bf1f0} fill="var(--fill-0, #B3B3B3)" id="Vector_8" />
            <path d={svgPaths.p12100880} fill="var(--fill-0, #4864AE)" id="Vector_9" />
            <path d={svgPaths.p15f86d80} fill="var(--fill-0, #00428A)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-end pl-[285px] pr-0 py-0 relative w-full">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[1.45] not-italic relative shrink-0 text-[#191f28] text-[48px] text-nowrap text-right whitespace-pre">
        <p className="mb-0 whitespace-pre-line">{t('raemian.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[1.55] not-italic relative shrink-0 text-[#6b7684] text-[22px] text-nowrap text-right whitespace-pre">
        <p className="mb-0 whitespace-pre-line">
          {t('raemian.desc')}
        </p>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-end justify-center px-0 py-[28px] relative shrink-0 w-[400px]">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[120px] items-center justify-center px-[320px] py-0 relative w-full">
          <Frame3 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#e8f1f8] box-border content-center flex flex-wrap gap-[120px] items-center justify-center px-0 py-[150px] relative size-full">
      <Frame4 />
    </div>
  );
}
