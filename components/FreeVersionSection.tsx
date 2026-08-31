'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { Download, CheckCircle, Monitor, ShieldCheck, Zap } from 'lucide-react';

export default function FreeVersionSection() {
  const { language } = useLanguageAndTheme();
  const { freeVersion } = siteContent;
  const latestReleaseUrl = 'https://github.com/brandyar/Tankhor/releases/latest';

  return (
    <section id="free-version" className="py-20 sm:py-28 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-neutral-900/90 border border-teal-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'نسخه رایگان دسکتاپ' : 'Free Desktop Edition'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {freeVersion.title[language]}
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {freeVersion.subtitle[language]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {freeVersion.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-200">{benefit[language]}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <a
                  href={latestReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-base shadow-lg shadow-teal-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  <span>{freeVersion.ctaText[language]}</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>{language === 'fa' ? 'بدون نیاز به ثبت نام و کارت بانکی' : 'No credit card or registration needed'}</span>
                </div>
              </div>
            </div>

            {/* Right Card Graphic */}
            <div className="lg:col-span-5 bg-neutral-950/80 rounded-2xl p-6 sm:p-8 border border-neutral-800 space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mx-auto">
                <Monitor className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Tankhor Free Desktop</h3>
                <p className="text-xs text-neutral-400">Windows & macOS Offline Installer</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-right text-xs space-y-2 font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>نام محصول:</span>
                  <span className="text-teal-400 font-semibold">تنخور رایگان</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>نوع لایسنس:</span>
                  <span className="text-emerald-400">رایگان همیشگی (100% Free)</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>نیازمند اینترنت:</span>
                  <span className="text-rose-400">خیر (کارکرد ۱۰۰٪ آفلاین)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
