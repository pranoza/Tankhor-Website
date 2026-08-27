'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, Testimonial } from '@/data/content';
import { Star, Award } from 'lucide-react';

export default function TestimonialsAndStats() {
  const { language } = useLanguageAndTheme();

  const testimonials = siteContent.testimonials;

  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-neutral-100/50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 relative border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="font-caption-mono inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium border border-neutral-200/80 dark:border-neutral-800">
            <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'نظرات مشتریان' : 'Testimonials'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {language === 'fa'
              ? 'مورد اعتماد برندها و مزون‌های کشور'
              : 'Endorsed by Top Fashion CEOs'}
          </h2>

          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {language === 'fa'
              ? 'تجربه واقعی مدیران فروشگاه‌ها از سرعت بالا و حذف خطای سایزبندی با تنخور.'
              : 'How Tankhor eliminated stock mismatches and accelerated operations.'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: Testimonial) => (
            <div
              key={t.id}
              className="bg-white dark:bg-[#121212] p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between space-y-6 shadow-vercel-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-caption-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                    {t.impactMetric[language]}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  «{t.comment[language]}»
                </p>
              </div>

              <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name[language]}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {t.name[language]}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t.role[language]} - <span className="font-caption-mono text-teal-600 dark:text-teal-400 font-semibold">{t.brand[language]}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
