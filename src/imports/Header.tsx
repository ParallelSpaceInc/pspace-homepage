"use client";
import { useState } from "react";
import Link from "next/link";
import imgLogoImage from "@/assets/a22c7c12285094b3a2b390b27b7f024b2c851bd7.png";
import { useLanguage } from "../contexts/LanguageContext";

function LogoImage() {
  return (
    <div
      className="h-[15.28px] relative shrink-0 w-[130px]"
      data-name="Logo Image"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt="P.SPACE"
          className="absolute left-0 max-w-none size-full top-0 object-contain"
          src={imgLogoImage.src}
        />
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <Link
      href="/"
      className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-0 py-[10px] relative shrink-0 cursor-pointer"
      data-name="Left Column"
    >
      <LogoImage />
    </Link>
  );
}

function NavItem({
  text,
  href,
  onClick,
}: {
  text: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const content = (
    <div
      className="group content-stretch flex flex-col gap-[3px] h-[40px] items-center justify-center min-w-[110px] relative shrink-0 cursor-pointer"
      data-name="Nav Item"
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded hover:bg-gray-50 transition-colors" />
      <div className="z-10 flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00274a] text-[14px] text-center w-full">
        <div className="leading-[26.4px]">{text}</div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

function ProductNavItem() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`content-stretch flex flex-col gap-[3px] h-[40px] items-center justify-center min-w-[110px] relative shrink-0 cursor-pointer rounded transition-colors ${
          isOpen ? "bg-slate-100" : "hover:bg-gray-50"
        }`}
      >
        <div className="z-10 flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00274a] text-[14px] text-center w-full">
          <p className="leading-[26.4px]">{t("header.products")}</p>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[160px]">
          <div className="bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 py-3 flex flex-col overflow-hidden">
            <a
              href="#"
              className="px-5 py-2.5 text-[14px] text-gray-400 font-medium hover:bg-gray-50 hover:text-[#00274a] transition-colors text-left block"
            >
              {t("productMenu.pEngine")}
            </a>
            <a
              href="#"
              className="px-5 py-2.5 text-[14px] text-[#00274a] hover:bg-gray-50 transition-colors text-left block"
            >
              {t("productMenu.pEngineWeb")}
            </a>
            <Link
              href="/pdash"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-[14px] text-[#00274a] hover:bg-gray-50 transition-colors text-left block cursor-pointer"
            >
              {t("productMenu.pDash")}
            </Link>
            <a
              href="#"
              className="px-5 py-2.5 text-[14px] text-[#00274a] hover:bg-gray-50 transition-colors text-left block"
            >
              {t("productMenu.pHouse")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function NavMenu() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Nav menu"
    >
      <NavItem text={t("header.company")} href="/" />
      <ProductNavItem />
      <NavItem text={t("header.contact")} />
      <NavItem text={t("header.careers")} href="/careers" />

      <div
        className="group content-stretch flex flex-col gap-[3px] h-[40px] items-center justify-center min-w-[110px] relative shrink-0 cursor-pointer"
        onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
      >
        <div className="absolute inset-0 rounded hover:bg-gray-50 transition-colors" />
        <div className="z-10 flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00274a] text-[14px] text-center w-full">
          <p>
            <span
              className={`font-['Pretendard:Bold',sans-serif] not-italic ${
                language === "ko" ? "text-[#00274a]" : "text-[#7b7b7b]"
              }`}
            >
              KO
            </span>
            <span className="text-[#7b7b7b]">{` | `}</span>
            <span
              className={`font-['Pretendard:Bold',sans-serif] not-italic ${
                language === "en" ? "text-[#00274a]" : "text-[#7b7b7b]"
              }`}
            >
              EN
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1200px] min-h-px min-w-px relative shrink-0 w-full mx-auto">
      <LeftColumn />
      <NavMenu />
    </div>
  );
}

export default function Header() {
  return (
    <header
      className="bg-white relative w-full border-b border-[#bfbfbf]/30 z-50 sticky top-0"
      data-name="Header"
    >
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-8 py-[14px] relative w-full">
        <Frame />
      </div>
    </header>
  );
}
