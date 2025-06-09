import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

// Animated IoT Circuit Background
export const AnimatedCircuit = ({ className = "" }) => {
  const circuitRef = useRef(null);  useEffect(() => {
    if (!circuitRef.current) return;

    // Animate circuit lines drawing
    animate('.circuit-line', {
      strokeDashoffset: [100, 0],
      duration: 2000,
      delay: stagger(200),
      ease: 'inOut(2)'
    });

    // Animate data flow dots after a delay
    setTimeout(() => {
      animate('.data-dot', {
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        duration: 1500,
        delay: stagger(300, { start: 500 }),
        loop: true
      });
    }, 2000);

    // Pulse nodes continuously
    setTimeout(() => {
      animate('.circuit-node', {
        scale: [1, 1.3, 1],
        opacity: [0.6, 1, 0.6],
        duration: 1000,
        delay: stagger(100),
        loop: true
      });
    }, 3000);

  }, []);

  return (
    <div ref={circuitRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 800 600" 
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Circuit Lines */}
        <g className="circuit-lines">
          <path
            className="circuit-line"
            d="M50,100 L200,100 L200,200 L350,200"
            stroke="rgba(14, 165, 233, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <path
            className="circuit-line"
            d="M400,150 L550,150 L550,300 L700,300"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,3"
          />
          <path
            className="circuit-line"
            d="M100,400 L300,400 L300,500 L500,500"
            stroke="rgba(34, 197, 94, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,4"
          />
        </g>

        {/* Circuit Nodes */}
        <g className="circuit-nodes">
          <circle className="circuit-node" cx="200" cy="100" r="6" fill="rgba(14, 165, 233, 0.8)" />
          <circle className="circuit-node" cx="350" cy="200" r="8" fill="rgba(6, 182, 212, 0.8)" />
          <circle className="circuit-node" cx="550" cy="150" r="6" fill="rgba(34, 197, 94, 0.8)" />
          <circle className="circuit-node" cx="300" cy="400" r="7" fill="rgba(168, 85, 247, 0.8)" />
        </g>

        {/* Data Flow Dots */}
        <g className="data-flow">
          <circle className="data-dot" cx="125" cy="100" r="3" fill="#3b82f6" />
          <circle className="data-dot" cx="275" cy="200" r="3" fill="#06b6d4" />
          <circle className="data-dot" cx="475" cy="150" r="3" fill="#10b981" />
          <circle className="data-dot" cx="200" cy="400" r="3" fill="#8b5cf6" />
        </g>
      </svg>
    </div>
  );
};

// Animated Tech Stack Icons
export const TechStackAnimation = ({ technologies, className = "" }) => {
  const stackRef = useRef(null);
  useEffect(() => {
    if (!stackRef.current) return;

    // Staggered entrance animation
    animate('.tech-icon', {
      scale: [0, 1],
      opacity: [0, 1],
      rotate: [180, 0],
      duration: 800,
      delay: stagger(100),
      ease: 'out(3)'
    });

    // Floating animation using CSS animation for continuous loop
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
      icon.style.animation = `float 2s ease-in-out infinite alternate`;
      icon.style.animationDelay = `${index * 200}ms`;
    });

  }, []);
  return (
    <div ref={stackRef} className={`flex flex-wrap justify-center gap-6 ${className}`}>
      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(-5px);
          }
          to {
            transform: translateY(5px);
          }
        }
      `}</style>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="tech-icon relative group cursor-pointer"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-blue-400/50 transition-colors">
            <span className="text-2xl">{tech.icon}</span>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {tech.name}
          </div>
        </div>
      ))}
    </div>
  );
};

// Animated Stats Counter
export const AnimatedCounter = ({ value, label, duration = 2000, prefix = "", suffix = "" }) => {
  const counterRef = useRef(null);
  const numberRef = useRef({ value: 0 });
  useEffect(() => {
    if (!counterRef.current) return;

    animate(numberRef.current, {
      value: [0, value],
      duration: duration,
      ease: 'out(3)',
      update: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${prefix}${Math.round(numberRef.current.value)}${suffix}`;
        }
      }
    });
  }, [value, duration, prefix, suffix]);

  return (
    <div className="text-center">
      <div 
        ref={counterRef}
        className="text-4xl font-bold text-blue-400 mb-2"
      >
        {prefix}0{suffix}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

// Morphing Background Shapes
export const MorphingShapes = ({ className = "" }) => {
  const shapesRef = useRef(null);
  useEffect(() => {
    if (!shapesRef.current) return;

    // Create morphing animation sequence using animate
    const morphShape1 = () => {
      animate('.morph-shape-1', {
        d: [
          'M150,150 Q300,50 450,150 Q300,250 150,150',
          'M150,200 Q200,100 300,150 Q400,200 450,150 Q300,100 150,200',
          'M100,150 Q250,100 400,150 Q250,200 100,150',
          'M150,150 Q300,50 450,150 Q300,250 150,150'
        ],
        duration: 4000,
        ease: 'in-out(2)',
        complete: morphShape1
      });
    };

    const morphShape2 = () => {
      animate('.morph-shape-2', {
        d: [
          'M50,300 Q200,200 350,300 Q200,400 50,300',
          'M100,250 Q300,200 500,300 Q300,350 100,250',
          'M75,275 Q250,225 425,275 Q250,325 75,275',
          'M50,300 Q200,200 350,300 Q200,400 50,300'
        ],
        duration: 3500,
        ease: 'in-out(2)',
        complete: morphShape2
      });
    };

    // Start animations
    morphShape1();
    setTimeout(morphShape2, 2000);

  }, []);

  return (
    <div ref={shapesRef} className={`absolute inset-0 ${className}`} style={{ zIndex: -1 }}>
      <svg className="w-full h-full opacity-10" viewBox="0 0 600 500">
        <path
          className="morph-shape-1"
          d="M150,150 Q300,50 450,150 Q300,250 150,150"
          fill="url(#gradient1)"
        />
        <path
          className="morph-shape-2"
          d="M50,300 Q200,200 350,300 Q200,400 50,300"
          fill="url(#gradient2)"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Scroll-triggered reveal animation
export const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    if (!revealRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.9, 1],
              duration: 800,
              delay: delay,
              ease: 'out(3)'
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(revealRef.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={revealRef} 
      className={`opacity-0 ${className}`}
      style={{ transform: 'translateY(50px) scale(0.9)' }}
    >
      {children}
    </div>
  );
};

export default {
  AnimatedCircuit,
  TechStackAnimation,
  AnimatedCounter,
  MorphingShapes,
  ScrollReveal
};
