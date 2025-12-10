import React from 'react';

const CassetteTape: React.FC = () => {
  return (
    <div className="relative w-72 h-44 bg-zinc-800 rounded-lg border-4 border-zinc-700 shadow-lg p-2 mx-auto my-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
      {/* Label Area */}
      <div className="w-full h-full bg-[#f0a04b] rounded flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-red-600 opacity-80"></div>
        
        {/* Title written on tape */}
        <div className="mt-6 font-['Permanent_Marker'] text-zinc-900 font-bold text-xl tracking-tighter" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
          MIXTAPE_2025.A
        </div>
        <div className="text-xs font-mono text-zinc-800">PREMIUM TYPE I</div>

        {/* Reels Window */}
        <div className="mt-2 w-48 h-14 bg-zinc-900 rounded-md flex justify-between items-center px-4 relative border border-zinc-600">
           {/* Left Reel */}
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="absolute w-8 h-1 bg-zinc-300 rotate-0" />
              <div className="absolute w-8 h-1 bg-zinc-300 rotate-90" />
           </div>
           
           {/* Tape Window Background */}
           <div className="w-16 h-8 bg-zinc-800 border-l border-r border-zinc-600" />

           {/* Right Reel */}
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="absolute w-8 h-1 bg-zinc-300 rotate-0" />
              <div className="absolute w-8 h-1 bg-zinc-300 rotate-90" />
           </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-auto mb-2 text-[10px] text-zinc-800 font-bold w-full px-4 flex justify-between">
            <span>A [NR]</span>
            <span>60 MIN</span>
        </div>
      </div>
      
      {/* Screws */}
      <div className="absolute top-1 left-1 w-2 h-2 bg-zinc-400 rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-zinc-600 rotate-45"/></div>
      <div className="absolute top-1 right-1 w-2 h-2 bg-zinc-400 rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-zinc-600 rotate-12"/></div>
      <div className="absolute bottom-1 left-1 w-2 h-2 bg-zinc-400 rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-zinc-600 rotate-90"/></div>
      <div className="absolute bottom-1 right-1 w-2 h-2 bg-zinc-400 rounded-full flex items-center justify-center"><div className="w-1 h-[1px] bg-zinc-600 rotate-0"/></div>
    </div>
  );
};

export default CassetteTape;