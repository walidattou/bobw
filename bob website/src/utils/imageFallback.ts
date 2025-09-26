/**
 * Image fallback utilities for development
 */

export const getImageWithFallback = (cloudinaryUrl: string, localPath: string): string => {
  // In development, prefer local images if Cloudinary fails
  if (import.meta.env.DEV) {
    // Check if we're in a development environment
    const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isLocalDev) {
      // Try local path first in development
      return localPath;
    }
  }
  
  // In production, use Cloudinary URLs
  return cloudinaryUrl;
};

export const createImageFallback = (cloudinaryUrl: string, localPath: string) => {
  return {
    src: cloudinaryUrl,
    fallback: localPath,
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== localPath) {
        target.src = localPath;
      }
    }
  };
};

export const isCloudinaryAccessible = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
