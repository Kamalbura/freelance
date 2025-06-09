import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

// Morphing Logo Animation Component
export const MorphingLogo = ({ className = "" }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // Simple morphing animation using CSS animation instead of anime.js to avoid conflicts
    logo.style.animation = 'morphLogo 4s ease-in-out infinite alternate';
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes morphLogo {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(5deg); }
            100% { transform: scale(1) rotate(-5deg); }
          }
        `}
      </style>
      <div
        ref={logoRef}
        className={`inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold ${className}`}
      >
        IoT Solutions
      </div>
    </>
  );
};

// Floating Particles Background
export const FloatingParticles = ({ count = 20 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const particles = Array.from({ length: count }, (_, i) => {
      const particle = document.createElement('div');
      particle.className = 'particle absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `floatParticle ${3000 + Math.random() * 2000}ms ease-in-out infinite alternate`;
      particle.style.animationDelay = `${i * 100}ms`;
      container.appendChild(particle);
      return particle;
    });

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, [count]);

  return (
    <>
      <style>
        {`
          @keyframes floatParticle {
            0% { transform: translate(0, 0) scale(0.5); opacity: 0.3; }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5); opacity: 0.8; }
            100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.5); opacity: 0.3; }
          }
        `}
      </style>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
    </>
  );
};

// Text Reveal Animation
export const TextReveal = ({ children, className = "", delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Split text into characters
    const chars = text.textContent.split('');
    text.innerHTML = chars.map(char => 
      `<span class="inline-block opacity-0 transform translate-y-4">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    // Animate characters
    setTimeout(() => {
      animate(text.querySelectorAll('span'), {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: stagger(50),
        ease: 'out(3)'
      });
    }, delay);
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

// Elastic Button Component
export const ElasticButton = ({ children, onClick, className = "" }) => {
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    animate(buttonRef.current, {
      scale: 1.05,
      rotate: [0, 2, -2, 0],
      duration: 400,
      ease: 'out(3)'
    });
  };

  const handleMouseLeave = () => {
    animate(buttonRef.current, {
      scale: 1,
      rotate: 0,
      duration: 300,
      ease: 'out(3)'
    });
  };

  const handleClick = () => {
    animate(buttonRef.current, {
      scale: [1, 0.95, 1.02, 1],
      duration: 300,
      ease: 'out(3)'
    });
    if (onClick) onClick();
  };

  return (
    <button
      ref={buttonRef}
      className={`transform transition-all ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// Ripple Effect Component
export const RippleEffect = ({ trigger = false, color = 'rgba(59, 130, 246, 0.3)' }) => {
  const rippleRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const ripple = rippleRef.current;
    if (!ripple) return;

    animate(ripple, {
      scale: [0, 4],
      opacity: [0.8, 0],
      duration: 600,
      ease: 'out(3)'
    });
  }, [trigger]);

  return (
    <div
      ref={rippleRef}
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{ backgroundColor: color }}
    />
  );
};

// Magnetic Field Effect
export const MagneticElement = ({ children, strength = 0.3 }) => {
  const elementRef = useRef(null);
  const isAnimating = useRef(false);

  const handleMouseMove = (e) => {
    if (isAnimating.current) return;
    
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    isAnimating.current = true;
    animate(element, {
      translateX: deltaX,
      translateY: deltaY,
      duration: 200,
      ease: 'out(3)',
      complete: () => { isAnimating.current = false; }
    });
  };

  const handleMouseLeave = () => {
    isAnimating.current = true;
    animate(elementRef.current, {
      translateX: 0,
      translateY: 0,
      duration: 400,
      ease: 'out(3)',
      complete: () => { isAnimating.current = false; }
    });
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transform"
    >
      {children}
    </div>
  );
};

// Wave Animation Background
export const WaveBackground = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;

    wave.style.animation = 'waveMove 8s linear infinite';
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes waveMove {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 0%; }
            100% { background-position: 0% 0%; }
          }
        `}
      </style>
      <div
        ref={waveRef}
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 40%, rgba(59, 130, 246, 0.1) 60%, transparent 60%)',
          backgroundSize: '60px 60px'
        }}
      />
    </>
  );
};

// Morphing Shape Component
export const MorphingShape = ({ className = "" }) => {
  const shapeRef = useRef(null);

  useEffect(() => {
    const shape = shapeRef.current;
    if (!shape) return;

    shape.style.animation = 'morphShape 4s ease-in-out infinite';
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes morphShape {
            0% { border-radius: 50% 50% 50% 50%; transform: rotate(0deg) scale(1); }
            25% { border-radius: 60% 40% 60% 40%; transform: rotate(90deg) scale(1.1); }
            50% { border-radius: 40% 60% 40% 60%; transform: rotate(180deg) scale(1); }
            75% { border-radius: 60% 40% 60% 40%; transform: rotate(270deg) scale(1.1); }
            100% { border-radius: 50% 50% 50% 50%; transform: rotate(360deg) scale(1); }
          }
        `}
      </style>
      <div
        ref={shapeRef}
        className={`w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 ${className}`}
      />
    </>
  );
};

export default {
  MorphingLogo,
  FloatingParticles,
  TextReveal,
  ElasticButton,
  RippleEffect,
  MagneticElement,
  WaveBackground,
  MorphingShape
};
