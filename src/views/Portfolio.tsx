import React from 'react';
import { PROJECTS, TRANSLATIONS } from '../constants';
import { ExternalLink, Cpu } from 'lucide-react';
import type { Language } from '../types';

interface PortfolioProps {
  language: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  const t = TRANSLATIONS[language].portfolio;

  return (
    <div className="h-full p-6 md:p-12 overflow-y-auto">
      <div className="mb-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-display text-slate-800 dark:text-indigo-400 mb-2">
          {t.title}
        </h2>
        <p className="font-mono text-slate-500 dark:text-indigo-900/60 text-sm">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pb-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            
            {/* Image Area */}
            <div className="relative h-56 bg-slate-100 dark:bg-black overflow-hidden border-b border-slate-100 dark:border-slate-800">
               <img 
                 src={project.imageUrl} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-indigo-900/10 dark:bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
               <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-2xl text-slate-800 dark:text-indigo-300 group-hover:text-orange-600 dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <Cpu className="text-slate-300 dark:text-slate-700 group-hover:text-orange-500 dark:group-hover:text-indigo-400" size={20} />
               </div>
               
               <p className="text-slate-600 dark:text-slate-400 text-sm font-mono mb-6 leading-relaxed flex-grow">
                 {language === 'CN' ? project.descriptionCN : project.description}
               </p>

               <div className="mt-auto">
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.techStack.map(tech => (
                     <span key={tech} className="text-[10px] font-bold bg-slate-100 dark:bg-indigo-950/50 text-slate-500 dark:text-indigo-300 px-2 py-1 rounded border border-slate-200 dark:border-indigo-900/30">
                       {tech}
                     </span>
                   ))}
                 </div>

                 <a href={project.link} className="block w-full">
                   <button className="w-full py-3 bg-slate-900 dark:bg-indigo-600 hover:bg-orange-500 dark:hover:bg-indigo-500 text-white rounded-lg text-xs font-bold font-mono tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-200 dark:shadow-none">
                      {t.launch} <ExternalLink size={14} />
                   </button>
                 </a>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;