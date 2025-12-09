export default function MissionSection() {
  return (
    <section className='mission-section bg-[#b2ebff] flex flex-col items-center justify-center py-20 px-4 w-full'>
      <div className='flex flex-col gap-12 items-center justify-center w-full max-w-[1280px]'>
        {/* Header */}
        <div className='flex flex-col gap-4 md:gap-8 items-center text-center w-full'>
          <h2 className='font-extrabold text-[#191f28] text-3xl md:text-5xl lg:text-6xl leading-[1.45]'>
            이곳에서, 당신의 프로젝트가 시작될 수 있습니다.
          </h2>
          <p className='font-bold text-[#333d4b] text-xl md:text-2xl lg:text-3xl leading-[1.45]'>
            변화는 먼 미래의 이야기가 아닙니다.
            <br />
            지금, 여기서 시작됩니다.
          </p>
        </div>

        {/* Cards Container */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch justify-center w-full pt-10 lg:pt-24'>
          {/* P-Engine Card */}
          <div className='bg-[#d9f5ff] flex flex-col gap-6 p-6 md:p-10 rounded-[20px] shadow-sm w-full max-w-md'>
            {/* Web Solution */}
            <div className='flex flex-wrap items-end justify-between gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[#333d4b] text-2xl md:text-3xl leading-none'>
                  P-Engine <span className='text-red-500'>(PtoM)</span>{' '}
                  <span className='text-base md:text-xl'>(웹 기반 솔루션)</span>
                </h3>
                <div className='font-semibold text-[#6b7684] text-base md:text-xl leading-[1.6]'>
                  <p>
                    복잡한 변환을 자동으로 처리하고 싶다면,
                    <br />
                    설치 없이 바로 사용할 수 있는
                  </p>
                  <p>웹 기반 솔루션이 준비되어 있습니다.</p>
                </div>
              </div>
              <button className='bg-[#38beed] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-[6px] whitespace-nowrap hover:bg-[#2da8d8] transition-colors'>
                신청하기
              </button>
            </div>

            {/* Divider */}
            <div className='divider before:bg-[#ABABAB] after:bg-[#ABABAB] my-0' />

            {/* Desktop Solution */}
            <div className='flex flex-wrap items-end justify-between gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[#333d4b] text-2xl md:text-3xl leading-none'>
                  P-Engine <span className='text-base md:text-xl'>(데스크탑 솔루션)</span>
                </h3>
                <div className='font-semibold text-[#6b7684] text-base md:text-xl leading-[1.6]'>
                  <p>
                    정밀한 스캔 데이터 변환이 필요하다면,
                    <br />
                    디지털 트윈을 자동으로 구현하는
                  </p>
                  <p>데스크탑 솔루션을 사용해보세요</p>
                </div>
              </div>
              <button className='bg-neutral-500 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-[6px] whitespace-nowrap hover:bg-neutral-600 transition-colors'>
                상담하기
              </button>
            </div>
          </div>

          {/* P-House Card */}
          <div className='bg-[#d9f5ff] flex flex-col justify-center p-6 md:p-10 rounded-[20px] shadow-sm w-full max-w-md'>
            <div className='flex flex-wrap items-end justify-between gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[#333d4b] text-2xl md:text-3xl leading-none'>
                  P-House
                </h3>
                <p className='font-semibold text-[#6b7684] text-base md:text-xl leading-[1.6]'>
                  주거·상업 공간 운영을 디지털화하고 싶다면,
                  <br />
                  하자 점검부터 시설물 관리까지 지원하는
                  <br />
                  B2B2C 서비스를 제공합니다.
                </p>
              </div>
              <button className='bg-neutral-500 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-[6px] whitespace-nowrap hover:bg-neutral-600 transition-colors'>
                상담하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
