'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, FAQItem } from '@/data/content';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export default function FAQSection() {
  const { language } = useLanguageAndTheme();
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs = siteContent.faqs;

  const filteredFaqs = faqs.filter((f) => {
    const q = f.question[language].toLowerCase();
    const a = f.answer[language].toLowerCase();
    const query = searchQuery.toLowerCase();
    return q.includes(query) || a.includes(query);
  });

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="font-caption-mono inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium border border-neutral-200/80 dark:border-neutral-800">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'سوالات متداول' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {language === 'fa' ? 'پاسخ به سوالات شما درباره تنخور' : 'Got Questions? We Have Answers.'}
          </h2>

          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {language === 'fa'
              ? 'پاسخ‌های شفاف درباره نحوه کارکرد آفلاین، راهنمای سایز و راه‌اندازی.'
              : 'Everything you need to know about offline architecture, matrix SKUs, and cloud sync.'}
          </p>

          {/* Search Box */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute top-1/2 -translate-y-1/2 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'fa'
                    ? 'جستجو در سوالات متداول...'
                    : 'Search questions...'
                }
                className="w-full bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 px-10 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FAQItem) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-neutral-50/50 dark:bg-neutral-900/30 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-right rtl:text-right ltr:text-left font-bold text-sm sm:text-base text-neutral-800 dark:text-neutral-200 hover:text-teal-600 dark:hover:text-teal-400 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="leading-snug">{faq.question[language]}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-600 dark:text-teal-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-200/50 dark:border-neutral-800/50 animate-in fade-in duration-200">
                      {faq.answer[language]}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-neutral-400 text-sm">
              {language === 'fa' ? 'سوالی پیدا نشد.' : 'No matching questions found.'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
