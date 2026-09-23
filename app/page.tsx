'use client';

import React from 'react';
import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FreeVersionSection from '@/components/FreeVersionSection';
import SolutionsGrid from '@/components/SolutionsGrid';
import WhyTankhorSection from '@/components/WhyTankhorSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import PainPointsComparison from '@/components/PainPointsComparison';
import SizeGuideDemoWidget from '@/components/SizeGuideDemoWidget';
import PricingSection from '@/components/PricingSection';
import TestimonialsAndStats from '@/components/TestimonialsAndStats';
import SeoArticleSection from '@/components/SeoArticleSection';
import FAQSection from '@/components/FAQSection';
import DemoRequestModal from '@/components/DemoRequestModal';
import MacDownloadModal from '@/components/MacDownloadModal';
import Footer from '@/components/Footer';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';

export default function HomePage() {
  const { isMacModalOpen, closeMacModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();

  return (
    <>
      <SeoHead />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <SolutionsGrid />
        <FreeVersionSection />
        <WhyTankhorSection />
        <AccountingModuleSection />
        <FashionFeaturesSection />
        <PainPointsComparison />
        <SizeGuideDemoWidget />
        <PricingSection />
        <TestimonialsAndStats />
        <SeoArticleSection />
        <FAQSection />
      </main>
      <Footer />
      <DemoRequestModal />
      <MacDownloadModal
        isOpen={isMacModalOpen}
        onClose={closeMacModal}
        downloadUrl={downloadLinks.macos_setup}
      />
    </>
  );
}
