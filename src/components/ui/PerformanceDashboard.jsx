import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { performanceMonitor } from '../../utils/performance';

const PerformanceDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      setIsVisible(true);
      
      // Update metrics every 2 seconds
      const interval = setInterval(() => {
        setMetrics({
          lcp: performanceMonitor.getMetric('LCP')?.toFixed(0) || 'N/A',
          fid: performanceMonitor.getMetric('FID')?.toFixed(0) || 'N/A',
          cls: performanceMonitor.getMetric('CLS')?.toFixed(3) || 'N/A',
          memory: (performance.memory?.usedJSHeapSize / 1024 / 1024)?.toFixed(1) || 'N/A'
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 p-3 text-white hover:bg-slate-800 rounded-lg w-full text-left"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Performance</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="ml-auto"
          >
            ↑
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-700"
            >
              <div className="p-3 space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-gray-400 mb-1">LCP</div>
                    <div className="text-white font-mono">{metrics.lcp}ms</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">FID</div>
                    <div className="text-white font-mono">{metrics.fid}ms</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">CLS</div>
                    <div className="text-white font-mono">{metrics.cls}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Memory</div>
                    <div className="text-white font-mono">{metrics.memory}MB</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <div className="text-gray-400 text-center">
                    Dev Mode • Real-time Metrics
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PerformanceDashboard;
