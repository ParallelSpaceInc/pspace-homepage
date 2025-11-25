import { LanguageProvider } from "./contexts/LanguageContext";
import { NavigationProvider, useNavigation } from "./contexts/NavigationContext";
import Header from "./imports/Header";
import HeroSection from "./imports/Frame180921";
import QuoteSection from "./imports/Frame181021";
import FeaturesSection from "./imports/Frame180999";
import ShowcaseSection from "./imports/Frame181070";
import InfoSection from "./imports/Frame181036";
import DetailSection from "./imports/Frame181089";
import MissionSection from "./imports/Frame181088";
import UseCasesSection from "./imports/Frame181035";
import PEngineSection from "./imports/Frame181083";
import PartnersSection from "./imports/Frame181056";
import PDashSection from "./imports/Frame181092";
import BIMViewerSection from "./imports/Frame181070-7-67";
import RaemianSection from "./imports/Frame181058";
import MobileFeaturesSection from "./imports/Frame181035-7-75";
import CTASection from "./imports/CTASection";
import Footer from "./components/Footer";
import CareersPage from "./components/CareersPage";

import PDashPage from "./components/PDashPage";

function HomePage() {
  return (
    <>
      <section className="w-full min-h-screen relative">
        <HeroSection />
      </section>
      <section className="w-full h-[600px] relative">
        <QuoteSection />
      </section>
      <section className="w-full relative">
        <FeaturesSection />
      </section>
      <section className="w-full min-h-screen relative">
        <ShowcaseSection />
      </section>
      <section className="w-full h-[500px] relative">
        <InfoSection />
      </section>
      <section className="w-full relative">
        <DetailSection />
      </section>
      <section className="w-full relative">
        <MissionSection />
      </section>
      <section className="w-full relative">
        <UseCasesSection />
      </section>
      <section className="w-full relative">
        <PartnersSection />
      </section>
      <section className="w-full relative">
        <PEngineSection />
      </section>
      <section className="w-full relative">
        <PDashSection />
      </section>
      <section className="w-full relative">
        <BIMViewerSection />
      </section>
      <section className="w-full relative">
        <RaemianSection />
      </section>
      <section className="w-full relative">
        <MobileFeaturesSection />
      </section>
      <section className="w-full relative">
        <CTASection />
      </section>
    </>
  );
}

function MainContent() {
  const { currentPage } = useNavigation();
  
  return (
    <div className="w-full flex flex-col">
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'careers' && <CareersPage />}
      {currentPage === 'pdash' && <PDashPage />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <MainContent />
      </NavigationProvider>
    </LanguageProvider>
  );
}
