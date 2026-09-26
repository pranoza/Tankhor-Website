import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoRequestModal from '@/components/DemoRequestModal';
import SitemapClient from '@/components/SitemapClient';
import { ChevronLeft, Compass, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'نقشه سایت تنخور | فهرست کامل صفحات و امکانات نرم افزار پوشاک',
  description:
    'نقشه کامل سایت نرم افزار حسابداری و انبارداری پوشاک تنخور. دسترسی سریع به لندینگ‌های تخصصی بوتیک، مزون، تولیدی پوشاک و ۱۰ قابلیت هوشمند با امکان ثبت در گوگل سرچ کنسول.',
  keywords: [
    'نقشه سایت تنخور',
    'نقشه سایت نرم افزار پوشاک',
    'sitemap نرم افزار حسابداری پوشاک',
    'فهرست صفحات نرم افزار لباس',
    'ثبت در سرچ کنسول گوگل sitemap.xml',
    'راهکارهای نرم افزار پوشاک',
  ],
  alternates: {
    canonical: 'https://tankhor.com/sitemap',
  },
  openGraph: {
    title: 'نقشه سایت تنخور | فهرست کامل صفحات و امکانات نرم افزار پوشاک',
    description:
      'فهرست جامع ساختار صفحات، راهکارها و امکانات تخصصی نرم افزار پوشاک تنخور همراه با فایل sitemap.xml جهت ثبت در گوگل سرچ کنسول.',
    url: 'https://tankhor.com/sitemap',
    siteName: 'Tankhor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نقشه سایت تنخور | فهرست کامل صفحات و امکانات نرم افزار پوشاک',
    description: 'فهرست ساختار صفحات و قابلیت‌های تخصصی نرم افزار پوشاک تنخور.',
  },
};

export default function SitemapPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'صفحه اصلی',
        item: 'https://tankhor.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'نقشه سایت (Sitemap)',
        item: 'https://tankhor.com/sitemap',
      },
    ],
  };

  const sitemapSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'نقشه سایت تنخور - نرم افزار تخصصی پوشاک',
    description: 'ساختار درختی و آدرس تمامی صفحات و قابلیت‌های نرم افزار حسابداری و انبارداری پوشاک تنخور.',
    url: 'https://tankhor.com/sitemap',
    isPartOf: {
      '@type': 'WebSite',
      name: 'تنخور | نرم افزار مدیریت فروشگاه پوشاک',
      url: 'https://tankhor.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchema) }}
      />

      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-teal-500 selection:text-neutral-950">
        <Navbar />

        <main className="flex-1 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-neutral-400 font-sans"
            >
              <Link href="/" className="hover:text-white transition-colors">
                صفحه اصلی
              </Link>
              <ChevronLeft className="w-3.5 h-3.5 text-neutral-600" />
              <span className="text-teal-400 font-medium">نقشه سایت (Sitemap)</span>
            </nav>

            {/* Header Hero */}
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>راهنمای پیمایش و ساختار وب‌سایت تنخور</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                نقشه جامع سایت و فایل اختصاصی sitemap.xml
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                دسترسی سریع به تمامی صفحات، راهکارهای اصناف پوشاک، امکانات تخصصی و فایل معتبر XML جهت ثبت در ابزارهای وبمستری مانند Google Search Console.
              </p>
            </div>

            {/* Interactive Sitemap Client Component */}
            <SitemapClient />
          </div>
        </main>

        <Footer />
        <DemoRequestModal />
      </div>
    </>
  );
}
