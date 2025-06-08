import React from 'react';
import { motion } from 'framer-motion';
import { IoTDeviceIcon, CircuitLines, DataFlow } from './IoTComponents';

const HeroTechOverlay = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main circuit pattern */}
      <CircuitLines className="opacity-20" />
      
      {/* IoT Device Network */}
      <div className="absolute inset-0">
        {/* Central ESP32 Hub */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            scale: { duration: 3, repeat: Infinity },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <div className="relative">
            <IoTDeviceIcon type="esp32" className="text-blue-400 w-12 h-12" />
            
            {/* Pulse rings */}
            {Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                style={{
                  width: `${3 + i * 2}rem`,
                  height: `${3 + i * 2}rem`,
                  left: `${-i * 1}rem`,
                  top: `${-i * 1}rem`,
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0.2, 0.6]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Satellite devices */}
        <motion.div 
          className="absolute top-1/4 left-1/4"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <IoTDeviceIcon type="sensor" className="text-green-400 w-8 h-8" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-1/4"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <IoTDeviceIcon type="wifi" className="text-cyan-400 w-8 h-8" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity }
          }}
        >
          <IoTDeviceIcon type="bluetooth" className="text-purple-400 w-8 h-8" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/3"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <IoTDeviceIcon type="cloud" className="text-indigo-400 w-10 h-10" />
        </motion.div>
        
        <motion.div 
          className="absolute top-2/3 right-1/5"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <IoTDeviceIcon type="mobile" className="text-orange-400 w-8 h-8" />
        </motion.div>
      </div>
      
      {/* Data flow lines */}
      <DataFlow direction="horizontal" className="top-1/4 left-0 w-full" />
      <DataFlow direction="vertical" className="left-3/4 top-0 h-full" />
      
      {/* Floating code elements */}
      <div className="absolute inset-0">
        {[
          { text: "#include <WiFi.h>", x: "10%", y: "20%" },
          { text: "esp32.begin()", x: "80%", y: "30%" },
          { text: "sensor.read()", x: "15%", y: "70%" },
          { text: "mqtt.publish()", x: "70%", y: "80%" },
        ].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-green-400/40 whitespace-nowrap"
            style={{ left: code.x, top: code.y }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              y: [-5, 5, -5]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity
            }}
          >
            {code.text}
          </motion.div>
        ))}
      </div>
      
      {/* Signal waves */}
      <motion.div
        className="absolute top-1/6 right-1/6"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-16 h-16 text-blue-400/30" viewBox="0 0 100 100">
          <motion.path
            d="M20 50 Q50 20 80 50 Q50 80 20 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M30 50 Q50 30 70 50 Q50 70 30 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>
      
      {/* Particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroTechOverlay;
