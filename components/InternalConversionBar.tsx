'use client';

import React, { useState, useEffect } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import {
  Download,
  Cloud,
  Monitor,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface Props {
  className?: string;
  categoryName?: string;
}

export function InternalStickyBar() {
  const { language } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const isFa = language === 'fa';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past initial hero section (> 350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('free-version');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label={isFa ? 'اقدامات دسترسی سریع به تنخور' : 'Quick Access Tankhor Actions'}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-t border-neutral-200/90 dark:border-neutral-800/90 shadow-2xl transition-all duration-300 py-2.5 px-3 sm:px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
        {/* Left / Title info */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div className="text-right rtl:text-right ltr:text-left">
            <p className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">
              {isFa ? 'مسیر شروع با نرم‌افزار تنخور' : 'Get Started with Tankhor'}
            </p>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-normal">
              {isFa
                ? 'فقط ۲ گزینه: نسخه رایگان و آفلاین دسکتاپ یا نسخه ابری'
                : 'Only 2 options: Free Offline Desktop or Instant Cloud'}
            </p>
          </div>
        </div>

        {/* The 2 Core CTAs */}
        <div className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3">
          {/* Action 1: Free Desktop Download */}
          <a
            href={downloadLinks.windows_setup || '#free-version'}
            onClick={handleScrollToDownload}
            className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4 text-teal-400 dark:text-teal-600 shrink-0" />
            <span>{isFa ? 'دانلود رایگان دسکتاپ' : 'Free Desktop Download'}</span>
          </a>

          {/* Action 2: Cloud Version */}
          <a
            href="https://my.tankhor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <Cloud className="w-4 h-4 shrink-0" />
            <span>{isFa ? 'نسخه ابری (شروع رایگان)' : 'Cloud Version (Free Trial)'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export function InternalDoubleCtaSection({ className = '', categoryName }: Props) {
  const { language } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const isFa = language === 'fa';

  const handleScrollToDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('free-version');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 ${className}`}>
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-caption-mono font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isFa ? 'مسیر شروع ساده و بدون ابهام' : 'Simple & Clear Next Steps'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-white">
          {isFa
            ? `استفاده از تنخور در صنف پوشاک ${categoryName ? `(${categoryName})` : ''}`
            : `Get Started with Tankhor ${categoryName ? `(${categoryName})` : ''}`}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          {isFa
            ? 'متناسب با شرایط فروشگاه خود، بین نسخه آفلاین دسکتاپ و نسخه ابری انتخاب کنید. هر دو نسخه بدون ریسک و با راه‌اندازی فوری در دسترس هستند.'
            : 'Choose between offline desktop and cloud edition. Both start instantly with zero setup risk.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Card 1: Free Desktop Edition */}
        <div className="p-6 sm:p-7 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white">
                <Monitor className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold font-caption-mono">
                {isFa ? '۱۰۰٪ رایگان و آفلاین' : '100% Free Forever'}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {isFa ? 'نسخه رایگان دسکتاپ' : 'Free Desktop Edition'}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {isFa
                  ? 'قابل نصب روی کامپیوتر یا لپ‌تاپ ویندوز، مک و اندروید. اطلاعات روی سیستم خودتان ذخیره می‌شود و بدون اینترنت همیشه کار می‌کند.'
                  : 'Install directly on Windows, macOS or Android POS. 100% offline local database with lifetime functionality.'}
              </p>
            </div>

            <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{isFa ? 'بدون محدودیت زمانی یا پایان دوره تست' : 'No trial expiration; permanently active'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{isFa ? 'صندوق POS سریع و اتصال به بارکدخوان' : 'Instant POS barcode scanning & thermal receipt'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{isFa ? 'تعریف ماتریسی رنگ و سایز پوشاک' : 'Garment color/size matrix tracking'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{isFa ? 'بدون نیاز به ثبت‌نام یا اطلاعات کارت' : 'Direct install with zero personal info required'}</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <a
              href="#free-version"
              onClick={handleScrollToDownload}
              className="w-full py-3.5 px-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
              <span>{isFa ? 'دانلود رایگان نسخه دسکتاپ' : 'Download Free Desktop App'}</span>
            </a>
          </div>
        </div>

        {/* Card 2: Cloud Edition */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-teal-950/20 via-neutral-900/90 to-neutral-950 border-2 border-teal-500/50 shadow-xl shadow-teal-950/20 text-white flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-teal-500/20 border border-teal-500/30 text-teal-300">
                <Cloud className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold font-caption-mono">
                {isFa ? 'تست ۱۴ روزه ابری' : '14-Day Free Cloud Trial'}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-white">
                {isFa ? 'نسخه ابری تنخور (آنلاین)' : 'Tankhor Cloud Edition'}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                {isFa
                  ? 'دسترسی همزمان از موبایل، تبلت و کامپیوتر بدون نیاز به نصب. همگام‌سازی لحظه‌ای انبار بین چند شعبه و فروشگاه اینترنتی.'
                  : 'Access from anywhere on smartphone, tablet, or browser. Real-time multi-branch and online store syncing.'}
              </p>
            </div>

            <ul className="space-y-2 text-xs text-neutral-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{isFa ? 'ثبت‌نام سریع در ۳۰ ثانیه بدون کارت بانکی' : 'Instant 30-sec signup; no credit card required'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{isFa ? 'پشتیبان‌گیری خودکار ۲۴ ساعته در کلود' : 'Automated 24/7 cloud backup & encryption'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{isFa ? 'مدیریت چند شعبه و انبار مرکزی پوشاک' : 'Multi-branch apparel chain & central warehouse'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{isFa ? 'اتصال خودکار به وبسایت ووکامرس و آنلاین‌شاپ' : 'Auto-sync with WooCommerce & digital catalog'}</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <a
              href="https://my.tankhor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isFa ? 'ورود و شروع رایگان نسخه ابری' : 'Start Free Cloud Edition'}</span>
              <ArrowUpRight className="w-4 h-4 opacity-75" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
