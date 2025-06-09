import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import { FaArrowRight, FaPlay, FaCalendarAlt, FaDownload, FaCode, FaWifi, FaMicrochip } from 'react-icons/fa';
import { useRegional } from '../../contexts/RegionalContext';
import { AnimatedCircuit, TechStackAnimation, ScrollReveal } from '../ui/IoTAnimations';
import { FloatingParticles, TextReveal, ElasticButton, WaveBackground } from '../ui/AnimeInspiredAnimations';
import TrustSignals from '../trust/TrustSignals';
import './hero-styles.css';

const ConversionOptimizedHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const { currency, formatPrice } = useRegional();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    // Staggered title animation with enhanced timing
    if (titleRef.current?.children) {
      animate(titleRef.current.children, {
        opacity: [0, 1],
        translateY: [60, 0],
        scale: [0.8, 1],
        duration: 1200,
        delay: stagger(300, { start: 200 }),
        ease: 'out(4)'
      });
    }

    // Subtitle with typewriter effect
    setTimeout(() => {
      if (subtitleRef.current) {
        animate(subtitleRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          ease: 'out(3)'
        });
      }
    }, 800);

    // CTA buttons with bounce entrance
    setTimeout(() => {
      if (ctaRef.current?.children) {
        animate(ctaRef.current.children, {
          scale: [0, 1.1, 1],
          opacity: [0, 1],
          duration: 800,
          delay: stagger(200),
          ease: 'out(4)'
        });
      }
    }, 1400);
  }, []);

  const technologies = [
    { icon: '📱', name: 'Mobile Apps', highlight: true },
    { icon: '🔧', name: 'ESP32/IoT', highlight: true },
    { icon: '☁️', name: 'Cloud Integration' },
    { icon: '🛡️', name: 'Security' },
    { icon: '📊', name: 'Analytics' },
    { icon: '🌐', name: 'Connectivity' }
  ];

  const handleBookConsultation = () => {
    // Track conversion event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Hero Book Consultation'
      });
    }
    window.open('https://calendly.com/burakamal13/consultation', '_blank');
  };

  const handleDownloadPortfolio = () => {
    // Track download event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        event_category: 'Lead Magnet',
        event_label: 'Portfolio PDF'
      });
    }
    // Implement portfolio download logic
    console.log('Download portfolio PDF');
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 overflow-hidden"
      style={{ paddingTop: 'calc(4rem + 2rem)' }} // Account for navbar height
    >
      {/* Enhanced Background Elements */}
      <FloatingParticles count={40} />
      <WaveBackground />
      <AnimatedCircuit className="opacity-20" />
      
      {/* Floating Tech Icons with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <FaCode className="hero-floating absolute top-32 left-10 text-blue-400 text-3xl opacity-70" />
        <FaWifi className="hero-floating absolute top-40 right-20 text-cyan-400 text-2xl opacity-60" />
        <FaMicrochip className="hero-floating absolute bottom-32 left-20 text-green-400 text-3xl opacity-80" />
        <div className="hero-floating absolute top-48 right-10 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl border border-purple-400/40 backdrop-blur-sm"></div>
        <div className="hero-floating absolute bottom-48 right-32 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl border border-blue-400/40 backdrop-blur-sm"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Problem-Solution-Outcome Structure */}
          <div className="text-center space-y-12">
            
            {/* Value Proposition - Stripe Style */}
            <div className="space-y-8">
              
              {/* Main Headline */}
              <div ref={titleRef} className="space-y-4">
                <motion.div 
                  className="text-label-medium text-accent-400 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  🚀 Transform Your Ideas Into Smart Solutions
                </motion.div>
                
                <h1 className="text-display-large text-white leading-none tracking-tight max-w-5xl mx-auto">
                  <span className="block">IoT Development</span>
                  <span className="block gradient-text">Made</span>
                  <span className="block">Simple</span>
                </h1>
              </div>

              {/* Value Proposition Subtitle */}
              <div ref={subtitleRef} className="opacity-0">
                <p className="text-body-large text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                  From ESP32 prototypes to production-ready systems. Get your IoT project delivered in 
                  <span className="text-accent-400 font-semibold"> 30% less time</span> with 
                  <span className="text-primary-400 font-semibold"> enterprise-grade quality</span> and 
                  <span className="text-emerald-400 font-semibold"> ongoing support</span>.
                </p>
              </div>

              {/* Social Proof Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {['SC', 'MR', 'PS', 'AK', 'JD'].map((avatar, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-slate-900"
                      >
                        {avatar}
                      </div>
                    ))}
                  </div>
                  <span>50+ happy clients</span>
                </div>
                <div className="h-4 w-px bg-gray-600"></div>
                <div>Starting from {formatPrice(15000)}</div>
                <div className="h-4 w-px bg-gray-600"></div>
                <div>⚡ 48hr response time</div>
              </motion.div>
            </div>

            {/* Dual CTA Strategy */}
            <div ref={ctaRef} className="space-y-6">
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <button
                  onClick={handleBookConsultation}
                  className="btn-primary w-full sm:w-auto group flex items-center justify-center space-x-2 py-4 px-8 text-lg font-semibold"
                >
                  <FaCalendarAlt className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="btn-secondary w-full sm:w-auto group flex items-center justify-center space-x-2 py-4 px-8 text-lg font-semibold"
                >
                  <FaPlay className="w-4 h-4" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Secondary CTA - Lead Magnet */}
              <div className="text-center">
                <button
                  onClick={handleDownloadPortfolio}
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors text-sm group"
                >
                  <FaDownload className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Download Portfolio & Case Studies (PDF)</span>
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="pt-8">
              <TrustSignals variant="hero" />
            </div>

            {/* Tech Stack Showcase */}
            <ScrollReveal delay={1800} className="pt-8">
              <div className="space-y-6">
                <h3 className="text-label-large text-gray-400 text-center">
                  Full-Stack IoT Expertise
                </h3>
                <TechStackAnimation technologies={technologies} />
              </div>
            </ScrollReveal>

            {/* Scroll Indicator */}
            <ScrollReveal delay={2500} className="pt-16">
              <motion.div 
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="text-gray-400 text-sm mb-3 group-hover:text-accent-400 transition-colors">
                  Explore Services
                </span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full group-hover:border-accent-400 transition-colors">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 group-hover:bg-accent-400 transition-colors animate-bounce"></div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl mx-auto p-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-accent-400 text-2xl"
            >
              ✕
            </button>
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Demo Video</h3>
              <p className="text-gray-400 mb-6">
                See how we've transformed IoT ideas into successful products
              </p>
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Demo video placeholder</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-1 h-1 bg-accent-400' : 
              i % 3 === 1 ? 'w-0.5 h-0.5 bg-primary-400' : 
              'w-1.5 h-1.5 bg-emerald-400'
            } opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-enhanced {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-15px) rotate(5deg) scale(1.1); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-8px) rotate(-3deg) scale(0.9); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-12px) rotate(2deg) scale(1.05); 
            opacity: 0.7;
          }
        }
        
        .hero-floating {
          animation: float-enhanced 6s ease-in-out infinite;
        }
        
        .hero-floating:nth-child(2) { animation-delay: 0.8s; }
        .hero-floating:nth-child(3) { animation-delay: 1.6s; }
        .hero-floating:nth-child(4) { animation-delay: 2.4s; }
        .hero-floating:nth-child(5) { animation-delay: 3.2s; }
        
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          33% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
          66% { transform: translateY(10px) translateX(-5px); opacity: 0.5; }
        }
        
        .absolute.rounded-full {
          animation: particle-float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ConversionOptimizedHero;
