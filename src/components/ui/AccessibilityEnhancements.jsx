import React, { useEffect } from 'react';

const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Skip to main content functionality
    const createSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:rounded focus:outline-none';
      skipLink.style.position = 'absolute';
      skipLink.style.top = '-40px';
      skipLink.style.left = '6px';
      skipLink.style.background = '#14b8a6';
      skipLink.style.color = 'white';
      skipLink.style.padding = '8px 16px';
      skipLink.style.textDecoration = 'none';
      skipLink.style.borderRadius = '4px';
      skipLink.style.zIndex = '9999';
      skipLink.style.transition = 'top 0.3s';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add main content landmark
    const addMainLandmark = () => {
      const mainContent = document.querySelector('#hero');
      if (mainContent && !mainContent.hasAttribute('id')) {
        mainContent.setAttribute('id', 'main-content');
        mainContent.setAttribute('role', 'main');
      }
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add visible focus indicators for better accessibility
      const style = document.createElement('style');
      style.textContent = `
        /* High contrast focus indicators */
        *:focus {
          outline: 2px solid #14b8a6 !important;
          outline-offset: 2px !important;
        }
        
        /* Better focus for interactive elements */
        button:focus,
        a:focus,
        input:focus,
        textarea:focus,
        select:focus {
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.3) !important;
        }
        
        /* Screen reader only content */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        .sr-only:focus {
          position: static !important;
          width: auto !important;
          height: auto !important;
          padding: 0.5rem 1rem !important;
          margin: 0 !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Announce page changes for screen readers
    const announcePageChanges = () => {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.id = 'page-announcer';
      document.body.appendChild(announcer);
      
      // Announce when sections come into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id || 'section';
            announcer.textContent = `Now viewing ${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} section`;
          }
        });
      }, { threshold: 0.5 });
      
      // Observe all main sections
      ['hero', 'services', 'projects', 'about', 'testimonials', 'contact'].forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    };

    // Initialize all accessibility enhancements
    createSkipLink();
    addMainLandmark();
    enhanceFocusManagement();
    announcePageChanges();

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      const announcer = document.getElementById('page-announcer');
      if (skipLink) skipLink.remove();
      if (announcer) announcer.remove();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancements;
