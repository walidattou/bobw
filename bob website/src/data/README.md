# Review Database System

This directory contains a comprehensive review database system for the Instant Gaming website.

## Files Overview

### `reviewsDatabase.ts`
- Main database file containing all review data
- Includes both user reviews and game-specific reviews
- Provides helper functions for database operations
- Contains sample data to get you started

### `reviewTemplate.json`
- JSON template for adding new reviews
- Use this format when pasting your review data
- Copy the structure and replace with your actual review data

### `Review.ts` (in types folder)
- TypeScript interfaces defining the structure of review data
- Ensures type safety across the application

### `reviewUtils.ts` (in utils folder)
- Utility functions for managing reviews
- Image validation and processing
- Review sorting, filtering, and search functions

### `ReviewManager.tsx` (in components folder)
- React component for managing reviews
- Provides a UI for adding, editing, and deleting reviews
- Handles image uploads and form validation

## How to Add Your Reviews

### Method 1: Direct Database Editing
1. Open `reviewsDatabase.ts`
2. Add your reviews to the `userReviews` or `gameReviews` arrays
3. Follow the existing format and structure
4. Make sure to include all required fields

### Method 2: JSON Import
1. Use the `reviewTemplate.json` as a starting point
2. Copy the structure and replace with your data
3. Use the `importReviewsFromJSON` function from `reviewUtils.ts`
4. Add the imported reviews to the database

### Method 3: Using the Review Manager Component
1. Import and use the `ReviewManager` component in your app
2. Use the UI to add reviews with image uploads
3. The component handles validation and formatting automatically

## Review Data Structure

### User Review
```typescript
{
  id: string;           // Unique identifier
  avatar: string;       // Single character for avatar
  name: string;         // Reviewer name
  review: string;       // Review text
  time: string;         // Time ago (e.g., "1 week ago")
  rating: number;       // 1-5 star rating
  image?: string;       // Optional image URL
  verified?: boolean;   // Whether review is verified
  helpful?: number;     // Number of helpful votes
  totalReviews?: number; // Total reviews by this user
}
```

### Game Review
```typescript
{
  id: string;
  title: string;        // Game title
  image: string;        // CSS gradient or image URL
  price: string;        // Game price
  discount?: string;    // Discount percentage
  rating: number;       // 1-5 star rating
  review: string;       // Review text
  likes: number;        // Number of likes
  verified: boolean;    // Whether review is verified
  reviewer: {           // Reviewer information
    name: string;
    avatar: string;
    totalReviews: number;
  };
  gameInfo: {           // Game information
    platform: string;
    genre: string;
    releaseDate: string;
  };
}
```

## Image Management

### Supported Formats
- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)

### Size Limits
- Maximum file size: 5MB
- Recommended dimensions: 800x600px or similar

### Storage
- Images should be stored in `/public/images/reviews/` directory
- Use the `generateImageUrl` utility function for consistent naming
- Consider using a CDN for production

## Helper Functions

### Database Operations
- `getReviewById(id)` - Get a specific review
- `getReviewsByRating(rating)` - Filter by rating
- `getVerifiedReviews()` - Get only verified reviews
- `getRecentReviews(days)` - Get recent reviews
- `addReview(review)` - Add a new review
- `updateReview(id, updates)` - Update existing review
- `deleteReview(id)` - Delete a review

### Utility Functions
- `validateImageFile(file)` - Validate uploaded images
- `generateImageUrl(id, filename)` - Generate consistent image URLs
- `formatReviewTime(date)` - Format dates as "time ago"
- `calculateAverageRating(reviews)` - Calculate average rating
- `sortReviewsBy(reviews, criteria)` - Sort reviews
- `searchReviews(reviews, query)` - Search reviews

## Usage Examples

### Adding a New User Review
```typescript
import { addReview } from './data/reviewsDatabase';
import { Review } from './types/Review';

const newReview: Review = {
  id: 'review-123',
  avatar: 'J',
  name: 'John Doe',
  review: 'Great service and fast delivery!',
  time: '2 days ago',
  rating: 5,
  verified: true,
  helpful: 0,
  totalReviews: 1
};

addReview(newReview);
```

### Adding a New Game Review
```typescript
import { addReview } from './data/reviewsDatabase';
import { GameReview } from './types/Review';

const newGameReview: GameReview = {
  id: 'game-review-123',
  title: 'Elden Ring',
  image: 'bg-gradient-to-br from-yellow-600 to-orange-600',
  price: '$39.99',
  discount: '-33%',
  rating: 5,
  review: 'Amazing game with incredible world design!',
  likes: 0,
  verified: true,
  reviewer: {
    name: 'SoulsFan',
    avatar: 'S',
    totalReviews: 1
  },
  gameInfo: {
    platform: 'PC',
    genre: 'Action RPG',
    releaseDate: '2022-02-25'
  }
};

addReview(newGameReview);
```

## Best Practices

1. **Unique IDs**: Always use unique identifiers for reviews
2. **Image Optimization**: Compress images before uploading
3. **Validation**: Use the provided validation functions
4. **Consistency**: Follow the existing data structure
5. **Backup**: Keep backups of your review data
6. **Testing**: Test with sample data before adding real reviews

## Troubleshooting

### Common Issues
- **Type Errors**: Make sure all required fields are included
- **Image Upload**: Check file size and format restrictions
- **Duplicate IDs**: Ensure each review has a unique ID
- **Missing Fields**: Verify all required fields are present

### Getting Help
- Check the TypeScript interfaces for required fields
- Use the validation functions to catch errors early
- Test with the sample data first
- Use the ReviewManager component for guided input
