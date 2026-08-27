'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { XCircle, CheckCircle2, Layers } from 'lucide-react';

export default function PainPointsComparison() {
  const { language } = useLanguageAndTheme();
  const content = siteContent.painPointsVsSolution;

  return (
    <section className="py-28 sm:py-36 bg-neutral-100/50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 relative overflow-hidden border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="font-caption-mono inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium border border-neutral-200/80 dark:border-neutral-800">
            <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'چرا تنخور؟' : 'Why Tankhor?'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {content.title[language]}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {content.subtitle[language]}
          </p>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Methods (Pain Points) */}
          <div className="bg-white dark:bg-[#121212] p-8 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-8 flex flex-col justify-between shadow-vercel-sm">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {content.traditional.title[language]}
                  </h3>
                  <span className="text-xs text-neutral-500 font-medium">
                    {language === 'fa' ? 'روش‌های عمومی و غیرتخصصی' : 'Generic Spreadsheets & ERPs'}
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                {content.traditional.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
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
          </div>

          {/* Tankhor Solution */}
          <div className="bg-white dark:bg-[#121212] p-8 sm:p-10 rounded-2xl border border-teal-500/40 dark:border-teal-500/30 space-y-8 flex flex-col justify-between shadow-vercel-md relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {content.tankhorSolution.title[language]}
                  </h3>
                  <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                    {language === 'fa' ? 'راهکار اختصاصی ماتریس پوشاک' : 'Native Fashion Matrix ERP'}
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                {content.tankhorSolution.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
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
      </div>
    </section>
  );
}
