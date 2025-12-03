import Image from 'next/image';
import { CAREER_BANNER } from '@/lib/images';

export default function CareersHero() {
  return (
    <section
      id='CareersHero'
      className='w-full relative bg-gradient-to-b from-[#FFD700] to-white py-10 px-4'
    >
      <div className='w-full max-w-[1280px] mx-auto flex flex-col items-center'>
        <div className='relative w-full aspect-[3.4/1] max-w-[1000px]'>
          <Image src={CAREER_BANNER} alt='Careers Hero' fill className='object-contain' priority />
        </div>
      </div>
    </section>
  );
}
