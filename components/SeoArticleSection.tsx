'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { HelpCircle, BookOpen, Check } from 'lucide-react';

export default function SeoArticleSection() {
  const { language } = useLanguageAndTheme();
  const { seoContent } = siteContent;

  return (
    <section className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* SEO Main Content Block */}
        <article className="space-y-6 bg-white dark:bg-neutral-900/60 p-8 sm:p-12 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'fa' ? 'راهنمای تخصصی' : 'Specialized Guide'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white leading-snug">
            {seoContent.title[language]}
          </h2>

          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            {seoContent.paragraphs.map((para, idx) => (
              <p key={idx}>{para[language]}</p>
            ))}
          </div>
        </article>

        {/* Accounting Intent Q&A Box */}
        <div className="bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 p-8 rounded-3xl space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                {seoContent.accountingIntentQA.question[language]}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {seoContent.accountingIntentQA.answer[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
