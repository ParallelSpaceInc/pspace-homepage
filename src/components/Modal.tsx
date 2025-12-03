'use client';

import { ReactNode } from 'react';
import { X_ICON } from '@/lib/images';

interface ModalProps {
  is_open: boolean;
  OnClose: () => void;
  OnHideToday: () => void;
  children: ReactNode;
}

export default function Modal({ is_open, OnClose, OnHideToday, children }: ModalProps) {
  if (!is_open) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50'>
      <div className='relative bg-white rounded-lg overflow-hidden shadow-xl max-w-[500px] w-full mx-4'>
        {/* Close Button */}
        <button
          onClick={OnClose}
          className='absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 hover:bg-white transition-colors'
        >
          <img src={X_ICON} alt='Close' className='w-6 h-6' />
        </button>

        {/* Content */}
        <div className='relative aspect-square w-full bg-gray-100'>{children}</div>

        {/* Footer */}
        <div className='flex items-center justify-between p-4 bg-white border-t'>
          <button
            onClick={OnHideToday}
            className='text-sm text-gray-500 hover:text-gray-700 cursor-pointer'
          >
            오늘 하루 보지 않기
          </button>
          <button
            onClick={OnClose}
            className='text-sm font-bold text-[#00274a] hover:opacity-80 cursor-pointer'
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
