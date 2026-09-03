'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { Phone, Mail, MapPin, Instagram, Linkedin, Send, ShieldCheck, Download, Sparkles, Monitor, Apple, Smartphone } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();

  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Vercel Bottom CTA Banner */}
        <div className="bg-neutral-900 p-8 sm:p-12 rounded-xl border border-neutral-800 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === 'fa'
                ? 'آماده‌اید انبارداری و فروش پوشاک خود را هوشمند کنید؟'
                : 'Ready to Modernize Your Apparel Inventory & POS?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              {language === 'fa'
                ? 'آخرین نسخه ویندوز، مک و اندروید تنخور را با لینک مستقیم دانلود کنید و کارکرد ۱۰۰٪ آفلاین را تجربه نمایید.'
                : 'Download the latest Windows, Mac, and Android release directly and enjoy zero-latency offline performance.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={downloadLinks.windows_setup}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs transition-all flex items-center gap-2"
            >
              <Monitor className="w-4 h-4 text-blue-600" />
              <span>{language === 'fa' ? 'دانلود نسخه ویندوز' : 'Download Windows App'}</span>
            </a>

            <a
              href="https://my.tankhor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-teal-200" />
              <span>{language === 'fa' ? 'ورود به پنل ابری (my.tankhor.com)' : 'Web Panel (my.tankhor.com)'}</span>
            </a>
          </div>
        </div>

        {/* Vercel 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block focus:outline-none">
              <Image
                src="/logo-light.png"
                alt="تنخور | TANKHOR"
                width={130}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-normal">
              {siteContent.meta.description[language]}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-caption-mono">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'بخش‌های سایت' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
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

          {/* Direct Downloads (Directus API) */}
          <div className="space-y-3 font-caption-mono">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'دانلود مستقیم برنامه' : 'Direct Downloads'}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a
                  href={downloadLinks.windows_setup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Monitor className="w-3.5 h-3.5 text-blue-500" />
                  <span>{language === 'fa' ? 'نسخه ویندوز (Windows)' : 'Windows App'}</span>
                </a>
              </li>
              <li>
                <a
                  href={downloadLinks.macos_setup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Apple className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{language === 'fa' ? 'نسخه مک (macOS)' : 'macOS App'}</span>
                </a>
              </li>
              <li>
                <a
                  href={downloadLinks.android_setup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{language === 'fa' ? 'نسخه اندروید (APK)' : 'Android APK'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-xs font-caption-mono">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'تماس و پشتیبانی' : 'Contact'}
            </h4>
            <div className="space-y-2 text-neutral-400">
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

            <div className="pt-2 flex items-center gap-2">
              <div className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-[10px] text-neutral-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-teal-400" />
                <span>{language === 'fa' ? 'دانش‌بنیان' : 'Tech Certified'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Vercel Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-caption-mono gap-4">
          <p>
            © {new Date().getFullYear()} {language === 'fa' ? 'پلتفرم «تنخور | TANKHOR» - تمامی حقوق محفوظ است.' : 'Tankhor Apparel Platform.'}
          </p>

          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px]">All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
