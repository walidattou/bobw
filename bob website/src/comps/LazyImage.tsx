import React, { useState, useRef, useEffect } from 'react';
import { optimizeCloudinaryUrl } from '../utils/cloudinaryUtils';
import { getFallbackImage } from '../utils/imageFallback';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  fallbackSrc?: string; // Optional explicit fallback
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  fetchPriority = 'auto',
  width,
  height,
  fallbackSrc,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Use utility functions for Cloudinary optimization
  const optimizedSrc = optimizeCloudinaryUrl(src);
  
  // Get fallback image
  const fallbackImage = fallbackSrc || getFallbackImage(src);

  // Debug logging
  console.log('LazyImage Debug:', {
    originalSrc: src,
    optimizedSrc: optimizedSrc,
    isCloudinary: src.includes('cloudinary.com')
  });

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setIsLoaded(false);
      setCurrentSrc(fallbackImage);
      console.log(`Image fallback triggered: ${src} -> ${fallbackImage}`);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-600 border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-800 flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-500 text-sm">Failed to load image</div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default LazyImage;
