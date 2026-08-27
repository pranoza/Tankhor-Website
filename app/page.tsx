'use client';

import React from 'react';
import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPointsComparison from '@/components/PainPointsComparison';
import FeaturesGrid from '@/components/FeaturesGrid';
import SizeGuideDemoWidget from '@/components/SizeGuideDemoWidget';
import PricingSection from '@/components/PricingSection';
import TestimonialsAndStats from '@/components/TestimonialsAndStats';
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
        <PainPointsComparison />
        <FeaturesGrid />
        <SizeGuideDemoWidget />
        <PricingSection />
        <TestimonialsAndStats />
        <FAQSection />
      </main>
      <Footer />
      <DemoRequestModal />
    </>
  );
}
