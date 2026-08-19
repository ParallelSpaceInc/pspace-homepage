'use client';

import { Link } from '@/i18n/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { APP_URL } from '@/lib/urls';

const linkClass = 'text-[#b9c9d8] text-[14px] hover:text-white transition-colors';

export default function MainFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className='w-full flex justify-center bg-[#06182e] px-4 md:px-[60px] lg:px-[120px]'>
      <div className='w-full max-w-[1200px] flex flex-col pt-[72px] pb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 border-b border-[#14304f] pb-[45px]'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-baseline gap-2.5'>
              <span className='text-white font-extrabold text-[22px]'>P.SPACE</span>
              <span className='text-[#b9c9d8] text-[11px] font-semibold tracking-[2.2px]'>
                PARALLEL SPACE
              </span>
            </div>
            <p className='text-[#b9c9d8] text-[14px] leading-[1.7] max-w-[320px]'>
              {t('mainFooter.tagline')}
            </p>
            <div className='flex gap-[18px]'>
              <a
                href='https://www.linkedin.com/company/%ED%8F%89%ED%96%89%EA%B3%B5%EA%B0%84-parallel-space'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#7fd3f2] text-[14px] font-semibold'
              >
                LinkedIn
              </a>
              <a
                href='https://blog.naver.com/pspaceofficial'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#7fd3f2] text-[14px] font-semibold'
              >
                Blog
              </a>
              <a
                href='https://www.youtube.com/c/%ED%8F%89%ED%96%89%EA%B3%B5%EA%B0%84'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#7fd3f2] text-[14px] font-semibold'
              >
                YouTube
              </a>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='text-[#b9c9d8] text-[12px] font-semibold tracking-[1.44px]'>
              {t('mainFooter.productTitle')}
            </p>
            <div className='flex flex-col gap-3'>
              <a href={APP_URL} target='_blank' rel='noopener noreferrer' className={linkClass}>
                {t('mainFooter.productPEngineWeb')}
              </a>
              <Link href='/#phouse' className={linkClass}>
                {t('mainFooter.productPHouse')}
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='text-[#b9c9d8] text-[12px] font-semibold tracking-[1.44px]'>
              {t('mainFooter.companyTitle')}
            </p>
            <div className='flex flex-col gap-3'>
              <Link href='/introduction' className={linkClass}>
                {t('mainFooter.companyAbout')}
              </Link>
              <Link href='/#industry' className={linkClass}>
                {t('mainFooter.companyCases')}
              </Link>
              <Link href='/careers' className={linkClass}>
                {t('mainFooter.companyCareers')}
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='text-[#b9c9d8] text-[12px] font-semibold tracking-[1.44px]'>
              {t('mainFooter.connectTitle')}
            </p>
            <div className='flex flex-col gap-3'>
              <Link href='/#news' className={linkClass}>
                {t('mainFooter.connectNews')}
              </Link>
              <Link href='/introduction#contact' className={linkClass}>
                {t('mainFooter.connectContact')}
              </Link>
              <p className='text-[#b9c9d8] text-[14px]'>contact@pspace.ai</p>
              <p className='text-[#b9c9d8] text-[14px]'>02-6101-0909</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 pt-[26px]'>
          <p className='text-[#6f88a3] text-[12.5px] leading-[1.7]'>
            {t('mainFooter.hqPrefix')} {t('mainFooter.hqAddress')} · {t('mainFooter.rndPrefix')}{' '}
            {t('mainFooter.rndAddress')}
          </p>
          <p className='text-[#6f88a3] text-[12.5px] leading-[1.7]'>
            Parallel Space Inc. · {t('footer.ceo')} · {t('footer.registration')} ·{' '}
            {t('footer.telecomReport')}
          </p>
          <div className='flex gap-4'>
            <Link
              href='/about/terms-of-service'
              className='text-[#6f88a3] text-[12.5px] hover:text-white transition-colors'
            >
              {t('footer.terms')}
            </Link>
            <Link
              href='/about/privacy-policy'
              className='text-[#6f88a3] text-[12.5px] hover:text-white transition-colors'
            >
              {t('footer.privacy')}
            </Link>
          </div>
          <div className='flex flex-wrap items-center justify-between gap-2 pt-1.5'>
            <span className='text-[#b9c9d8] text-[12.5px]'>{t('mainFooter.nvidiaMember')}</span>
            <span className='text-[#b9c9d8] text-[12.5px]'>
              © {year} {t('mainFooter.rightsSuffix')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
