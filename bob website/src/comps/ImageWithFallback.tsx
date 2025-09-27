import React, { useState, useCallback } from 'react';
import { getFallbackImage } from '../utils/imageFallback';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  onLoad,
  onError,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Get the fallback image path
  const fallbackImage = fallbackSrc || getFallbackImage(src);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(fallbackImage);
      console.log(`Image fallback triggered: ${src} -> ${fallbackImage}`);
      onError?.();
    }
  }, [src, fallbackImage, hasError, onError]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-600 border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state - only show if both original and fallback failed */}
      {hasError && currentSrc === fallbackImage && (
        <div 
          className="absolute inset-0 bg-gray-800 flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-500 text-sm text-center">
            <div>Image unavailable</div>
            <div className="text-xs mt-1">Fallback failed</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      <img
        src={currentSrc}
        alt={alt}
        className={`transition-opacity duration-300 w-full h-full ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageWithFallback;
