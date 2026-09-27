'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import InteractiveDashboardPreview from './InteractiveDashboardPreview';
import { Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function InteractiveDashboardSection() {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-neutral-50/60 dark:bg-[#080808] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeIn className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-caption-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isFa ? 'پیش‌نمایش زنده محیط برنامه' : 'Live Interactive Environment'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {isFa
              ? 'محیط کاربری نرم‌افزار تنخور را زنده تجربه کنید'
              : 'Experience the Tankhor App Interface Live'}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {isFa
              ? 'تغییر موجودی ماتریسی رنگ و سایز، شبیه‌ساز اسکنر بارکد و راهنمای سایز را مستقیماً در مرورگر خود آزمایش کنید.'
              : 'Test real-time variant stock updates, POS barcode scanning, and smart size guide engine right in your browser.'}
          </p>
        </FadeIn>

        <InteractiveDashboardPreview />
      </div>
    </section>
  );
}
