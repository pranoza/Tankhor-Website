'use client';

import React from 'react';
import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FreeVersionSection from '@/components/FreeVersionSection';
import WhyTankhorSection from '@/components/WhyTankhorSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import PainPointsComparison from '@/components/PainPointsComparison';
import SizeGuideDemoWidget from '@/components/SizeGuideDemoWidget';
import FreeVsProSection from '@/components/FreeVsProSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsAndStats from '@/components/TestimonialsAndStats';
import SeoArticleSection from '@/components/SeoArticleSection';
import FAQSection from '@/components/FAQSection';
import DemoRequestModal from '@/components/DemoRequestModal';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <SeoHead />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <FreeVersionSection />
        <WhyTankhorSection />
        <FashionFeaturesSection />
        <PainPointsComparison />
        <SizeGuideDemoWidget />
        <FreeVsProSection />
        <PricingSection />
        <TestimonialsAndStats />
        <SeoArticleSection />
        <FAQSection />
      </main>
      <Footer />
      <DemoRequestModal />
    </>
  );
}
