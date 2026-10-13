'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Language = 'fa' | 'en';
type Direction = 'rtl' | 'ltr';
type Theme = 'light' | 'dark';

interface LanguageAndThemeContextType {
  language: Language;
  direction: Direction;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDemoModalOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
  isMacModalOpen: boolean;
  openMacModal: () => void;
  closeMacModal: () => void;
}

const LanguageAndThemeContext = createContext<LanguageAndThemeContextType | undefined>(undefined);

export function LanguageAndThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const router = useRouter();

  // Pathname-based locale detection for SSR & Googlebot crawling
  const isEnRoute = pathname.startsWith('/en');
  const language: Language = isEnRoute ? 'en' : 'fa';
  const direction: Direction = isEnRoute ? 'ltr' : 'rtl';

  // Initialize theme with lazy initializer
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('tankhor_theme') as Theme;
        if (saved === 'light' || saved === 'dark') {
          return saved;
        }
      } catch (e) {}
    }
    return 'dark';
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [isMacModalOpen, setIsMacModalOpen] = useState<boolean>(false);

  // Sync language & direction DOM attributes to documentElement & localStorage
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('dir', direction);
      root.setAttribute('lang', language);
      try {
        localStorage.setItem('tankhor_lang', language);
      } catch (e) {}
    }
  }, [language, direction]);

  // Sync theme DOM class & localStorage
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      try {
        localStorage.setItem('tankhor_theme', theme);
      } catch (e) {}
    }
  }, [theme]);

  // Navigate to corresponding language route
  const setLanguage = (targetLang: Language) => {
    if (targetLang === 'en' && !isEnRoute) {
      const target = pathname === '/' ? '/en' : `/en${pathname}`;
      router.push(target);
    } else if (targetLang === 'fa' && isEnRoute) {
      const target = pathname.replace(/^\/en/, '') || '/';
      router.push(target);
    }
  };

  const toggleLanguage = () => {
    if (isEnRoute) {
      const target = pathname.replace(/^\/en/, '') || '/';
      router.push(target);
    } else {
      const target = pathname === '/' ? '/en' : `/en${pathname}`;
      router.push(target);
    }
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const openMacModal = () => setIsMacModalOpen(true);
  const closeMacModal = () => setIsMacModalOpen(false);

  return (
    <LanguageAndThemeContext.Provider
      value={{
        language,
        direction,
        theme,
        setLanguage,
        toggleLanguage,
        setTheme,
        toggleTheme,
        isDemoModalOpen,
        openDemoModal,
        closeDemoModal,
        isMacModalOpen,
        openMacModal,
        closeMacModal,
      }}
    >
      {children}
    </LanguageAndThemeContext.Provider>
  );
}

export function useLanguageAndTheme() {
  const context = useContext(LanguageAndThemeContext);
  if (!context) {
    throw new Error('useLanguageAndTheme must be used within a LanguageAndThemeProvider');
  }
  return context;
}
