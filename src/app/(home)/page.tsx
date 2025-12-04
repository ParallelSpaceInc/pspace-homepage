'use client';

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import VisionSection from './components/VisionSection';
import ShowcaseSection from './components/ShowcaseSection';
import FeatureSection from './components/FeatureSection';
import MissionSection from './components/MissionSection';
import UseCasesSection from './components/UseCasesSection';
import PEngineForRevitSection from './components/PEngineForRevitSection';
import PartnersSection from './components/PartnersSection';
import PDashSection from './components/PDashSection';
import BIMViewerSection from './components/BIMViewerSection';
import RaemianSection from './components/RaemianSection';
import MobileFeaturesSection from './components/MobileFeaturesSection';
import GettingStartedSection from './components/GettingStartedSection';
import Modal from '@/components/Modal';
import ModalBannerContent from '@/components/ModalBannerContent';
import { useData } from '@/contexts/DataContext';

export default function HomePage() {
  const { events, loading, setEvents, setNews, setHistory, setLoading, setError } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<any[]>([]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (events.length > 0) return; // Already loaded

      try {
        setLoading(true);
        const DATA_URL =
          'https://drive.google.com/uc?export=download&id=1LxmMia-Jek5H31-svAcExnOlV81CEwca';
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        if (data.success && data.sheets) {
          setEvents(data.sheets.events?.rows || []);
          setNews(data.sheets.news?.rows || []);
          setHistory(data.sheets.history?.rows || []);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <QuoteSection />
      <VisionSection />
      <ShowcaseSection />
      <FeatureSection />
      <UseCasesSection />
      <PartnersSection />
      <PEngineForRevitSection />
      <PDashSection />
      <BIMViewerSection />
      <RaemianSection />
      <MobileFeaturesSection />
      <GettingStartedSection />
      {isModalOpen && (
        <Modal is_open={isModalOpen} OnClose={handleCloseModal} OnHideToday={handleHideToday}>
          <ModalBannerContent images={modalImages} />
        </Modal>
      )}
    </>
  );
}
