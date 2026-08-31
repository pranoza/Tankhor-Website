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
    <section id="why-tankhor" className="py-20 sm:py-28 bg-white dark:bg-[#0f1117] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-medium">
            <span>{language === 'fa' ? 'مزیت‌های رقابتی' : 'Competitive Edges'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {whyTankhor.title[language]}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {whyTankhor.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyTankhor.advantages.map((adv, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-teal-500/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200/80 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {adv.title[language]}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {adv.desc[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
