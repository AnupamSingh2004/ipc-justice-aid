
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function ResultsEmpty() {
  return (
    <div className="text-center py-12">
      <div className="premium-card p-8 inline-block mb-4">
        <FileText className="h-12 w-12 text-justice-navy mx-auto mb-2" />
      </div>
      <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        We couldn't find any IPC sections matching your search. Try using different keywords or a more general search term.
      </p>
      <Button onClick={() => window.history.back()}>
        Try Another Search
      </Button>
    </div>
  );
}
