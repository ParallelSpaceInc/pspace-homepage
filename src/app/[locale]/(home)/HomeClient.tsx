'use client';

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import LogoBar from './components/LogoBar';
import BizExpansion from './components/BizExpansion';
import Tech3Intro from './components/Tech3Intro';
import Tech3 from './components/Tech3';
import Industry from './components/Industry';
import Housing from './components/Housing';
import Investment from './components/Investment';
import News from './components/News';
import Modal from '@/components/Modal';
import ModalBannerContent from '@/components/ModalBannerContent';
import { useData } from '@/contexts/DataContext';

import { useRouter } from 'next/navigation'; // Added import

export default function HomeClient() {
  const { events, loading } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<any[]>([]);
  const router = useRouter(); // Added hook

  useEffect(() => {
    // Redirect /en to / to enforce canonical URL for default locale
    if (typeof window !== 'undefined' && window.location.pathname === '/en') {
      router.replace('/');
    }

    // Handle initial scroll with offset if hash is present
    if (window.location.hash === '#phouse') {
      setTimeout(() => {
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
      }, 100);
    }
  }, [router]); // Added router dependency

  useEffect(() => {
    if (loading || !events.length) return;

    const modalEvents = events.filter((e) => e.is_for_modal);
    if (modalEvents.length > 0) {
      setModalImages(modalEvents);

      // Check localStorage
      const hideDate = localStorage.getItem('hideModalDate');
      const today = new Date().toDateString();

      if (hideDate !== today) {
        setIsModalOpen(true);
      }
    }
  }, [events, loading]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleHideToday = () => {
    const today = new Date().toDateString();
    localStorage.setItem('hideModalDate', today);
    setIsModalOpen(false);
  };

  return (
    <>
      <HeroSection />
      <LogoBar />
      <BizExpansion />
      <Tech3Intro />
      <Tech3 />
      <Industry />
      <Housing />
      <Investment />
      <News />
      {isModalOpen && (
        <Modal is_open={isModalOpen} OnClose={handleCloseModal} OnHideToday={handleHideToday}>
          <ModalBannerContent images={modalImages} />
        </Modal>
      )}
    </>
  );
}
