import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language.toUpperCase() || 'EN');
  const location = useLocation();
  const languageRef = useRef<HTMLDivElement>(null);
  
  // Check if we're on a game page
  const isGamePage = location.pathname.startsWith('/game/');

  // Language options
  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'AR', name: 'العربية', flag: '🇩🇿' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' }
  ];

  const handleLanguageChange = (langCode: string) => {
    const languageMap: { [key: string]: string } = {
      'EN': 'en',
      'AR': 'ar',
      'FR': 'fr'
    };
    
    const lang = languageMap[langCode];
    if (lang) {
      i18n.changeLanguage(lang);
      setCurrentLanguage(langCode);
      setIsLanguageOpen(false);
      
      // Keep LTR layout for all languages including Arabic
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }
  };

  // Sync current language with i18n
  useEffect(() => {
    const currentLang = i18n.language.toUpperCase();
    setCurrentLanguage(currentLang === 'AR' ? 'AR' : currentLang === 'FR' ? 'FR' : 'EN');
    
    // Keep LTR layout for all languages including Arabic
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black/40 border-b border-gray-800/50 px-4 sm:px-6 py-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all duration-300 cursor-pointer group"
        >
          {/* Animated Logo Image */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40">
              <img 
                src="/website-core-images/bob.jpg"
                alt="Bob Store Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Rotating Ring Animation */}
            <div className="absolute -inset-1 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
            {/* Pulse Animation */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <span>Bob Store</span>
        </Link>

        {/* Desktop Navigation - Hidden on game pages */}
        {!isGamePage && (
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="text-sm flex items-center space-x-8">
              <a href="#trending" className="hover:text-cyan-400 transition-colors whitespace-nowrap">{t('navigation.trending')}</a>
              <a href="#game-reviews" className="hover:text-cyan-400 transition-colors whitespace-nowrap">{t('navigation.gameReviews')}</a>
              <a href="#reviews" className="hover:text-cyan-400 transition-colors whitespace-nowrap">{t('navigation.reviews')}</a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors whitespace-nowrap">{t('navigation.faq')}</a>
            </div>
          </nav>
        )}

        {/* Right Side Items */}
        <div className="flex items-center space-x-4">
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

          {/* Language Toggle */}
          <div className="relative" ref={languageRef}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300 cursor-pointer group border border-gray-600/30 hover:border-cyan-400/50 backdrop-blur-sm"
            >
              <Globe className="w-4 h-4 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </span>
              <ChevronDown className={`w-3 h-3 text-gray-300 group-hover:text-cyan-400 transition-all duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-black/80 backdrop-blur-md border border-gray-600/30 rounded-lg shadow-xl z-50">
                <div className="py-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-all duration-200 hover:bg-cyan-400/10 ${
                        currentLanguage === language.code 
                          ? 'text-cyan-400 bg-cyan-400/5' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                      {currentLanguage === language.code && (
                        <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
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
            {/* Mobile Navigation Links - Hidden on game pages */}
            {!isGamePage && (
              <div className="space-y-3">
                <a 
                  href="#trending" 
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.trending')}
                </a>
                <a 
                  href="#game-reviews" 
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.gameReviews')}
                </a>
                <a 
                  href="#reviews" 
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.reviews')}
                </a>
                <a 
                  href="#faq" 
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.faq')}
                </a>
              </div>
            )}
            
            {/* Mobile Language Toggle */}
            <div className="pt-4 border-t border-gray-700/50">
              <div className="space-y-2">
                <p className="text-sm text-gray-400 font-medium">Language</p>
                <div className="flex space-x-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                        currentLanguage === language.code 
                          ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' 
                          : 'bg-gray-800/50 text-gray-300 border border-gray-600/30 hover:bg-gray-700/50'
                      }`}
                    >
                      <span className="text-sm">{language.flag}</span>
                      <span className="text-xs font-medium">{language.code}</span>
                    </button>
                  ))}
                </div>
              </div>
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
