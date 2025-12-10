import React from 'react';

interface CRTProps {
  isDark: boolean;
}

const CRTOverlay: React.FC<CRTProps> = ({ isDark }) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[100] overflow-hidden select-none">
      {/* Scanlines - Darker in light mode, lighter in dark mode */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark 
            ? 'opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]' 
            : 'opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)]'
        }`}
        style={{ backgroundSize: '100% 4px, 6px 100%' }}
      />
      
      {/* Vignette - Stronger in dark mode */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]' 
          : 'bg-[radial-gradient(circle_at_center,transparent_70%,rgba(0,0,0,0.05)_100%)]'
      }`} />
      
      {/* Moving scanline bar */}
      <div 
        className="absolute w-full h-32 bg-gradient-to-b from-transparent via-white to-transparent"
        style={{ 
            animation: 'scanline 8s linear infinite',
            top: 0,
            opacity: isDark ? 0.03 : 0.05,
            mixBlendMode: 'overlay'
        }} 
      />
    </div>
  );
};

export default CRTOverlay;