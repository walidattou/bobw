/**
 * Image fallback utilities with comprehensive fallback mapping
 */

import React from 'react';

// Mapping of Cloudinary URLs to local fallback images
const CLOUDINARY_TO_LOCAL_MAP: { [key: string]: string } = {
  // Game images mapping - exact URL matches
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/Infinity-01_oo3b15.webp': '/games and offers images/infinity_nikki_xz3ocb.jpg',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903224/roblox_qjppkn.webp': '/games and offers images/roblox.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/league_legend_xy5qyf.webp': '/games and offers images/league.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/wuthering_waves_g1lzcq.webp': '/games and offers images/wuthering_waves_g1lzcq.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/pubg_mobile_qgqjqx.webp': '/games and offers images/pubgmobile.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/genshin_impact_v2k8rt.webp': '/games and offers images/Genshin-Impact-Logo_v2k8rt.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/football_cafova.webp': '/games and offers images/football_cafova.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/clashofclans_deycuo.webp': '/games and offers images/clashofclans_deycuo.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/bloodstrike_gbzkew.webp': '/games and offers images/bloodstrike_gbzkew.jpg',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/fortnite_zugje4.webp': '/games and offers images/fortnite_zugje4.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/brawl_aq9il5.webp': '/games and offers images/brawl_aq9il5.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/feefire_efamzy.webp': '/games and offers images/feefire_efamzy.webp',
  
  // Additional game images from GamePage.tsx
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758902358/xbox_game_pass_hnztca.webp': '/games and offers images/xbox_game_pass_hnztca.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/Amazone-Prime_raqfou.webp': '/games and offers images/prime video.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758916831/genshin_impact_1_kpswhp.webp': '/games and offers images/Genshin-Impact-Logo_v2k8rt.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903214/BOB-PUBG-2_c1glje.webp': '/games and offers images/pubgmobile.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903224/wuthering-update_phopww.webp': '/games and offers images/wuthering_waves_g1lzcq.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903215/efootball-finale3_ncnuc3.webp': '/games and offers images/football_cafova.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903214/CLASH_wtcanl.webp': '/games and offers images/clashofclans_deycuo.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903230/BLOOD-STRIKE_uvzzsh.webp': '/games and offers images/bloodstrike_gbzkew.jpg',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/q_auto,f_auto/v1758837555/Discord-Nitro_mkdh2o.webp': '/games and offers images/Discord-Nitro_mkdh2o.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903215/FREE_hxlmkv.webp': '/games and offers images/feefire_efamzy.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903217/FORTNITE_scphv4.webp': '/games and offers images/fortnite_zugje4.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903177/BRAWL_nubrvo.jpg': '/games and offers images/brawl_aq9il5.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903224/ntflix_lvhcie.jpg': '/games and offers images/netflix_lcilx2.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758916664/mlbb-metro_bug3xb.webp': '/games and offers images/league.webp',
  
  // Service/Subscription images mapping
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/netflix_lcilx2.webp': '/games and offers images/netflix_lcilx2.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/Discord-Nitro_mkdh2o.webp': '/games and offers images/Discord-Nitro_mkdh2o.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/xbox_game_pass_hnztca.webp': '/games and offers images/xbox_game_pass_hnztca.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/prime_video_webp.webp': '/games and offers images/prime video.webp',
  'https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/spotify_icon_white_dark_background_logo_wine_svg.webp': '/games and offers images/Spotify-Icon-White-Dark-Background-Logo.wine.svg',
};

// Service images mapping for /services/ paths
const SERVICE_FALLBACK_MAP: { [key: string]: string } = {
  // Service images - map to available files in /services/
  '/services/Amazone-Prime.webp': '/services/Amazone-Prime_raqfou.webp',
  '/services/BLOOD-STRIKE.webp': '/services/BLOOD-STRIKE_uvzzsh.webp',
  '/services/BRAWL.jpg': '/services/BRAWL.jpg',
  '/services/BOB-PUBG-2.webp': '/services/BOB-PUBG-2_c1glje.webp',
  '/services/CLASH.webp': '/services/CLASH_wtcanl.webp',
  '/services/Discord-01.webp': '/services/Discord-01_zgu19m.webp',
  '/services/efootball-finale3.webp': '/services/efootball-finale3_ncnuc3.webp',
  '/services/FORTNITE.webp': '/services/FORTNITE_scphv4.webp',
  '/services/FREE.webp': '/services/FREE_hxlmkv.webp',
  '/services/genshin_impact_1.webp': '/services/genshin_impact_1_kpswhp.webp',
  '/services/honorfinal2025.webp': '/services/honorfinal2025_xgm9c4.webp',
  '/services/Infinity-01.webp': '/services/Infinity-01_oo3b15.webp',
  '/services/mlbb-metro.webp': '/services/mlbb-metro_bug3xb.webp',
  '/services/ntflix.jpg': '/services/ntflix_lvhcie.jpg',
  '/services/roblox.webp': '/services/roblox_qjppkn.webp',
  '/services/wuthering-update.webp': '/services/wuthering-update_phopww.webp',
};

