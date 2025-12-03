import svgPaths from "./svg-xknsr3zus6";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#383838] text-[9px] w-full">
      <div className="flex flex-col font-normal justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[99.96%]">사업자등록번호: 110111-7538642 | 개인정보 관리 책임자: 이지은 (대표) | 통신판매업신고번호: 2025-부산금정-0205</p>
      </div>
      <div className="flex flex-col font-medium justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[99.96%]">사업자 정보확인</p>
      </div>
      <div className="flex flex-col font-normal justify-end min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">
          <span className="font-medium not-italic">{`HQ: `}</span>46285 부산광역시 금정구 부산대학로50번길 68
        </p>
      </div>
      <div className="flex flex-col font-normal justify-end min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">
          <span className="font-medium not-italic">{`R&D Lab: `}</span>06771 서울특별시 서초구 매헌로 16, 1416호 (서울 AI 허브)
        </p>
      </div>
      <div className="flex flex-col font-medium justify-end min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">
          TEL:<span className="font-normal not-italic">{` 02-6101-0909`}</span>
        </p>
      </div>
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-nowrap text-right">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-semibold not-italic">프로모션 및 사업제안:</span>
          <span>{` support@pspace.ai `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-semibold gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#727272] text-[9px] text-center text-nowrap w-[65px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap whitespace-pre">서비스 이용약관</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap whitespace-pre">개인정보 처리방침</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p1a30f00} fill="var(--fill-0, #383838)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedinCircleSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="linkedin-circle.svg fill">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <LinkedinCircleSvgFill />
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#383838] text-[8px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">{` 링크드인`}</p>
      </div>
    </div>
  );
}

function SocialMediaIconContainer() {
  return (
    <div className="absolute inset-[15%_10%_15.44%_15%]" data-name="Social Media Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        <g id="Social Media Icon Container">
          <path d={svgPaths.p1f884770} fill="var(--fill-0, #383838)" id="Vector" />
          <path d={svgPaths.p363d6f80} fill="var(--fill-0, #383838)" id="Vector_2" />
          <path d={svgPaths.p33689800} fill="var(--fill-0, #383838)" id="Vector_3" />
          <path d={svgPaths.p25996880} fill="var(--fill-0, #383838)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-[15%_10%_15.44%_15%]" data-name="레이어_1">
      <SocialMediaIconContainer />
    </div>
  );
}

function LogoNaverBlogWhSvg() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="logo_naver_blog_wh.svg">
      <Component />
    </div>
  );
}

function LogoNaverBlogWhSvgFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="logo_naver_blog_wh.svg fill">
      <LogoNaverBlogWhSvg />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <LogoNaverBlogWhSvgFill />
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#383838] text-[8px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">네이버 블로그</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bottom-[22.28%] left-[11.7%] right-[13.3%] top-1/4" data-name="레이어_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
        <g id="ë ì´ì´_2">
          <path d={svgPaths.p6a87c80} fill="var(--fill-0, #383838)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoYoutubeWhSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="logo_youtube_wh.svg">
      <Component1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <LogoYoutubeWhSvg />
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#383838] text-[8px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">평행공간 유튜브</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-center justify-end relative shrink-0 w-full">
      <Frame1 />
      <Link />
      <Link1 />
    </div>
  );
}

export default function FooterKor() {
  return (
    <div className="bg-[#d8d8d8] relative size-full" data-name="footerKor">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[80px] py-[20px] relative size-full">
          <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#383838] text-[11px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">(주)평행공간</p>
          </div>
          <Frame2 />
          <Frame3 />
          <Frame />
        </div>
      </div>
    </div>
  );
}
