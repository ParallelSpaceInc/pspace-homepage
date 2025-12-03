import imgImage from "@/assets/474b407a617a6eda85b3e432050af6ee05296ce8.png";

function Frame() {
  return (
    <div className="h-[40px] max-w-[1280px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 40">
        <g id="Frame 181069">
          <line id="Line 1" stroke="var(--stroke-0, #ABABAB)" x2="1280" y1="19.5" y2="19.5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">지원 시, 다음을 참고하여 필수 서류를 제출해 주세요.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        <p className="leading-[normal] whitespace-pre">{`필수 항목 `}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-normal justify-center leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`이력서 (Resume) `}</p>
        <p className="mb-0">{`지원자의 경력과 기술을 명확히 나타내는 문서입니다. `}</p>
        <p>{`PDF 형식으로 제출해주세요. `}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <div className="relative shrink-0 size-[30px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[5.2%] max-w-none top-0 w-[89.6%]" src={imgImage.src} />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#004592] max-h-[160px] max-w-[400px] min-w-[340px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col justify-center max-h-inherit max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center max-h-inherit max-w-inherit min-w-inherit p-[20px] relative w-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">선택 항목</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-normal justify-center leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`자기소개서 (Cover Letter) `}</p>
        <p className="mb-0">{`지원 동기와 자신의 강점을 간단히 설명해 주세요. `}</p>
        <p>{`PDF 형식으로 제출해주세요. `}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <div className="relative shrink-0 size-[30px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[5.2%] max-w-none top-0 w-[89.6%]" src={imgImage.src} />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#727272] max-h-[160px] max-w-[400px] min-w-[340px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col justify-center max-h-inherit max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center max-h-inherit max-w-inherit min-w-inherit p-[20px] relative w-full">
          <Container4 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e10800] text-[13px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          {`*서류 제출 시 첨부 파일 버튼을 클릭 하여 파일을 업로드해 주세요. `}
          <br aria-hidden="true" />
          궁금한 점이 있거나 추가 정보가 필요 하면 언제든 문의해 주세요.
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background1 />
      <Container7 />
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center px-[20px] py-0 relative w-full">
          <Container />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center px-[20px] py-0 relative size-full">
          <Frame />
          <Section />
          <Frame />
        </div>
      </div>
    </div>
  );
}
