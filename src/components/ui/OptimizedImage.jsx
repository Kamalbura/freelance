import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzEzNzQ5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY0NzQ4YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad && onLoad();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError && onError();
  }, [onError]);
  useEffect(() => {
    // Helper to generate WebP URL if possible
    const getWebPUrl = (originalSrc) => {
      if (!originalSrc) return originalSrc;
      
      // If it's already WebP, use as is
      if (originalSrc.includes('.webp')) {
        return originalSrc;
      }
      
      // For Unsplash images, add WebP format
      if (originalSrc.includes('unsplash.com')) {
        return `${originalSrc}&fm=webp&q=80`;
      }
      
      // For other external URLs or local images, keep original
      return originalSrc;
    };

    const webpSrc = getWebPUrl(src);
    
    // Try WebP first, fallback to original
    const img = new Image();
    img.onload = () => {
      setImageSrc(webpSrc);
      handleLoad();
    };
    img.onerror = () => {
      // If WebP fails and it's different from original, try original
      if (webpSrc !== src) {
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          setImageSrc(src);
          handleLoad();
        };
        fallbackImg.onerror = handleError;
        fallbackImg.src = src;
      } else {
        handleError();
      }
    };
    img.src = webpSrc;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, handleLoad, handleError]);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 text-slate-400 ${wrapperClassName}`}>
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto mb-2 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Image unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Loading skeleton with shimmer effect */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent animate-[shimmer_2s_infinite]" />
        </div>
      )}
      
      <motion.img
        src={imageSrc}
        alt={alt}
        className={`transition-all duration-500 ${className} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
