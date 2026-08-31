'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { Check, Download, ExternalLink, ShieldCheck, Cloud } from 'lucide-react';

export default function FreeVsProSection() {
  const { language } = useLanguageAndTheme();
  const { freeVsPro } = siteContent;
  const latestReleaseUrl = 'https://github.com/brandyar/Tankhor/releases/latest';

  return (
    <section id="pro-version" className="py-20 sm:py-28 bg-white dark:bg-[#0b0f17] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-medium">
            <span>{language === 'fa' ? 'مقایسه نسخه‌ها' : 'Version Comparison'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {freeVsPro.title[language]}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {freeVsPro.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tankhor Free Card */}
          <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border-2 border-neutral-200 dark:border-neutral-800 space-y-6 relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {freeVsPro.freeCard.title[language]}
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                  {freeVsPro.freeCard.badge[language]}
                </span>
              </div>

              <div className="text-3xl font-extrabold text-neutral-900 dark:text-white">
                {language === 'fa' ? 'رایگان همیشگی' : 'Free Forever'}
              </div>

              <ul className="space-y-3 pt-2">
                {freeVsPro.freeCard.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={latestReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{freeVsPro.freeCard.ctaText[language]}</span>
              </a>
            </div>
          </div>

          {/* Tankhor Pro Card */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-white border-2 border-teal-500/50 shadow-xl space-y-6 relative flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal-500 text-neutral-950 text-xs font-bold uppercase tracking-wider">
              {language === 'fa' ? 'پیشنهادی برای شعب و آنلاین‌شاپ' : 'Recommended for Chains'}
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-teal-400" />
                  {freeVsPro.proCard.title[language]}
                </h3>
                <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold">
                  {freeVsPro.proCard.badge[language]}
                </span>
              </div>

              <div className="text-3xl font-extrabold text-white">
                {language === 'fa' ? 'نسخه ابری و چندکاربره' : 'Cloud Subscription'}
              </div>

              <ul className="space-y-3 pt-2">
                {freeVsPro.proCard.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{feat[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>{freeVsPro.proCard.ctaText[language]}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
