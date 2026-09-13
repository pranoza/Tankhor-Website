import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import FAQSection from '@/components/FAQSection';
import DemoRequestModal from '@/components/DemoRequestModal';
import { Factory, CheckCircle2, Download, ArrowUpRight, Calculator, PieChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'نرم افزار حسابداری تولیدی پوشاک و لباس | محاسبه قیمت تمام شده - تنخور',
  description:
    'نرم افزار حسابداری و مدیریت تولیدی پوشاک و کارگاه‌های دوزندگی. محاسبه بهای تمام شده (Landed Cost)، هزینه پارچه، خیاطی، خرج‌کار، حسابداری بنکداران و فاکتور سامانه مؤدیان.',
  keywords: [
    'نرم افزار حسابداری تولیدی پوشاک',
    'نرم افزار حسابداری تولیدی لباس',
    'مدیریت تولیدی پوشاک',
    'حسابداری کارگاه خیاطی',
    'محاسبه قیمت تمام شده پوشاک',
    'نرم افزار حسابداری بنکداری پوشاک',
  ],
};

export default function ApparelManufacturingPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-32 sm:pt-40">
        
        {/* Dedicated Hero Section */}
        <section className="bg-gradient-to-b from-emerald-950/20 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-caption-mono font-medium">
              <Factory className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>راهکار تخصصی تولیدی‌ها و کارگاه‌های دوزندگی پوشاک</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              نرم افزار حسابداری تولیدی پوشاک و لباس
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              طراحی شده ویژه تولیدی‌های پوشاک، کارگاه‌های برش و دوزندگی، و بنکداران. محاسبه هوشمند بهای تمام‌شده واقعی (Landed Cost) با تسهیم هزینه پارچه، اجرت دوزنده، زیپ/دکمه، لایکرا، باربری و بسته‌بندی، به همراه خروجی سامانه مؤدیان و مالیات فصلی.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                <span>دانلود رایگان نسخه تولیدی پوشاک</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5"
              >
                <span>ورود به پنل ابری تولیدی</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-right rtl:text-right">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>موتور محاسبه Landed Cost</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>مدیریت حساب بنکداران و بدهی‌ها</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ارسال الکترونیکی سامانه مؤدیان</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>گزارشات کامل سود و زیان تولید</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules Breakdown */}
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
