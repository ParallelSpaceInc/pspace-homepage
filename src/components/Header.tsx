'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HOME_LOGO, X_ICON, DOWN_ARROW_ICON, UP_ARROW_ICON } from '@/lib/images';
import { useLanguage } from '@/contexts/LanguageContext';
import TopBanner from './top-banner';

interface HamburgerMenuProps {
  topOffset?: string;
}

function HamburgerMenu({ topOffset = 'top-16' }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const handleScrollToPHouse = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    // If not on home page, navigate to home with hash
    if (pathname !== '/' && pathname !== '/ko' && pathname !== '/en') {
      window.location.href = '/#phouse';
      return;
    }

    const target = document.getElementById('phouse');
    if (target) {
      const header = document.querySelector('header');
      const offset = header?.getBoundingClientRect().bottom || 0;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className='lg:hidden flex items-center'>
      <label className='btn btn-circle btn-ghost swap swap-rotate z-50'>
        {/* this hidden checkbox controls the state */}
        <input type='checkbox' checked={isOpen} onChange={() => setIsOpen(!isOpen)} />

        {/* hamburger icon */}
        <svg
          className='swap-off fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
        </svg>

        {/* close icon */}
        <svg
          className='swap-on fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
        </svg>
      </label>

      {/* Overlay Container - Starts below header */}
      <div
        className={`fixed inset-0 ${topOffset} z-40 flex justify-end transition-visibility duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Dimmer */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel - Right aligned */}
        <div
          className={`relative h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto`}
        >
          <ul className='menu p-4 w-full text-[#00274a] text-lg'>
            <li>
              <Link href='/introduction' onClick={() => setIsOpen(false)}>
                {t('header.company')}
              </Link>
            </li>
            <li>
              <details open>
                <summary>{t('header.products')}</summary>
                <ul>
                  <li>
                    <Link
                      href='#'
                      className='text-gray-400 pointer-events-none hover:bg-gray-100 rounded-lg'
                    >
                      {t('productMenu.pEngine')}
                    </Link>
                  </li>
                  <li>
                    <a
                      href='https://pspace.ai/p-engine'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:bg-gray-100 rounded-lg'
                    >
                      {t('productMenu.pEngineWeb')}
                    </a>
                  </li>
                  <li>
                    <Link
                      href='/revit'
                      onClick={() => setIsOpen(false)}
                      className='hover:bg-gray-100 rounded-lg'
                    >
                      P-Engine for Revit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/pdash'
                      onClick={() => setIsOpen(false)}
                      className='hover:bg-gray-100 rounded-lg'
                    >
                      {t('productMenu.pDash')}
                    </Link>
                  </li>
                  <li>
                    <a
                      href='/#phouse'
                      onClick={handleScrollToPHouse}
                      className='hover:bg-gray-100 rounded-lg'
                    >
                      {t('productMenu.pHouse')}
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href='/contact' onClick={() => setIsOpen(false)}>
                {t('header.contact')}
              </Link>
            </li>
            <li>
              <Link href='/careers' onClick={() => setIsOpen(false)}>
                {t('header.careers')}
              </Link>
            </li>
          </ul>

          <div className='divider px-4 my-0'></div>

          {/* Language Switcher */}
          <div className='px-8 py-4'>
            <button
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className='flex items-center gap-4 hover:bg-gray-100 rounded-lg px-4 py-2 transition-colors cursor-pointer'
            >
              <span
                className={`text-[16px] font-bold transition-colors ${
                  language === 'ko' ? 'text-[#00274a]' : 'text-[#bfbfbf]'
                }`}
              >
                KO
              </span>
              <span className='text-[#bfbfbf]'>|</span>
              <span
                className={`text-[16px] font-bold transition-colors ${
                  language === 'en' ? 'text-[#00274a]' : 'text-[#bfbfbf]'
                }`}
              >
                EN
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoImage() {
  return (
    <div className='h-12 relative shrink-0 w-[130px]' data-name='Logo Image'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <img
          alt='P.SPACE'
          className='absolute left-0 max-w-none size-full top-0 object-contain'
          src={HOME_LOGO}
        />
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <Link
      href='/'
      className='box-border content-stretch flex gap-[10px] h-full items-center overflow-clip px-0 relative shrink-0 cursor-pointer'
      data-name='Left Column'
    >
      <LogoImage />
    </Link>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
      className='flex items-center gap-2 ml-2 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors cursor-pointer'
    >
      <span
        className={`text-sm font-bold transition-colors ${
          language === 'ko' ? 'text-[#00274a]' : 'text-[#bfbfbf]'
        }`}
      >
        KO
      </span>
      <span className='text-[#bfbfbf] text-sm'>|</span>
      <span
        className={`text-sm font-bold transition-colors ${
          language === 'en' ? 'text-[#00274a]' : 'text-[#bfbfbf]'
        }`}
      >
        EN
      </span>
    </button>
  );
}

function NavMenu() {
  const { t } = useLanguage();
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScrollToPHouse = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductMenuOpen(false);

    // If not on home page, navigate to home with hash
    if (pathname !== '/' && pathname !== '/ko' && pathname !== '/en') {
      window.location.href = '/#phouse';
      return;
    }

    const target = document.getElementById('phouse');
    if (target) {
      const header = document.querySelector('header');
      const offset = header?.getBoundingClientRect().bottom || 0;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='navbar-center hidden lg:flex h-[48px] items-center'>
      <ul className='menu menu-horizontal px-1 text-base font-medium text-[#00274a] gap-4 h-full min-h-0'>
        <li className='flex items-center h-full'>
          <Link
            href='/introduction'
            className='hover:bg-gray-100 rounded-lg h-full flex items-center px-4'
          >
            {t('header.company')}
          </Link>
        </li>
        <li className='flex items-center h-full'>
          <div
            className='h-full flex items-center relative active:!bg-transparent hover:!bg-transparent focus:!bg-transparent'
            onMouseEnter={() => setIsProductMenuOpen(true)}
            onMouseLeave={() => setIsProductMenuOpen(false)}
          >
            <div
              className={`hover:bg-gray-100 rounded-lg px-4 py-2 flex items-center pointer-events-none select-none focus:outline-none active:bg-gray-100 ${
                isProductMenuOpen ? 'bg-gray-100' : ''
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {t('header.products')}
            </div>
            {isProductMenuOpen && (
              <ul
                className='absolute top-full left-0 z-[1] menu p-2 shadow bg-white rounded-box w-52 text-[#00274a] text-[16px] pt-4 gap-1 mt-0 [&_li>*]:hover:bg-gray-100 [&_li>*]:active:bg-gray-100 [&_li>*]:active:text-[#00274a] [&_li>*]:pointer-events-auto'
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <li onClick={(e) => e.stopPropagation()}>
                  <Link href='#' className='text-gray-400 pointer-events-none'>
                    {t('productMenu.pEngine')}
                  </Link>
                </li>
                <li onClick={(e) => e.stopPropagation()}>
                  <a href='https://app.pspace.ai/' target='_blank' rel='noopener noreferrer'>
                    {t('productMenu.pEngineWeb')}
                  </a>
                </li>
                <li onClick={(e) => e.stopPropagation()}>
                  <Link href='/revit'>P-Engine for Revit</Link>
                </li>
                <li onClick={(e) => e.stopPropagation()}>
                  <Link href='/pdash'>{t('productMenu.pDash')}</Link>
                </li>
                <li onClick={(e) => e.stopPropagation()}>
                  <a href='/#phouse' onClick={handleScrollToPHouse}>
                    {t('productMenu.pHouse')}
                  </a>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className='flex items-center h-full'>
          <Link
            href='/contact'
            className='hover:bg-gray-100 rounded-lg h-full flex items-center px-4'
          >
            {t('header.contact')}
          </Link>
        </li>
        <li className='flex items-center h-full'>
          <Link
            href='/careers'
            className='hover:bg-gray-100 rounded-lg h-full flex items-center px-4'
          >
            {t('header.careers')}
          </Link>
        </li>
      </ul>
      <div className='ml-4 h-full flex items-center'>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const showBannerPaths = ['/', '/ko', '/en'];
  const shouldShowBanner = showBannerPaths.includes(pathname) && showBanner;

  const headerTop = shouldShowBanner ? 'top-16' : 'top-0';
  const menuTop = shouldShowBanner ? 'top-32' : 'top-16';

  return (
    <>
      {shouldShowBanner && (
        <TopBanner
          imageAlt='PSpace NVIDIA Inception Program'
          link='https://www.nvidia.com/en-us/startups/'
          closable={true}
          onClose={() => setShowBanner(false)}
          loading={loading}
        />
      )}
      {/* Placeholder to preserve layout space for fixed header + optional banner */}
      <div className={shouldShowBanner ? 'h-32' : 'h-16'} />
      <header
        className={`bg-white h-16 min-h-16 box-border w-full border-b border-[#bfbfbf]/30 z-50 fixed ${headerTop} flex items-center justify-center px-4 md:px-8`}
        data-name='Header'
      >
        <div className='basis-0 content-stretch flex grow items-center justify-between max-w-[1280px] min-h-px min-w-px relative shrink-0 w-full mx-auto'>
          <LeftColumn />
          <NavMenu />
          <HamburgerMenu topOffset={menuTop} />
        </div>
      </header>
    </>
  );
}
