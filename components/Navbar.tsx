"use client";
import { Bell, User, BookOpen, LogOut, Moon, Sun, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { useTheme } from "@/lib/theme/ThemeContent";
import { useAuth } from "@/contexts/AuthContext";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Navbar() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleNotificationClick = () => {
    toast({
      title: t("action.notifications"),
      description: "You have no new notifications",
    });
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again."+error,
        variant: "destructive",
      });
    }
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.name) return "U";
    return user.name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
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
        
        {/* Theme toggle */}
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
        
        {/* User profile or Sign in button based on auth state */}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 p-0">
                <Avatar>
                  <AvatarFallback className="bg-blue-900 text-white dark:bg-amber-500 dark:text-gray-900">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User className="h-4 w-4 mr-2" />
                  {t("action.profile") || "Profile"}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="h-4 w-4 mr-2" />
                  {t("action.settings") || "Settings"}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                {t("action.logout") || "Logout"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild variant="outline" size="sm" className="border-gray-300 dark:border-gray-700 dark:text-white">
            <Link href="/login">
              {t("auth.signIn") || "Sign In"}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}