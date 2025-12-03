'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { svgIcons } from './svg-icons';

function InnovationIcon() {
  return (
    <div className='h-[90px] relative shrink-0 w-[77.52px]'>
      <svg className='block size-full' fill='none' preserveAspectRatio='none' viewBox='0 0 78 90'>
        <g id='Group 180930'>
          <path d={svgIcons.p3389700} fill='var(--fill-0, #858C78)' id='Vector' />
          <path d={svgIcons.p1a9246f0} fill='var(--fill-0, #1F404E)' id='Vector_2' />
          <path d={svgIcons.p2c21cc30} fill='var(--fill-0, #E1D9C1)' id='Vector_3' />
          <path d={svgIcons.p1828b180} fill='var(--fill-0, #B8B399)' id='Vector_4' />
          <path d={svgIcons.p167a1880} fill='var(--fill-0, #C8C0A7)' id='Vector_5' />
          <path d={svgIcons.p37cef200} fill='var(--fill-0, #35696B)' id='Vector_6' />
          <path d={svgIcons.p1ad91b10} fill='var(--fill-0, #5E482B)' id='Vector_7' />
          <path d={svgIcons.p2aa9de80} fill='var(--fill-0, #5E482B)' id='Vector_8' />
          <path d={svgIcons.p19025d00} fill='var(--fill-0, #352715)' id='Vector_9' />
          <path d={svgIcons.p25259800} fill='var(--fill-0, #352715)' id='Vector_10' />
          <path d={svgIcons.p264ddd00} fill='var(--fill-0, #FABA3E)' id='Vector_11' />
          <path d={svgIcons.p137ed600} fill='var(--fill-0, #F3A11E)' id='Vector_12' />
          <path d={svgIcons.p3114f000} fill='var(--fill-0, #F8B436)' id='Vector_13' />
          <path d={svgIcons.p29028780} fill='var(--fill-0, #F8B436)' id='Vector_14' />
          <path d={svgIcons.p29b9ac00} fill='var(--fill-0, #F8B436)' id='Vector_15' />
          <path d={svgIcons.p31eda500} fill='var(--fill-0, #F8B436)' id='Vector_16' />
          <path d={svgIcons.p50cbf00} fill='var(--fill-0, #F8B436)' id='Vector_17' />
          <path d={svgIcons.pb09d380} fill='var(--fill-0, #F8B436)' id='Vector_18' />
          <path d={svgIcons.p273dc380} fill='var(--fill-0, #F8B436)' id='Vector_19' />
        </g>
      </svg>
    </div>
  );
}

function RealityIcon() {
  return (
    <div className='h-[90.494px] relative shrink-0 w-[90px]'>
      <svg className='block size-full' fill='none' preserveAspectRatio='none' viewBox='0 0 90 91'>
        <g id='Group 180931'>
          <path d={svgIcons.p356a4000} fill='var(--fill-0, #1F404E)' id='Vector' />
          <path d={svgIcons.p280de000} fill='var(--fill-0, #B0987A)' id='Vector_2' />
          <path d={svgIcons.p32216500} fill='var(--fill-0, #66533E)' id='Vector_3' />
          <path d={svgIcons.p14e90700} fill='var(--fill-0, #7B654B)' id='Vector_4' />
          <path d={svgIcons.p1e48fe80} fill='var(--fill-0, #6E5A43)' id='Vector_5' />
          <path d={svgIcons.p2c1eb800} fill='var(--fill-0, #C2A887)' id='Vector_6' />
          <path d={svgIcons.p294db448} fill='var(--fill-0, #6E5A43)' id='Vector_7' />
          <path d={svgIcons.p1458c440} fill='var(--fill-0, #7B654B)' id='Vector_8' />
          <path d={svgIcons.p19a86800} fill='var(--fill-0, #A68865)' id='Vector_9' />
          <path d={svgIcons.p217a7b80} fill='var(--fill-0, #35696B)' id='Vector_10' />
          <path d={svgIcons.p26872500} fill='var(--fill-0, #35696B)' id='Vector_11' />
        </g>
      </svg>
    </div>
  );
}

