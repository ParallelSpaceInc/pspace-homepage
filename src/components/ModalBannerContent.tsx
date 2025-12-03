'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EventsDataItem } from '@/contexts/DataContext';

interface ModalBannerContentProps {
  images: EventsDataItem[];
}

export default function ModalBannerContent({ images }: ModalBannerContentProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // 10초마다 슬라이드
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  const img = images[current];

  return (
    <Link href='/introduction' className='relative block w-full h-full'>
      <Image src={img.image_link} alt={img.alt} fill className='object-cover' priority />
    </Link>
  );
}
