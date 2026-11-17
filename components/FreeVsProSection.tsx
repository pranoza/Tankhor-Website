'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import {
  Check,
  Download,
  Cloud,
  HardDrive,
  Users,
  Building2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function FreeVsProSection() {
  const { language } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const isFa = language === 'fa';

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="free-vs-pro"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Specified in prompt */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 text-teal-800 dark:text-teal-300 text-xs font-caption-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'مدل ارائه محصول' : 'Product Editions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'با تنخور رایگان شروع کنید؛ هر زمان آماده بودید ارتقا دهید'
              : 'Start Free with TanKhor; Upgrade When You’re Ready'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'تفاوت شفاف میان نسخه پایه آفلاین و اشتراک ابری؛ دقیقاً متناسب با امکانات پیاده‌سازی‌شده محصول.'
              : 'Clear distinction between the local offline desktop edition and the cloud multi-branch subscription.'}
          </p>
        </FadeIn>

        {/* 2 Distinct Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: TanKhor Free */}
          <FadeInStaggerItem className="rounded-3xl p-7 sm:p-9 bg-neutral-50 dark:bg-[#0f0f0f] border-2 border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <div className="space-y-1">
                  <span className="font-caption-mono text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                    {isFa ? 'نسخه دسکتاپ' : 'Desktop Edition'}
                  </span>
                  <h3 className="text-2xl font-black text-neutral-900 dark:text-white">
                    {isFa ? 'نسخه Free (رایگان)' : 'TanKhor Free'}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-caption-mono font-bold">
                  {isFa ? 'رایگان همیشگی' : 'Free Forever'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-black text-neutral-900 dark:text-white font-caption-mono">
                  {isFa ? '۰ تومان' : '$0'}
                  <span className="text-xs font-normal text-neutral-500 mr-2 rtl:mr-2 ltr:ml-2">
                    {isFa ? '(بدون نیاز به کارت بانکی یا زمان انقضا)' : '(No credit card / no trial limit)'}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {isFa
                    ? 'ایده‌آل برای فروشگاه‌ها و بوتیک‌های تک‌سیستمی که به سرعت بالا و کارکرد بدون وقفه آفلاین نیاز دارند.'
                    : 'Perfect for single-computer fashion retail stores needing high-speed offline operations.'}
                </p>
              </div>

              {/* Bullet Points from prompt */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-normal">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isFa ? 'شروع رایگان بدون محدودیت زمانی' : 'Free start with zero expiration'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isFa ? 'قابلیت‌های اصلی فروش و صدور فاکتور' : 'Core POS sales and thermal invoice printing'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isFa ? 'مدیریت موجودی، انبار و کاردکس کالا' : 'Variant inventory management and stock ledger'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isFa ? 'مدیریت رنگ و سایز محصولات بدون محدودیت' : 'Unlimited color and size variant matrix'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isFa ? 'ذخیره اطلاعات محلی روی سیستم شخصی (SQLite)' : 'Local data storage on your PC (SQLite DB)'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isFa ? 'استفاده ۱۰۰٪ آفلاین بدون نیاز به اینترنت' : '100% offline usage with zero network lag'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isFa ? 'مناسب فروشگاه‌های تک‌سیستمی و بوتیک‌ها' : 'Engineered for single-checkout retail stores'}</span>
                </li>
              </ul>

            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>{isFa ? 'دانلود نسخه رایگان' : 'Download Free Edition'}</span>
              </a>
            </div>
          </FadeInStaggerItem>

          {/* Card 2: TanKhor Pro */}
          <FadeInStaggerItem className="rounded-3xl p-7 sm:p-9 bg-neutral-900 text-white dark:bg-[#121212] border-2 border-teal-500/60 flex flex-col justify-between space-y-6 shadow-xl relative">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="space-y-1">
                  <span className="font-caption-mono text-xs text-teal-400 uppercase tracking-wider font-semibold">
                    {isFa ? 'اشتراک حرفه‌ای ابری' : 'Cloud Pro Subscription'}
                  </span>
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    <Cloud className="w-6 h-6 text-teal-400" />
                    <span>{isFa ? 'نسخه Pro (ابری)' : 'TanKhor Pro'}</span>
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-caption-mono font-bold">
                  {isFa ? '۱۴ روز تست رایگان' : '14-Day Free Trial'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-black text-teal-400 font-caption-mono">
                  {isFa ? 'از ۳۷۴,۰۰۰ ت' : 'From $12.4'}
                  <span className="text-xs font-normal text-neutral-400 mr-2 rtl:mr-2 ltr:ml-2">
                    {isFa ? 'ماهانه (در پلن سالانه)' : '/mo (annual plan)'}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {isFa
                    ? 'برای کسب‌وکارهایی که به همگام‌سازی ابری، اتصال چند شعبه، دسترسی از راه دور و چند کاربر نیاز دارند.'
                    : 'For growing apparel businesses needing multi-branch synchronization and remote access.'}
                </p>
              </div>

              {/* Bullet Points from prompt */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-200 font-normal">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isFa ? 'دسترسی به امکانات ابری و پنل وب (PWA)' : 'Full web browser access and cloud dashboard'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isFa ? 'همگام‌سازی خودکار اطلاعات بین دستگاه‌ها' : 'Automatic real-time data sync across devices'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isFa ? 'مدیریت چند شعبه و چند انبار متمرکز' : 'Multi-branch & central warehouse stock transfers'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isFa ? 'کاربران و پرسنل متعدد با سطوح دسترسی (RBAC)' : 'Granular staff roles (cashier, manager, auditor)'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isFa ? 'دسترسی مدیریتی و گزارش‌گیری از راه دور' : 'Live remote store monitoring on mobile/tablet'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isFa ? 'پشتیبان‌گیری ابری و بازیابی خودکار داده‌ها' : 'Automated daily cloud backups & 1-click restore'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{isFa ? '۱۴ روز تست رایگان کامل بدون نیاز به پرداخت' : 'Full 14-day free trial without credit card'}</span>
                </li>
              </ul>

            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-neutral-800">
              <button
                type="button"
                onClick={scrollToPricing}
                className="w-full py-3.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 active:scale-95 cursor-pointer"
              >
                <span>{isFa ? 'مشاهده امکانات و تعرفه‌های Pro' : 'Explore Pro Features & Pricing'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </FadeInStaggerItem>

        </FadeInStagger>

      </div>
    </section>
  );
}