function ClarityIcon() {
  return (
    <div className='h-[90px] relative shrink-0 w-[85.352px]'>
      <svg className='block size-full' fill='none' preserveAspectRatio='none' viewBox='0 0 86 90'>
        <g id='Group 180932'>
          <path d={svgIcons.p2c7c79c0} fill='var(--fill-0, #1F404E)' id='Vector' />
          <path d={svgIcons.p21996600} fill='var(--fill-0, #9C8256)' id='Vector_2' />
          <path d={svgIcons.p3ed50400} fill='var(--fill-0, #EBD9B2)' id='Vector_3' />
          <path d={svgIcons.p30a98e80} fill='var(--fill-0, #8C734A)' id='Vector_4' />
          <path d={svgIcons.p31983300} fill='var(--fill-0, #AD9366)' id='Vector_5' />
          <path d={svgIcons.p3bde4d70} fill='var(--fill-0, #C7AF83)' id='Vector_6' />
          <path d={svgIcons.p24080000} fill='var(--fill-0, #D2BA8E)' id='Vector_7' />
          <path d={svgIcons.p13ee2580} fill='var(--fill-0, #94794E)' id='Vector_8' />
          <path d={svgIcons.p286f4df0} fill='var(--fill-0, #35696B)' id='Vector_9' />
          <path d={svgIcons.p10a89480} fill='var(--fill-0, #FABA3E)' id='Vector_10' />
          <path d={svgIcons.p1839e700} fill='var(--fill-0, #FABA3E)' id='Vector_11' />
        </g>
      </svg>
    </div>
  );
}

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className='w-full relative'>
      <div className='bg-gradient-to-b box-border content-stretch flex flex-col from-[#f9fafb] gap-[28px] items-center justify-center px-0 py-[120px] relative size-full to-[#d4d4d4]'>
        <div className='content-start flex flex-wrap gap-[80px] items-start justify-center relative shrink-0 w-full'>
          {/* Innovation Feature */}
          <div className='content-stretch flex flex-col gap-[20px] items-center min-w-[273px] relative shrink-0 w-[372px]'>
            <div className='box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[10px] relative shrink-0 size-[100px]'>
              <InnovationIcon />
            </div>
            <p className='font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#191f28] text-[32px] text-center w-[min-content]'>
              {t('features.innovationTitle')}
            </p>
            <div className='font-semibold leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333d4b] text-[20px] text-center w-[min-content]'>
              <p className='whitespace-pre-line'>{t('features.innovationDesc')}</p>
            </div>
          </div>

          {/* Reality Feature */}
          <div className='content-stretch flex flex-col gap-[20px] items-center min-w-[273px] relative shrink-0 w-[372px]'>
            <div className='box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[10px] relative shrink-0 size-[100px]'>
              <RealityIcon />
            </div>
            <p className='font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#191f28] text-[32px] text-center w-[min-content]'>
              {t('features.realityTitle')}
            </p>
            <div className='font-semibold leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333d4b] text-[20px] text-center w-[min-content]'>
              <p className='whitespace-pre-line'>{t('features.realityDesc')}</p>
            </div>
          </div>

          {/* Clarity Feature */}
          <div className='content-stretch flex flex-col gap-[20px] items-center min-w-[273px] relative shrink-0 w-[372px]'>
            <div className='box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[10px] relative shrink-0 size-[100px]'>
              <ClarityIcon />
            </div>
            <p className='font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#191f28] text-[32px] text-center w-[min-content]'>
              {t('features.clarityTitle')}
            </p>
            <div className='font-semibold leading-[1.6] min-w-full not-italic relative shrink-0 text-[#333d4b] text-[20px] text-center w-[min-content]'>
              <p className='whitespace-pre-line'>{t('features.clarityDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

