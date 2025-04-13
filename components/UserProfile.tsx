'use client';

import { useAuth } from '@/contexts/AuthContext';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { LogOut, Mail, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { User } from '@/types/user';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export function UserProfile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const { t } = useTranslation();

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  // Format date if available
  const formatDate = (dateString?: string | Date | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Use the first available date property for member since date
  const getMemberSinceDate = (user: User) => {
    return user.createdAt || user.created_at || user.registrationDate || null;
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
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-blue-900 dark:text-amber-400">{t("profile.title") || "User Profile"}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6 py-6">
        <Avatar className="h-24 w-24 border-2 border-blue-900/50 dark:border-amber-400/50">
          <AvatarFallback className="bg-blue-900 text-white dark:bg-amber-500 dark:text-gray-900 text-2xl font-bold">
            {getUserInitials()}
          </AvatarFallback>
        </Avatar>
        
        <div className="text-center space-y-1">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {user.name || 'User'}
          </h3>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
            <Mail className="mr-2 h-4 w-4" />
            {user.email}
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="mr-2 h-4 w-4" />
            {t("profile.memberSince") || "Member since"}: {formatDate(getMemberSinceDate(user))}
          </div>
        </div>
        
        <div className="w-full max-w-md pt-4">
          <div className="grid grid-cols-1 gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile.email") || "Email"}</h4>
              <p className="text-gray-900 dark:text-white">{user.email}</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile.name") || "Name"}</h4>
              <p className="text-gray-900 dark:text-white">{user.name || 'Not provided'}</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile.lastLogin") || "Last Login"}</h4>
              <p className="text-gray-900 dark:text-white">{formatDate(user.lastLogin)}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-200 dark:border-gray-700 justify-center">
        <Button 
          variant="outline" 
          className="mt-4 text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {t("auth.signOut") || "Sign Out"}
        </Button>
      </CardFooter>
    </Card>
  );
}