import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FAQSection from '@/components/FAQSection';
import DemoRequestModal from '@/components/DemoRequestModal';
import { Download, CheckCircle2, ShieldCheck, Zap, Monitor, Apple, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'دانلود نرم افزار حسابداری بوتیک رایگان و آفلاین دسکتاپ | تنخور',
  description:
    'دانلود مستقیم نرم افزار حسابداری بوتیک رایگان تنخور برای ویندوز و مک. بدون محدودیت زمانی، ۱۰۰٪ آفلاین با دیتابیس داخلی SQLite، بدون نیاز به اشتراک ماهانه.',
  keywords: [
    'دانلود نرم افزار حسابداری بوتیک رایگان',
    'نرم افزار حسابداری بوتیک رایگان',
    'دانلود نرم افزار مدیریت فروشگاه لباس رایگان',
    'نرم افزار حسابداری دسکتاپ پوشاک رایگان',
    'نرم افزار آفلاین بوتیک',
  ],
};

export default function FreeBoutiqueSoftwarePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-32 sm:pt-40">
        
        {/* Dedicated Hero Section */}
        <section className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 text-white py-16 sm:py-24 border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-caption-mono font-medium">
              <Zap className="w-4 h-4 text-teal-400" />
              <span>نسخه کاملاً رایگان دسکتاپ تنخور (بدون زمان انقضا)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              دانلود نرم افزار حسابداری بوتیک رایگان و آفلاین
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              تمامی امکانات اصلی مدیریت بوتیک، تعریف ماتریسی رنگ و سایز، صدور فاکتور، مدیریت موجودی و انبارداری دسکتاپ در نسخه رایگان تنخور بدون نیاز به پرداخت حتی ۱ ریال موجود است.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-sm shadow-lg transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5 text-neutral-950" />
                <span>دانلود مستقیم نسخه رایگان ویندوز و مک</span>
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-right rtl:text-right">
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>بدون محدودیت زمانی یا تست ۱۴ روزه</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>۱۰۰٪ آفلاین روی کامپیوتر شما</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>پشتیبانی کامل از بارکدخوان و کارتخوان</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>ارتقا اختیاری به ابری هر زمان خواستید</span>
              </div>
            </div>
          </div>
        </section>

        {/* Download Buttons Section */}
        <FreeVersionSection />
        <AccountingModuleSection />
        <FAQSection />

      </main>
      <Footer />
      <DemoRequestModal />
    </>
  );
}
