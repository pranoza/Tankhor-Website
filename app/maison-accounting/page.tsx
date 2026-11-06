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
  title: 'نرم افزار حسابداری مزون؛ مدیریت بیعانه، سفارش دوخت و اندازه‌گیری (رایگان) | تنخور',
  description:
    'بهترین نرم افزار مدیریت و حسابداری مزون لباس عروس، مجلسی و مانتو؛ ثبت اندازه‌گیری شخصی مشتری، مدیریت بیعانه، نوبت پرو و بهای تمام‌شده پارچه. دانلود رایگان دسکتاپ + نسخه ابری.',
  keywords: [
    'نرم افزار حسابداری مزون',
    'نرم افزار مدیریت مزون رایگان',
    'حسابداری مزون لباس عروس و مجلسی',
    'نرم افزار ثبت سفارشات دوخت و خیاطی',
    'نرم افزار ثبت اندازه گیری مشتری مزون',
    'نرم افزار حسابداری طراحان لباس',
    'مدیریت بیعانه و پرو مزون',
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
    title: 'نرم افزار حسابداری مزون؛ مدیریت بیعانه، سفارش دوخت و اندازه‌گیری | تنخور',
    description:
      'نرم افزار اختصاصی مدیریت مزون لباس عروس، مجلسی و مانتو؛ ثبت پرو، بیعانه و آرشیو اندازه‌گیری شخصی. دانلود مستقیم نسخه رایگان دسکتاپ + نسخه ابری.',
    url: 'https://tankhor.com/maison-accounting',
    siteName: 'تنخور | TANKHOR',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نرم افزار حسابداری مزون؛ مدیریت بیعانه و جدول اندازه‌گیری | تنخور',
    description: 'نرم افزار اختصاصی مدیریت مزون لباس و دوخت سفارشی؛ رایگان و آفلاین + نسخه ابری.',
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
      ratingCount: '158',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'آیا در نرم افزار مزون تنخور امکان ثبت اندازه‌های شخصی هر مشتری وجود دارد؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'بله، برای هر مشتری پرونده اختصاصی شامل دور سینه، دور کمر، قد، سرشانه، قد آستین و یادداشت‌های خیاطی ذخیره می‌شود تا در سفارشات بعدی فوراً در دسترس باشد.',
        },
      },
      {
        '@type': 'Question',
        name: 'نحوه مدیریت بیعانه و تسویه حساب سفارشات دوخت چگونه است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'هنگام ثبت سفارش دوخت می‌توانید مبلغ پیش‌پرداخت (بیعانه) را ثبت کرده و مانده حساب مشتری را در زمان پرو یا تحویل نهایی لباس تسویه نمایید.',
        },
      },
      {
        '@type': 'Question',
        name: 'آیا امکان محاسبه هزینه پارچه، خرج‌کار و دستمزد خیاط وجود دارد؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'بله، سیستم بهای تمام‌شده تنخور تمام هزینه‌های پارچه، مروارید، دانتل، یراق و اجرت دوخت را جمع زده و سود خالص هر سفارش یا کالکشن مزون را محاسبه می‌کند.',
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <span>دانلود رایگان نسخه دسکتاپ مزون</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>نسخه ابری مزون (شروع رایگان)</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
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
        <AccountingModuleSection />
        <FashionFeaturesSection />

        {/* Focused 2-Option Conversion Section */}
        <InternalDoubleCtaSection categoryName="مزون و طراحی دوخت" />

        <FreeVersionSection />
        <FAQSection />
      </main>
      <Footer />
      <InternalStickyBar />
    </>
  );
}
