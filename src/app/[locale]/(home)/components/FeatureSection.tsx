import { useLanguage } from '@/contexts/LanguageContext';
import React, { useEffect, useRef } from 'react';
import { FEATURE0, FEATURE1, FEATURE2, CHECK_ICON } from '@/lib/images';

export default function FeatureSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const videos = containerRef.current.querySelectorAll('video');
    videos.forEach((v) => {
      try {
        v.muted = true;
        v.play().catch(() => {});
      } catch (err) {
        // ignore
      }
    });
  }, []);

  type FeatureItem = {
    mediaType: 'image' | 'video';
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    titleKey?: string; // e.g. 'detail.reconstruction.title'
    subtitleKey?: string;
    descKey?: string;
    colorBox?: boolean;
    type?: 'left' | 'right';
  };

  const items: FeatureItem[] = [
    {
      mediaType: 'image',
      imageSrc: FEATURE0.src,
      imageAlt: 'feature0',
      titleKey: 'detail.reconstruction.title',
      subtitleKey: 'detail.reconstruction.subtitle',
      descKey: 'detail.reconstruction.desc',
      type: 'left',
    },
    {
      mediaType: 'image',
      imageSrc: FEATURE1.src,
      imageAlt: 'feature1',
      titleKey: 'detail.simplification.title',
      subtitleKey: 'detail.simplification.subtitle',
      descKey: 'detail.simplification.desc',
      type: 'right',
    },
    {
      mediaType: 'image',
      imageSrc: FEATURE2.src,
      imageAlt: 'feature2',
      titleKey: 'detail.processing.title',
      subtitleKey: 'detail.processing.subtitle',
      descKey: 'detail.processing.desc',
      type: 'left',
    },
    {
      mediaType: 'video',
      videoSrc: '/assets/videos/feature-segmentation.mp4',
      titleKey: 'detail.classification.title',
      subtitleKey: 'detail.classification.subtitle',
      descKey: 'detail.classification.desc',
      type: 'right',
    },
    {
      mediaType: 'video',
      videoSrc: '/assets/videos/feature-texturing.mp4',
      titleKey: 'detail.texture.title',
      subtitleKey: 'detail.texture.subtitle',
      descKey: 'detail.texture.desc',
      colorBox: true,
      type: 'left',
    },
  ];

  const translateKey = (key?: string) => (key ? t(key) : '');

  const renderDescription = (descKey?: string) => {
    const text = translateKey(descKey);
    if (!text) return null;
    // split by newline and drop empty lines
    const lines = text
      .split('\n')
      .map((s: string) => s.trim())
      .filter(Boolean);
    // If there are multiple lines or the string includes a bullet char, render as list
    if (
      lines.length > 1 ||
      lines.some((l: string) => l.startsWith('▪') || l.startsWith('-') || l.startsWith('•'))
    ) {
      return (
        <ul className='m-0 p-0 space-y-3 text-[14px] md:text-[16px] lg:text-[20px] text-[#333d4b] text-left'>
          {lines.map((line: string, idx: number) => (
            <li key={idx} className='flex items-start gap-3 leading-6'>
              <img src={CHECK_ICON} alt='' className='inline-block w-4 h-4 mt-1 flex-shrink-0' />
              <span className='flex-1'>{line.replace(/^▪\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p className='text-[14px] md:text-[16px] lg:text-[20px] text-[#333d4b] text-left'>{text}</p>
    );
  };

  return (
    <section className='feature-section bg-[#F9FAFB] relative size-full py-20 px-4'>
      <div className='max-w-7xl mx-auto' ref={containerRef}>
        {/* Header - left aligned with underline */}
        <div className='text-left border-b-2 border-gray-300 pb-6 mb-8'>
          <h3 className='font-bold text-heading-base sm:text-heading-sm md:text-heading-md text-[#191f28] whitespace-pre-line'>
            {t('info.title')}
          </h3>
        </div>

        {/* AB pattern list */}
        <div className='flex flex-col gap-16 md:gap-32'>
          {items.map((item, i) => (
            <div
              key={i}
              className={`w-full flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-full md:flex-1 min-w-0 flex justify-center ${
                  i % 2 === 1 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                <div className='aspect-[16/9] w-full relative max-w-[540px]'>
                  {item.mediaType === 'image' && item.imageSrc ? (
                    <img
                      alt={item.imageAlt ?? ''}
                      src={item.imageSrc}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                  ) : item.mediaType === 'video' && item.videoSrc ? (
                    <video
                      className='w-full h-full object-cover pointer-events-none'
                      autoPlay
                      muted
                      loop
                      playsInline
                      onLoadedMetadata={(e) => {
                        const el = e.currentTarget as HTMLVideoElement;
                        try {
                          el.muted = true;
                          el.play().catch(() => {});
                        } catch (err) {
                          // ignore
                        }
                      }}
                      onCanPlay={(e) => {
                        const el = e.currentTarget as HTMLVideoElement;
                        try {
                          el.play().catch(() => {});
                        } catch (err) {
                          // ignore
                        }
                      }}
                    >
                      <source src={item.videoSrc} />
                    </video>
                  ) : item.colorBox ? (
                    <div className='absolute inset-0 w-full h-full bg-[#f26969]' />
                  ) : null}
                </div>
              </div>

              <div className='flex-1 min-w-0 w-full max-w-[540px]'>
                <h4 className='font-bold text-[18px] md:text-[24px] lg:text-[32px] text-[#191f28] mb-2 text-left whitespace-pre-line'>
                  {translateKey(item.titleKey)}
                </h4>
                <p className='font-bold text-[16px] md:text-[20px] lg:text-[24px] text-[#333d4b] mb-3 text-left whitespace-pre-line'>
                  {translateKey(item.subtitleKey)}
                </p>
                <div className='text-[14px] md:text-[16px] lg:text-[20px] text-[#333d4b] text-left'>
                  {renderDescription(item.descKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
