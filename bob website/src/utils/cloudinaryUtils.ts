/**
 * Cloudinary URL optimization utilities
 */

export interface CloudinaryTransformOptions {
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png' | 'avif';
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'crop';
  gravity?: 'auto' | 'center' | 'face' | 'faces';
  dpr?: 'auto' | number;
}

/**
 * Optimizes a Cloudinary URL with automatic quality and format
 * @param url - The original Cloudinary URL
 * @param options - Additional transformation options
 * @returns Optimized Cloudinary URL
 */
export const optimizeCloudinaryUrl = (
  url: string, 
  options: CloudinaryTransformOptions = {}
): string => {
  if (!url.includes('cloudinary.com')) {
    return url;
  }

  const {
    quality = 'auto',
    format = 'auto',
    width,
    height,
    crop,
    gravity = 'auto',
    dpr = 'auto'
  } = options;

  // Build transformation string
  const transformations: string[] = [];
  
  // Always add quality and format optimization
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);
  
  // Add DPR for responsive images
  transformations.push(`dpr_${dpr}`);
  
  // Add dimensions if specified
  if (width) {
    transformations.push(`w_${width}`);
  }
  if (height) {
    transformations.push(`h_${height}`);
  }
  
  // Add crop mode if specified
  if (crop) {
    transformations.push(`c_${crop}`);
  }
  
  // Add gravity if specified
  if (gravity) {
    transformations.push(`g_${gravity}`);
  }

  const transformString = transformations.join(',');

  // Check if URL already has transformations
  const hasTransformations = url.includes('/upload/') && url.includes('/v');
  
  if (hasTransformations) {
    // Insert new transformations after /upload/
    return url.replace('/upload/', `/upload/${transformString}/`);
  } else {
    // Add transformations if none exist
    return url.replace('/upload/', `/upload/${transformString}/`);
  }
};

/**
 * Generates responsive srcset for Cloudinary images
 * @param baseUrl - The base Cloudinary URL
 * @param sizes - Array of widths to generate
 * @returns Responsive srcset string
 */
export const generateResponsiveSrcSet = (
  baseUrl: string, 
  sizes: number[] = [320, 640, 768, 1024, 1280, 1536]
): string => {
  if (!baseUrl.includes('cloudinary.com')) {
    return '';
  }

  const optimizedUrl = optimizeCloudinaryUrl(baseUrl);
  const baseUrlWithoutTransform = optimizedUrl.replace('/q_auto,f_auto,dpr_auto/', '/');
  
  const srcSet = sizes.map(size => {
    const responsiveUrl = baseUrlWithoutTransform.replace('/upload/', `/upload/w_${size},q_auto,f_auto,dpr_auto/`);
    return `${responsiveUrl} ${size}w`;
  }).join(', ');

  return srcSet;
};

/**
 * Generates appropriate sizes attribute for responsive images
 * @param context - The context where the image is used
 * @returns Sizes attribute string
 */
export const getResponsiveSizes = (context: 'hero' | 'card' | 'thumbnail' | 'modal' | 'custom', customSizes?: string): string => {
  if (customSizes) return customSizes;

  const sizeMap = {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw',
    card: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 50vw, 25vw',
    modal: '90vw',
    custom: '100vw'
  };

  return sizeMap[context];
};

/**
 * Checks if an image URL is from Cloudinary
 * @param url - The image URL to check
 * @returns True if the URL is from Cloudinary
 */
export const isCloudinaryUrl = (url: string): boolean => {
  return url.includes('cloudinary.com');
};

/**
 * Gets the optimal image dimensions for different contexts
 * @param context - The context where the image is used
 * @returns Object with width and height recommendations
 */
export const getOptimalDimensions = (context: 'hero' | 'card' | 'thumbnail' | 'modal') => {
  const dimensions = {
    hero: { width: 1920, height: 1080 },
    card: { width: 400, height: 300 },
    thumbnail: { width: 150, height: 150 },
    modal: { width: 1200, height: 800 }
  };

  return dimensions[context];
};

