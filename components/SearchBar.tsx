"use client";
import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface SearchBarProps {
  onSearch: (query: string) => void | Promise<void>;
  initialValue?: string;
  large?: boolean;
  placeholder?: string;
  loading?: boolean;
}

export function SearchBar({ 
  onSearch, 
  initialValue = "", 
  large = false, 
  placeholder,
  loading = false
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const { t } = useTranslation();
  
  // Update internal state when initialValue prop changes
  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);
  
  const defaultPlaceholder = t("search.placeholder") || "Search by legal scenario, IPC section, or keywords...";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from causing page reload
    
    if (query.trim()) {
      onSearch(query.trim());
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={cn(
        "flex items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden",
        "bg-white dark:bg-gray-800 shadow-sm transition-all",
        large ? "h-14" : "h-10"
      )}>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder || defaultPlaceholder}
          className={cn(
            "flex-1 border-0 h-full focus:ring-0",
            "bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
            large && "text-lg"
          )}
          disabled={loading}
        />
        <Button 
          type="submit" 
          variant="ghost" 
          size={large ? "lg" : "default"}
          className={cn(
            "px-3 text-gray-400 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700",
            "border-l border-gray-200 dark:border-gray-700 rounded-none h-full min-w-[56px]"
          )}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>
      </div>
    </form>
  );
}