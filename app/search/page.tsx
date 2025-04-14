"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/search/SearchResults";
import { useLegalAnalysis } from "@/lib/hooks/use-legal-analysis";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Results = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [currentQuery, setCurrentQuery] = useState(initialQuery);
  const isMobile = useIsMobile();
  const { analyzeCase, result, loading, error } = useLegalAnalysis();

  // Handle search without page navigation
  const handleSearch = async (query: string) => {
    // Update the current query
    setCurrentQuery(query);
    
    // Update URL without full navigation (only if needed)
    if (query !== searchParams.get("q")) {
      const params = new URLSearchParams(searchParams.toString());
      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }
      
      // Use replace to avoid adding to history stack
      router.replace(`/search?${params.toString()}`, { scroll: false });
    }
    
    // If query exists, trigger the legal analysis
    if (query) {
      await analyzeCase(query);
    }
  };
  
  // Run initial analysis if query is in URL on first load
  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, []); // Only run once on component mount

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="bg-ellipse-1"></div>
        <div className="bg-ellipse-2"></div>
        <div className="bg-ellipse-3"></div>
        
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
              <SearchBar 
                onSearch={handleSearch} 
                initialValue={initialQuery} 
                loading={loading}
              />
            </div>
            
            <SearchResults 
              query={currentQuery} 
              apiResult={result} 
              apiLoading={loading} 
              apiError={error} 
              onAnalyze={() => analyzeCase(currentQuery)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;