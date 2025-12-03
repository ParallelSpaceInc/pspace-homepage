'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactUsButton from './contact-us-button';

interface FormData {
  name: string;
  contact: string;
  email: string;
  message: string;
}

function isValidContact(contact: string) {
  return /^\d{10,11}$/.test(contact);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function SearchParamsContactUsSection() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const [form_data, SetFormData] = useState<FormData>({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const isFormValid = () => {
    return (
      form_data.name.trim() !== '' &&
      isValidContact(form_data.contact) &&
      isValidEmail(form_data.email) &&
      form_data.message.trim() !== ''
    );
  };

  const isButtonDisabled = isLoading || !isFormValid();

  function OnChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    SetFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function OnSubmit() {
    if (!isFormValid()) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        'https://cuidxrskd73mkgy37lumyyqy6e0czzun.lambda-url.ap-northeast-2.on.aws/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form_data.name,
            phoneNumber: form_data.contact,
            email: form_data.email,
            inquiry: form_data.message,
          }),
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        if (data.isInquired) {
          SetFormData({
            name: '',
            contact: '',
            email: '',
            message: '',
          });
          alert('문의가 성공적으로 접수되었습니다.');
        } else {
          alert(`서버 오류: ${data.error}`);
        }
      } else {
        alert(`서버 오류, 상태 코드: ${response.status}`);
      }
    } catch (err) {
      alert(`네트워크 오류: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (searchParams.get('intro') === '4') {
      setTimeout(() => {
        const section = document.querySelector('[data-section="contact"]');
        if (section) {
          const offset = -100;
          const top = section.getBoundingClientRect().top + window.pageYOffset + offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <div
      className='contact_us_section w-full max-w-[1200px] flex flex-col items-center gap-4 mb-20'
      data-section='contact'
    >
      <div className='flex flex-col items-center gap-2 mb-8'>
        <h2 className='text-3xl font-bold text-[#191f28]'>{t('contactUs.title')}</h2>
        <p className='text-[#6b7684] text-lg text-center whitespace-pre-line'>
          {t('contactUs.desc')}
        </p>
      </div>

      <div className='contact_form w-full max-w-[600px] flex flex-col gap-4 items-start'>
        <div className='w-full'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
            {t('contactUs.name')}
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder={t('contactUs.namePlaceholder')}
            value={form_data.name}
            onChange={OnChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#38beed] focus:border-[#38beed]'
          />
        </div>

        <div className='w-full'>
          <label htmlFor='contact' className='block text-sm font-medium text-gray-700 mb-1'>
            {t('contactUs.contact')}
          </label>
          <input
            type='text'
            id='contact'
            name='contact'
            placeholder={t('contactUs.contactPlaceholder')}
            value={form_data.contact}
            onChange={OnChange}
            required
            className={`w-full px-4 py-2 border rounded-md focus:ring-[#38beed] focus:border-[#38beed] ${
              form_data.contact !== '' && !isValidContact(form_data.contact)
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {form_data.contact !== '' && !isValidContact(form_data.contact) && (
            <p className='mt-1 text-sm text-red-500'>{t('contactUs.contactError')}</p>
          )}
        </div>

        <div className='w-full'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
            {t('contactUs.email')}
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder={t('contactUs.emailPlaceholder')}
            value={form_data.email}
            onChange={OnChange}
            required
            className={`w-full px-4 py-2 border rounded-md focus:ring-[#38beed] focus:border-[#38beed] ${
              form_data.email !== '' && !isValidEmail(form_data.email)
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {form_data.email !== '' && !isValidEmail(form_data.email) && (
            <p className='mt-1 text-sm text-red-500'>{t('contactUs.emailError')}</p>
          )}
        </div>

        <div className='w-full'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
            {t('contactUs.inquiry')}
          </label>
          <textarea
            id='message'
            name='message'
            placeholder={t('contactUs.inquiryPlaceholder')}
            value={form_data.message}
            onChange={OnChange}
            required
            rows={4}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#38beed] focus:border-[#38beed]'
          />
        </div>

        <ContactUsButton on_click={OnSubmit} disabled={isButtonDisabled} />
      </div>
    </div>
  );
}

export default function ContactUsSection() {
  return (
    <Suspense
      fallback={
        <div className='w-full max-w-[1200px] flex flex-col items-center gap-4 mb-20'>
          <div>Loading...</div>
        </div>
      }
    >
      <SearchParamsContactUsSection />
    </Suspense>
  );
}

