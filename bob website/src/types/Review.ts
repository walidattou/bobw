export interface Review {
  id: string;
  avatar: string;
  name: string;
  review: string;
  time: string;
  rating: number;
  image?: string; // Optional image URL for the review
  gameTitle?: string; // Optional game title if review is game-specific
  platform?: string; // Optional platform (PC, PlayStation, Xbox, etc.)
  verified?: boolean; // Whether the review is verified
  helpful?: number; // Number of helpful votes
  totalReviews?: number; // Total reviews by this user
}

export interface GameReview {
  id: string;
  title: string;
  image: string;
  price: string;
  discount?: string;
  rating: number;
  review: string;
  likes: number;
  verified: boolean;
  reviewer: {
    name: string;
    avatar: string;
    totalReviews: number;
  };
  gameInfo: {
    platform: string;
    genre: string;
    releaseDate: string;
  };
}

export interface ReviewDatabase {
  userReviews: Review[];
  gameReviews: GameReview[];
  totalReviews: number;
  averageRating: number;
}
