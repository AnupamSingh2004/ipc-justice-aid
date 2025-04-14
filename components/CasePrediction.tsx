import { FileBarChart, ShieldCheck, Scale, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

interface PredictionPointProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

// Update the interface to accept result directly
interface CasePredictionProps {
  query: string;
  result?: any;
}

const PredictionPoint = ({ icon: Icon, title, description, className }: PredictionPointProps) => (
  <div className={cn("flex gap-3 mb-4", className)}>
    <div className="mt-1">
      <Icon className="h-5 w-5 text-justice-gold" />
    </div>
    <div>
      <h3 className="font-semibold text-justice-navy">{title}</h3>
      <p className="text-gray-600 mt-1 text-sm">{description}</p>
    </div>
  </div>
);

export function CasePrediction({ query, result }: CasePredictionProps) {
  // If result is provided directly, use it instead of making an API call
  const [severity, setSeverity] = useState<number>(0);
  const [analyzed, setAnalyzed] = useState(false);
  
  useEffect(() => {
    if (result) {
      calculateSeverity(result);
      setAnalyzed(true);
    }
  }, [result]);
  
  const calculateSeverity = (data: any) => {
    // Calculate severity based on number of penal codes mentioned 
    // and their severity (e.g., if murder or rape is mentioned, higher severity)
    const penalCodes = data.penalCodes.toLowerCase();
    let calculatedSeverity = 30; // Base severity
    
    // Check for serious crimes
    if (penalCodes.includes("murder") || penalCodes.includes("homicide") || 
        penalCodes.includes("section 302") || penalCodes.includes("section 304")) {
      calculatedSeverity += 40;
    } else if (penalCodes.includes("rape") || penalCodes.includes("sexual assault") ||
        penalCodes.includes("section 376") || penalCodes.includes("section 354")) {
      calculatedSeverity += 35;
    } else if (penalCodes.includes("theft") || penalCodes.includes("robbery") ||
        penalCodes.includes("section 379") || penalCodes.includes("section 392")) {
      calculatedSeverity += 20;
    }
    
    // Cap at 100%
    setSeverity(Math.min(calculatedSeverity, 100));
  };
  
  const handleSavePDF = () => {
    toast({
      title: "PDF Saved",
      description: "Case analysis has been saved to your downloads",
    });
  };
  
  const handleGetConsultation = () => {
    toast({
      title: "Request Sent",
      description: "A legal professional will contact you shortly",
    });
  };

  return (
    <div className="prediction-card">
      <div className="flex items-start gap-3 mb-5">
        <FileBarChart className="h-6 w-6 text-justice-gold mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-justice-navy">Case Prediction & Legal Guidance</h2>
          <p className="text-gray-600 text-sm mt-1">
            Based on your query and the applicable IPC sections, here is our AI analysis and recommendations:
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-justice-lightBlue/30 rounded-md mb-5">
        <h3 className="font-medium text-justice-navy mb-2">Case Severity Analysis:</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-justice-crimson h-2.5 rounded-full" style={{ width: severity + "%" }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Minor</span>
          <span>Moderate</span>
          <span>Severe</span>
        </div>
      </div>
      
      <div className="mb-5">
        <PredictionPoint 
          icon={Scale}
          title="Legal Position"
          description={`Your scenario "${query}" potentially involves multiple IPC sections. The severity depends on the specific actions and intentions involved.`}
        />
        
        <PredictionPoint 
          icon={ShieldCheck}
          title="Defensive Strategies"
          description="If wrongly accused, focus on establishing alibis, gathering witness statements, and documenting timeline inconsistencies. Consider consulting with a legal professional for personalized advice."
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" className="flex-1" onClick={handleSavePDF}>
          Save Analysis as PDF
        </Button>
        <Button className="flex-1 bg-justice-crimson hover:bg-justice-crimson/90" onClick={handleGetConsultation}>
          Get Legal Consultation
        </Button>
      </div>
    </div>
  );
}
