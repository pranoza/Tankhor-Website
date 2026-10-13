import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import SizeGuideDemoWidget from '@/components/SizeGuideDemoWidget';
import FAQSection from '@/components/FAQSection';
import DemoRequestModal from '@/components/DemoRequestModal';
import { Scissors, CheckCircle2, Download, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'نرم افزار حسابداری مزون و مدیریت سفارشات دوخت | تنخور',
  description:
    'نرم افزار اختصاصی مدیریت مزون لباس عروس، شب، مانتو و طراحی پارچه. ثبت پرو، بیعانه، آرشیو اندازه‌گیری‌های شخصی، محاسبه قیمت تمام‌شده پارچه و خرج‌کار؛ رایگان و آفلاین.',
  keywords: [
    'نرم افزار حسابداری مزون',
    'نرم افزار مدیریت مزون رایگان',
    'حسابداری مزون لباس',
    'نرم افزار سفارشات مزون',
    'نرم افزار ثبت اندازه گیری مزون',
    'نرم افزار حسابداری طراحان لباس',
  ],
  alternates: {
    canonical: 'https://tankhor.com/maison-accounting',
    languages: {
      fa: 'https://tankhor.com/maison-accounting',
      en: 'https://tankhor.com/en/maison-accounting',
      'x-default': 'https://tankhor.com/maison-accounting',
    },
  },
  openGraph: {
    title: 'نرم افزار حسابداری مزون و مدیریت سفارشات دوخت | تنخور',
    description:
      'نرم افزار اختصاصی مدیریت مزون لباس عروس، شب، مانتو و طراحی پارچه. ثبت پرو، بیعانه، آرشیو اندازه‌گیری‌های شخصی؛ رایگان و آفلاین.',
    url: 'https://tankhor.com/maison-accounting',
    siteName: 'Tankhor',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نرم افزار حسابداری مزون و مدیریت سفارشات دوخت | تنخور',
    description: 'نرم افزار اختصاصی مدیریت مزون لباس و دوخت سفارشی. رایگان و آفلاین.',
  },
};

export default function MaisonAccountingPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'نرم افزار حسابداری و مدیریت مزون تنخور',
    operatingSystem: 'Windows, macOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description:
      'نرم افزار مدیریت مزون و دوخت سفارشی لباس. ثبت اندازه‌گیری شخصی مشتریان، جلسات پرو، بیعانه و تسویه سفارشات.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IRR',
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
        name: 'صفحه اصلی',
        item: 'https://tankhor.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'حسابداری مزون لباس',
        item: 'https://tankhor.com/maison-accounting',
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
              <span>راهکار اختصاصی مزون‌ها و طراحان لباس</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              نرم افزار حسابداری و مدیریت سفارشی مزون
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              طراحی شده برای مزون‌های لباس عروس، مجلسی، مانتو و کالکشن‌های سفارشی. ثبت دقیق اندازه‌گیری‌های مشتریان (دور سینه، قد، عرض شانه)، پیش‌پرداخت، زمان‌بندی پرو، محاسبه هزینه پارچه/خرج‌کار و حسابداری طرف‌حساب‌ها.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <span>دانلود رایگان نسخه دسکتاپ مزون</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5"
              >
                <span>ورود به پنل ابری مزون</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-right rtl:text-right">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>ثبت اندازه‌گیری دقیق مشتری</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>مدیریت بیعانه و تسویه سفارشات</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>محاسبه بهای تمام‌شده کالکشن</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>۱۰۰٪ آفلاین + دیتابیس ایمن</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules Breakdown */}
        <SizeGuideDemoWidget />
        <AccountingModuleSection />
        <FashionFeaturesSection />
        <FreeVersionSection />
        <FAQSection />
      </main>
      <Footer />
      <DemoRequestModal />
    </>
  );
}
