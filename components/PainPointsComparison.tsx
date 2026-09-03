'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { XCircle, CheckCircle2, Layers } from 'lucide-react';

export default function PainPointsComparison() {
  const { language } = useLanguageAndTheme();
  const content = siteContent.painPointsVsSolution;

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vercel Title */}
        <div className="max-w-3xl mb-16 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
            <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'مقایسه راهکارها' : 'Solution Comparison'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {content.title[language]}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {content.subtitle[language]}
          </p>
        </div>

        {/* Side-by-Side Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Traditional Methods */}
          <div className="bg-neutral-50/80 dark:bg-neutral-900/40 p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="w-8 h-8 rounded-md bg-rose-100 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  {content.traditional.title[language]}
                </h3>
                <span className="text-[11px] font-caption-mono text-neutral-500">
                  {language === 'fa' ? 'روش‌های عمومی و اکسل' : 'Generic Tools'}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {content.traditional.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                      {point.title[language]}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {point.desc[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tankhor Solution */}
          <div className="bg-neutral-50/80 dark:bg-neutral-900/40 p-6 sm:p-8 rounded-xl border border-teal-500/40 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="w-8 h-8 rounded-md bg-teal-100 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  {content.tankhorSolution.title[language]}
                </h3>
                <span className="text-[11px] font-caption-mono text-teal-600 dark:text-teal-400 font-semibold">
                  {language === 'fa' ? 'راهکار اختصاصی پوشاک' : 'Native Fashion ERP'}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {content.tankhorSolution.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                      {point.title[language]}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {point.desc[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
