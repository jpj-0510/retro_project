import React, { useState } from 'react';
import type { ViewState, Language } from './types';
import Navigation from './components/Navigation';
import CRTOverlay from './components/CRTOverlay';
import LoadingScreen from './components/LoadingScreen';
import Home from './views/Home';
import Blog from './views/Blog';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import { Sun, Moon, Battery, AlertCircle, Languages } from 'lucide-react';
import { APP_CONFIG } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('CN');

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setLanguage(prev => prev === 'EN' ? 'CN' : 'EN');

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home language={language} />;
      case 'BLOG': return <Blog language={language} />;
      case 'PORTFOLIO': return <Portfolio language={language} />;
      case 'CONTACT': return <Contact language={language} />;
      case 'NOT_FOUND': return <NotFound goHome={() => setCurrentView('HOME')} language={language} />;
      default: return <NotFound goHome={() => setCurrentView('HOME')} language={language} />;
    }
  };

  if (isLoading) {
    return (
        <div className={isDark ? 'dark' : ''}>
           <LoadingScreen onComplete={() => setIsLoading(false)} language={language} />
        </div>
    );
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="relative w-screen h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden flex flex-col md:flex-row text-slate-900 dark:text-slate-100 font-mono">
        
        {/* CRT Overlay */}
        <CRTOverlay isDark={isDark} />

        {/* Navigation */}
        <div className="relative z-30 flex-shrink-0">
            <Navigation currentView={currentView} setView={setCurrentView} language={language} />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 relative z-20 h-full overflow-hidden flex flex-col">
           {/* Top System Bar */}
           <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md select-none transition-colors duration-300">
              
              {/* Left: System Status */}
              <div className="flex items-center gap-4">
                <div className="text-xs font-bold tracking-widest flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-emerald-500' : 'bg-orange-500'}`}></span>
                  {APP_CONFIG.name} <span className="hidden sm:inline">{APP_CONFIG.version}</span>
                </div>
              </div>

              {/* Right: Controls */}
              <div className="flex items-center gap-4">
                {/* Simulated broken link to test 404 */}
                <button 
                  onClick={() => setCurrentView('NOT_FOUND')}
                  className="hidden md:flex text-[10px] text-slate-400 hover:text-red-500 items-center gap-1 transition-colors"
                  title="Simulate Error"
                >
                  <AlertCircle size={12} /> ERR_TEST
                </button>

                <div className="text-[10px] text-slate-400 hidden sm:flex items-center gap-2">
                  <Battery size={14} /> 100%
                </div>

                <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1"></div>
                
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                  title="Switch Language"
                >
                  <Languages size={16} />
                  <span className="text-[10px] font-bold">{language}</span>
                </button>

                <button 
                  onClick={toggleTheme}
                  className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                  title="Toggle Theme"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
           </div>

           {/* Content Viewport */}
           <div className="flex-1 overflow-hidden relative bg-slate-50/50 dark:bg-slate-950/50">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              
              {/* Content */}
              {renderView()}
           </div>
        </main>

      </div>
    </div>
  );
};

export default App;