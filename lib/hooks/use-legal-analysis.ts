import { useState } from "react";

interface LegalAnalysisResult {
  penalCodes: string;
  defense: string;
}

export function useLegalAnalysis() {
  const [result, setResult] = useState<LegalAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeCase = async (prompt: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/legal-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze case");
      }

      const data = await response.json();
      setResult(data);
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    result,
    loading,
    error,
    analyzeCase,
  };
}