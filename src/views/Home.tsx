import React from 'react';
import CassetteTape from '../components/CassetteTape';
import type { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = TRANSLATIONS[language].home;

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-display text-slate-800 dark:text-white mb-4 tracking-tight">
          {t.greeting}<span className="text-orange-500 dark:text-emerald-400">{t.world}</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-slate-300 dark:bg-slate-700"></div>
            <p className="font-mono text-slate-500 dark:text-slate-400 text-sm md:text-base">
              {t.role}
            </p>
            <div className="h-px w-12 bg-slate-300 dark:bg-slate-700"></div>
        </div>

        <CassetteTape />

        <div className="mt-10 p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm dark:shadow-none max-w-xl mx-auto backdrop-blur-sm">
           <div className="flex items-center gap-3 mb-3 border-b border-slate-100 dark:border-slate-800 pb-3">
             <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
             <span className="text-xs text-slate-400 font-bold tracking-wider">{t.status}</span>
           </div>
           <p className="text-slate-600 dark:text-slate-300 font-tech text-lg leading-relaxed">
             {t.intro}
           </p>
        </div>
      </div>
    </div>
  );
};

export default Home;