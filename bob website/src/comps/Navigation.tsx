import React, { useState } from 'react';
import { Monitor, Gamepad2, Smartphone, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/40 border-b border-gray-800/50 px-4 sm:px-6 py-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-xl font-bold text-white">
          Bob Store
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="text-sm space-x-6">
            <a href="#trending" className="hover:text-cyan-400 transition-colors">Trending</a>
            <a href="/services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#game-reviews" className="hover:text-cyan-400 transition-colors">Games Reviews</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </div>
        </nav>

        {/* Desktop Platform Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-4 lg:space-x-6 text-sm">
            <span className="flex items-center space-x-1 lg:space-x-2 hover:text-cyan-400 transition-colors cursor-pointer">
              <Monitor className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden lg:inline">PC</span>
            </span>
            <span className="flex items-center space-x-1 lg:space-x-2 hover:text-cyan-400 transition-colors cursor-pointer">
              <Gamepad2 className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden lg:inline">PSN</span>
            </span>
            <span className="flex items-center space-x-1 lg:space-x-2 hover:text-cyan-400 transition-colors cursor-pointer">
              <Gamepad2 className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden lg:inline">Xbox</span>
            </span>
            <span className="flex items-center space-x-1 lg:space-x-2 hover:text-cyan-400 transition-colors cursor-pointer">
              <Smartphone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden lg:inline">Mobile</span>
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
                href="/services" 
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
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
                <span className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors cursor-pointer py-2">
                  <Monitor className="w-5 h-5" />
                  <span>PC</span>
                </span>
                <span className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors cursor-pointer py-2">
                  <Gamepad2 className="w-5 h-5" />
                  <span>PSN</span>
                </span>
                <span className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors cursor-pointer py-2">
                  <Gamepad2 className="w-5 h-5" />
                  <span>Xbox</span>
                </span>
                <span className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors cursor-pointer py-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Mobile</span>
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
