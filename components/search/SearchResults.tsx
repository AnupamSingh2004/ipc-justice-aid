
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ResultCard } from "@/components/ResultCard";
import { CasePrediction } from "@/components/CasePrediction";
import { ResultsSummary } from "@/components/search/ResultsSummary";
import { LegalAnalysis } from "@/components/search/LegalAnalysis";
import { ResultsEmpty } from "@/components/search/ResultsEmpty";
import { ResultsDisclaimer } from "@/components/search/ResultsDisclaimer";
import { ipcSections, IPCSection } from "@/lib/ipcData";
import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface SearchResult extends IPCSection {
  relevance: "high" | "medium" | "low";
  score?: number; // Added for sorting only
}

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  useEffect(() => {
    if (query) {
      // Simulate API call with a delay
      setLoading(true);
      setTimeout(() => {
        const searchResults = searchIPCSections(query);
        setResults(searchResults);
        setLoading(false);
      }, 1000);
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  // Mock search function
  const searchIPCSections = (query: string): SearchResult[] => {
    const searchTerms = query.toLowerCase().split(" ");
    
    return ipcSections
      .map(section => {
        // Calculate relevance score
        let score = 0;
        
        // Check title matches
        searchTerms.forEach(term => {
          if (section.title.toLowerCase().includes(term)) {
            score += 3;
          }
        });
        
        // Check tag matches
        section.tags.forEach(tag => {
          if (searchTerms.some(term => tag.toLowerCase().includes(term))) {
            score += 2;
          }
        });
        
        // Check description matches
        searchTerms.forEach(term => {
          if (section.description.toLowerCase().includes(term)) {
            score += 1;
          }
        });
        
        // Determine relevance based on score
        let relevance: "high" | "medium" | "low" = "low";
        if (score >= 5) relevance = "high";
        else if (score >= 2) relevance = "medium";
        
        return {
          ...section,
          relevance,
          score // for sorting
        };
      })
      .filter(section => section.score > 0) // Only include sections with some relevance
      .sort((a, b) => b.score - a.score) // Sort by relevance score
      .map(({  ...rest }) => rest); // Remove the score property from results
  };

  const getRelevantSectionCounts = () => {
    const high = results.filter(r => r.relevance === "high").length;
    const medium = results.filter(r => r.relevance === "medium").length;
    const low = results.filter(r => r.relevance === "low").length;
    return { high, medium, low };
  };

  const counts = getRelevantSectionCounts();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-justice-navy/20 rounded-full mb-4"></div>
          <div className="h-6 bg-justice-navy/20 rounded w-48 mb-2"></div>
          <div className="h-4 bg-justice-navy/20 rounded w-64"></div>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return <ResultsEmpty />;
  }

  return (
    <div className={cn(isMobile ? "px-2 max-w-full" : "px-6 max-w-5xl mx-auto")}>
      <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t("nav.back")}
      </Button>
      
      <div className="mb-6">
        <h1 className={cn("font-bold text-justice-navy mb-2", isMobile ? "text-xl" : "text-2xl")}>
          {t("results.title")}
        </h1>
        <p className="text-gray-600">
          {t("results.showing")} <span className="font-medium">{query}</span>
        </p>
      </div>
      
      <ResultsSummary 
        totalResults={results.length}
        highCount={counts.high}
        mediumCount={counts.medium}
        lowCount={counts.low}
      />
      
      <LegalAnalysis query={query} />
      
      <CasePrediction />
      
      {results.length > 0 && (
        <div className="mb-6">
          <h2 className={cn("font-semibold text-justice-navy mb-4", isMobile ? "text-lg" : "text-xl")}>
            {t("results.sections")}
          </h2>
          <div className={cn("grid gap-4", isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-1")}>
            {results.map((result) => (
              <ResultCard
                key={result.section}
                section={result.section}
                title={result.title}
                description={result.description}
                punishment={result.punishment}
                relevance={result.relevance}
              />
            ))}
          </div>
        </div>
      )}
      
      <ResultsDisclaimer />
    </div>
  );
}
