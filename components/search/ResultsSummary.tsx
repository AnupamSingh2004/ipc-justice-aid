
import { FileText } from "lucide-react";

interface ResultsSummaryProps {
  totalResults: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

export function ResultsSummary({ totalResults, highCount, mediumCount, lowCount }: ResultsSummaryProps) {
  return (
    <div className="premium-card mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg text-justice-navy">
            <FileText className="inline mr-2 h-5 w-5" />
            Search Summary
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Found {totalResults} relevant IPC sections
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-justice-crimson">{highCount}</div>
            <div className="text-xs text-gray-500">High Relevance</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-justice-navy">{mediumCount}</div>
            <div className="text-xs text-gray-500">Medium Relevance</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-500">{lowCount}</div>
            <div className="text-xs text-gray-500">Low Relevance</div>
          </div>
        </div>
      </div>
    </div>
  );
}
