'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import InteractiveDashboardPreview from './InteractiveDashboardPreview';
import { Download, Monitor, Smartphone, Apple, Play } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguageAndTheme();
  const latestReleaseUrl = 'https://github.com/brandyar/Tankhor/releases/latest';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-44 pb-24 sm:pb-36 overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 mesh-gradient-bg">
      {/* Soft Subtle Mesh Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-violet-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Uncluttered Header */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium shadow-vercel-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>
              {language === 'fa'
                ? 'پلتفرم تخصصی مدیریت محصول و انبار پوشاک'
                : 'Specialized Apparel Inventory & Product ERP'}
            </span>
          </div>

          {/* Clean Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
            {language === 'fa' ? (
              <>
                مدیریت هوشمند محصولات و{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-500 dark:from-teal-400 dark:via-emerald-400 dark:to-cyan-300">
                  ماتریس رنگ و سایز
                </span>
              </>
            ) : (
              <>
                Smart Apparel ERP &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-500 dark:from-teal-400 dark:via-emerald-400 dark:to-cyan-300">
                  Size Matrix
                </span>
              </>
            )}
          </h1>

          {/* Minimal Subheadline with high negative space */}
          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            {language === 'fa'
              ? 'کارکرد کاملاً آفلاین و رایگان به همراه همگام‌سازی ابری؛ ویژه تولیدی‌ها، مزون‌ها، بوتیک‌ها و فروشگاه‌های پوشاک.'
              : 'Zero-latency offline performance with cloud sync for fashion brands, ateliers, and boutiques.'}
          </p>

          {/* Concise Short Pill Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary Download Button */}
            <a
              href={latestReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold text-sm shadow-vercel-md hover:opacity-90 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Download className="w-4 h-4 text-teal-400 dark:text-teal-600 group-hover:translate-y-0.5 transition-transform" />
              <span>{language === 'fa' ? 'دانلود مستقیم' : 'Direct Download'}</span>
            </a>

            {/* Cloud Panel Login Button */}
            <a
              href="https://my.tankhor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-vercel-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-teal-200 animate-ping" />
              <span>{language === 'fa' ? 'ورود به پنل ابری (my.tankhor.com)' : 'Web Panel (my.tankhor.com)'}</span>
            </a>

            {/* Secondary Live Demo Button */}
            <button
              onClick={() => scrollToSection('showcase')}
              className="px-6 py-3.5 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-semibold text-sm border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex items-center justify-center gap-2 shadow-vercel-sm"
            >
              <Play className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 fill-teal-600/20" />
              <span>{language === 'fa' ? 'مشاهده دمو' : 'Live Demo'}</span>
            </button>
          </div>

          {/* Multi-Platform Download Link Options Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="text-[11px] font-medium text-neutral-500 ml-1 rtl:ml-1 ltr:mr-1">
              {language === 'fa' ? 'دانلود نسخه دسکتاپ و موبایل:' : 'Download for:'}
            </span>

            <a
              href={latestReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all shadow-vercel-sm"
            >
              <Monitor className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-caption-mono">{language === 'fa' ? 'ویندوز (64-bit)' : 'Windows'}</span>
            </a>

            <a
              href={latestReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all shadow-vercel-sm"
            >
              <Apple className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
              <span className="font-caption-mono">{language === 'fa' ? 'مک (macOS)' : 'macOS'}</span>
            </a>

            <a
              href={latestReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/50 transition-all shadow-vercel-sm"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-caption-mono">{language === 'fa' ? 'اندروید (APK)' : 'Android'}</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive Visual Dashboard Showcase */}
        <div id="showcase" className="mt-20 sm:mt-28 max-w-5xl mx-auto">
          <InteractiveDashboardPreview />
        </div>
      </div>
    </section>
  );
}
