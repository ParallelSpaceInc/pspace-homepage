'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className='bg-[#1a1a1a] text-gray-400 py-16 px-4 font-sans'>
      <div className='max-w-[1280px] mx-auto px-4 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12'>
          {/* Company Info Column */}
          <div className='md:col-span-4 flex flex-col gap-4 md:gap-6'>
            <h2 className='text-white text-xl font-bold tracking-tight'>
              {t('footer.companyName')}
            </h2>
            <div className='flex flex-col gap-2 text-sm leading-relaxed'>
              <p>{t('footer.registration')}</p>
              <p>{t('footer.ceo')}</p>
              <p>{t('footer.telecomReport')}</p>
            </div>
            <div className='flex gap-4 pt-2'>
              <a
                href='/about/terms-of-service'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='text-xs border-b border-gray-600 pb-0.5 hover:border-white'>
                  {t('footer.terms')}
                </span>
              </a>
              <a
                href='/about/privacy-policy'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='text-xs border-b border-gray-600 pb-0.5 hover:border-white'>
                  {t('footer.privacy')}
                </span>
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className='md:col-span-5 flex flex-col gap-6'>
            <div>
              <h3 className='text-white text-sm font-semibold mb-3'>{t('footer.locationTitle')}</h3>
              <ul className='flex flex-col gap-3 text-sm'>
                <li className='flex gap-3'>
                  <span className='text-gray-500 min-w-[60px]'>{t('footer.hqLabel')}</span>
                  <span>{t('footer.hqAddress')}</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-gray-500 min-w-[60px]'>{t('footer.rndLabel')}</span>
                  <span>{t('footer.rndAddress')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social Column */}
          <div className='md:col-span-3 flex flex-col gap-6'>
            <div>
              <h3 className='text-white text-sm font-semibold mb-3'>{t('footer.contactTitle')}</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                <li>
                  <span className='text-gray-500 mr-2'>{t('footer.telLabel')}</span>
                  02-6101-0909
                </li>
                <li>
                  <span className='text-gray-500 mr-2'>{t('footer.emailLabel')}</span>
                  pspace@pspace.ai
                </li>
              </ul>
            </div>

            <div className='pt-4'>
              <div className='flex gap-4'>
                <div className='tooltip' data-tip='LinkedIn'>
                  <a
                    href='https://www.linkedin.com/company/%ED%8F%89%ED%96%89%EA%B3%B5%EA%B0%84-parallel-space'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group transition-colors text-gray-400 hover:text-white bg-[#232323] hover:bg-[#2e2e2e] rounded-full p-2 block'
                    aria-label='LinkedIn'
                  >
                    <Image
                      src='/assets/icons/social/linkedinicon.svg'
                      alt='LinkedIn'
                      width={36}
                      height={36}
                      className='transition-opacity duration-300 opacity-80 group-hover:opacity-100 filter invert'
                    />
                  </a>
                </div>
                <div className='tooltip' data-tip='Naver Blog'>
                  <a
                    href='https://blog.naver.com/pspaceofficial'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group transition-colors text-gray-400 hover:text-white bg-[#232323] hover:bg-[#2e2e2e] rounded-full p-2 block'
                    aria-label='Naver Blog'
                  >
                    <Image
                      src='/assets/icons/social/naverblogicon.svg'
                      alt='Naver Blog'
                      width={36}
                      height={36}
                      className='transition-opacity duration-300 opacity-80 group-hover:opacity-100 filter invert'
                    />
                  </a>
                </div>
                <div className='tooltip' data-tip='Youtube'>
                  <a
                    href='https://www.youtube.com/c/%ED%8F%89%ED%96%89%EA%B3%B5%EA%B0%84'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group transition-colors text-gray-400 hover:text-white bg-[#232323] hover:bg-[#2e2e2e] rounded-full p-2 block'
                    aria-label='Youtube'
                  >
                    <Image
                      src='/assets/icons/social/youtubeicon.svg'
                      alt='Youtube'
                      width={36}
                      height={36}
                      className='transition-opacity duration-300 opacity-80 group-hover:opacity-100 filter invert'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600'>
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
