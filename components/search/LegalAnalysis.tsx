
import { FilePenLine } from "lucide-react";

interface LegalAnalysisProps {
  query: string;
}

export function LegalAnalysis({ query }: LegalAnalysisProps) {
  return (
    <div className="premium-card mb-6">
      <div className="flex items-start gap-3">
        <FilePenLine className="h-6 w-6 text-justice-crimson mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-justice-navy">Legal Analysis</h2>
          <p className="text-gray-700 mt-2">
            Based on your query "{query}", the search has identified several sections of the Indian Penal Code that may be relevant. 
            The sections with high relevance are most likely to apply to your scenario, but please review all results for a complete understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
