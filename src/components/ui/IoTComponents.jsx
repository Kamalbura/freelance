import React from 'react';
import { motion } from 'framer-motion';

// IoT Device Icons Component
export const IoTDeviceIcon = ({ type, className = "", animate = true }) => {
  const icons = {
    esp32: (
      <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="8" width="16" height="8" rx="2" className="fill-current opacity-80" />
        <rect x="2" y="10" width="2" height="1" className="fill-current" />
        <rect x="2" y="12" width="2" height="1" className="fill-current" />
        <rect x="2" y="14" width="2" height="1" className="fill-current" />
        <rect x="20" y="10" width="2" height="1" className="fill-current" />
        <rect x="20" y="12" width="2" height="1" className="fill-current" />
        <rect x="20" y="14" width="2" height="1" className="fill-current" />
        <circle cx="12" cy="12" r="2" className="fill-blue-400" />
        <text x="12" y="13" textAnchor="middle" className="text-xs fill-white" fontSize="4">32</text>
      </svg>
    ),
    sensor: (
      <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="8" className="fill-current opacity-20" />
        <circle cx="12" cy="12" r="5" className="fill-current opacity-40" />
        <circle cx="12" cy="12" r="2" className="fill-green-400" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" strokeWidth="2" className="opacity-60" />
      </svg>
    ),
    wifi: (
      <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 20l-2-2c1.1-1.1 2.9-1.1 4 0l-2 2z" className="fill-current" />
        <path d="M8.5 16.5l-1.4-1.4c2.3-2.3 6-2.3 8.3 0l-1.4 1.4c-1.5-1.5-3.9-1.5-5.5 0z" className="fill-current opacity-80" />
        <path d="M5.1 13.1l-1.4-1.4c3.9-3.9 10.2-3.9 14.1 0l-1.4 1.4c-3.1-3.1-8.2-3.1-11.3 0z" className="fill-current opacity-60" />
      </svg>
    ),
    bluetooth: (
      <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l4 4-2 2 2 2-4 4v-6l-2 2-1.5-1.5L12 6V2z" className="fill-current" />
        <path d="M12 22l-4-4 2-2-2-2 4-4v6l2-2 1.5 1.5L12 18v4z" className="fill-current" />
      </svg>
    ),
    cloud: (
      <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.64-4.96z" className="fill-current" />
      </svg>
    ),
    mobile: (
      <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <rect x="5" y="2" width="14" height="20" rx="2" className="fill-current" />
        <circle cx="12" cy="18" r="1" className="fill-white" />
        <rect x="7" y="4" width="10" height="12" className="fill-gray-800" />
      </svg>
    )
  };

  const IconComponent = icons[type] || icons.esp32;

  if (!animate) return IconComponent;

  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {IconComponent}
    </motion.div>
  );
};

// Circuit Connection Lines
export const CircuitLines = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Horizontal lines */}
    <motion.line
      x1="0" y1="25%" x2="100%" y2="25%"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.line
      x1="0" y1="75%" x2="100%" y2="75%"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
    />
    
    {/* Vertical lines */}
    <motion.line
      x1="25%" y1="0" x2="25%" y2="100%"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.line
      x1="75%" y1="0" x2="75%" y2="100%"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
    />
    
    {/* Connection nodes */}
    <motion.circle
      cx="25%" cy="25%" r="4"
      fill="#3b82f6"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="75%" cy="25%" r="4"
      fill="#10b981"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />
    <motion.circle
      cx="25%" cy="75%" r="4"
      fill="#f59e0b"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, delay: 1, repeat: Infinity }}
    />
    <motion.circle
      cx="75%" cy="75%" r="4"
      fill="#8b5cf6"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
    />
  </svg>
);

// Data Flow Animation
export const DataFlow = ({ direction = "horizontal", className = "" }) => {
  const isHorizontal = direction === "horizontal";
  
  return (
    <div className={`absolute ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-70"
          style={{
            [isHorizontal ? 'left' : 'top']: 0,
            [isHorizontal ? 'top' : 'left']: `${20 + i * 15}%`,
          }}
          animate={{
            [isHorizontal ? 'x' : 'y']: [0, isHorizontal ? 400 : 300],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// ESP32 Project Symbols
export const ProjectSymbols = ({ className = "" }) => {
  const symbols = [
    { icon: '🌡️', label: 'Temperature', color: 'text-red-400' },
    { icon: '💧', label: 'Humidity', color: 'text-blue-400' },
    { icon: '💡', label: 'Smart Lighting', color: 'text-yellow-400' },
    { icon: '🔒', label: 'Security', color: 'text-green-400' },
    { icon: '📊', label: 'Monitoring', color: 'text-purple-400' },
    { icon: '🏠', label: 'Home Auto', color: 'text-orange-400' },
  ];

  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
        >
          <span className="text-2xl">{symbol.icon}</span>
          <span className={`text-xs ${symbol.color} font-medium`}>
            {symbol.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default { IoTDeviceIcon, CircuitLines, DataFlow, ProjectSymbols };
