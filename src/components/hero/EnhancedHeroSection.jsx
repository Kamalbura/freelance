import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import { FaArrowDown, FaCode, FaWifi, FaMicrochip } from 'react-icons/fa';
import { AnimatedCircuit, TechStackAnimation, ScrollReveal } from '../ui/IoTAnimations';
import { FloatingParticles, TextReveal, ElasticButton, WaveBackground } from '../ui/AnimeInspiredAnimations';
import './hero-styles.css';

const EnhancedHeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Main title animation
    if (titleRef.current?.children) {
      animate(titleRef.current.children, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.9, 1],
        duration: 1000,
        delay: stagger(200, { start: 300 }),
        ease: 'out(3)'
      });
    }

    // Subtitle typewriter effect
    setTimeout(() => {
      if (subtitleRef.current) {
        animate(subtitleRef.current, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          ease: 'out(3)'
        });
      }
    }, 1200);

    // CTA button entrance
    setTimeout(() => {
      if (ctaRef.current?.children) {
        animate(ctaRef.current.children, {
          scale: [0, 1],
          opacity: [0, 1],
          duration: 600,
          delay: stagger(150),
          ease: 'out(3)'
        });
      }
    }, 1800);

  }, []);
  const technologies = [
    { icon: '📱', name: 'IoT Apps' },
    { icon: '🔧', name: 'ESP32' },
    { icon: '☁️', name: 'Cloud' },
    { icon: '🛡️', name: 'Security' },
    { icon: '📊', name: 'Analytics' },
    { icon: '🌐', name: 'Networks' }
  ];

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-24 md:pt-28"
    >
      {/* Floating Particles Background */}
      <FloatingParticles count={30} />
      
      {/* Wave Background */}
      <WaveBackground />
      
      {/* Animated Background */}
      <AnimatedCircuit className="opacity-30" />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FaCode className="hero-floating absolute top-36 left-10 text-blue-400 text-2xl opacity-60" />
        <FaWifi className="hero-floating absolute top-48 right-20 text-cyan-400 text-xl opacity-50" />
        <FaMicrochip className="hero-floating absolute bottom-40 left-20 text-green-400 text-2xl opacity-70" />
        <div className="hero-floating absolute top-56 right-10 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30"></div>
        <div className="hero-floating absolute bottom-60 right-40 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-400/30"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            
            {/* Main Title - Compact and Bold */}
            <div ref={titleRef} className="space-y-2">
              <div className="hero-title-container">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
                  IoT <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Solutions</span>
                </h1>
              </div>
              <div className="hero-subtitle-container">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wide">
                  Made Simple
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <div 
              ref={subtitleRef}
              className="opacity-0 max-w-4xl mx-auto"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
                Transform your ideas into intelligent connected devices. 
                <span className="text-cyan-400 font-semibold"> ESP32 development</span>, 
                <span className="text-blue-400 font-semibold"> mobile apps</span>, and 
                <span className="text-purple-400 font-semibold"> cloud integration</span> 
                — all in one place.
              </p>
            </div>

            {/* Tech Stack Animation */}
            <ScrollReveal delay={1800} className="py-8">
              <TechStackAnimation technologies={technologies} />
            </ScrollReveal>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ElasticButton className="opacity-0 group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </ElasticButton>
              
              <ElasticButton className="opacity-0 group px-8 py-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                View Portfolio
              </ElasticButton>
            </div>

            {/* Scroll Indicator */}
            <ScrollReveal delay={2500} className="pt-12">
              <div className="flex flex-col items-center animate-bounce">
                <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
                <FaArrowDown className="text-gray-400 text-xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .hero-floating {
          animation: float 4s ease-in-out infinite;
        }
        
        .hero-floating:nth-child(2) { animation-delay: 0.5s; }
        .hero-floating:nth-child(3) { animation-delay: 1s; }
        .hero-floating:nth-child(4) { animation-delay: 1.5s; }
        .hero-floating:nth-child(5) { animation-delay: 2s; }
        
        .hero-title-container h1 {
          line-height: 0.9;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .hero-subtitle-container h2 {
          line-height: 1.1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default EnhancedHeroSection;
