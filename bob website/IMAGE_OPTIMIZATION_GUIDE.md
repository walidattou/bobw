# Image Optimization Guide

## Overview
This guide outlines the image optimization improvements implemented to enhance website performance and loading speed.

## Implemented Optimizations

### 1. Cloudinary URL Optimization
- **Added `q_auto,f_auto` parameters** to all Cloudinary URLs
- **Automatic quality optimization** based on content and device
- **Automatic format selection** (WebP, AVIF when supported)
- **Device pixel ratio optimization** with `dpr_auto`

### 2. Responsive Images
- **Multiple image sizes** generated automatically (320w, 640w, 768w, 1024w, 1280w, 1536w)
- **Responsive srcset** for different screen sizes
- **Appropriate sizes attributes** for different contexts

### 3. Lazy Loading
- **Intersection Observer** implementation for efficient lazy loading
- **Loading states** with skeleton placeholders
- **Error handling** for failed image loads
- **Priority-based loading** (high for above-the-fold, low for others)

### 4. Performance Improvements
- **Reduced preload links** in HTML (removed non-critical images)
- **Optimized loading priorities** based on viewport position
- **Efficient component structure** with proper state management

## Components Created/Updated

### LazyImage Component (`src/comps/LazyImage.tsx`)
- Handles all image optimization automatically
- Supports Cloudinary and local images
- Provides loading states and error handling
- Implements intersection observer for lazy loading

### Cloudinary Utilities (`src/utils/cloudinaryUtils.ts`)
- `optimizeCloudinaryUrl()` - Adds optimization parameters
- `generateResponsiveSrcSet()` - Creates responsive image sets
- `getResponsiveSizes()` - Provides appropriate sizes attributes
- `isCloudinaryUrl()` - Checks if URL is from Cloudinary

## Usage Examples

### Basic Usage
```tsx
<LazyImage 
  src="https://res.cloudinary.com/your-cloud/image/upload/v123/example.jpg"
  alt="Example image"
  className="w-full h-auto"
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### With Cloudinary Optimization
```tsx
<LazyImage 
  src="https://res.cloudinary.com/your-cloud/image/upload/v123/example.jpg"
  alt="Example image"
  className="w-full h-auto"
  fetchPriority="low"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

## Original Image Upload Recommendations

### File Size Guidelines
- **Maximum file size**: 2-5MB per image
- **Recommended dimensions**:
  - Hero images: 1920x1080px
  - Card images: 800x600px
  - Thumbnails: 400x400px
  - Modal images: 1200x800px

### Format Recommendations
- **Primary format**: WebP (best compression)
- **Fallback**: JPEG for photos, PNG for graphics with transparency
- **Avoid**: Large PNG files, uncompressed formats

### Upload Process
1. **Compress images** before upload using tools like:
   - TinyPNG/TinyJPG
   - ImageOptim
   - Squoosh.app
2. **Use appropriate dimensions** for the intended use case
3. **Test on different devices** to ensure quality

## Performance Monitoring

### Key Metrics to Track
- **Largest Contentful Paint (LCP)**: Should be < 2.5s
- **Cumulative Layout Shift (CLS)**: Should be < 0.1
- **First Input Delay (FID)**: Should be < 100ms

### Tools for Testing
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools Lighthouse
- GTmetrix

## Cloudinary Dashboard Settings

### Recommended Settings
1. **Enable automatic format selection**
2. **Set quality to "auto"**
3. **Enable responsive breakpoints**
4. **Configure CDN settings for optimal delivery**

### Transformation Presets
Create presets for common use cases:
- `thumbnail`: w_150,h_150,c_fill,q_auto,f_auto
- `card`: w_400,h_300,c_fill,q_auto,f_auto
- `hero`: w_1920,h_1080,c_fill,q_auto,f_auto

## Troubleshooting

### Common Issues
1. **Images not loading**: Check Cloudinary URL format
2. **Poor quality**: Verify `q_auto` parameter is present
3. **Slow loading**: Check image file sizes and network conditions
4. **Layout shifts**: Ensure proper width/height attributes

### Debug Tools
- Chrome DevTools Network tab
- Cloudinary Media Library
- Browser developer tools for responsive testing

## Future Improvements

### Potential Enhancements
1. **Progressive JPEG loading** for large images
2. **Blur-up effect** during image loading
3. **Advanced caching strategies**
4. **WebP/AVIF format detection**
5. **Image compression on upload**

### Monitoring
- Set up performance monitoring
- Track Core Web Vitals
- Monitor Cloudinary usage and costs
- Regular performance audits

## Cost Optimization

### Cloudinary Usage
- Monitor bandwidth usage
- Use appropriate image sizes
- Implement proper caching
- Consider CDN alternatives for high-traffic sites

### Best Practices
- Upload images at appropriate sizes
- Use Cloudinary's automatic optimizations
- Implement proper lazy loading
- Monitor and optimize regularly
