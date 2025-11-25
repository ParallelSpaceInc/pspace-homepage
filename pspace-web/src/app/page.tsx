"use client";

import HeroSection from "@/imports/Frame180921";
import QuoteSection from "@/imports/Frame181021";
import FeaturesSection from "@/imports/Frame180999";
import ShowcaseSection from "@/imports/Frame181070";
import InfoSection from "@/imports/Frame181036";
import DetailSection from "@/imports/Frame181089";
import MissionSection from "@/imports/Frame181088";
import UseCasesSection from "@/imports/Frame181035";
import PEngineSection from "@/imports/Frame181083";
import PartnersSection from "@/imports/Frame181056";
import PDashSection from "@/imports/Frame181092";
import BIMViewerSection from "@/imports/Frame181070-7-67";
import RaemianSection from "@/imports/Frame181058";
import MobileFeaturesSection from "@/imports/Frame181035-7-75";
import CTASection from "@/imports/CTASection";

export default function HomePage() {
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
