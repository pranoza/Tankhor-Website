'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguageAndTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.75, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 16 }}
          transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          type="button"
          aria-label={language === 'fa' ? 'بازگشت به بالای صفحه' : 'Back to top'}
          title={language === 'fa' ? 'بازگشت به بالای صفحه' : 'Back to top'}
          className="fixed bottom-6 start-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-100 hover:text-black dark:hover:text-white border border-neutral-200/90 dark:border-neutral-800/90 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xl shadow-black/10 dark:shadow-black/50 backdrop-blur-md flex items-center justify-center transition-all group cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white" />
          <span className="sr-only">
            {language === 'fa' ? 'بازگشت به بالای صفحه' : 'Back to top'}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
