import React from 'react';

const Navigation: React.FC = () => {
  return (
    <header className="bg-black/40 border-b border-gray-800/50 px-6 py-3 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <div className="text-sm space-x-6">
            <a href="#trending" className="hover:text-cyan-400 transition-colors">Trending</a>
            <a href="#game-reviews" className="hover:text-cyan-400 transition-colors">Games Reviews</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </div>
        </nav>

        {/* Platform Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-sm">
            <span className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-gray-600 rounded"></span>
              <span>PC</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-blue-600 rounded"></span>
              <span>PlayStation</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-green-600 rounded"></span>
              <span>Xbox</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-red-600 rounded"></span>
              <span>Nintendo</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
