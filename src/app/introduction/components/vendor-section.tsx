'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { PARTNER_LOGOS } from '@/lib/images';

function VendorSection() {
  return (
    <div className='vendor_section w-full max-w-[1200px] h-full flex items-center overflow-hidden relative'>
      <div className='w-full overflow-hidden'>
        <Marquee gradient={false} speed={40} pauseOnHover={false}>
          {PARTNER_LOGOS.map((logo, index) => (
            <div
              key={index}
              className='mx-8 flex items-center justify-center h-20 w-30 relative transition-all duration-300'
            >
              <Image src={logo.src} alt={logo.alt} fill className='object-contain' />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default VendorSection;
