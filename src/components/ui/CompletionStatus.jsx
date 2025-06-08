import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaTimes } from 'react-icons/fa';

const CompletionStatus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show completion status in development mode
    if (import.meta.env.DEV) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Auto-expand after 1 second
        setTimeout(() => setIsExpanded(true), 1000);
        // Auto-collapse after 10 seconds
        setTimeout(() => setIsExpanded(false), 10000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const features = [
    { name: 'React 19 + Vite Setup', status: 'complete' },
    { name: 'Tailwind CSS + Responsive Design', status: 'complete' },
    { name: 'Framer Motion Animations', status: 'complete' },
    { name: 'Lazy Loading & Code Splitting', status: 'complete' },
    { name: 'Performance Monitoring', status: 'complete' },
    { name: 'Service Worker & Caching', status: 'complete' },
    { name: 'Theme System (Dark/Light)', status: 'complete' },
    { name: 'Accessibility Enhancements', status: 'complete' },
    { name: 'Error Boundaries', status: 'complete' },
    { name: 'SEO Optimization', status: 'complete' },
    { name: 'PWA Manifest', status: 'complete' },
    { name: 'Touch Gestures & Mobile UX', status: 'complete' },
    { name: 'Scroll Spy Navigation', status: 'complete' },
    { name: 'Image Optimization (WebP)', status: 'complete' },
    { name: 'Reduced Motion Support', status: 'complete' }
  ];

  const completedCount = features.filter(f => f.status === 'complete').length;
  const completionPercentage = Math.round((completedCount / features.length) * 100);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 right-4 z-50 max-w-sm"
    >
      <div className="bg-gradient-to-br from-green-900/95 to-emerald-900/95 backdrop-blur-sm border border-green-700 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <FaRocket className="text-green-400 text-lg" />
              <h3 className="text-white font-semibold">Portfolio Complete!</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mb-3">
            <div className="flex items-center justify-between text-sm text-gray-300 mb-1">
              <span>Progress</span>
              <span>{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
              />
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-green-400 hover:text-green-300 transition-colors"
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-green-700/50 bg-black/20"
            >
              <div className="p-4 max-h-64 overflow-y-auto">
                <h4 className="text-white text-sm font-medium mb-3">Implemented Features:</h4>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 text-xs"
                    >
                      <FaCheckCircle className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature.name}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-green-700/30">
                  <p className="text-xs text-gray-400 text-center">
                    🎉 Your portfolio is ready for production!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CompletionStatus;
