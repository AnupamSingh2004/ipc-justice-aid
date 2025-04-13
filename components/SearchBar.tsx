"use client";

import { useState } from "react";
// Remove direct useNavigate import and use alternative approach
import { useRouter } from "next/navigation"; // For Next.js
// Or if using react-router with proper context
// import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface SearchBarProps {
  large?: boolean;
  placeholder?: string;
}

export function SearchBar({ large = false, placeholder = "Search for legal queries..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  // Use Next.js router instead
  const router = useRouter();
  // Or if you need to ensure Router context:
  // const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Empty Search",
        description: "Please enter a search query",
        variant: "destructive",
      });
      return;
    }
    
    // Store in local history
    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    const newSearch = {
      id: Date.now(),
      query: query.trim(),
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem("searchHistory", JSON.stringify([newSearch, ...history].slice(0, 20)));
    
    // Use Next.js router.push instead of navigate
    router.push(`/results?q=${encodeURIComponent(query.trim())}`);
    // Or if using react-router with proper context:
    // navigate(`/results?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSearch} className={`search-container ${large ? "mt-8 mb-12" : "my-4"}`}>
      <div className="relative w-full flex items-center">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`pr-12 pl-4 ${large ? "h-14 text-lg" : "h-10"} w-full rounded-md border border-input shadow-sm focus-visible:ring-2`}
        />
        <Button 
          type="submit"
          size={large ? "lg" : "default"}
          className="absolute right-0 rounded-l-none"
        >
          <Search className="mr-2" size={18} />
          Search
        </Button>
      </div>
    </form>
  );
}