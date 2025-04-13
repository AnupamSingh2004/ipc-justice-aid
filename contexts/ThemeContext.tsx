"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage when component mounts (client-side only)
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    
    // Check for saved preference or use system preference
    if (savedTheme === "light") {
      setTheme("light");
    } else if (savedTheme === "dark") {
      setTheme("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Update the DOM when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Helper function to get all theme classes
export function getThemeClasses(theme: Theme) {
  return {
    bgMain: theme === "dark" ? 'bg-slate-900' : 'bg-slate-50',
    bgHeader: theme === "dark" ? 'bg-slate-800' : 'bg-white',
    bgCard: theme === "dark" ? 'bg-slate-800' : 'bg-white',
    bgInput: theme === "dark" ? 'bg-slate-700' : 'bg-slate-50',
    textColor: theme === "dark" ? 'text-slate-200' : 'text-slate-800',
    borderColor: theme === "dark" ? 'border-slate-700' : 'border-slate-200',
    placeholderColor: theme === "dark" ? 'placeholder:text-slate-500' : 'placeholder:text-slate-400',
    inactiveText: theme === "dark" ? 'text-slate-400' : 'text-slate-500',
    hoverBg: theme === "dark" ? 'hover:bg-slate-700' : 'hover:bg-slate-100',
    highlightBg: theme === "dark" ? 'bg-amber-500/10' : 'bg-amber-500/10',
    highlightBox: theme === "dark" ? 'bg-slate-700' : 'bg-white',
    highlightBorder: theme === "dark" ? 'border-amber-500/50' : 'border-amber-500/50',
  };
}