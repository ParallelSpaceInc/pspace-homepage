'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface ContactUsButtonProps {
  on_click: () => void;
  disabled?: boolean;
}

function ContactUsButton({ on_click, disabled }: ContactUsButtonProps) {
  const { t } = useLanguage();

  return (
    <button
      onClick={disabled ? undefined : on_click}
      disabled={disabled}
      className={`w-full h-12 rounded-full font-bold text-white transition-colors ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#38beed] hover:bg-[#31a8d1]'
      }`}
    >
      {t('header.contact')}
    </button>
  );
}

export default ContactUsButton;

