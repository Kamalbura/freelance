import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4">
      {/* Hero background overlay - clean gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95 z-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          style={{ 
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontWeight: 800,
            lineHeight: 1.1
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          IoT & ESP32
          <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Solutions
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ 
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontWeight: 400
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Building cutting-edge IoT systems tailored to your needs. From sensor integration to cloud connectivity, let's bring your ideas to life.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
          >
            Start Your Project
          </a>
          
          <a
            href="#about"
            className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-lg"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
          >
            Learn More
          </a>
        </motion.div>
        
        {/* Subtle tech indicators */}
        <motion.div
          className="mt-16 flex justify-center gap-8 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm font-medium">Fast</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔧</div>
            <div className="text-sm font-medium">Reliable</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🌐</div>
            <div className="text-sm font-medium">Connected</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-sm font-medium">Scalable</div>
          </div>        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
