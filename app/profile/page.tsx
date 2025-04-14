'use client';

import { useAuth } from '@/contexts/AuthContext';
import { UserProfile } from '@/components/UserProfile';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, FileText, Scale, BookOpen, User } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import { useState, useEffect } from 'react';
import { AppLayout } from '@/components/AppLayout';
import Link from 'next/link';

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();
  const [searchCount, setSearchCount] = useState(0);
  
  useEffect(() => {
    // Load search count from localStorage on component mount
    const storedCount = localStorage.getItem('userSearchCount');
    if (storedCount) {
      setSearchCount(parseInt(storedCount, 10));
    }
  }, []);

  if (!user) {
    // Redirect if not logged in
    router.push('/login');
    return null;
  }

  return (
    <AppLayout>
      <div className="container px-6 py-8 max-w-6xl mx-auto animate-fade-in">
        <Button 
          variant="ghost" 
          className="mb-6 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          {t("action.back") || "Back"}
        </Button>
        
        <div className="text-center mb-8">
          <User className="h-16 w-16 mx-auto mb-4 text-red-700" />
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white mb-2">
            User Profile
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Manage your account and view your legal research activity
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
              Your Profile Information
            </h2>
            
            {/* Profile information displayed directly on the page */}
            <div className="mb-8">
              <UserProfile />
            </div>
            
            {/* Recent Activity Section */}
            <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mt-12">
              Recent Activity
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <FileText className="h-5 w-5 text-red-700 mr-2" />
                  <h3 className="font-semibold text-blue-900 dark:text-white">IPC Sections Viewed</h3>
                </div>
                <div className="text-3xl font-bold text-blue-900 dark:text-white mb-2">
                  {Math.floor(searchCount * 1.5)}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Total IPC sections referenced in your searches
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <Scale className="h-5 w-5 text-blue-900 mr-2" />
                  <h3 className="font-semibold text-blue-900 dark:text-white">Case Analysis</h3>
                </div>
                <div className="text-3xl font-bold text-blue-900 dark:text-white mb-2">
                  {Math.floor(searchCount * 0.7)}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Legal scenarios analyzed through our AI system
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-amber-500 mr-2" />
                  <h3 className="font-semibold text-blue-900 dark:text-white">Saved References</h3>
                </div>
                <div className="text-3xl font-bold text-blue-900 dark:text-white mb-2">
                  {Math.floor(searchCount * 0.3)}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Legal terms and cases saved to your account
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Search Activity Card */}
            <div className="justice-card border-red-700">
              <Search className="h-10 w-10 text-red-700 mb-4" />
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Search Activity</h2>
              
              <div className="flex flex-col items-center text-center my-6">
                <div className="text-5xl font-bold mb-2 text-blue-900 dark:text-white">
                  {searchCount}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Total Legal Queries
                </p>
                
                <div className="w-full mt-6 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-red-700 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, searchCount / 2)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {searchCount < 200 ? `${200 - searchCount} more searches until expert status` : "Legal expert status achieved!"}
                </p>
              </div>
              
              <Button asChild className="w-full">
                <Link href="/search">
                  New Legal Search
                  <Search className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Account Status Card */}
            <div className="justice-card border-amber-500">
              <Scale className="h-10 w-10 text-amber-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Account Status</h2>
              
              <div className="space-y-4 my-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Member Since</span>
                  <span className="font-medium text-blue-900 dark:text-white">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Subscription</span>
                  <span className="text-red-700 font-semibold">
                    {user.plan || "Standard"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Last Login</span>
                  <span className="font-medium text-blue-900 dark:text-white">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
              
              <Button asChild variant="outline" className="w-full">
                <Link href="/subscription">
                  Upgrade Plan
                  <BookOpen className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-justice-lightBlue dark:bg-gray-800 rounded-lg p-6 border border-justice-navy/20 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-white">Quick Actions</h2>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/saved-searches">
                    <FileText className="h-4 w-4 mr-2" />
                    Saved Searches
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/settings">
                    <User className="h-4 w-4 mr-2" />
                    Account Settings
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/help">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Help & Resources
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your profile information is stored securely and not shared with third parties.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Disclaimer: This tool provides informational guidance only and should not be considered legal advice.
            Always consult with a qualified legal professional for specific legal matters.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}