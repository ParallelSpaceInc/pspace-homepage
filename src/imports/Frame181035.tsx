import img10 from "@/assets/9fcdc2a50e7e34917961345768fde0cbc4ef46cd.png";
import img50 from "@/assets/8187fac80d559110d279a4e222f9d0818621206f.png";
import img60 from "@/assets/d92f2627a9c7a0bbf5ec717170a4ce8e29ed7881.png";
import img40 from "@/assets/745ae900f9d00cc0209ac2c51abc8dafb0a768d9.png";
import img801 from "@/assets/c07200c00b75ad807f98e5843d929b765cfbf278.png";
import img30 from "@/assets/adb43001266eb9f08e7339a3d77d3424c205ccda.png";
import { useLanguage } from "../contexts/LanguageContext";

function Frame() {
  return (
    <div className="aspect-[300/300] basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px p-[10px] relative shrink-0">
      <div className="h-[293px] relative shrink-0 w-[274px]" data-name="10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img10.src} />
      </div>
    </div>
  );
}

function Frame1() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[normal]">{t('useCases.smartFactory.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('useCases.smartFactory.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-start justify-center min-w-[273px] relative shrink-0 w-[640px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="aspect-[300/300] basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px p-[10px] relative shrink-0">
      <div className="h-[241px] relative shrink-0 w-[292px]" data-name="50">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img50.src} />
      </div>
    </div>
  );
}

function Frame3() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[normal]">{t('useCases.smartMarine.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('useCases.smartMarine.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-start justify-center min-w-[273px] relative shrink-0 w-[640px]">
      <Frame8 />
      <Frame3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="aspect-[300/300] basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px p-[10px] relative shrink-0">
      <div className="h-[282.021px] relative shrink-0 w-[285px]" data-name="60">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img60.src} />
      </div>
    </div>
  );
}

function Frame2() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[normal]">{t('useCases.asBuilt.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('useCases.asBuilt.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-start justify-center min-w-[273px] relative shrink-0 w-[640px]">
      <Frame14 />
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="aspect-[300/300] basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px p-[10px] relative shrink-0">
      <div className="h-[231px] relative shrink-0 w-[291px]" data-name="40">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img40.src} />
      </div>
    </div>
  );
}

function Frame4() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[normal]">{t('useCases.robotSim.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('useCases.robotSim.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-start justify-center min-w-[273px] relative shrink-0 w-[640px]">
      <Frame9 />
      <Frame4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="aspect-[300/300] basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px p-[10px] relative shrink-0">
      <div className="h-[291px] relative shrink-0 w-[293px]" data-name="자산 80 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img801.src} />
      </div>
    </div>
  );
}

function Frame6() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[32px] w-[min-content]">
        <p className="leading-[normal]">{t('useCases.print3d.title')}</p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('useCases.print3d.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-start justify-center min-w-[273px] relative shrink-0 w-[640px]">
      <Frame15 />
      <Frame6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="aspect-[300/300] basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px p-[10px] relative shrink-0">
      <div className="h-[231px] relative shrink-0 w-[295px]" data-name="30">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img30.src} />
      </div>
    </div>
  );
}

function Frame5() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[#333d4b] text-[0px] w-[min-content]">
        <p className="leading-[normal]">
          <span className="text-[32px]">{t('useCases.vfx.title')}</span>
          <span className="text-[22px]">{` ${t('useCases.vfx.subtitle')}`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center relative shrink-0 text-[#6b7684] text-[22px] text-nowrap">
        <p className="leading-[1.55] whitespace-pre-line">
          {t('useCases.vfx.desc')}
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[458px] items-start justify-center min-w-[273px] relative shrink-0 w-[640px]">
      <Frame17 />
      <Frame5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-start flex flex-wrap gap-0 items-start relative w-full">
        <Frame7 />
        <Frame11 />
        <Frame12 />
        <Frame10 />
        <Frame16 />
        <Frame18 />
      </div>
    </div>
  );
}

export default function Frame13() {
  return (
    <div className="bg-gradient-to-b from-[#f2f2f2] from-[83.944%] relative size-full to-[#f9fafb] to-[95.713%]">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[150px] pt-[70px] px-[320px] relative size-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}
