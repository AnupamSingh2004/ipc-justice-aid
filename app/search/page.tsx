"use client";

import { useSearchParams } from "next/navigation"; // Changed from react-router-dom
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/search/SearchResults";
// import { useTranslation } from "@/lib/i18n/LanguageContext";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Results = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
//   const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        
        <div className={cn(
          "flex-1 overflow-y-auto",
          isMobile ? "pt-2" : "pt-6"
        )}>
          <div className={cn(
            "container mx-auto",
            isMobile ? "px-2 py-2" : "px-4 py-8",
            "transition-all duration-200"
          )}>
            <div className={cn(
              "mb-4",
              isMobile ? "max-w-full" : "max-w-3xl mx-auto"
            )}>
              <SearchBar />
            </div>
            <SearchResults query={query} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;