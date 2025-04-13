import { useState } from "react";
import { useRouter } from "next/navigation"; // Changed from React Router
import { Clock, Search, Trash } from "lucide-react";
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

interface HistoryItem {
  id: number;
  query: string;
  timestamp: string;
}

interface HistoryCardProps {
  item: HistoryItem;
  onDelete: (id: number) => void;
}

export function HistoryCard({ item, onDelete }: HistoryCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter(); // Using Next.js router
  
  const formattedDate = new Date(item.timestamp).toLocaleString();
  
  const handleSearch = () => {
    router.push(`/results?q=${encodeURIComponent(item.query)}`);
  };
  
  const handleDelete = () => {
    onDelete(item.id);
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium text-lg text-justice-navy dark:text-gray-100">{item.query}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
            <Clock size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="text-justice-navy dark:text-gray-200"
            onClick={handleSearch}
          >
            <Search size={16} className="mr-1" />
            Search Again
          </Button>
          
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-justice-crimson dark:hover:text-red-400">
                <Trash size={16} />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Search History</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this search from your history? 
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} className="bg-justice-crimson hover:bg-justice-crimson/90">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