// Generic fallback mapping based on image content/filename patterns
const GENERIC_FALLBACK_MAP: { [pattern: string]: string } = {
  'infinity': '/games and offers images/infinity_nikki_xz3ocb.jpg',
  'roblox': '/games and offers images/roblox.webp',
  'league': '/games and offers images/league.webp',
  'wuthering': '/games and offers images/wuthering_waves_g1lzcq.webp',
  'pubg': '/games and offers images/pubgmobile.webp',
  'genshin': '/games and offers images/Genshin-Impact-Logo_v2k8rt.webp',
  'football': '/games and offers images/football_cafova.webp',
  'clash': '/games and offers images/clashofclans_deycuo.webp',
  'blood': '/games and offers images/bloodstrike_gbzkew.jpg',
  'fortnite': '/games and offers images/fortnite_zugje4.webp',
  'brawl': '/games and offers images/brawl_aq9il5.webp',
  'freefire': '/games and offers images/feefire_efamzy.webp',
  'netflix': '/games and offers images/netflix_lcilx2.webp',
  'discord': '/games and offers images/Discord-Nitro_mkdh2o.webp',
  'xbox': '/games and offers images/xbox_game_pass_hnztca.webp',
  'prime': '/games and offers images/prime video.webp',
  'spotify': '/games and offers images/Spotify-Icon-White-Dark-Background-Logo.wine.svg',
};

// Website core images mapping for /website-core-images/ paths
const CORE_FALLBACK_MAP: { [key: string]: string } = {
  // Core website images - map to available files in /website-core-images/
  '/website-core-images/bob.jpg': '/website-core-images/bob.jpg',
  '/website-core-images/borderlandsM.jpg': '/website-core-images/borderlandsM_ui9jak.jpg',
  '/website-core-images/image.jpg': '/website-core-images/image_mtyq1d.jpg',
  '/website-core-images/retro-digital-art-illustration-person-using-radio-technology.jpg': '/website-core-images/retro-digital-art-illustration-person-using-radio-technology_ct0yug.jpg',
  '/website-core-images/paisaje-de-god-of-war-ragnarok-8580.jpg': '/website-core-images/retro-digital-art-illustration-person-using-radio-technology_ct0yug.jpg', // Fallback for missing file
};

// Service-specific fallback mapping
const SERVICE_PATTERN_FALLBACK_MAP: { [pattern: string]: string } = {
  'amazone': '/services/Amazone-Prime_raqfou.webp',
  'prime': '/services/Amazone-Prime_raqfou.webp',
  'blood': '/services/BLOOD-STRIKE_uvzzsh.webp',
  'brawl': '/services/BRAWL.jpg',
  'pubg': '/services/BOB-PUBG-2_c1glje.webp',
  'clash': '/services/CLASH_wtcanl.webp',
  'discord': '/services/Discord-01_zgu19m.webp',
  'efootball': '/services/efootball-finale3_ncnuc3.webp',
  'football': '/services/efootball-finale3_ncnuc3.webp',
  'fortnite': '/services/FORTNITE_scphv4.webp',
  'free': '/services/FREE_hxlmkv.webp',
  'genshin': '/services/genshin_impact_1_kpswhp.webp',
  'honor': '/services/honorfinal2025_xgm9c4.webp',
  'infinity': '/services/Infinity-01_oo3b15.webp',
  'mlbb': '/services/mlbb-metro_bug3xb.webp',
  'netflix': '/services/ntflix_lvhcie.jpg',
  'roblox': '/services/roblox_qjppkn.webp',
  'wuthering': '/services/wuthering-update_phopww.webp',
};

// Core website image pattern fallback mapping
const CORE_PATTERN_FALLBACK_MAP: { [pattern: string]: string } = {
  'bob': '/website-core-images/bob.jpg',
  'borderlands': '/website-core-images/borderlandsM_ui9jak.jpg',
  'retro-digital': '/website-core-images/retro-digital-art-illustration-person-using-radio-technology_ct0yug.jpg',
  'radio-technology': '/website-core-images/retro-digital-art-illustration-person-using-radio-technology_ct0yug.jpg',
  'god-of-war': '/website-core-images/retro-digital-art-illustration-person-using-radio-technology_ct0yug.jpg',
  'ragnarok': '/website-core-images/retro-digital-art-illustration-person-using-radio-technology_ct0yug.jpg',
  'paisaje': '/website-core-images/retro-digital-art-illustration-person-using-radio-technology_ct0yug.jpg',
};

/**
 * Get the appropriate fallback image for a given image URL (Cloudinary or local)
 */
