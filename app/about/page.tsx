
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HelpCircle, Scale } from "lucide-react";

const About = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        
        <div className="flex-1 overflow-y-auto">
          <div className="container px-6 py-8 max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <Scale className="h-16 w-16 mx-auto mb-4 text-justice-crimson" />
              <h1 className="justice-header">About IPC AI Justice Aid</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bridging the gap between legal complexity and public understanding
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h2 className="text-xl font-semibold text-justice-navy mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  We aim to make the Indian Penal Code more accessible to everyone. Legal language can be complex and intimidating, 
                  creating barriers for people seeking to understand their rights and responsibilities under the law.
                </p>
                <p className="text-gray-700">
                  IPC AI Justice Aid uses artificial intelligence to help interpret legal queries in plain language, 
                  connecting users with relevant sections of the IPC and explaining legal concepts in simple terms.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h2 className="text-xl font-semibold text-justice-navy mb-4">How to Use This Tool</h2>
                <p className="text-gray-700 mb-4">
                  Simply describe your legal question or situation in everyday language. Our AI will analyze your query
                  and identify the most relevant sections of the Indian Penal Code that apply to your situation.
                </p>
                <p className="text-gray-700">
                  You will receive information about applicable laws, including their descriptions and potential penalties,
                  helping you better understand the legal framework surrounding your query.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-justice-navy mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="bg-white rounded-lg border border-border">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">Is this a substitute for legal advice?</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    No. IPC AI Justice Aid is an educational tool designed to help you understand legal concepts and relevant IPC sections. 
                    It does not provide personalized legal advice. For specific legal situations, you should consult with a qualified legal professional.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6">How accurate is the information provided?</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    We strive to provide accurate information based on the current Indian Penal Code. However, laws can be complex and subject to interpretation.
                    The tool provides a starting point for understanding, but should not be the sole source of information for legal decisions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6">Is my search data private?</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    Yes. Your search history is stored locally on your device and is not sent to any external servers.
                    You can clear your search history at any time from the History page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6">Can I use this for legal research?</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                    This tool can be a helpful starting point for basic legal research and understanding, but for professional
                    legal research, we recommend using comprehensive legal databases and consulting legal literature.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-justice-lightBlue p-6 rounded-lg border border-justice-navy/20 mb-8">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-justice-navy mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-justice-navy mb-2">Important Disclaimer</h2>
                  <p className="text-gray-700">
                    This application provides information about the Indian Penal Code for educational purposes only. 
                    It is not a substitute for professional legal advice. Laws are subject to change and interpretation, 
                    and the information provided may not reflect the most current legal developments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <BookOpen className="h-10 w-10 mx-auto mb-4 text-justice-navy opacity-70" />
              <h2 className="text-xl font-semibold text-justice-navy mb-2">Legal Resources</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                For official legal information and resources, please visit:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <a 
                  href="https://indiacode.nic.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-justice-navy hover:text-justice-crimson underline"
                >
                  India Code Portal
                </a>
                <a 
                  href="https://main.sci.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-justice-navy hover:text-justice-crimson underline"
                >
                  Supreme Court of India
                </a>
                <a 
                  href="https://lawmin.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-justice-navy hover:text-justice-crimson underline"
                >
                  Ministry of Law and Justice
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
