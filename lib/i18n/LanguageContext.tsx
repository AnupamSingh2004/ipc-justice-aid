"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from './translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  getAvailableLanguages: () => { code: string; name: string }[];
};

const defaultLanguage = 'en';

export const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'as', name: 'অসমীয়া (Assamese)' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' }
];

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
  getAvailableLanguages: () => languageOptions
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start with default language to avoid hydration mismatch
  const [language, setLanguage] = useState(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  // Only access localStorage after client-side mounting
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Update localStorage only after mounting
  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language, mounted]);

  // Translation function
  const t = (key: string): string => {
    const langData = translations[language] as { [key: string]: string };
    
    if (!langData) {
      console.warn(`Language ${language} not found`);
      return key;
    }

    const translation = langData[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found in ${language}`);
      
      // Fall back to English if available
      if (language !== 'en') {
        const enData = translations['en'] as { [key: string]: string };
        if (enData && enData[key]) {
          return enData[key];
        }
      }
      
      return key;
    }

    return translation;
  };

  const getAvailableLanguages = () => {
    return languageOptions;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getAvailableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
