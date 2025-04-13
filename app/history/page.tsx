"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { HistoryCard } from "@/components/HistoryCard";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Clock, Trash } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

interface HistoryItem {
  id: number;
  query: string;
  timestamp: string;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  };

  const deleteHistoryItem = (id: number) => {
    const newHistory = history.filter(item => item.id !== id);
    setHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    toast({
      title: "History Deleted",
      description: "The search has been removed from your history.",
    });
  };

  const clearAllHistory = () => {
    localStorage.removeItem("searchHistory");
    setHistory([]);
    setIsDialogOpen(false);
    toast({
      title: "History Cleared",
      description: "All search history has been cleared.",
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="bg-ellipse-1"></div>
      <div className="bg-ellipse-2"></div>
      <div className="bg-ellipse-3"></div>
      
        <div className="flex-1 overflow-y-auto">
          <div className="container px-6 py-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-justice-navy mb-1">Search History</h1>
                <p className="text-gray-600">Your recent legal queries</p>
              </div>
              
              {history.length > 0 && (
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="text-justice-crimson">
                      <Trash className="mr-2 h-4 w-4" />
                      Clear All
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Clear All History</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to clear all your search history?
                        This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={clearAllHistory}
                        className="bg-justice-crimson hover:bg-justice-crimson/90"
                      >
                        Clear All
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
            
            {history.length > 0 ? (
              <div>
                {history.map(item => (
                  <HistoryCard
                    key={item.id}
                    item={item}
                    onDelete={deleteHistoryItem}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-justice-lightBlue p-8 rounded-full inline-block mb-4">
                  <Clock className="h-12 w-12 text-justice-navy" />
                </div>
                <h2 className="text-xl font-semibold mb-2">No Search History</h2>
                <p className="text-gray-600 mb-6">
                  You have not made any searches yet. Start by searching for legal information.
                </p>
                <Button asChild>
                    <Link href={"/"}>Go to Search</Link>
        
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
