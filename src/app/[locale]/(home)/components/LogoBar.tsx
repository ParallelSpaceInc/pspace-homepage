'use client';

import Marquee from 'react-fast-marquee';

const LOGOS = [
  { src: '/assets/logos/logobar/lg.svg', alt: 'LG전자', aspect: 67 / 18 },
  { src: '/assets/logos/logobar/samsung-cnt.png', alt: '삼성물산', aspect: 160 / 30 },
  { src: '/assets/logos/logobar/hyundai-auto.png', alt: '현대', aspect: 160 / 22 },
  {
    src: '/assets/logos/logobar/hyundai.svg',
    alt: 'HMG Metaplant America',
    aspect: 110 / 18,
  },
  { src: '/assets/logos/logobar/nvidia.svg', alt: 'NVIDIA', aspect: 1367.05 / 259.73 },
  { src: '/assets/logos/logobar/gs-construction.png', alt: 'GS건설', aspect: 89 / 30 },
  { src: '/assets/logos/logobar/hyundai-engineering.png', alt: '현대건설', aspect: 104 / 23 },
  { src: '/assets/logos/logobar/dongkuk-steel.png', alt: '동국제강', aspect: 134 / 30 },
  { src: '/assets/logos/logobar/gs-xi-sd.png', alt: 'GS자이 S&D', aspect: 130 / 25 },
  { src: '/assets/logos/logobar/cj.svg', alt: 'CJ대한통운', aspect: 200 / 61 },
  { src: '/assets/logos/logobar/keumsung-baekjo.png', alt: '금성백조', aspect: 124 / 38 },
  { src: '/assets/logos/logobar/kitech.svg', alt: 'KITECH', aspect: 127.07 / 36.06 },
];

export default function LogoBar() {
  return (
    <section className='w-full flex justify-center bg-[#fafbfc] border-y border-[#eef1f4] px-4 md:px-[60px] lg:px-[120px]'>
      <div className='w-full max-w-[1200px] flex items-center px-4 md:px-10 py-5'>
        <Marquee gradient={false} speed={40} autoFill className='min-w-0'>
          {LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className='h-[18px] w-auto object-contain mr-[30px]'
              style={{ aspectRatio: logo.aspect }}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
