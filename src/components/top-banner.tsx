'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NVIDIA_INCEPTION_BANNER } from '@/lib/images';

interface TopBannerProps {
  text?: string;
  imageAlt?: string;
  link?: string;
  backgroundColor?: string;
  textColor?: string;
  closable?: boolean;
  onClose?: () => void;
  loading?: boolean;
}

function TopBanner({
  text,
  imageAlt = 'banner',
  link = '#',
  backgroundColor = '#76B900',
  textColor = '#fff',
  closable = true,
  onClose,
  loading = false,
}: TopBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  if (loading) {
    return <div className='fixed top-0 z-[1001] w-full h-16 animate-pulse bg-gray-200' />;
  }

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setIsVisible(false);
  };

  return (
    <div
      className='fixed top-0 left-0 right-0 z-[1001] flex items-center justify-center h-16 px-4 transition-all duration-300 ease-in-out'
      style={{ backgroundColor }}
    >
      {link && link !== '#' ? (
        <Link
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center w-full h-full no-underline'
          style={{ color: textColor }}
        >
          <div className='relative w-[250px] h-[40px]'>
            <Image
              src={NVIDIA_INCEPTION_BANNER}
              alt={imageAlt}
              fill
              className='object-contain cursor-pointer'
              priority
              unoptimized
            />
          </div>
        </Link>
      ) : (
        <div className='relative w-[250px] h-[40px]'>
          <Image
            src={NVIDIA_INCEPTION_BANNER}
            alt={imageAlt}
            fill
            className='object-contain cursor-default'
            priority
            unoptimized
          />
        </div>
      )}

      {closable && (
        <button
          onClick={handleClose}
          className='absolute right-4 btn btn-circle btn-ghost btn-sm hover:bg-black/10'
          style={{ color: textColor }}
          aria-label='Close banner'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default TopBanner;
