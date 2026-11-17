'use client';

import React from 'react';
import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemValueSection from '@/components/ProblemValueSection';
import ProductWorkflowSection from '@/components/ProductWorkflowSection';
import CoreFeaturesSection from '@/components/CoreFeaturesSection';
import FreeVsProSection from '@/components/FreeVsProSection';
import TargetAudiencesSection from '@/components/TargetAudiencesSection';
import OfflineFirstSection from '@/components/OfflineFirstSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import TrustAndCredibilitySection from '@/components/TrustAndCredibilitySection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import DemoRequestModal from '@/components/DemoRequestModal';
import MacDownloadModal from '@/components/MacDownloadModal';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';

export default function EnglishHomePage() {
  const { isMacModalOpen, closeMacModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();

  return (
    <>
      <SeoHead />
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Problem / Value Proposition */}
        <ProblemValueSection />

        {/* Section 3: Product Workflow (3 Stages with real UI) */}
        <ProductWorkflowSection />

        {/* Section 4: Core Features */}
        <CoreFeaturesSection />

        {/* Section 5: Free vs Pro */}
        <FreeVsProSection />

        {/* Section 6: Target Audiences */}
        <TargetAudiencesSection />

        {/* Section 7: Offline First */}
        <OfflineFirstSection />

        {/* Section 8: Integrations */}
        <IntegrationsSection />

        {/* Section 9: Customer Stories / Trust & Credibility */}
        <TrustAndCredibilitySection />

        {/* Pricing Matrix & Plans */}
        <PricingSection />

        {/* Section 10: FAQ */}
        <FAQSection />

        {/* Section 11: Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Section 12: Footer */}
      <Footer />
      <ScrollToTop />
      <DemoRequestModal />
      <MacDownloadModal
        isOpen={isMacModalOpen}
        onClose={closeMacModal}
        downloadUrl={downloadLinks.macos_setup}
      />
    </>
  );
}
