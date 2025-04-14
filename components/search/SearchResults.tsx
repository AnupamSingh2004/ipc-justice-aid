"use client";
import { useState, useEffect } from "react";
import { CasePrediction } from "@/components/CasePrediction";
import { LawSection } from "@/components/LawSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, BookOpen, Search, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

interface SearchResultsProps {
  query: string;
  apiResult?: any;
  apiLoading?: boolean;
  apiError?: string | null;
  onAnalyze?: () => void;
}

export function SearchResults({ 
  query, 
  apiResult, 
  apiLoading = false, 
  apiError = null,
  onAnalyze
}: SearchResultsProps) {
  const [hasSearched, setHasSearched] = useState(false);
  const { t } = useTranslation();
  
  // Track if we have results
  useEffect(() => {
    if (apiResult) {
      setHasSearched(true);
    }
  }, [apiResult]);
  
  // Extract relevant sections from the API response if available
  const extractSections = () => {
    if (!apiResult?.penalCodes) return [];
    
    const penalCodesText = apiResult.penalCodes;
    const sections = [];
    
    // Simple regex to find section numbers and titles
    const sectionMatches = penalCodesText.match(/Section (\d+[A-Z]*):\s*([^\n-]*)(?:-|–|\(|$)/g);
    
    if (sectionMatches) {
      sectionMatches.forEach(match => {
        const numMatch = match.match(/Section (\d+[A-Z]*):/);
        const titleMatch = match.match(/Section \d+[A-Z]*:\s*([^\n-]*)(?:-|–|\(|$)/);
        
        if (numMatch && titleMatch) {
          const sectionNum = numMatch[1];
          const sectionTitle = titleMatch[1].trim();
          
          // Find the description for this section
          const descRegex = new RegExp(`Section ${sectionNum}[:\\s].*?\\n(.*?)(?=\\n\\n|\\nApplication|\\nPenalties|$)`, 's');
          const descMatch = penalCodesText.match(descRegex);
          
          // Find penalties for this section
          const penaltyRegex = new RegExp(`Penalties:[\\s\\n]*(.*?)(?=\\n\\n|$)`, 's');
          const penaltyMatch = penalCodesText.match(penaltyRegex);
          
          sections.push({
            section: sectionNum,
            title: sectionTitle,
            description: descMatch ? descMatch[1].trim() : "No description available",
            punishment: penaltyMatch ? penaltyMatch[1].trim() : undefined,
            related: ["354", "376", "509"] // Default related sections
          });
        }
      });
    }
    
    return sections;
  };
  
  if (!query) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h2 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
          {t("search.empty.title") || "Search for legal guidance"}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          {t("search.empty.description") || "Enter a legal scenario, IPC section, or keywords to get started"}
        </p>
      </div>
    );
  }
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-900 dark:text-amber-400 mb-1">
          {t("search.results.title") || "Search Results"}
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-gray-600 dark:text-gray-300">
            {t("search.results.description") || "Showing information for:"} <span className="font-medium">{query}</span>
          </p>
          
          {!apiLoading && onAnalyze && (
            <Button 
              onClick={onAnalyze}
              className="bg-blue-900 hover:bg-blue-800 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900"
              disabled={apiLoading}
            >
              <Search className="h-4 w-4 mr-2" />
              {hasSearched ? "Re-analyze" : "Analyze"}
            </Button>
          )}
        </div>
      </div>
      
      {apiError && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg mb-6 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>{apiError}</p>
        </div>
      )}
      
      <Tabs defaultValue="analysis" className="w-full">
        <TabsList className="grid grid-cols-2 max-w-md mb-6">
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            <span>{t("search.tabs.analysis") || "Legal Analysis"}</span>
          </TabsTrigger>
          <TabsTrigger value="sections" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>{t("search.tabs.sections") || "IPC Sections"}</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="analysis" className="mt-0">
          {apiLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : (
            <>
              {!hasSearched ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
                  <Scale className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h2 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
                    Ready to analyze your case
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                    Click the Analyze button to get detailed legal insights about your case
                  </p>
                  {onAnalyze && (
                    <Button 
                      onClick={onAnalyze}
                      className="bg-blue-900 hover:bg-blue-800 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Analyze Now
                    </Button>
                  )}
                </div>
              ) : (
                <CasePrediction query={query} result={apiResult} />
              )}
            </>
          )}
        </TabsContent>
        
        <TabsContent value="sections" className="mt-0">
          {apiLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          ) : (
            <ScrollArea className="h-[600px] pr-4">
              {hasSearched && apiResult ? (
                // Use sections extracted from API response if available
                extractSections().length > 0 ? (
                  extractSections().map(section => (
                    <LawSection
                      key={section.section}
                      section={section.section}
                      title={section.title}
                      description={section.description}
                      related={section.related}
                      query={query}
                    />
                  ))
                ) : (
                  // Fallback to hardcoded sections if extraction fails
                  <>
                    <LawSection
                      section="375"
                      title="Rape"
                      description="Whoever, except in the cases hereinafter excepted, has sexual intercourse with a woman under circumstances falling under any of the following descriptions..."
                      related={["376", "354", "509"]}
                      query={query}
                    />
                    <LawSection
                      section="376"
                      title="Punishment for rape"
                      description="Whoever commits rape shall be punished with imprisonment of either description for a term which shall not be less than seven years but which may be for life or for a term which may extend to ten years..."
                      related={["375", "354A", "509"]}
                      query={query}
                    />
                  </>
                )
              ) : (
                // Display default sections if not yet searched
                <>
                  <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/30 rounded-lg mb-4">
                    <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h2 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Find relevant IPC sections
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                      Click the Analyze button to identify relevant IPC sections for your case
                    </p>
                    {onAnalyze && (
                      <Button 
                        onClick={onAnalyze}
                        className="bg-blue-900 hover:bg-blue-800 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900"
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Analyze Now
                      </Button>
                    )}
                  </div>
                </>
              )}
            </ScrollArea>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
