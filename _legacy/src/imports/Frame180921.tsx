import svgPaths from "./svg-xs5wnwpwzd";
import imgFrame180921 from "figma:asset/d6917183a9cc6294df8c4d6baa3bb545f71dfaa7.png";
import { useLanguage } from "../contexts/LanguageContext";

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[112px] py-0 relative w-full">
          <div className="h-[100px] relative shrink-0 w-[405.32px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 406 100">
              <g id="Vector">
                <path d={svgPaths.p1afa2900} fill="#37BDEC" />
                <path d={svgPaths.p43e2080} fill="var(--fill-0, white)" />
                <path d={svgPaths.p138fc700} fill="var(--fill-0, white)" />
                <path d={svgPaths.p793ea00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p27b78800} fill="var(--fill-0, white)" />
                <path d={svgPaths.pbec2c00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p30732f00} fill="var(--fill-0, white)" />
                <path d={svgPaths.pc0fc300} fill="var(--fill-0, white)" />
                <path d={svgPaths.p85dadf2} fill="var(--fill-0, white)" />
                <path d={svgPaths.p2fdfb780} fill="var(--fill-0, white)" />
                <path d={svgPaths.p56a67b0} fill="var(--fill-0, white)" />
                <path d={svgPaths.p21e5a680} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1f9f1100} fill="var(--fill-0, white)" />
                <path d={svgPaths.p19256d00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p14e74b72} fill="var(--fill-0, white)" />
                <path d={svgPaths.p27677980} fill="var(--fill-0, white)" />
                <path d={svgPaths.p28f52a00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3cb44100} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3901b800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p37bf7d00} fill="var(--fill-0, white)" />
                <path d={svgPaths.pb69cc0} fill="var(--fill-0, white)" />
                <path d={svgPaths.p511e800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1bc38a00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1f0b0a00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p31f7e000} fill="var(--fill-0, white)" />
                <path d={svgPaths.p4849870} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3e6f1572} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1e9c6d00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p10d52d80} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1e6ee800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p36917c00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1589e80} fill="var(--fill-0, white)" />
                <path d={svgPaths.pd5d1c80} fill="var(--fill-0, white)" />
                <path d={svgPaths.p392b5d70} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3730d100} fill="var(--fill-0, white)" />
                <path d={svgPaths.p303e340} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  const { t } = useLanguage();
  return (
    <div className="relative shadow-[0px_0px_10.6px_0px_rgba(0,0,0,0.6)] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center leading-[normal] not-italic px-[56px] py-0 relative text-center text-white w-full">
          <p className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_4px] font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[45px] w-full">{t('hero.title')}</p>
          <p className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_4px] font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[30px] uppercase w-full">{t('hero.subtitle')}</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 size-full">
      <Frame2 />
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame180921} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(249, 250, 251) 95.381%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
      <Frame3 />
    </div>
  );
}
