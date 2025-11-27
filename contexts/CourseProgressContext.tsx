

import React, { createContext, useState, useEffect, useContext, useCallback, ReactNode, useRef } from 'react';
import { type ProgressState, type ProgressItem } from '../types';
import { useAuth } from './AuthContext';

type SaveStatus = 'idle' | 'saving' | 'saved';

interface CourseProgressContextType {
  progress: ProgressState;
  updateProgress: (key: string, value: string | boolean, isCompletionEvent?: boolean) => void;
  getProgress: (key: string) => string | boolean | undefined;
  getCompletionHistory: () => { key: string; item: ProgressItem }[];
  saveStatus: SaveStatus;
}

const CourseProgressContext = createContext<CourseProgressContextType | undefined>(undefined);

export const CourseProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<ProgressState>({});
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const saveTimeoutRef = useRef<number | null>(null);
  const isInitialLoad = useRef(true);
  
  const STORAGE_KEY = currentUser ? `courseProgress-${currentUser.id}` : null;

  // Load progress when user logs in or page loads
  useEffect(() => {
    if (STORAGE_KEY) {
      try {
        const savedProgress = window.localStorage.getItem(STORAGE_KEY);
        setProgress(savedProgress ? JSON.parse(savedProgress) : {});
        isInitialLoad.current = true; // Reset on user change to prevent saving on load
      } catch (error) {
        console.error('Error reading from localStorage', error);
        setProgress({});
      }
    } else {
      // If no user, reset progress
      setProgress({});
    }
  }, [STORAGE_KEY]);

  // Save progress whenever it changes, with visual feedback
  useEffect(() => {
    if (STORAGE_KEY) {
      // Don't save on the initial load of progress from storage
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
        return;
      }

      // Clear any existing timeouts to handle rapid changes
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      setSaveStatus('saving');
      
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        
        // Create a sequence of status changes for better UX
        saveTimeoutRef.current = window.setTimeout(() => {
          setSaveStatus('saved');
          saveTimeoutRef.current = window.setTimeout(() => {
            setSaveStatus('idle');
          }, 1500); // Keep 'saved' message for 1.5 seconds
        }, 300); // Show 'saving' for a brief moment
        
      } catch (error) {
        console.error('Error writing to localStorage', error);
        setSaveStatus('idle'); // Reset on error
      }
    }
    
    // Cleanup timeout on unmount
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    }
  }, [progress, STORAGE_KEY]);

  const updateProgress = useCallback((key: string, value: string | boolean, isCompletionEvent: boolean = false) => {
    setProgress(prev => {
      const newItem: ProgressItem = {
        value,
        completedAt: isCompletionEvent ? new Date().toISOString() : prev[key]?.completedAt,
      };
      return { ...prev, [key]: newItem };
    });
  }, []);

  const getProgress = useCallback((key: string) => {
    return progress[key]?.value;
  }, [progress]);
  
  const getCompletionHistory = useCallback(() => {
    // Cast to [string, ProgressItem][] to ensure TS understands the type of values
    return (Object.entries(progress) as [string, ProgressItem][])
      .filter(([, item]) => item.completedAt)
      .map(([key, item]) => ({ key, item }))
      .sort((a, b) => new Date(b.item.completedAt!).getTime() - new Date(a.item.completedAt!).getTime());
  }, [progress]);


  return (
    <CourseProgressContext.Provider value={{ progress, updateProgress, getProgress, getCompletionHistory, saveStatus }}>
      {children}
    </CourseProgressContext.Provider>
  );
};

export const useCourseProgress = () => {
  const context = useContext(CourseProgressContext);
  if (context === undefined) {
    throw new Error('useCourseProgress must be used within a CourseProgressProvider');
  }
  return context;
};