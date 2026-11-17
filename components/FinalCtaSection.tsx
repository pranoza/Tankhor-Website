'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { Download, Play, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function FinalCtaSection() {
  const { language } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const isFa = language === 'fa';

  const scrollToWorkflow = () => {
    const el = document.getElementById('workflow');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-neutral-900 text-white relative overflow-hidden border-t border-neutral-800">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <FadeIn className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 text-teal-300 border border-neutral-700 text-xs font-caption-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>{isFa ? 'شروع بدون ریسک' : 'Zero-Risk Start'}</span>
          </div>

          {/* Heading - Specified in prompt */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {isFa
              ? 'مدیریت حرفه‌ای فروشگاهتان را از همین امروز شروع کنید'
              : 'Start Professional Store Management Today'}
          </h2>

          {/* Subtitle - Specified in prompt */}
          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {isFa
              ? 'بدون هزینه شروع کنید، محصولات و موجودی خود را مدیریت کنید و با رشد کسب‌وکارتان از امکانات حرفه‌ای تنخور استفاده کنید.'
              : 'Start at zero cost, organize your garment variants and stock, and seamlessly unlock professional cloud capabilities as your business grows.'}
          </p>
        </FadeIn>

        {/* 2 CTAs: Primary = Free Download, Secondary = View Demo */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Primary CTA */}
          <a
            href={downloadLinks.windows_setup}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 font-bold text-sm shadow-xl transition-all flex items-center gap-2.5 active:scale-95"
          >
            <Download className="w-4 h-4 text-teal-600" />
            <span>{isFa ? 'دانلود نسخه رایگان' : 'Download Free Edition'}</span>
          </a>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={scrollToWorkflow}
            className="px-7 py-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 font-semibold text-sm transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Play className="w-4 h-4 text-teal-400 fill-teal-400/20" />
            <span>{isFa ? 'مشاهده دموی نرم‌افزار' : 'Explore Demo'}</span>
          </button>
        </div>

        {/* Mini Trust Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-caption-mono">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>{isFa ? 'نصب سریع در ۲ دقیقه' : 'Quick 2-minute setup'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>{isFa ? 'بدون نیاز به کارت بانکی' : 'No credit card needed'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>{isFa ? 'سازگار با ویندوز و مک' : 'Windows & macOS ready'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
