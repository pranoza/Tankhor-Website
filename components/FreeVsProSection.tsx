'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { Check, Download, ArrowUpRight, Cloud } from 'lucide-react';

export default function FreeVsProSection() {
  const { language } = useLanguageAndTheme();
  const { freeVsPro } = siteContent;
  const downloadLinks = useDownloadLinks();

  return (
    <section id="pro-version" className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vercel Title */}
        <div className="max-w-3xl mb-16 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
            <span>{language === 'fa' ? 'مقایسه نسخه‌ها' : 'Version Matrix'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {freeVsPro.title[language]}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {freeVsPro.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Tankhor Free Card */}
          <div className="p-8 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {freeVsPro.freeCard.title[language]}
                </h3>
                <span className="px-2.5 py-0.5 rounded font-caption-mono bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold">
                  {freeVsPro.freeCard.badge[language]}
                </span>
              </div>

              <div className="text-2xl font-extrabold text-neutral-900 dark:text-white font-caption-mono">
                {language === 'fa' ? 'رایگان همیشگی (0 تومان)' : '$0 / Free Forever'}
              </div>

              <ul className="space-y-3 text-xs text-neutral-700 dark:text-neutral-300">
                {freeVsPro.freeCard.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{freeVsPro.freeCard.ctaText[language]}</span>
              </a>
            </div>
          </div>

          {/* Tankhor Pro Card */}
          <div className="p-8 rounded-xl bg-neutral-900 text-white border border-teal-500/40 shadow-sm space-y-6 flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-teal-400" />
                  {freeVsPro.proCard.title[language]}
                </h3>
                <span className="px-2.5 py-0.5 rounded font-caption-mono bg-teal-500/20 border border-teal-500/40 text-teal-300 text-[11px] font-semibold">
                  {freeVsPro.proCard.badge[language]}
                </span>
              </div>

              <div className="text-2xl font-extrabold text-white font-caption-mono">
                {language === 'fa' ? 'همگام‌سازی ابری' : 'Cloud Sync Edition'}
              </div>

              <ul className="space-y-3 text-xs text-neutral-300">
                {freeVsPro.proCard.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{feat[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-md bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <span>{freeVsPro.proCard.ctaText[language]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
