'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { CheckCircle2, Shirt, Layers, Database, Box, ShoppingBag, WifiOff, Download, Cloud } from 'lucide-react';

export default function WhyTankhorSection() {
  const { language } = useLanguageAndTheme();
  const { whyTankhor } = siteContent;

  const icons = [Shirt, Layers, Database, Box, ShoppingBag, WifiOff, Download, Cloud, CheckCircle2];

  return (
    <section id="why-tankhor" className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vercel Title Section */}
        <div className="max-w-3xl mb-16 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
            <span>{language === 'fa' ? 'مزیت‌های رقابتی' : 'Competitive Advantages'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {whyTankhor.title[language]}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {whyTankhor.subtitle[language]}
          </p>
        </div>

        {/* Minimal Vercel Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyTankhor.advantages.map((adv, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white">
                    <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span className="font-caption-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white pt-1">
                  {adv.title[language]}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {adv.desc[language]}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
