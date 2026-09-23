'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { Sun, Moon, Globe, Menu, X, Download, LogIn, ChevronRight, Monitor, Apple, Smartphone } from 'lucide-react';

export default function Navbar() {
  const { language, theme, toggleTheme, toggleLanguage, openMacModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavHref = (href: string) => {
    if (href.startsWith('#')) {
      return isHome ? href : `/${href}`;
    }
    return href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Vercel Banner */}
      <div className="bg-neutral-900 text-neutral-300 dark:bg-neutral-950 dark:text-neutral-300 border-b border-neutral-800 text-[10px] sm:text-xs h-8 fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 text-center font-caption-mono whitespace-nowrap overflow-hidden">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
        <span className="truncate max-w-[calc(100vw-90px)] sm:max-w-none">
          {language === 'fa' ? (
            <>
              <span className="sm:hidden">دانلود رایگان تنخور (ویندوز، مک و اندروید)</span>
              <span className="hidden sm:inline">تنخور؛ نرم‌افزار تخصصی مدیریت و انبارداری پوشاک • نسخه رایگان و آفلاین</span>
            </>
          ) : (
            <>
              <span className="sm:hidden">Download Tankhor (Windows, Mac & Android)</span>
              <span className="hidden sm:inline">Tankhor: Apparel Inventory & Variant Management • Free & Offline</span>
            </>
          )}
        </span>
        <Link
          href={getNavHref('#free-version')}
          className="text-white hover:text-teal-300 underline underline-offset-2 inline-flex items-center gap-0.5 font-semibold transition-colors shrink-0 text-[10px] sm:text-xs"
        >
          <span>{language === 'fa' ? 'دانلود' : 'Download'}</span>
          <ChevronRight className="w-3 h-3 rtl:rotate-180" />
        </Link>
      </div>

      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-200 h-16 flex items-center ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 shadow-sm'
            : 'bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm border-b border-neutral-200/60 dark:border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Monogram */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 focus:outline-none group"
              aria-label="Tankhor Homepage"
            >
              <div className="relative h-8 flex items-center shrink-0">
                <Image
                  src="/logo-dark.png"
                  alt="تنخور | TANKHOR"
                  width={110}
                  height={32}
                  className="h-7 w-auto dark:hidden object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
                <Image
                  src="/logo-light.png"
                  alt="تنخور | TANKHOR"
                  width={110}
                  height={32}
                  className="h-7 w-auto hidden dark:block object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-white shrink-0">
                {language === 'fa' ? 'تن‌خور' : 'TANKHOR'}
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-400 shrink-0">
              {!isHome && (
                <Link
                  href="/"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors whitespace-nowrap"
                >
                  {language === 'fa' ? 'صفحه اصلی' : 'Home'}
                </Link>
              )}
              {siteContent.navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={getNavHref(link.href)}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label[language]}
                </Link>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="h-8 px-2.5 flex items-center justify-center font-caption-mono text-[11px] font-semibold rounded-md text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-700 transition-all whitespace-nowrap leading-none cursor-pointer"
                title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
              >
                <span>{language === 'fa' ? 'EN' : 'FA'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="h-8 w-8 flex items-center justify-center rounded-md text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-700 transition-all shrink-0 cursor-pointer"
                aria-label="Toggle dark/light mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-neutral-700" />
                )}
              </button>

              {/* Login Button */}
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3.5 flex items-center justify-center gap-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-md border border-neutral-300/80 dark:border-neutral-700/80 transition-all whitespace-nowrap leading-none"
              >
                <LogIn className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{language === 'fa' ? 'ورود به پنل' : 'Log In'}</span>
              </a>

              {/* Direct Download Button (Directus Windows link) */}
              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3.5 flex items-center justify-center gap-1.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs shadow-sm hover:opacity-90 transition-all active:scale-95 whitespace-nowrap leading-none"
              >
                <Download className="w-3.5 h-3.5 text-teal-300 dark:text-teal-600" />
                <span>{language === 'fa' ? 'دانلود رایگان' : 'Free Download'}</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2 shrink-0">
              <button
                onClick={toggleLanguage}
                className="h-8 w-8 flex items-center justify-center font-caption-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
              >
                <span>{language === 'fa' ? 'EN' : 'FA'}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="h-8 w-8 flex items-center justify-center text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                aria-label="Toggle dark/light mode"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-neutral-700" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-8 w-8 flex items-center justify-center text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed top-24 left-0 right-0 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-neutral-800 px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {!isHome && (
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 hover:bg-teal-100 dark:hover:bg-teal-900/60"
                >
                  {language === 'fa' ? 'صفحه اصلی' : 'Home'}
                </Link>
              )}
              {siteContent.navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={getNavHref(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {link.label[language]}
                </Link>
              ))}
              <hr className="border-neutral-200 dark:border-neutral-800 my-2" />
              <div className="flex flex-col gap-2">
                <a
                  href={downloadLinks.windows_setup}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <Monitor className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                  <span>{language === 'fa' ? 'دانلود نسخه ویندوز' : 'Download Windows App'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openMacModal();
                  }}
                  className="w-full py-2.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                >
                  <Apple className="w-4 h-4" />
                  <span>{language === 'fa' ? 'دانلود نسخه مک (macOS)' : 'Download macOS App'}</span>
                </button>
                <a
                  href={downloadLinks.android_setup}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700"
                >
                  <Smartphone className="w-4 h-4 text-emerald-500" />
                  <span>{language === 'fa' ? 'دانلود نسخه اندروید (APK)' : 'Download Android App'}</span>
                </a>
                <a
                  href="https://my.tankhor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-md bg-teal-600 text-white font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{language === 'fa' ? 'ورود به پنل (my.tankhor.com)' : 'Web Login'}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
