import React from 'react';

const ESP32Background = () => {
  // Static ESP32 and IoT symbols - no heavy animations
  const techSymbols = [
    { symbol: '⚡', x: 15, y: 20, size: 'text-3xl', color: 'text-blue-400/20' },
    { symbol: '📡', x: 85, y: 15, size: 'text-2xl', color: 'text-green-400/15' },
    { symbol: '🔌', x: 10, y: 80, size: 'text-xl', color: 'text-yellow-400/15' },
    { symbol: '⚙️', x: 90, y: 85, size: 'text-2xl', color: 'text-gray-400/15' },
    { symbol: '📱', x: 20, y: 50, size: 'text-xl', color: 'text-purple-400/15' },
    { symbol: '🌐', x: 80, y: 45, size: 'text-2xl', color: 'text-cyan-400/15' },
    { symbol: '💡', x: 50, y: 20, size: 'text-xl', color: 'text-amber-400/20' },
    { symbol: '🔋', x: 60, y: 80, size: 'text-xl', color: 'text-emerald-400/15' },
  ];
  // Simple circuit board pattern - static
  const CircuitPattern = () => (
    <svg className="absolute inset-0 w-full h-full opacity-3" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Simple circuit traces */}
          <path d="M0 100 L200 100" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M100 0 L100 200" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.3" />
          
          {/* Circuit nodes */}
          <circle cx="100" cy="100" r="2" fill="#3b82f6" opacity="0.4" />
          <circle cx="50" cy="50" r="1" fill="#10b981" opacity="0.3" />
          <circle cx="150" cy="150" r="1" fill="#10b981" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
  // Simple ESP32 chip representation - static
  const ESP32Chip = ({ x, y }) => (
    <div
      className="absolute opacity-10"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="w-12 h-8 bg-gradient-to-r from-slate-600 to-slate-500 rounded-sm border border-slate-400 shadow-sm">
        {/* Simple pins */}
        <div className="absolute -left-0.5 top-1 flex flex-col gap-0.5">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="w-1 h-0.5 bg-yellow-500 rounded-sm" />
          ))}
        </div>
        <div className="absolute -right-0.5 top-1 flex flex-col gap-0.5">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="w-1 h-0.5 bg-yellow-500 rounded-sm" />
          ))}
        </div>
        
        {/* ESP32 label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-blue-200 font-mono opacity-60">ESP32</span>
        </div>
      </div>
    </div>
  );
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient background - much lighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-80" />
      
      {/* Subtle tech-themed gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-green-950/10" />
      
      {/* Circuit board pattern - very subtle */}
      <CircuitPattern />
      
      {/* Static ESP32 chips */}
      <ESP32Chip x={10} y={15} />
      <ESP32Chip x={75} y={10} />
      <ESP32Chip x={20} y={75} />
      <ESP32Chip x={85} y={80} />
      
      {/* Static tech symbols */}
      {techSymbols.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.size} ${item.color} select-none`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
};

export default ESP32Background;
