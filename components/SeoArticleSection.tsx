'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { HelpCircle, BookOpen } from 'lucide-react';

export default function SeoArticleSection() {
  const { language } = useLanguageAndTheme();
  const { seoContent } = siteContent;

  return (
    <section className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* SEO Main Content Block */}
        <article className="space-y-6 bg-white dark:bg-neutral-900/40 p-6 sm:p-10 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'fa' ? 'راهنمای تخصصی' : 'Technical Docs'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white leading-snug">
            {seoContent.title[language]}
          </h2>

          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
            {seoContent.paragraphs.map((para, idx) => (
              <p key={idx}>{para[language]}</p>
            ))}
          </div>
        </article>

        {/* Accounting Intent Q&A Box */}
        <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 rounded-xl space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                {seoContent.accountingIntentQA.question[language]}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {seoContent.accountingIntentQA.answer[language]}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
