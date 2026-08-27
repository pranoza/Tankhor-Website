'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { Phone, Mail, MapPin, Instagram, Linkedin, Send, ShieldCheck, Download, Sparkles } from 'lucide-react';

export default function Footer() {
  const { language, openDemoModal } = useLanguageAndTheme();
  const latestReleaseUrl = 'https://github.com/brandyar/Tankhor/releases/latest';

  return (
    <footer className="bg-[#0a0a0a] text-neutral-300 border-t border-neutral-800/80 pt-20 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner CTA */}
        <div className="bg-[#171717] p-8 sm:p-14 rounded-3xl border border-neutral-800 mb-20 text-center space-y-6 relative overflow-hidden shadow-vercel-lg">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {language === 'fa'
                ? 'آماده‌اید انبارداری و فروش پوشاک خود را هوشمند کنید؟'
                : 'Ready to Modernize Your Apparel Inventory & POS?'}
            </h3>
            <p className="text-xs sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              {language === 'fa'
                ? 'آخرین نسخه ویندوز، مک و اندروید تنخور را با لینک مستقیم دانلود کنید و کارکرد ۱۰۰٪ آفلاین را تجربه نمایید.'
                : 'Download the latest Windows, Mac, and Android release directly and enjoy zero-latency offline performance.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://my.tankhor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-vercel-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-teal-200" />
              <span>{language === 'fa' ? 'ورود به پنل ابری (my.tankhor.com)' : 'Web Panel (my.tankhor.com)'}</span>
            </a>

            <a
              href={latestReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-[#171717] font-bold text-sm shadow-vercel-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-teal-600" />
              <span>{language === 'fa' ? 'دانلود مستقیم نسخه جدید' : 'Direct Download Latest Release'}</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Brand Info with uploaded light logo */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="inline-block focus:outline-none">
              <Image
                src="/logo-light.png"
                alt="تنخور | TANKHOR"
                width={150}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {siteContent.meta.description[language]}
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 font-caption-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'بخش‌های سایت' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {siteContent.navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Downloads */}
          <div className="space-y-4 font-caption-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'دانلود مستقیم نسخه جدید' : 'Direct Downloads'}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a
                  href={latestReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>{language === 'fa' ? 'نسخه ویندوز (Windows)' : 'Windows Edition'}</span>
                </a>
              </li>
              <li>
                <a
                  href={latestReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>{language === 'fa' ? 'نسخه مک (macOS)' : 'macOS Edition'}</span>
                </a>
              </li>
              <li>
                <a
                  href={latestReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>{language === 'fa' ? 'نسخه اندروید (APK)' : 'Android APK'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-xs font-caption-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'تماس و پشتیبانی' : 'Contact & Support'}
            </h4>
            <div className="space-y-2.5 text-neutral-400">
              <a href="tel:02155416274" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="font-en">021-55416274</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="font-en">support@tankhor.ir</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="font-sans">
                  {language === 'fa'
                    ? 'تهران، بلوار آفریقا (جردن)، برج طلیعه، واحد ۴۰۲'
                    : 'Tehran, Jordan Blvd, Talieh Tower, Unit 402'}
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex items-center gap-2">
              <div className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-[10px] text-neutral-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>{language === 'fa' ? 'دانش‌بنیان' : 'Certified Tech'}</span>
              </div>
              <div className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-[10px] text-neutral-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>{language === 'fa' ? 'ساماندهی' : 'Verified'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-caption-mono gap-4">
          <p>
            © {new Date().getFullYear()} {language === 'fa' ? 'تمامی حقوق برای پلتفرم «تنخور | TANKHOR» محفوظ است.' : 'All rights reserved for Tankhor Fashion ERP Platform.'}
          </p>
          <div className="flex items-center gap-1 text-neutral-400 font-sans">
            <span>{language === 'fa' ? 'طراحی شده با دقت و افتخار برای صنعت پوشاک ایران' : 'Built with passion for fashion retailers'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
