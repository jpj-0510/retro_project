import React from 'react';
import type { ViewState, Language } from '../types';
import { Monitor, Disc, BookOpen, Mail } from 'lucide-react';
import { TRANSLATIONS, APP_CONFIG } from '../constants';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  language: Language;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView, language }) => {
  const t = TRANSLATIONS[language].nav;

  const buttons: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'HOME', label: t.HOME, icon: <Monitor size={24} /> },
    { id: 'BLOG', label: t.BLOG, icon: <BookOpen size={24} /> },
    { id: 'PORTFOLIO', label: t.PORTFOLIO, icon: <Disc size={24} /> },
    { id: 'CONTACT', label: t.CONTACT, icon: <Mail size={24} /> },
  ];

  return (
    <nav className="
      w-full md:w-20 h-16 md:h-full 
      bg-white dark:bg-slate-900 
      border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 
      flex md:flex-col items-center justify-between md:justify-start 
      p-2 md:py-6 gap-2 md:gap-6
      shadow-sm z-40 transition-colors duration-300
    ">
      
      {/* Logo Area */}
      <div className="hidden md:flex flex-col items-center mb-6">
         <div className="w-10 h-10 bg-orange-500 dark:bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold font-display text-lg shadow-md hover:scale-105 transition-transform select-none">
           {APP_CONFIG.initials}
         </div>
      </div>

      <div className="flex md:flex-col gap-2 md:gap-4 flex-1 justify-center md:justify-start w-full">
        {buttons.map((btn) => {
          const isActive = currentView === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => setView(btn.id)}
              className={`
                group relative flex items-center justify-center
                w-12 h-12 md:w-14 md:h-14 rounded-xl transition-all duration-200
                ${isActive 
                  ? 'bg-slate-100 dark:bg-slate-800 text-orange-600 dark:text-emerald-400 shadow-inner' 
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }
              `}
            >
              {btn.icon}
              
              {/* Tooltip */}
              <span className="hidden md:group-hover:block absolute left-full ml-4 px-2 py-1 bg-slate-800 dark:bg-white text-white dark:text-black text-[10px] font-bold font-mono whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none shadow-lg">
                {btn.label}
              </span>

              {/* Active Indicator */}
              {isActive && (
                <div className="absolute bottom-1 md:bottom-auto md:left-1 w-1 md:w-1 h-1 md:h-8 bg-orange-500 dark:bg-emerald-500 rounded-full transition-all duration-300" />
              )}
            </button>
          );
        })}
      </div>
      
      {/* Bottom Decoration */}
      <div className="hidden md:flex flex-col gap-4 items-center pb-4">
         <div className="w-1 h-16 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
             <div className="absolute bottom-0 w-full bg-gradient-to-t from-orange-400 to-orange-200 dark:from-emerald-900 dark:to-emerald-500 animate-pulse" style={{ height: '60%' }} />
         </div>
      </div>

    </nav>
  );
};

export default Navigation;