export const getFallbackImage = (imageUrl: string): string => {
  // Handle local service images
  if (imageUrl.startsWith('/services/')) {
    if (SERVICE_FALLBACK_MAP[imageUrl]) {
      return SERVICE_FALLBACK_MAP[imageUrl];
    }
    
    // Try pattern matching for service images
    const urlLower = imageUrl.toLowerCase();
    for (const [pattern, fallbackPath] of Object.entries(SERVICE_PATTERN_FALLBACK_MAP)) {
      if (urlLower.includes(pattern)) {
        return fallbackPath;
      }
    }
    
    // Default service fallback
    return '/services/BRAWL.jpg';
  }
  
  // Handle local core website images
  if (imageUrl.startsWith('/website-core-images/')) {
    if (CORE_FALLBACK_MAP[imageUrl]) {
      return CORE_FALLBACK_MAP[imageUrl];
    }
    
    // Try pattern matching for core images
    const urlLower = imageUrl.toLowerCase();
    for (const [pattern, fallbackPath] of Object.entries(CORE_PATTERN_FALLBACK_MAP)) {
      if (urlLower.includes(pattern)) {
        return fallbackPath;
      }
    }
    
    // Default core fallback
    return '/website-core-images/bob.jpg';
  }
  
  // Handle Cloudinary URLs
  if (imageUrl.includes('cloudinary.com')) {
    // First, try exact match
    if (CLOUDINARY_TO_LOCAL_MAP[imageUrl]) {
      return CLOUDINARY_TO_LOCAL_MAP[imageUrl];
    }
    
    // If no exact match, try pattern matching
    const urlLower = imageUrl.toLowerCase();
    for (const [pattern, fallbackPath] of Object.entries(GENERIC_FALLBACK_MAP)) {
      if (urlLower.includes(pattern)) {
        return fallbackPath;
      }
    }
    
    // Default fallback for Cloudinary images
    return '/games and offers images/league.webp';
  }
  
  // For any other local images (like /games and offers images/)
  if (imageUrl.startsWith('/')) {
    // Try pattern matching for any local image
    const urlLower = imageUrl.toLowerCase();
    for (const [pattern, fallbackPath] of Object.entries(GENERIC_FALLBACK_MAP)) {
      if (urlLower.includes(pattern)) {
        return fallbackPath;
      }
    }
    
    // Default local fallback
    return '/games and offers images/league.webp';
  }
  
  // Default fallback for any other URL
  return '/games and offers images/league.webp';
};

/**
 * Create image fallback configuration with error handling
 */
export const createImageFallback = (cloudinaryUrl: string, localPath?: string) => {
  const fallbackPath = localPath || getFallbackImage(cloudinaryUrl);
  
  return {
    src: cloudinaryUrl,
    fallback: fallbackPath,
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== fallbackPath) {
        console.log(`Image fallback triggered: ${cloudinaryUrl} -> ${fallbackPath}`);
        target.src = fallbackPath;
      }
    }
  };
};

/**
 * Check if Cloudinary is accessible
 */
export const isCloudinaryAccessible = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Get image with fallback - tries Cloudinary first, falls back to local
 */
export const getImageWithFallback = async (cloudinaryUrl: string, localPath?: string): Promise<string> => {
  // If it's not a Cloudinary URL, return as is
  if (!cloudinaryUrl.includes('cloudinary.com')) {
    return cloudinaryUrl;
  }
  
  // Check if Cloudinary is accessible
  const isAccessible = await isCloudinaryAccessible(cloudinaryUrl);
  
  if (!isAccessible) {
    console.log(`Cloudinary not accessible, using fallback: ${cloudinaryUrl}`);
    return localPath || getFallbackImage(cloudinaryUrl);
  }
  
  return cloudinaryUrl;
};

/**
 * React hook for image fallback with loading states
 */
export const useImageFallback = (cloudinaryUrl: string, localPath?: string) => {
  const [currentSrc, setCurrentSrc] = React.useState(cloudinaryUrl);
  const [hasError, setHasError] = React.useState(false);
  
  const handleError = React.useCallback(() => {
    if (!hasError) {
      const fallbackPath = localPath || getFallbackImage(cloudinaryUrl);
      console.log(`Image error, switching to fallback: ${cloudinaryUrl} -> ${fallbackPath}`);
      setCurrentSrc(fallbackPath);
      setHasError(true);
    }
  }, [cloudinaryUrl, localPath, hasError]);
  
  return {
    src: currentSrc,
    onError: handleError,
    hasError
  };
};

/**
 * Get background image style with fallback
 */
export const getBackgroundImageStyle = (imageUrl: string) => {
  return {
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };
};

/**
 * Create background image style with error handling
 */
export const createBackgroundImageStyle = (imageUrl: string, fallbackUrl?: string) => {
  const fallback = fallbackUrl || getFallbackImage(imageUrl);
  
  return {
    style: getBackgroundImageStyle(imageUrl),
    onError: (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
      const target = e.target as HTMLDivElement;
      if (target.style.backgroundImage !== `url("${fallback}")`) {
        target.style.backgroundImage = `url("${fallback}")`;
        console.log(`Background image fallback triggered: ${imageUrl} -> ${fallback}`);
      }
    }
  };
};
