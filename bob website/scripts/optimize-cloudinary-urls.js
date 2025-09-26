#!/usr/bin/env node

/**
 * Script to optimize Cloudinary URLs in the codebase
 * Adds q_auto,f_auto parameters to existing Cloudinary URLs
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/';
const OPTIMIZATION_PARAMS = 'q_auto,f_auto';

/**
 * Optimizes a Cloudinary URL by adding optimization parameters
 * @param {string} url - The original Cloudinary URL
 * @returns {string} - The optimized URL
 */
function optimizeCloudinaryUrl(url) {
  if (!url.includes(CLOUDINARY_BASE_URL)) {
    return url;
  }

  // Check if URL already has transformations
  const hasTransformations = url.includes('/upload/') && url.includes('/v');
  
  if (hasTransformations) {
    // Insert optimization parameters after /upload/
    return url.replace('/upload/', `/upload/${OPTIMIZATION_PARAMS}/`);
  } else {
    // Add optimization parameters if none exist
    return url.replace('/upload/', `/upload/${OPTIMIZATION_PARAMS}/`);
  }
}

/**
 * Processes a file and optimizes Cloudinary URLs
 * @param {string} filePath - Path to the file to process
 */
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all Cloudinary URLs in the file
    const cloudinaryUrlRegex = /https:\/\/res\.cloudinary\.com\/[^"'\s]+/g;
    const matches = content.match(cloudinaryUrlRegex);
    
    if (!matches) {
      console.log(`No Cloudinary URLs found in ${filePath}`);
      return;
    }

    let updatedContent = content;
    let hasChanges = false;

    matches.forEach(url => {
      const optimizedUrl = optimizeCloudinaryUrl(url);
      if (url !== optimizedUrl) {
        updatedContent = updatedContent.replace(url, optimizedUrl);
        hasChanges = true;
        console.log(`Optimized: ${url} -> ${optimizedUrl}`);
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Updated ${filePath}`);
    } else {
      console.log(`No changes needed in ${filePath}`);
    }

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

/**
 * Main function to process all files
 */
function main() {
  const projectRoot = path.join(__dirname, '..');
  
  // File patterns to search
  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts',
    'src/**/*.jsx',
    'src/**/*.js'
  ];

  console.log('🔍 Searching for Cloudinary URLs...\n');

  let totalFiles = 0;
  let processedFiles = 0;

  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: projectRoot });
    totalFiles += files.length;

    files.forEach(file => {
      const fullPath = path.join(projectRoot, file);
      processFile(fullPath);
      processedFiles++;
    });
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Total files scanned: ${totalFiles}`);
  console.log(`   Files processed: ${processedFiles}`);
  console.log(`\n✨ Cloudinary URL optimization complete!`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  optimizeCloudinaryUrl,
  processFile
};

