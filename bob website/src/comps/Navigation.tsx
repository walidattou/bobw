import React, { useState } from 'react';
import { Monitor, Smartphone, Menu, X } from 'lucide-react';
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/40 border-b border-gray-800/50 px-4 sm:px-6 py-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all duration-300 cursor-pointer"
        >
          Bob Store
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="text-sm space-x-6">
            <a href="#trending" className="hover:text-cyan-400 transition-colors">Trending</a>
            <a href="#game-reviews" className="hover:text-cyan-400 transition-colors">Games Reviews</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </div>
        </nav>

        {/* Desktop Platform Icons */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-3 lg:space-x-4">
            <span className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group border border-blue-500/30 hover:border-blue-500/50">
              <Monitor className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 group-hover:text-blue-300" />
              <span className="text-sm lg:text-base font-medium text-blue-400 group-hover:text-blue-300">PC</span>
            </span>
            <span className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300 cursor-pointer group border border-blue-600/30 hover:border-blue-600/50">
              <FaPlaystation className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 group-hover:text-blue-500" />
              <span className="text-sm lg:text-base font-medium text-blue-600 group-hover:text-blue-500">PSN</span>
            </span>
            <span className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-all duration-300 cursor-pointer group border border-green-500/30 hover:border-green-500/50">
              <FaXbox className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 group-hover:text-green-400" />
              <span className="text-sm lg:text-base font-medium text-green-500 group-hover:text-green-400">Xbox</span>
            </span>
            <span className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 cursor-pointer group border border-purple-500/30 hover:border-purple-500/50">
              <Smartphone className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400 group-hover:text-purple-300" />
              <span className="text-sm lg:text-base font-medium text-purple-400 group-hover:text-purple-300">Mobile</span>
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 border-t border-gray-800/50 backdrop-blur-md">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <a 
                href="#trending" 
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Trending
              </a>
              <a 
                href="#game-reviews" 
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Games Reviews
              </a>
              <a 
                href="#reviews" 
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#faq" 
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
            
            {/* Mobile Platform Icons */}
            <div className="pt-4 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-3">
                <span className="flex items-center space-x-2 px-3 py-3 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group border border-blue-500/30 hover:border-blue-500/50">
                  <Monitor className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  <span className="font-medium text-blue-400 group-hover:text-blue-300">PC</span>
                </span>
                <span className="flex items-center space-x-2 px-3 py-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300 cursor-pointer group border border-blue-600/30 hover:border-blue-600/50">
                  <FaPlaystation className="w-6 h-6 text-blue-600 group-hover:text-blue-500" />
                  <span className="font-medium text-blue-600 group-hover:text-blue-500">PSN</span>
                </span>
                <span className="flex items-center space-x-2 px-3 py-3 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-all duration-300 cursor-pointer group border border-green-500/30 hover:border-green-500/50">
                  <FaXbox className="w-6 h-6 text-green-500 group-hover:text-green-400" />
                  <span className="font-medium text-green-500 group-hover:text-green-400">Xbox</span>
                </span>
                <span className="flex items-center space-x-2 px-3 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 cursor-pointer group border border-purple-500/30 hover:border-purple-500/50">
                  <Smartphone className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  <span className="font-medium text-purple-400 group-hover:text-purple-300">Mobile</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
