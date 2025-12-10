import React, { useState } from 'react';
import { Send, Terminal, MapPin, Mail as MailIcon } from 'lucide-react';
import type { Language } from '../types';
import { TRANSLATIONS, APP_CONFIG } from '../constants';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');
  const t = TRANSLATIONS[language].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    setTimeout(() => {
      setStatus('SENT');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 1500);
  };

  return (
    <div className="h-full p-6 md:p-12 overflow-y-auto flex flex-col max-w-5xl mx-auto">
       <div className="mb-10">
        <h2 className="text-4xl font-display text-slate-800 dark:text-rose-500 mb-2">
          {t.title}
        </h2>
        <p className="text-slate-500 dark:text-rose-900/60 font-mono text-sm">{t.subtitle}</p>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row gap-12">
        
        {/* Left: Info Cards */}
        <div className="lg:w-1/3 space-y-6">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-rose-900/30 rounded-xl shadow-sm">
            <p className="mb-4 text-orange-500 dark:text-rose-500 font-bold font-mono flex items-center gap-2"><Terminal size={16}/> {t.systemMsgTitle}</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-mono leading-relaxed">
              {t.systemMsgBody}
            </p>
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-rose-900/30 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-slate-100 dark:bg-rose-950/50 text-slate-600 dark:text-rose-500 rounded-lg flex items-center justify-center">
                  <MailIcon size={20}/>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-rose-700 mb-1">{t.freq}</p>
                  <p className="text-slate-700 dark:text-rose-200 font-mono text-sm">{APP_CONFIG.email}</p>
                </div>
             </div>
             
             <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-rose-900/30 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-slate-100 dark:bg-rose-950/50 text-slate-600 dark:text-rose-500 rounded-lg flex items-center justify-center">
                  <MapPin size={20}/>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-rose-700 mb-1">{t.coords}</p>
                  <p className="text-slate-700 dark:text-rose-200 font-mono text-sm">{APP_CONFIG.location}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:w-2/3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-lg dark:shadow-none relative overflow-hidden">
          {/* Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-rose-900 dark:to-rose-500" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 dark:text-rose-500 tracking-widest">{t.userId}</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-rose-900/50 p-4 rounded-lg text-slate-800 dark:text-rose-100 font-mono focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-rose-500/50 focus:border-orange-500 dark:focus:border-rose-500 transition-all placeholder-slate-400 dark:placeholder-rose-900/50"
                  placeholder={t.enterName}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 dark:text-rose-500 tracking-widest">EMAIL</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-rose-900/50 p-4 rounded-lg text-slate-800 dark:text-rose-100 font-mono focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-rose-500/50 focus:border-orange-500 dark:focus:border-rose-500 transition-all placeholder-slate-400 dark:placeholder-rose-900/50"
                  placeholder={t.enterEmail}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 dark:text-rose-500 tracking-widest">{t.packet}</label>
              <textarea 
                rows={6}
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-rose-900/50 p-4 rounded-lg text-slate-800 dark:text-rose-100 font-mono focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-rose-500/50 focus:border-orange-500 dark:focus:border-rose-500 transition-all placeholder-slate-400 dark:placeholder-rose-900/50 resize-none"
                placeholder={t.typeMsg}
              />
            </div>

            <button 
              type="submit" 
              disabled={status !== 'IDLE'}
              className={`
                w-full py-4 rounded-lg font-display text-xl tracking-widest flex items-center justify-center gap-2
                transition-all duration-200 shadow-md active:translate-y-1 active:shadow-sm
                ${status === 'IDLE' 
                  ? 'bg-slate-900 dark:bg-rose-600 text-white hover:bg-orange-600 dark:hover:bg-rose-500' 
                  : 'bg-slate-200 dark:bg-zinc-800 text-slate-400 cursor-not-allowed shadow-none'}
              `}
            >
              {status === 'IDLE' && <><Send size={20} /> {t.transmit}</>}
              {status === 'SENDING' && t.sending}
              {status === 'SENT' && t.sent}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;