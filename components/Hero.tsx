'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import InteractiveDashboardPreview from './InteractiveDashboardPreview';
import AnimatedDotPyramid from './AnimatedDotPyramid';
import { Download, Monitor, Apple, Smartphone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();

  const brandLogos = [
    { name: 'HAKUPIAN', label: 'هپکو فشن | HAKUPIAN' },
    { name: 'SUPREME', label: 'مزون سوپریم' },
    { name: 'DOORDASH', label: 'پوشاک دوورداش' },
    { name: 'MAISON', label: 'مزون الگانس' },
    { name: 'CHARLES', label: 'پوشاک چارلز' },
    { name: 'POLYMARKET', label: 'بوتیک پولی' },
  ];

  return (
    <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vercel Style Hero 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Main Title & CTAs */}
          <div className="lg:col-span-5 space-y-6 text-right rtl:text-right ltr:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-caption-mono text-neutral-600 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'fa' ? 'رایگان • آفلاین • مخصوص پوشاک' : 'Free • Offline • Apparel ERP'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
              {language === 'fa' ? (
                <>
                  نرم افزار مدیریت فروشگاه پوشاک، <br className="hidden sm:block" />
                  <span className="text-neutral-900 dark:text-white underline decoration-teal-500 decoration-2 underline-offset-8">
                    رایگان و آفلاین
                  </span>
                </>
              ) : (
                <>
                  Free & Offline <br />
                  Apparel Store ERP
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal max-w-xl">
              {language === 'fa'
                ? 'محصولات، رنگ و سایز، موجودی، انبار و سفارش‌های فروشگاه پوشاک خود را ساده مدیریت کنید؛ ۱۰۰٪ رایگان و بدون نیاز به اینترنت.'
                : 'Effortlessly manage clothing products, color & size matrices, inventory, stock, and orders — 100% free & offline.'}
            </p>

            {/* Vercel Pill Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs shadow-sm hover:opacity-90 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>{language === 'fa' ? 'دانلود رایگان تنخور' : 'Free Download'}</span>
              </a>

              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-medium text-xs transition-all flex items-center gap-1.5"
              >
                <span>{language === 'fa' ? 'ورود به پنل ابری' : 'Web Panel'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Directus Download Platform Buttons */}
            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-900/60 flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-neutral-500 font-caption-mono">
                {language === 'fa' ? 'لینک‌های مستقیم دانلود:' : 'Direct Downloads:'}
              </span>

              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-caption-mono flex items-center gap-1 transition-colors"
                title="Windows Desktop Setup"
              >
                <Monitor className="w-3 h-3 text-blue-500" />
                <span>ویندوز</span>
              </a>

              <a
                href={downloadLinks.macos_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-caption-mono flex items-center gap-1 transition-colors"
                title="macOS Desktop Setup"
              >
                <Apple className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                <span>مک (macOS)</span>
              </a>

              <a
                href={downloadLinks.android_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-caption-mono flex items-center gap-1 transition-colors"
                title="Android APK Setup"
              >
                <Smartphone className="w-3 h-3 text-emerald-500" />
                <span>اندروید</span>
              </a>
            </div>
          </div>

          {/* Center Column: Iconic Animated Vercel Radial Dot Triangle Pattern */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-6">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Subtle Radial Glow background */}
              <div className="absolute inset-0 bg-neutral-200/40 dark:bg-neutral-800/20 rounded-full blur-2xl pointer-events-none" />

              {/* Animated Dot Pyramid with Cursor Reactions & Breathing */}
              <AnimatedDotPyramid />
            </div>
          </div>

          {/* Right Column: Vercel Style Feature Bullets */}
          <div className="lg:col-span-3 space-y-4 text-xs font-caption-mono text-neutral-600 dark:text-neutral-400 border-r-0 lg:border-r border-neutral-200/80 dark:border-neutral-800/80 pr-0 lg:pr-6">
            <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 space-y-1">
              <span className="text-[11px] font-bold text-neutral-900 dark:text-white block">
                {language === 'fa' ? 'ویژه تولیدی، مزون و فروشگاه' : 'Tailored for Fashion'}
              </span>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {language === 'fa' ? 'طراحی شده تخصصی برای صنف پوشاک، کیف و کفش' : 'Built specifically for clothing and footwear stores'}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 space-y-1">
              <span className="text-[11px] font-bold text-neutral-900 dark:text-white block">
                {language === 'fa' ? 'کارکرد ۱۰۰٪ آفلاین دسکتاپ' : '100% Offline Resilience'}
              </span>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {language === 'fa' ? 'بدون وابستگی به اینترنت و بدون قطعی در فروشگاه' : 'Zero internet latency or server outage dependency'}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 space-y-1">
              <span className="text-[11px] font-bold text-neutral-900 dark:text-white block">
                {language === 'fa' ? 'ماتریس هوشمند رنگ و سایز' : 'Smart Variant Matrix'}
              </span>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {language === 'fa' ? 'مدیریت یکباره ده‌ها ترکیب سایز و رنگ همراه بارکد' : 'Automated SKUs & barcodes for all color-size combos'}
              </p>
            </div>
          </div>

        </div>

        {/* Minimalist Vercel Partner Brand Strip */}
        <div className="border-t border-b border-neutral-200/80 dark:border-neutral-800/80 py-6 overflow-hidden">
          <div className="text-[11px] font-caption-mono text-center text-neutral-400 dark:text-neutral-500 mb-4 uppercase tracking-widest">
            {language === 'fa' ? 'مورد اعتماد برندها، مزون‌ها و فروشگاه‌های معتبر پوشاک' : 'Trusted by leading fashion brands and ateliers'}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs font-bold font-caption-mono text-neutral-400 dark:text-neutral-600 tracking-wider">
            {brandLogos.map((brand, i) => (
              <span key={i} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default">
                {brand.name}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Dashboard Demo Component */}
        <div id="showcase" className="mt-16 sm:mt-24">
          <InteractiveDashboardPreview />
        </div>

      </div>
    </section>
  );
}
