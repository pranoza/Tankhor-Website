import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import { InternalStickyBar, InternalDoubleCtaSection } from '@/components/InternalConversionBar';
import { featuresListEn } from '@/data/featuresDataEn';
import {
  Boxes,
  Receipt,
  Ruler,
  QrCode,
  Barcode,
  RefreshCw,
  Calculator,
  PieChart,
  CreditCard,
  ArrowLeftRight,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Download,
  Cloud,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Specialized Apparel & Fashion ERP Features | 10 Unified Solutions - Tankhor',
  description:
    'Comprehensive suite of 10 specialized fashion features: Color/size matrix inventory, retail boutique POS, smart size-finder engine, digital lookbook, barcode printing, and WooCommerce sync.',
  keywords: [
    'Apparel ERP Features',
    'Clothing Store POS',
    'Fashion Boutique Software',
    'Color Size Matrix Inventory',
    'Garment Barcode Printing',
    'WooCommerce Clothing Sync',
    'Fashion True Landed Cost',
    'Apparel Retail Analytics',
  ],
  alternates: {
    canonical: 'https://tankhor.com/en/features',
    languages: {
      en: 'https://tankhor.com/en/features',
      fa: 'https://tankhor.com/features',
      'x-default': 'https://tankhor.com/features',
    },
  },
  openGraph: {
    title: 'Specialized Apparel & Fashion ERP Features | Tankhor',
    description:
      'All 10 specialized fashion capabilities: Color/size matrix inventory, retail boutique POS, smart size-finder engine, and digital lookbook.',
    url: 'https://tankhor.com/en/features',
    locale: 'en_US',
    siteName: 'TANKHOR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialized Apparel & Fashion ERP Features | Tankhor',
    description:
      'All 10 specialized fashion capabilities: Color/size matrix inventory, retail boutique POS, smart size-finder engine, and digital lookbook.',
  },
};

const iconMap: Record<string, React.ElementType> = {
  'apparel-inventory': Boxes,
  'clothing-accounting': Receipt,
  'size-guide-engine': Ruler,
  'digital-catalog': QrCode,
  'barcode-printing': Barcode,
  'woocommerce-sync': RefreshCw,
  'landed-cost': Calculator,
  'apparel-analytics': PieChart,
  'treasury-and-cheques': CreditCard,
  'financial-integrations': ArrowLeftRight,
};

export default function EnglishFeaturesHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Specialized Apparel & Fashion ERP Features | Tankhor',
    description: 'Suite of 10 specialized features for clothing boutiques, ateliers, and apparel brands.',
    itemListElement: featuresListEn.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.targetKeyword,
      url: `https://tankhor.com/en/features/${item.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="overflow-x-hidden min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100">
        {/* Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-teal-950/15 via-white to-white dark:from-teal-950/25 dark:via-[#0a0a0a] dark:to-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-caption-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Engineered Exclusively for Apparel, Footwear & Fashion</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white">
              10 Specialized Fashion Capabilities
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Every tool a fashion boutique, custom atelier, online clothing shop, or garment manufacturer needs to manage inventory, in-store and online checkout, accurate accounting, and brand growth — unified in one platform.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs sm:text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>Free Desktop Download</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>Cloud Edition (Start Free)</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </section>

        {/* 10 Features Grid */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuresListEn.map((item, index) => {
              const IconComp = iconMap[item.slug] || Layers;
              return (
                <Link
                  key={item.slug}
                  href={`/en/features/${item.slug}`}
                  className="p-6 sm:p-8 rounded-2xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-teal-500/70 dark:hover:border-teal-500/70 transition-all duration-200 space-y-4 group block relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-caption-mono text-xs text-neutral-400 font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-caption-mono">
                      {item.categoryLabel}
                    </span>
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mt-2">
                      {item.titleEn}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>

                  <div className="pt-2 border-t border-neutral-200/70 dark:border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400">
                    <span>View Live Interactive Demo & Specs</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Focused 2-Option Conversion Section */}
        <InternalDoubleCtaSection categoryName="All Capabilities" />

        {/* Free Desktop Download Section */}
        <section id="free-version">
          <FreeVersionSection />
        </section>
      </main>

      <Footer />
      <InternalStickyBar />
    </>
  );
}
