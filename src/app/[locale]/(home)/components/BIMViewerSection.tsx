import { INTRO_IMG2, INTRO_IMG3, INTRO_IMG4, INTRO_IMG5, P_ENGINE_LOGO } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const kIntoImagePaths = [INTRO_IMG5, INTRO_IMG4, INTRO_IMG2, INTRO_IMG3];

export default function BIMViewerSection() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === kIntoImagePaths.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='bim-viewer-section bg-[#e8f1f8] relative size-full py-20 px-4'>
      <div className='max-w-[1280px] mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8'>
        <div className='flex flex-col gap-8 items-start max-w-[500px] w-full order-2 md:order-1 md:ml-10'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-[#191f28] text-[32px] md:text-[48px] leading-tight whitespace-pre-line'>
              {t('bimViewer.title')}
            </h2>
          </div>

          <p className='font-medium text-[#6b7684] text-[18px] md:text-[22px] leading-relaxed whitespace-pre-line'>
            {t('bimViewer.desc')}
          </p>

          <div className='relative w-[60px] h-[83px] md:w-[90px] md:h-[120px]'>
            <Image
              src={P_ENGINE_LOGO}
              alt='P-Engine Logo'
              fill
              className='object-contain object-left'
            />
          </div>
        </div>

        <div className='relative w-full max-w-[600px] aspect-[4/3] order-1 md:order-2 md:mr-auto'>
          {kIntoImagePaths.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`BIM Viewer ${index + 1}`}
              fill
              className={`object-contain transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
