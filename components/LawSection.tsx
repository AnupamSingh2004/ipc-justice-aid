import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scroll, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LawSectionProps {
  section: string;
  title: string;
  description: string;
  related: string[];
  query: string;
}

export function LawSection({ section, title, description, related, query }: LawSectionProps) {
  // Function to highlight matching text in the description
  const highlightMatches = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? 
            <span key={i} className="bg-yellow-200 dark:bg-amber-900">{part}</span> : part
        )}
      </>
    );
  };

  // Check if the section is relevant to the query
  const isRelevant = query && (
    section.toLowerCase().includes(query.toLowerCase()) ||
    title.toLowerCase().includes(query.toLowerCase()) ||
    description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card 
      className={cn(
        "mb-4 transition-all duration-200 hover:shadow-md",
        isRelevant ? "border-blue-600 dark:border-amber-500" : "border-gray-200 dark:border-gray-700"
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-amber-900/30 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:text-amber-400">
                Section {section}
              </span>
              {isRelevant && (
                <span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">
                  Relevant
                </span>
              )}
            </div>
            <CardTitle className="mt-2 text-lg text-blue-900 dark:text-amber-400">{highlightMatches(title, query)}</CardTitle>
          </div>
          <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-700 dark:hover:text-amber-400">
            <Scroll className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {highlightMatches(description, query)}
      </CardContent>
      
      <CardFooter className="flex flex-col items-start pt-0">
        <div className="w-full">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Related Sections:</p>
          <div className="flex flex-wrap gap-2">
            {related.map((relatedSection) => (
              <Button key={relatedSection} variant="outline" size="sm" className="text-xs py-0 h-7">
                Section {relatedSection}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end mt-3">
          <Button variant="link" size="sm" className="text-blue-600 dark:text-amber-400 p-0 h-auto text-xs flex items-center">
            View Full Section <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}