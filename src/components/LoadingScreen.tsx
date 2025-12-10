import React, { useEffect, useState } from 'react';
import type { Language } from '../types';
import { TRANSLATIONS, APP_CONFIG } from '../constants';

interface LoadingScreenProps {
  onComplete: () => void;
  language: Language;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, language }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  const t = TRANSLATIONS[language].loading;
  const bootSequence = t.logs;

  useEffect(() => {
    // Progress Bar Animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Log Text Animation
    setLogs([]); 
    
    let currentIndex = 0;
    const logTimer = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLogs(prev => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(logTimer);
      }
    }, 300);

    return () => clearInterval(logTimer);
  }, [bootSequence]);

  useEffect(() => {
    if (progress >= 100 && logs.length === bootSequence.length) {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, logs, onComplete, bootSequence]);

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center font-mono p-10 transition-colors duration-300">
      <div className="w-full max-w-md space-y-8">
        
        {/* Logo / Header */}
        <div className="flex flex-col items-center animate-pulse">
           <div className="text-4xl font-bold font-display text-slate-900 dark:text-white mb-2 tracking-widest">
             {APP_CONFIG.name}
           </div>
           <div className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-[0.5em]">
             {t.bootTitle}
           </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-8 border-2 border-slate-900 dark:border-emerald-500 p-1 rounded-sm">
          {/* Filled Bar */}
          <div 
            className="h-full bg-orange-500 dark:bg-emerald-500 transition-all duration-150 ease-out relative overflow-hidden"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            {/* Striped pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] opacity-30"></div>
          </div>
        </div>

        {/* Status Text */}
        <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-emerald-400">
           <span>{t.loading}</span>
           <span>{Math.min(progress, 100)}%</span>
        </div>

        {/* Boot Logs */}
        <div className="h-32 w-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-slate-800 p-4 font-mono text-xs overflow-hidden rounded-md shadow-inner">
           {logs.map((log, i) => (
             <div key={i} className="mb-1 text-slate-500 dark:text-emerald-600/80">
               <span className="mr-2 text-orange-500 dark:text-emerald-400">{'>'}</span>
               {log}
             </div>
           ))}
           <div className="w-2 h-4 bg-slate-400 dark:bg-emerald-500 animate-pulse inline-block align-middle ml-1" />
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;