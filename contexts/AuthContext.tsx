'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from "@/types/user";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  googleLogin: () => void;
  logout: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (err) {
        console.error("Auth check error:", err);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }
      
      setUser(data.user);
      
      // Redirect to home page after successful login
      window.location.href = '/';
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name?: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }
      
      // Auto login after registration
      await login(email, password);
      
      // Redirect happens in the login function
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = () => {
    try {
      window.location.href = '/api/auth/google';
    } catch (err) {
      console.error('Failed to initiate Google login:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to initiate Google login';
      setError(errorMessage);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Logout failed');
      }
      
      setUser(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Logout failed';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  // Wait until we've checked auth status before rendering children
  if (!initialized && loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        googleLogin,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}