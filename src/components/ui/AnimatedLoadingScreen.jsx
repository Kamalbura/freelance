import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const AnimatedLoadingScreen = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const circuitRef = useRef(null);  useEffect(() => {
    // Loading animation sequence using chained animate calls
    
    // Logo animation
    animate('.loader-logo', {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 800,
      ease: 'out(3)'
    });

    // Circuit lines animation
    setTimeout(() => {
      animate('.circuit-path', {
        strokeDashoffset: [1000, 0],
        duration: 1500,
        delay: stagger(200),
        ease: 'in-out(2)'
      });
    }, 400);

    // Loading text
    setTimeout(() => {
      animate('.loading-text', {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        ease: 'out(3)'
      });
    }, 800);

    // Progress bar
    setTimeout(() => {
      animate('.progress-bar', {
        width: ['0%', '100%'],
        duration: 2000,
        ease: 'in-out(2)'
      });
    }, 1000);

    // Fade out
    setTimeout(() => {
      animate(loaderRef.current, {
        opacity: [1, 0],
        duration: 500,
        ease: 'out(3)',
        complete: () => {
          setTimeout(() => {
            onComplete && onComplete();
          }, 500);
        }
      });
    }, 3200);

    // Floating particles
    animate('.particle', {
      translateY: [-10, 10],
      translateX: [-5, 5],
      scale: [0.8, 1.2],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      delay: stagger(300),
      ease: 'in-out(2)'
    });

  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 z-50 flex items-center justify-center"
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg 
          ref={circuitRef}
          className="w-full h-full" 
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            className="circuit-path"
            d="M100,100 L300,100 L300,300 L500,300 L500,500 L700,500"
            stroke="rgba(14, 165, 233, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
          />
          <path
            className="circuit-path"
            d="M200,50 L200,250 L400,250 L400,450 L600,450"
            stroke="rgba(6, 182, 212, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
          />
          <path
            className="circuit-path"
            d="M50,200 L250,200 L250,400 L450,400 L450,550"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,3"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="loader-logo mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <div className="text-white text-3xl font-bold">IoT</div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text opacity-0 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Burak Amal
          </h1>
          <p className="text-xl text-cyan-400 font-medium">
            IoT Solutions Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-slate-700 rounded-full h-1 overflow-hidden">
            <div 
              className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-4">Loading experience...</p>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center gap-4 mt-8 opacity-50">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
            <span className="text-blue-400 text-sm">📱</span>
          </div>
          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
            <span className="text-green-400 text-sm">🔧</span>
          </div>
          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
            <span className="text-purple-400 text-sm">☁️</span>
          </div>
          <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
            <span className="text-cyan-400 text-sm">🛡️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLoadingScreen;
