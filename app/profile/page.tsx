'use client';

import { useAuth } from '@/contexts/AuthContext';
import { UserProfile } from '@/components/UserProfile';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  const { t } = useTranslation();
  
  if (!user) {
    // Redirect if not logged in
    router.push('/login');
    return null;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Background Ellipses */}
      <div className="bg-ellipse-1"></div>
      <div className="bg-ellipse-2"></div>
      <div className="bg-ellipse-3"></div>
      
      <div className="container max-w-4xl p-4 animate-fade-in">
        <Button 
          variant="ghost" 
          className="mb-4 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          {t("action.back") || "Back"}
        </Button>
        
        <h1 className="text-2xl font-bold mb-6 text-blue-900 dark:text-amber-400">
          {t("profile.title") || "User Profile"}
        </h1>
        
        <div className="w-full max-w-xl mx-auto">
          <UserProfile />
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>{t("profile.privacyNotice") || "Your profile information is stored securely and not shared with third parties."}</p>
        </div>
      </div>
    </div>
  );
}