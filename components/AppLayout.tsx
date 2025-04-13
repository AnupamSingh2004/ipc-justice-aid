"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme/ThemeContent";

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function AppLayout({ children, showSidebar = true }: AppLayoutProps) {
  const { theme } = useTheme();
  
  return (
    <div className={cn("min-h-screen", theme)}>
      {/* Background Ellipses */}
      <div className="bg-ellipse-1"></div>
      <div className="bg-ellipse-2"></div>
      <div className="bg-ellipse-3"></div>
      
      <div className="flex h-screen overflow-hidden">
        {showSidebar && <Sidebar />}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}