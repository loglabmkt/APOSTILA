
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { glossaryTerms } from '../constants/glossaryData';

interface GlossaryContextType {
  showDefinition: (term: string) => void;
}

const GlossaryContext = createContext<GlossaryContextType | undefined>(undefined);

export const GlossaryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  const showDefinition = (term: string) => {
    // Normalize term lookup (case insensitive)
    const key = Object.keys(glossaryTerms).find(k => k.toLowerCase() === term.toLowerCase());
    if (key) {
      setActiveTerm(key);
    }
  };

  const closeGlossary = () => {
    setActiveTerm(null);
  };

  return (
    <GlossaryContext.Provider value={{ showDefinition }}>
      {children}
      {activeTerm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" onClick={closeGlossary}>
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 transform transition-all scale-100" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-brand-primary border-b-2 border-brand-accent pb-1">
                {activeTerm}
              </h3>
              <button 
                onClick={closeGlossary}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {glossaryTerms[activeTerm]}
            </p>
            <div className="mt-6 text-right">
              <button 
                onClick={closeGlossary}
                className="px-4 py-2 bg-brand-secondary text-white rounded-lg hover:bg-brand-primary transition-colors text-sm font-medium"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </GlossaryContext.Provider>
  );
};

export const useGlossary = () => {
  const context = useContext(GlossaryContext);
  if (context === undefined) {
    throw new Error('useGlossary must be used within a GlossaryProvider');
  }
  return context;
};
