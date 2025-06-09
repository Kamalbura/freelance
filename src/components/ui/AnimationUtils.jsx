import { animate, stagger } from 'animejs';

// Utility function for smooth scroll reveal animations
export const scrollRevealAnimation = (targets, options = {}) => {
  const defaultOptions = {
    opacity: [0, 1],
    translateY: [30, 0],
    scale: [0.95, 1],
    duration: 600,
    ease: 'out(3)',
    ...options
  };

  return animate(targets, defaultOptions);
};

// Utility function for staggered entrance animations
export const staggeredEntrance = (targets, options = {}) => {
  const defaultOptions = {
    opacity: [0, 1],
    translateY: [20, 0],
    scale: [0.9, 1],
    duration: 500,
    delay: stagger(100),
    ease: 'out(2)',
    ...options
  };

  return animate(targets, defaultOptions);
};

// Utility function for magnetic hover effect
export const magneticHover = (element, intensity = 0.3) => {
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    animate(element, {
      scale: [1, 1.05],
      duration: 300,
      ease: 'out(2)'
    });
  });

  element.addEventListener('mouseleave', () => {
    animate(element, {
      scale: [1.05, 1],
      duration: 300,
      ease: 'out(2)'
    });
  });

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    animate(element, {
      translateX: x * intensity,
      translateY: y * intensity,
      duration: 200,
      ease: 'out(1)'
    });
  });

  element.addEventListener('mouseleave', () => {
    animate(element, {
      translateX: 0,
      translateY: 0,
      duration: 300,
      ease: 'out(2)'
    });
  });
};

// Utility function for smooth text reveal
export const textReveal = (element, options = {}) => {
  if (!element) return;

  const defaultOptions = {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    ease: 'out(2)',
    ...options
  };

  return animate(element, defaultOptions);
};

// Utility function for elastic button animation
export const elasticButton = (button) => {
  if (!button) return;

  button.addEventListener('click', () => {
    animate(button, {
      scale: [1, 0.95, 1.02, 1],
      duration: 400,
      ease: 'out(2)'
    });
  });
};

// Utility function for morphing shapes
export const morphingShape = (path, shapes, duration = 2000) => {
  if (!path || !shapes.length) return;

  let currentIndex = 0;
  
  const morph = () => {
    const nextIndex = (currentIndex + 1) % shapes.length;
    
    animate(path, {
      d: shapes[nextIndex],
      duration: duration,
      ease: 'in-out(2)',
      complete: () => {
        currentIndex = nextIndex;
        setTimeout(morph, 1000);
      }
    });
  };

  morph();
};

// Utility function for parallax scroll effect
export const parallaxScroll = (elements, speed = 0.5) => {
  if (!elements.length) return;

  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    
    elements.forEach((element, index) => {
      const rate = scrollY * speed * (index + 1) * 0.1;
      animate(element, {
        translateY: -rate,
        duration: 0,
        ease: 'linear'
      });
    });
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// CSS Animation Classes
export const cssAnimations = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
    40%, 43% { transform: translate3d(0,-15px,0); }
    70% { transform: translate3d(0,-7px,0); }
    90% { transform: translate3d(0,-2px,0); }
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translate3d(0,30px,0);
    }
    to {
      opacity: 1;
      transform: translate3d(0,0,0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .float-animation { animation: float 3s ease-in-out infinite; }
  .pulse-animation { animation: pulse 2s ease-in-out infinite; }
  .glow-animation { animation: glow 2s ease-in-out infinite; }
  .rotate-animation { animation: rotate 10s linear infinite; }
  .bounce-animation { animation: bounce 2s infinite; }
  .slide-in-up { animation: slideInUp 0.6s ease-out; }
  .fade-in-scale { animation: fadeInScale 0.6s ease-out; }
`;

export default {
  scrollRevealAnimation,
  staggeredEntrance,
  magneticHover,
  textReveal,
  elasticButton,
  morphingShape,
  parallaxScroll,
  cssAnimations
};
