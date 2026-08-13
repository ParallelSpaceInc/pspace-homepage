'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { APP_URL } from '@/lib/urls';

const HEADER_LOGO_KO = '/assets/logos/company/pspace_logo_header.png';
const HEADER_LOGO_EN = '/assets/logos/company/Pspace_logo_en_b.svg';

const navLinkClass = 'text-[15px] font-semibold text-[#3a4a57] whitespace-nowrap';
const mobileNavLinkClass = 'text-[16px] font-semibold text-[#3a4a57] py-2';
const productMenuItemClass =
  'flex rounded-lg px-3 py-2 text-[15px] text-[#00274a] hover:bg-gray-100';

export default function MainHeader() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // ponytail: same scroll-or-navigate fallback for any homepage-section anchor — these links
  // live on '/' only, so a click from another route needs a full navigation instead of a local
  // scroll. Matches HeroSection's ProductCard onClick so all section-jump buttons behave alike.
  const handleScrollTo = (anchor: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductMenuOpen(false);
    closeMenu();
    if (pathname !== '/' && pathname !== '/ko' && pathname !== '/en') {
      window.location.href = `/#${anchor}`;
      return;
    }
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  };

  const productMenuItems = (
    <>
      <li>
        <Link href='#' className={`${productMenuItemClass} pointer-events-none text-gray-400`}>
          {t('productMenu.pEngine')}
        </Link>
      </li>
      <li>
        <a href={APP_URL} target='_blank' rel='noopener noreferrer' className={productMenuItemClass}>
          {t('productMenu.pEngineWeb')}
        </a>
      </li>
      <li>
        <Link href='/revit' className={productMenuItemClass} onClick={closeMenu}>
          {t('productMenu.pEngineForRevit')}
        </Link>
      </li>
      <li>
        <Link href='/pdash' className={productMenuItemClass} onClick={closeMenu}>
          {t('productMenu.pDash')}
        </Link>
      </li>
      <li>
        <a href='/#phouse' className={productMenuItemClass} onClick={handleScrollTo('phouse')}>
          {t('productMenu.pHouse')}
        </a>
      </li>
    </>
  );

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 w-full h-16 flex justify-center border-b border-[#bfbfbf]/30 bg-white px-4 md:px-[120px]'>
        <div className='w-full max-w-[1200px] flex items-center justify-between'>
          <Link href='/' className='shrink-0' onClick={closeMenu}>
            <img
              src={language === 'ko' ? HEADER_LOGO_KO : HEADER_LOGO_EN}
              alt='P.SPACE'
              className='h-7 w-[115px] object-contain'
            />
          </Link>
          {/* ponytail: nav anchor targets map to homepage sections by best guess (no prototype links in Figma); confirm IA later.
              These route through '/' since this header now renders on every page, not just home — a
              plain '#hero' would silently no-op when clicked from e.g. /careers. */}
          <nav className='hidden xl:flex items-center gap-[30px]'>
            <div
              className='relative flex h-full items-center'
              onMouseEnter={() => setIsProductMenuOpen(true)}
              onMouseLeave={() => setIsProductMenuOpen(false)}
            >
              <span className={`${navLinkClass} flex cursor-default items-center gap-1`}>
                {t('mainHeader.product')}
                <ChevronDown size={14} className={isProductMenuOpen ? 'rotate-180' : ''} />
              </span>
              {isProductMenuOpen && (
                <ul className='absolute top-full left-0 z-10 w-56 rounded-xl bg-white p-2 shadow-lg'>
                  {productMenuItems}
                </ul>
              )}
            </div>
            <a href='/#tech3' className={navLinkClass} onClick={handleScrollTo('tech3')}>
              {t('mainHeader.tech')}
            </a>
            <a href='/#industry' className={navLinkClass} onClick={handleScrollTo('industry')}>
              {t('mainHeader.cases')}
            </a>
            <Link href='/introduction' className={navLinkClass}>
              {t('mainHeader.company')}
            </Link>
            <Link href='/introduction#press-releases' className={navLinkClass}>
              {t('mainHeader.news')}
            </Link>
            <Link href='/careers' className={navLinkClass}>
              {t('mainHeader.careers')}
            </Link>
            <button
              type='button'
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className='cursor-pointer text-[15px] font-semibold text-[#9aa7b4] transition-colors hover:text-[#3a4a57]'
              aria-label='Toggle language'
            >
              {language === 'ko' ? 'KO' : 'EN'}
            </button>
            <Link
              href='/introduction#contact'
              className='rounded-[12px] bg-[#004592] px-[18px] py-[10px] text-[15px] font-semibold text-white whitespace-nowrap'
            >
              {t('mainHeader.cta')}
            </Link>
          </nav>

          {/* mobile: lang toggle + hamburger only, nav moves into the dropdown below */}
          <div className='flex xl:hidden items-center gap-4'>
            <button
              type='button'
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className='cursor-pointer text-[15px] font-semibold text-[#9aa7b4] transition-colors hover:text-[#3a4a57]'
              aria-label='Toggle language'
            >
              {language === 'ko' ? 'KO' : 'EN'}
            </button>
            <button
              type='button'
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className='cursor-pointer text-[#3a4a57] transition-colors hover:text-[#004592]'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className='fixed top-16 left-0 right-0 z-40 xl:hidden bg-white border-b border-[#bfbfbf]/30 shadow-md px-4 py-4'>
          <nav className='flex flex-col'>
            <details>
              <summary className={`${mobileNavLinkClass} cursor-pointer list-none`}>
                {t('mainHeader.product')}
              </summary>
              <ul className='ml-2 flex flex-col'>{productMenuItems}</ul>
            </details>
            <a href='/#tech3' className={mobileNavLinkClass} onClick={handleScrollTo('tech3')}>
              {t('mainHeader.tech')}
            </a>
            <a href='/#industry' className={mobileNavLinkClass} onClick={handleScrollTo('industry')}>
              {t('mainHeader.cases')}
            </a>
            <Link href='/introduction' className={mobileNavLinkClass} onClick={closeMenu}>
              {t('mainHeader.company')}
            </Link>
            <Link href='/introduction#press-releases' className={mobileNavLinkClass} onClick={closeMenu}>
              {t('mainHeader.news')}
            </Link>
            <Link href='/careers' className={mobileNavLinkClass} onClick={closeMenu}>
              {t('mainHeader.careers')}
            </Link>
            <Link
              href='/introduction#contact'
              onClick={closeMenu}
              className='mt-3 rounded-[12px] bg-[#004592] px-[18px] py-[12px] text-center text-[15px] font-semibold text-white'
            >
              {t('mainHeader.cta')}
            </Link>
          </nav>
        </div>
      )}

      {/* spacer so fixed header doesn't cover the content that follows */}
      <div className='h-16' aria-hidden />
    </>
  );
}
