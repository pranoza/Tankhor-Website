import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import FAQSection from '@/components/FAQSection';
import { InternalStickyBar, InternalDoubleCtaSection } from '@/components/InternalConversionBar';
import { Scissors, CheckCircle2, Download, Cloud, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Atelier & Fashion Maison Management Software | Custom Orders & Tailoring - Tankhor',
  description:
    'Dedicated software for bridal boutiques, haute couture ateliers, bespoke tailor shops, and apparel designers. Fitting schedule, client measurement archive, fabric & trim landed cost; free & offline.',
  keywords: [
    'Fashion Maison Software',
    'Atelier Management Software',
    'Custom Tailoring ERP',
    'Bridal Boutique Software',
    'Fashion Designer Client Measurements',
    'Bespoke Apparel Accounting',
  ],
  alternates: {
    canonical: 'https://tankhor.com/en/maison-accounting',
    languages: {
      en: 'https://tankhor.com/en/maison-accounting',
      fa: 'https://tankhor.com/maison-accounting',
      'x-default': 'https://tankhor.com/maison-accounting',
    },
  },
  openGraph: {
    title: 'Atelier & Fashion Maison Management Software | Tankhor',
    description:
      'Client measurements archive, down payment tracking, fitting appointments, and true fabric landed costs; 100% free and offline.',
    url: 'https://tankhor.com/en/maison-accounting',
    locale: 'en_US',
    siteName: 'TANKHOR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier & Fashion Maison Management Software | Tankhor',
    description:
      'Client measurements archive, down payment tracking, fitting appointments, and true fabric landed costs; 100% free and offline.',
  },
};

export default function EnglishMaisonAccountingPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tankhor Atelier & Fashion Maison Management Software',
    operatingSystem: 'Windows, macOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description:
      'Dedicated bespoke atelier and fashion maison ERP software. Client measurements archive, fitting appointments, down payments, and fabric costing.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '138',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tankhor.com/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Atelier & Maison Software',
        item: 'https://tankhor.com/en/maison-accounting',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Dedicated Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 bg-gradient-to-b from-amber-950/15 via-white to-white dark:from-amber-950/25 dark:via-[#0a0a0a] dark:to-[#0a0a0a] border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-caption-mono font-medium">
              <Scissors className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Specialized Solution for Maisons, Ateliers &amp; Fashion Designers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Fashion Maison &amp; Custom Tailoring Management Software
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Crafted for bridal salons, haute couture ateliers, evening gown boutiques, and custom tailoring designers. Maintain detailed client body measurements (bust, waist, hips, shoulder width), manage down payments, fitting milestones, fabric and trim costing, and client ledgers.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <span>Free Desktop Download</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>Cloud Edition (Start Free)</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Client Measurement Profile</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Deposit &amp; Fitting Schedule</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Fabric &amp; Trim Landed Cost</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>100% Offline Local Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules Breakdown */}
        <AccountingModuleSection />
        <FashionFeaturesSection />

        {/* Focused 2-Option Conversion Section */}
        <InternalDoubleCtaSection categoryName="Atelier & Custom Tailoring" />

        <FreeVersionSection />
        <FAQSection />
      </main>
      <Footer />
      <InternalStickyBar />
    </>
  );
}
