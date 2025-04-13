"use client";
import { Bell, User, BookOpen, LogOut, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { useTheme } from "@/lib/theme/ThemeContent";
import { LanguageSelector } from "@/components/LanguageSelector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const handleNotificationClick = () => {
    toast({
      title: t("action.notifications"),
      description: "You have no new notifications",
    });
  };

  return (
    <div className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex items-center justify-between px-4 sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-semibold dark:text-white">{t("app.name") || "IPC Justice Aid"}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Language selector */}
        <LanguageSelector />
        
        {/* Document icon */}
        <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400">
          <BookOpen size={20} />
        </Button>
        
        {/* Notification bell */}
        <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400" onClick={handleNotificationClick}>
          <Bell size={20} />
        </Button>
        
        {/* User profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 dark:bg-gray-800">
              <User size={20} className="text-gray-700 dark:text-gray-300" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{t("action.profile") || "Profile"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {t("action.profile") || "Profile"}
            </DropdownMenuItem>
            <DropdownMenuItem>
              {t("action.settings") || "Settings"}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="h-4 w-4 mr-2" />
              {t("action.logout") || "Logout"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Theme toggle - Connected to theme context */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-600 dark:text-gray-400"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </Button>
        
        {/* Sign in button */}
        <Button asChild variant="outline" size="sm" className="border-gray-300 dark:border-gray-700 dark:text-white">
          <Link href="/auth/signin">
          {t("auth.signIn") || "Sign In"}
          </Link>
        </Button>
      </div>
    </div>
  );
}