import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

const LazyWrapper = ({ 
  children, 
  fallback = null, 
  className = '',
  animate = true 
}) => {
  const defaultFallback = (
    <div className="min-h-[400px] flex items-center justify-center">
      <motion.div
        className="w-8 h-8 border-3 border-slate-600 border-t-primary-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );

  const content = (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );

  if (animate) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    );
  }

  return <div className={className}>{content}</div>;
};

export default LazyWrapper;
