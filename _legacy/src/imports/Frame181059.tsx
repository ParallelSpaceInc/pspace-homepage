function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Pretendard:ExtraBold',sans-serif] justify-center relative shrink-0 text-[#191f28] text-[60px] w-full">
        <p className="leading-[1.45]">이곳에서, 당신의 프로젝트가 시작될 수 있습니다.</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#333d4b] text-[29px] w-full">
        <p className="leading-[1.45]">
          변화는 먼 미래의 이야기가 아닙니다.
          <br aria-hidden="true" />
          지금, 여기서 시작됩니다.
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start leading-[0] min-h-px min-w-[200px] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#333d4b] text-[0px] w-full">
        <p className="leading-[0]">
          <span className="leading-[1.3] text-[30px]">P-Engine</span>
          <span className="leading-[1.3] text-[30px] text-[red]">(PtoM)</span>
          <span className="leading-[1.3] text-[30px]"> </span>
          <span className="leading-[1.5] text-[20px]">(웹 기반 솔루션)</span>
        </p>
      </div>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[1.6] relative shrink-0 text-[#6b7684] text-[20px] w-full">
        <p className="mb-0">
          복잡한 변환을 자동으로 처리하고 싶다면,
          <br aria-hidden="true" />
          {`설치 없이 바로 사용할 수 있는 `}
        </p>
        <p>웹 기반 솔루션이 준비되어 있습니다.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#38beed] h-[40px] relative rounded-[6px] shrink-0 w-[84px]" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[155px] py-[16px] relative w-[84px]">
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.883px] text-gray-50 text-nowrap">
            <p className="leading-[18px] whitespace-pre">신청하기</p>
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
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start leading-[0] min-h-px min-w-[200px] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center relative shrink-0 text-[#333d4b] text-[0px] w-full">
        <p className="leading-[0]">
          <span className="leading-[1.3] text-[30px]">P-Engine</span>
          <span className="leading-[1.5] text-[20px]">{` (데스크탑 솔루션)`}</span>
        </p>
      </div>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[1.6] relative shrink-0 text-[#6b7684] text-[20px] w-full">
        <p className="mb-0">
          정밀한 스캔 데이터 변환이 필요하다면,
          <br aria-hidden="true" />
          디지털 트윈을 자동으로 구현하는
        </p>
        <p>데스크탑 솔루션을 사용해보세요</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-neutral-500 h-[40px] relative rounded-[6px] shrink-0 w-[84px]" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[155px] py-[16px] relative w-[84px]">
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.883px] text-gray-50 text-nowrap">
            <p className="leading-[18px] whitespace-pre">상담하기</p>
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
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-[200px] not-italic relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#333d4b] text-[30px] w-full">
        <p className="leading-[1.3]">P-House</p>
      </div>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.6] relative shrink-0 text-[#6b7684] text-[20px] w-full">
        주거·상업 공간 운영을 디지털화하고 싶다면,
        <br aria-hidden="true" />
        {`하자 점검부터 시설물 관리까지 지원하는 `}
        <br aria-hidden="true" />
        B2B2C 서비스를 제공합니다.
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-neutral-500 h-[40px] relative rounded-[6px] shrink-0 w-[84px]" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[155px] py-[16px] relative w-[84px]">
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.883px] text-gray-50 text-nowrap">
            <p className="leading-[18px] whitespace-pre">상담하기</p>
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

export default function Frame() {
  return (
    <div className="bg-[#b2ebff] relative size-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[100px] items-center justify-center px-[320px] py-[160px] relative size-full">
          <Frame6 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}