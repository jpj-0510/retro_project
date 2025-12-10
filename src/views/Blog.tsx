import React from 'react';
import { BLOG_POSTS, TRANSLATIONS } from '../constants';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import type { Language } from '../types';

interface BlogProps {
  language: Language;
}

const Blog: React.FC<BlogProps> = ({ language }) => {
  const t = TRANSLATIONS[language].blog;

  return (
    <div className="h-full p-6 md:p-12 overflow-y-auto max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-display text-slate-800 dark:text-emerald-400">
          {t.title}
        </h2>
        <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-emerald-900/30 text-slate-600 dark:text-emerald-400 text-xs font-bold font-mono">
          {t.tag}
        </span>
      </div>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <div 
            key={post.id} 
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-900/30 p-6 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:border-orange-400 dark:hover:border-emerald-500/50 transition-all cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                  <div className="flex gap-3 text-xs font-mono text-slate-400 dark:text-emerald-700 mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    <span className="flex items-center gap-1"><FileText size={12}/> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-tech text-slate-800 dark:text-emerald-100 group-hover:text-orange-600 dark:group-hover:text-emerald-400 transition-colors">
                    {language === 'CN' ? post.titleCN : post.title}
                  </h3>
              </div>
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-emerald-900/20 text-slate-300 dark:text-emerald-700 group-hover:bg-orange-50 dark:group-hover:bg-emerald-900/40 group-hover:text-orange-500 dark:group-hover:text-emerald-400 transition-all">
                  <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm mb-6 leading-relaxed">
              {language === 'CN' ? post.excerptCN : post.excerpt}
            </p>

            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-emerald-950/50 text-slate-500 dark:text-emerald-500 text-[10px] font-bold tracking-wider rounded flex items-center gap-1 uppercase">
                   # {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;