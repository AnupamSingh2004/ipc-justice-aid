"use client";

import { AppLayout } from "@/components/AppLayout";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Scale } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <AppLayout>
      <div className="container px-6 py-8 max-w-6xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <Scale className="h-16 w-16 mx-auto mb-4 text-red-700" />
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white mb-2">
            IPC AI Justice Aid
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Instant legal guidance through Indian Penal Code using AI assistance
          </p>
        </div>
        
        <SearchBar large placeholder="Describe a legal scenario or enter keywords..." />
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="justice-card border-red-700">
            <FileText className="h-10 w-10 text-red-700 mb-4" />
            <h2 className="text-xl font-semibold mb-2 dark:text-white">IPC Sections</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Access and search through all sections of the Indian Penal Code with detailed explanations.
            </p>
            <Button asChild className="w-full">
              <Link href="/search">
                Browse IPC Sections
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="justice-card border-blue-900">
            <Scale className="h-10 w-10 text-blue-900 mb-4" />
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Legal Analysis</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get AI-powered analysis of your legal scenarios and understand applicable IPC sections.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/search">
                Analyze Your Case
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="justice-card border-amber-500">
            <BookOpen className="h-10 w-10 text-amber-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Learn Legal Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Understand legal terminology and concepts with simple explanations and examples.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/about">
                Legal Dictionary
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 bg-justice-lightBlue dark:bg-gray-800 rounded-lg p-6 border border-justice-navy/20 dark:border-gray-700">
          <h2 className="justice-header dark:text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-justice-navy dark:text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Describe Your Scenario</h3>
              <p className="text-gray-600 dark:text-gray-300">Enter details about your legal question or situation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-justice-navy dark:text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">Our AI identifies relevant IPC sections and legal principles</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-justice-navy dark:text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Get Legal Guidance</h3>
              <p className="text-gray-600 dark:text-gray-300">Review applicable laws and understand your legal position</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Disclaimer: This tool provides informational guidance only and should not be considered legal advice.
            Always consult with a qualified legal professional for specific legal matters.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
