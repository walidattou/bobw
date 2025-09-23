import React, { useState } from 'react';
import type { Review, GameReview } from '../types/Review';
import { validateImageFile, generateImageUrl, generateAvatarFromName, formatReviewTime } from '../utils/reviewUtils';

interface ReviewManagerProps {
  onAddReview: (review: Review | GameReview) => void;
}

const ReviewManager: React.FC<ReviewManagerProps> = ({ onAddReview }) => {
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [reviewType, setReviewType] = useState<'user' | 'game'>('user');
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 5,
    gameTitle: '',
    platform: 'PC',
    genre: '',
    price: '',
    discount: '',
    image: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validation = validateImageFile(file);
      if (validation.valid) {
        setFormData(prev => ({
          ...prev,
          image: file
        }));
      } else {
        alert(validation.error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newReview: Review | GameReview = {
      id: `review-${Date.now()}`,
      avatar: generateAvatarFromName(formData.name),
      name: formData.name,
      review: formData.review,
      time: formatReviewTime(new Date()),
      rating: formData.rating,
      verified: true,
      helpful: 0,
      totalReviews: 1,
      ...(reviewType === 'game' ? {
        title: formData.gameTitle,
        image: formData.image ? generateImageUrl(`review-${Date.now()}`, formData.image.name) : 'bg-gradient-to-br from-gray-600 to-gray-800',
        price: formData.price,
        discount: formData.discount,
        likes: 0,
        reviewer: {
          name: formData.name,
          avatar: generateAvatarFromName(formData.name),
          totalReviews: 1
        },
        gameInfo: {
          platform: formData.platform,
          genre: formData.genre,
          releaseDate: new Date().toISOString().split('T')[0]
        }
      } : {
        image: formData.image ? generateImageUrl(`review-${Date.now()}`, formData.image.name) : undefined
      })
    };

    onAddReview(newReview);
    
    // Reset form
    setFormData({
      name: '',
      review: '',
      rating: 5,
      gameTitle: '',
      platform: 'PC',
      genre: '',
      price: '',
      discount: '',
      image: null
    });
    setIsAddingReview(false);
  };

  return (
    <div className="bg-black/40 rounded-lg p-6 backdrop-blur-sm border border-gray-800/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Review Manager</h3>
        <button
          onClick={() => setIsAddingReview(!isAddingReview)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          {isAddingReview ? 'Cancel' : 'Add Review'}
        </button>
      </div>

      {isAddingReview && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Review Type Selection */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Review Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="reviewType"
                  value="user"
                  checked={reviewType === 'user'}
                  onChange={(e) => setReviewType(e.target.value as 'user' | 'game')}
                  className="mr-2"
                />
                <span className="text-white">User Review</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="reviewType"
                  value="game"
                  checked={reviewType === 'game'}
                  onChange={(e) => setReviewType(e.target.value as 'user' | 'game')}
                  className="mr-2"
                />
                <span className="text-white">Game Review</span>
              </label>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          {/* Game-specific fields */}
          {reviewType === 'game' && (
            <>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Game Title</label>
                <input
                  type="text"
                  name="gameTitle"
                  value={formData.gameTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Platform</label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="PC">PC</option>
                    <option value="PlayStation 5">PlayStation 5</option>
                    <option value="Xbox Series X">Xbox Series X</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Genre</label>
                  <input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="$29.99"
                    className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Discount</label>
                  <input
                    type="text"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    placeholder="-50%"
                    className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </>
          )}

          {/* Image Upload */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Review Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            />
            {formData.image && (
              <p className="text-green-400 text-sm mt-1">Selected: {formData.image.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Add Review
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewManager;
