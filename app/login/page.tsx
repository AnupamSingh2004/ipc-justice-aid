'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '@/contexts/AuthContext';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gavel } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const { login, googleLogin, loading, error } = useAuth();
  const router = useRouter();

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (!email || !password) {
      setFormError('Email and password are required');
      return;
    }
    
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Background Ellipses */}
      <div className="bg-ellipse-1"></div>
      <div className="bg-ellipse-2"></div>
      <div className="bg-ellipse-3"></div>
      
      <div className="w-full max-w-md p-6 animate-fade-in">
        <div className="text-center mb-6">
          <Gavel className="h-12 w-12 mx-auto mb-2 text-blue-900 dark:text-amber-400" />
          <h1 className="text-2xl font-bold text-blue-900 dark:text-white">IPC Justice Aid</h1>
        </div>
        
        <Card className="justice-card border-blue-900 dark:border-amber-400 border-l-0 border-t-0 border-r-0 border-b-0">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-xl font-bold text-center text-blue-900 dark:text-amber-400">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {(formError || error) && (
                <div className="p-3 rounded bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200 text-sm mb-4 border border-red-200 dark:border-red-800/50">
                  {formError || error}
                </div>
              )}
              
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-700"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-gray-900"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200 dark:border-gray-700"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <Button
                type="button"
                variant="outline"
                onClick={googleLogin}
                className="w-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <FcGoogle className="mr-2 h-5 w-5" />
                Google
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 w-full">
              Do not have an account?{' '}
              <Link href="/register" className="text-blue-900 dark:text-amber-400 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}