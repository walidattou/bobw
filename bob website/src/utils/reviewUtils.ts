import type { Review, GameReview } from '../types/Review';

// Image upload and management utilities
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  
  if (file.size > maxSize) {
    return { valid: false, error: 'Image size must be less than 5MB' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Only JPEG, PNG, and WebP images are allowed' };
  }
  
  return { valid: true };
};

export const generateImageUrl = (reviewId: string, fileName: string): string => {
  return `/images/reviews/${reviewId}/${fileName}`;
};

export const generateAvatarFromName = (name: string): string => {
  return name.charAt(0).toUpperCase();
};

export const formatReviewTime = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  
  if (diffInDays > 0) {
    return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
  } else if (diffInHours > 0) {
    return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
  } else if (diffInMinutes > 0) {
    return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
  } else {
    return 'Just now';
  }
};

export const calculateAverageRating = (reviews: (Review | GameReview)[]): number => {
  if (reviews.length === 0) return 0;
  
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((totalRating / reviews.length) * 10) / 10;
};

export const getRatingDistribution = (reviews: (Review | GameReview)[]): Record<number, number> => {
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
  reviews.forEach(review => {
    distribution[review.rating] = (distribution[review.rating] || 0) + 1;
  });
  
  return distribution;
};

export const sortReviewsBy = (
  reviews: (Review | GameReview)[], 
  sortBy: 'newest' | 'oldest' | 'rating' | 'helpful'
): (Review | GameReview)[] => {
  const sortedReviews = [...reviews];
  
  switch (sortBy) {
    case 'newest':
      // In a real app, you'd sort by actual date
      return sortedReviews.reverse();
    case 'oldest':
      return sortedReviews;
    case 'rating':
      return sortedReviews.sort((a, b) => b.rating - a.rating);
    case 'helpful':
      return sortedReviews.sort((a, b) => {
        const aHelpful = 'helpful' in a ? a.helpful || 0 : 0;
        const bHelpful = 'helpful' in b ? b.helpful || 0 : 0;
        return bHelpful - aHelpful;
      });
    default:
      return sortedReviews;
  }
};

export const filterReviewsByRating = (
  reviews: (Review | GameReview)[], 
  minRating: number
): (Review | GameReview)[] => {
  return reviews.filter(review => review.rating >= minRating);
};

export const searchReviews = (
  reviews: (Review | GameReview)[], 
  query: string
): (Review | GameReview)[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return reviews.filter(review => {
    const reviewText = review.review.toLowerCase();
    const name = 'name' in review ? review.name.toLowerCase() : '';
    const title = 'title' in review ? review.title.toLowerCase() : '';
    
    return reviewText.includes(lowercaseQuery) || 
           name.includes(lowercaseQuery) || 
           title.includes(lowercaseQuery);
  });
};

// Export review data as JSON for easy pasting
export const exportReviewsAsJSON = (reviews: (Review | GameReview)[]): string => {
  return JSON.stringify(reviews, null, 2);
};

// Import reviews from JSON
export const importReviewsFromJSON = (jsonString: string): (Review | GameReview)[] => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing reviews JSON:', error);
    return [];
  }
};

// Generate sample review data for testing
export const generateSampleReview = (): Review => {
  const names = ['Alex', 'Maria', 'James', 'Sarah', 'David', 'Lisa', 'Chris', 'Emma'];
  const reviews = [
    'Amazing service! Fast delivery and great prices.',
    'Love this platform! Never had any issues with game keys.',
    'Excellent customer support and instant delivery.',
    'Great deals and reliable service. Highly recommended!',
    'Perfect for building my game library on a budget.',
    'The loyalty program is fantastic! Great rewards.',
    'Been using this for years. Always satisfied with purchases.',
    'Quick and easy. Best place to buy digital games!'
  ];
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
  const randomRating = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
  
  return {
    id: `review-${Date.now()}`,
    avatar: generateAvatarFromName(randomName),
    name: randomName,
    review: randomReview,
    time: formatReviewTime(new Date()),
    rating: randomRating,
    verified: Math.random() > 0.3, // 70% chance of being verified
    helpful: Math.floor(Math.random() * 20),
    totalReviews: Math.floor(Math.random() * 100) + 1
  };
};
