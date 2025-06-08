// SimpleHeroSection.jsx - Working version without complex animations
import React from 'react';

const SimpleHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        {/* Main heading */}
        <div className="relative mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 font-poppins leading-tight tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
              ESP32 & IoT
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 mt-2">
              Development Expert
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light mb-12 font-inter">
          Transforming innovative ideas into{' '}
          <span className="text-primary-400 font-medium">cutting-edge IoT solutions</span>{' '}
          using ESP32, advanced sensor integration, wireless communication, and cloud technologies.
        </p>

        {/* CTA button */}
        <div className="mb-16">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg shadow-2xl shadow-primary-500/25 transition-all duration-300 hover:scale-105"
          >
            <span>Let's Build Your Project</span>
            <svg 
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Hero image */}
        <div className="relative group">
          <img
            src="https://placehold.co/500x300/1e293b/3b82f6?text=ESP32+IoT+Solutions"
            alt="ESP32 IoT Development Illustration"
            className="w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroSection;
