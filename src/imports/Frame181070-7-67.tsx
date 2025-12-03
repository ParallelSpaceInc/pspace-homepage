import svgPaths from './svg-qza4x1en1w';
import { useLanguage } from '@/contexts/LanguageContext';

function Frame1() {
  const { t } = useLanguage();
  return (
    <div className='content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-nowrap'>
      <div className='flex flex-col font-bold justify-center relative shrink-0 text-[#191f28] text-[48px]'>
        <p className='leading-[1.45] text-nowrap whitespace-pre'>{t('bimViewer.title')}</p>
      </div>
      <div className='flex flex-col font-semibold justify-center leading-[1.55] relative shrink-0 text-[#6b7684] text-[22px] whitespace-pre'>
        <p className='mb-0 whitespace-pre-line'>{t('bimViewer.desc')}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className='relative shrink-0 w-full'>
      <div className='flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full'>
        <div className='box-border content-stretch flex items-center justify-end pl-0 pr-[285px] py-0 relative w-full'>
          <div
            className='aspect-[115.5/156.895] basis-0 grow min-h-px min-w-px relative shrink-0'
            data-name='Vector'
          >
            <svg
              className='block size-full'
              fill='none'
              preserveAspectRatio='none'
              viewBox='0 0 115 157'
            >
              <g id='Vector'>
                <path d={svgPaths.p37a54c00} fill='#00428A' />
                <path d={svgPaths.p35c23400} fill='#00428A' />
                <path d={svgPaths.p26fc670} fill='#00428A' />
                <path d={svgPaths.p11827200} fill='#00428A' />
                <path d={svgPaths.p69db9a0} fill='#00428A' />
                <path d={svgPaths.p3d83f880} fill='#00428A' />
                <path d={svgPaths.p243d4800} fill='#00428A' />
                <path d={svgPaths.p3c5d0600} fill='#00428A' />
                <path d={svgPaths.p2d70a980} fill='var(--fill-0, #3EB3DE)' />
                <path d={svgPaths.pef9ea30} fill='#2264B0' />
                <path d={svgPaths.p251e6100} fill='#00428A' />
                <path d={svgPaths.p470d00} fill='#00428A' />
                <path d={svgPaths.p116a35f0} fill='var(--fill-0, #3EB3DE)' />
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
    <div className='box-border content-stretch flex flex-col gap-[40px] items-start justify-center px-0 py-[28px] relative shrink-0 w-[400px]'>
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className='basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-[330px] relative shrink-0'>
      <div
        className='aspect-[1440/1080] relative shrink-0 w-full'
        data-name='제목 없는 동영상 (3) 1'
      >
        <video
          autoPlay
          className='absolute max-w-none object-cover size-full'
          controlsList='nodownload'
          loop
          playsInline
        >
          <source src='/assets/videos/feature-texturing.mp4' />
        </video>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className='basis-0 grow min-h-px min-w-px relative shrink-0'>
      <div className='flex flex-row items-center justify-center size-full'>
        <div className='box-border content-center flex flex-wrap gap-[180px] items-center justify-center px-[320px] py-0 relative w-full'>
          <Frame />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className='bg-[#e8f1f8] box-border content-center flex flex-wrap gap-[120px] items-center justify-center px-0 py-[150px] relative size-full'>
      <Frame4 />
    </div>
  );
}

