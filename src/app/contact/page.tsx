'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className='relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6]'>
      {/* Decorative Background Elements */}
      <div className='absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px]' />
      <div className='absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]' />

      <div className='relative z-10 w-full max-w-3xl px-4'>
        <div className='bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 text-center transform transition-all hover:scale-[1.01] duration-500'>
          <h1 className='text-3xl md:text-5xl font-bold text-[#00274a] mb-6 tracking-tight'>
            {t('contactUs.title')}
          </h1>

          <p className='text-base md:text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed'>
            {t('contactUs.desc')}
          </p>

          <div className='inline-block group'>
            <a
              href='mailto:contact@pspace.ai'
              className='relative inline-flex items-center justify-center px-6 py-3 text-xl md:text-2xl font-bold text-white bg-[#38beed] rounded-full overflow-hidden transition-all duration-300 group-hover:bg-[#31a8d1]'
            >
              <span className='relative z-10 flex items-center gap-2'>
                contact@pspace.ai
                <svg
                  className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className='mt-12 flex justify-center gap-8 text-gray-400'>
            {/* Simple decorative dots or lines could go here if needed, but keeping it clean for now */}
          </div>
        </div>
      </div>
    </div>
  );
}
