// performance.js - Performance monitoring utilities
export class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observer = null;
    this.isSupported = 'PerformanceObserver' in window;
  }

  // Initialize performance monitoring
  init() {
    if (!this.isSupported) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    this.measureCoreWebVitals();
    this.measureResourceTiming();
    this.measureNavigationTiming();
  }

  // Measure Core Web Vitals (LCP, FID, CLS)
  measureCoreWebVitals() {
    // Largest Contentful Paint
    this.observeMetric('largest-contentful-paint', (entry) => {
      this.recordMetric('LCP', entry.startTime);
    });

    // First Input Delay
    this.observeMetric('first-input', (entry) => {
      this.recordMetric('FID', entry.processingStart - entry.startTime);
    });

    // Cumulative Layout Shift
    this.observeMetric('layout-shift', (entry) => {
      if (!entry.hadRecentInput) {
        const currentCLS = this.metrics.get('CLS') || 0;
        this.recordMetric('CLS', currentCLS + entry.value);
      }
    });
  }

  // Measure resource loading times
  measureResourceTiming() {
    this.observeMetric('resource', (entry) => {
      const duration = entry.responseEnd - entry.requestStart;
      
      if (entry.name.includes('.jpg') || entry.name.includes('.png') || entry.name.includes('.webp')) {
        this.recordMetric('ImageLoadTime', duration);
      } else if (entry.name.includes('.js')) {
        this.recordMetric('JSLoadTime', duration);
      } else if (entry.name.includes('.css')) {
        this.recordMetric('CSSLoadTime', duration);
      }
    });
  }

  // Measure navigation timing
  measureNavigationTiming() {
    this.observeMetric('navigation', (entry) => {
      this.recordMetric('TTFB', entry.responseStart - entry.requestStart);
      this.recordMetric('DOMContentLoaded', entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart);
      this.recordMetric('LoadComplete', entry.loadEventEnd - entry.loadEventStart);
    });
  }

  // Generic observer helper
  observeMetric(type, callback) {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(callback);
      });
      observer.observe({ type, buffered: true });
    } catch (error) {
      console.warn(`Failed to observe ${type}:`, error);
    }
  }

  // Record metric value
  recordMetric(name, value) {
    this.metrics.set(name, value);
    
    // Log significant metrics
    if (name === 'LCP' && value > 2500) {
      console.warn('LCP is above recommended threshold:', value);
    }
    if (name === 'FID' && value > 100) {
      console.warn('FID is above recommended threshold:', value);
    }
    if (name === 'CLS' && value > 0.1) {
      console.warn('CLS is above recommended threshold:', value);
    }
  }

  // Get all metrics
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  // Get specific metric
  getMetric(name) {
    return this.metrics.get(name);
  }

  // Report metrics (could send to analytics service)
  report() {
    const metrics = this.getMetrics();
    console.log('Performance Metrics:', metrics);
    
    // In production, you would send this to your analytics service
    // Example: sendToAnalytics(metrics);
    
    return metrics;
  }
}

// Custom hook for component performance measurement
export const useComponentPerformance = (componentName) => {
  const measureRender = () => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      console.log(`${componentName} render time:`, renderTime.toFixed(2), 'ms');
      
      if (renderTime > 16) { // Above 60fps threshold
        console.warn(`${componentName} render time is above 16ms:`, renderTime);
      }
    };
  };

  return { measureRender };
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory;
    const memoryInfo = {
      usedJSHeapSize: (memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
      totalJSHeapSize: (memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
      jsHeapSizeLimit: (memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB'
    };
    
    console.log('Memory Usage:', memoryInfo);
    return memoryInfo;
  }
  
  return null;
};

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Initialize performance monitoring - this is what gets called in main.jsx
export const initializePerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    performanceMonitor.init();
  }
};
