'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getThemeClasses } from '@/lib/theme';
import { UserProfile } from '@/components/UserProfile';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);
  
  const themeClasses = getThemeClasses(darkMode);

  if (!user) {
    // Redirect if not logged in
    router.push('/login');
    return null;
  }

  return (
    <div className={`flex flex-col items-center min-h-screen ${themeClasses.bgMain}`}>
      <div className="container max-w-4xl p-4">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => router.back()}
        >
          <FiArrowLeft className="mr-2" /> Back
        </Button>
        
        <h1 className={`text-2xl font-bold mb-6 ${themeClasses.textColor}`}>
          User Profile
        </h1>
        
        <div className="w-full max-w-xl mx-auto">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}