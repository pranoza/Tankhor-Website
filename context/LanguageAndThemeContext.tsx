'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

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
}

const LanguageAndThemeContext = createContext<LanguageAndThemeContextType | undefined>(undefined);

export function LanguageAndThemeProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fa');
  const [theme, setThemeState] = useState<Theme>('light');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  // Load saved preferences on client mount
  useEffect(() => {
    const savedLang = localStorage.getItem('tankhor_lang') as Language;
    const savedTheme = localStorage.getItem('tankhor_theme') as Theme;

    requestAnimationFrame(() => {
      if (savedLang === 'fa' || savedLang === 'en') {
        setLanguageState(savedLang);
      }
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeState('dark');
      }
    });
  }, []);

  // Sync language DOM attributes & localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', direction);
    root.setAttribute('lang', language);
    localStorage.setItem('tankhor_lang', language);
  }, [language, direction]);

  // Sync theme DOM class & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('tankhor_theme', theme);
  }, [theme]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

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
