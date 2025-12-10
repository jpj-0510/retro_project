import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NotFoundProps {
  goHome: () => void;
  language: Language;
}

const NotFound: React.FC<NotFoundProps> = ({ goHome, language }) => {
  const t = TRANSLATIONS[language].notFound;

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      
      {/* Background Glitch Elements */}
      <div className="absolute top-10 left-10 text-9xl font-display text-slate-100 dark:text-slate-900 opacity-50 select-none -z-10 rotate-12">404</div>
      <div className="absolute bottom-20 right-10 text-9xl font-display text-slate-100 dark:text-slate-900 opacity-50 select-none -z-10 -rotate-12">ERROR</div>

      <div className="max-w-md w-full bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-rose-500 p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] dark:shadow-[0_0_20px_rgba(244,63,94,0.2)] relative">
        
        {/* Header Bar */}
        <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 dark:bg-rose-500 flex items-center px-3 justify-between">
           <span className="text-white font-bold font-mono text-xs">{t.header}</span>
           <div className="flex gap-1">
             <div className="w-2 h-2 bg-white rounded-full"></div>
             <div className="w-2 h-2 bg-white rounded-full"></div>
           </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-slate-100 dark:bg-rose-950/30 rounded-full flex items-center justify-center text-slate-400 dark:text-rose-500">
             <AlertTriangle size={40} className="animate-bounce" />
          </div>

          <div>
            <h1 className="text-6xl font-display text-slate-900 dark:text-white mb-2 tracking-tighter">
              4<span className="text-orange-500 dark:text-rose-500">0</span>4
            </h1>
            <h2 className="text-xl font-bold font-mono text-slate-600 dark:text-rose-400 tracking-widest">
              {t.title}
            </h2>
          </div>

          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.desc}
          </p>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-2"></div>

          <button 
            onClick={goHome}
            className="group w-full py-3 bg-slate-900 dark:bg-rose-600 hover:bg-orange-500 dark:hover:bg-rose-500 text-white rounded font-mono font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
          >
            <RefreshCw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
            {t.reboot}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;