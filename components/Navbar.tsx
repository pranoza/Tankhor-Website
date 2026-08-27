'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { Sun, Moon, Globe, Menu, X, Download, LogIn } from 'lucide-react';

export default function Navbar() {
  const { language, theme, toggleTheme, toggleLanguage, openDemoModal } = useLanguageAndTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const latestReleaseUrl = 'https://github.com/brandyar/Tankhor/releases/latest';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-vercel-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4">
          {/* Logo with uploaded images & project name */}
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0 focus:outline-none group"
            aria-label="Tankhor Homepage"
          >
            <div className="relative h-8 sm:h-9 flex items-center shrink-0">
              {/* Light mode logo (logo-dark.png) */}
              <Image
                src="/logo-dark.png"
                alt="تنخور | TANKHOR"
                width={120}
                height={36}
                className="h-7 sm:h-8 w-auto dark:hidden object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
              {/* Dark mode logo (logo-light.png) */}
              <Image
                src="/logo-light.png"
                alt="تنخور | TANKHOR"
                width={120}
                height={36}
                className="h-7 sm:h-8 w-auto hidden dark:block object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-neutral-900 dark:text-white shrink-0">
              {language === 'fa' ? 'تن‌خور' : 'TANKHOR'}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-neutral-100/80 dark:bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md shrink-0">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-full transition-colors whitespace-nowrap shrink-0"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Actions & Switches */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="font-caption-mono flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-700 transition-all whitespace-nowrap"
              title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
            >
              <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>{language === 'fa' ? 'EN' : 'فارسی'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-700 transition-all shrink-0"
              aria-label="Toggle dark/light mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700" />
              )}
            </button>

            {/* Login Button */}
            <a
              href="https://my.tankhor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-teal-600 dark:hover:text-teal-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center gap-1.5 transition-all whitespace-nowrap shadow-vercel-sm"
            >
              <LogIn className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>{language === 'fa' ? 'ورود به پنل' : 'Panel Login'}</span>
            </a>

            {/* Direct Download Link Button */}
            <a
              href={latestReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold text-xs shadow-vercel-sm hover:opacity-90 transition-all active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-teal-300 dark:text-teal-600 shrink-0" />
              <span>{language === 'fa' ? 'دانلود مستقیم' : 'Direct Download'}</span>
            </a>
          </div>

          {/* Mobile Menu Action Buttons (Uniform height & styling) */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <button
              onClick={toggleLanguage}
              className="h-9 px-3 flex items-center justify-center font-caption-mono text-xs font-bold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-colors shrink-0"
              title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
            >
              {language === 'fa' ? 'EN' : 'FA'}
            </button>
            <button
              onClick={toggleTheme}
              className="h-9 w-9 flex items-center justify-center text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-colors shrink-0"
              aria-label="Toggle dark/light mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9 flex items-center justify-center text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-colors shrink-0 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-20 left-0 right-0 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-neutral-800 px-5 py-6 shadow-vercel-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-all"
              >
                {link.label[language]}
              </a>
            ))}
            <hr className="border-neutral-200 dark:border-neutral-800 my-2" />
            <div className="flex flex-col gap-2.5">
              <a
                href={latestReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold text-xs shadow-vercel-md flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-teal-300 dark:text-teal-600" />
                <span>{language === 'fa' ? 'دانلود مستقیم آخرین نسخه' : 'Direct Download Latest Release'}</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-vercel-sm transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>{language === 'fa' ? 'ورود به پنل (my.tankhor.com)' : 'Login to Panel (my.tankhor.com)'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
