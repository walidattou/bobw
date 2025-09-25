import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Star, Download, Shield, Headphones, ChevronDown, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../comps/Navigation';
import Footer from '../comps/Footer';
import LazyImage from '../comps/LazyImage';
import { userReviews } from '../data/reviewsDatabase';

const GamingMarketplace: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [reviewStartIndex, setReviewStartIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [visibleCards, setVisibleCards] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const cardsPerLoad = 6;

  // Memoize FAQ toggle handler
  const handleFAQToggle = useCallback((index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  }, [openFAQ]);



  // Auto-switch reviews every 10 seconds with cool animations
  useEffect(() => {
    // Reduce animation frequency on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const intervalTime = isMobile ? 15000 : 10000; // 15s on mobile, 10s on desktop
    
    const interval = setInterval(() => {
      setReviewStartIndex((prevIndex) => {
        // Move to next set of 6 reviews, cycling back to start when we reach the end
        const nextIndex = prevIndex + 6;
        return nextIndex >= userReviews.length ? 0 : nextIndex;
      });
      setAnimationKey(prev => prev + 1); // Trigger animation
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // Memoize FAQ data to prevent re-creation on every render
  const faqData = useMemo(() => [
    {
      question: "What services does Bob Store offer?",
      answer: "Bob Store is an online shop specializing in game recharges for PC and Android, streaming subscriptions (Shahid, Netflix), Discord subscriptions, Amazon Prime, and various digital services. We offer the cheapest prices in Algeria with guaranteed fast service."
    },
    {
      question: "Do you provide game recharges for PC and Android?",
      answer: "Yes! We provide game recharges for popular games like Roblox, Fortnite, and many others on both PC and Android platforms. We offer the most competitive prices in Algeria with instant delivery."
    },
    {
      question: "What streaming subscriptions do you offer?",
      answer: "We offer subscriptions for Shahid, Netflix, Amazon Prime, and other popular streaming services. All subscriptions come with a 100% guarantee and are delivered instantly to your account."
    },
    {
      question: "How fast is your service delivery?",
      answer: "We pride ourselves on fast service! Most orders are processed and delivered within minutes of payment confirmation. Our team works efficiently to ensure you get your digital products as quickly as possible."
    },
    {
      question: "What are your business hours?",
      answer: "We are available from 11:00 AM to 11:00 PM (11h-23h) every day. You can contact us during these hours for any inquiries or support needs."
    },
    {
      question: "Do you offer Discord subscriptions?",
      answer: "Yes! We offer Discord Nitro subscriptions for both your existing account or we can provide you with a new account. Choose the option that works best for you."
    },
    {
      question: "Can I get Amazon Prime subscriptions?",
      answer: "Absolutely! We provide Amazon Prime subscriptions that give you access to high-quality movies and series. Enjoy unlimited streaming with our guaranteed service."
    },
    {
      question: "How can I contact Bob Store for support?",
      answer: "You can reach us at bobstorebussiness@gmail.com or through our social media channels. We're available from 11h-23h and respond quickly to all inquiries."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, mobile payments, and other local payment options. Contact us to discuss the best payment method for your location."
    },
    {
      question: "Do you offer the cheapest prices in Algeria?",
      answer: "Yes! We are committed to offering the most competitive prices in Algeria. Our prices are regularly updated to ensure you get the best deals on all our services."
    }
  ], []);

  // Memoize game cards data to prevent re-creation on every render
  const gameCards = useMemo(() => [
    {
      id: "netflix",
      title: "Netflix subscriptions",
      platform: "PC (Steam)",
      price: "51.99 €",
      discount: "-80%",
      image: "/games and offers images/netflix.webp",
      bgColor: "bg-red-600",
      category: "subscriptions"
    },
    {
      id: "xbox-game-pass",
      title: "Xbox game pass subscriptions",
      platform: "PC (Steam)",
      price: "9.99 €",
      discount: "-50%",
      image: "/games and offers images/xbox game pass.webp",
      bgColor: "bg-blue-600",
      category: "subscriptions"
    },
    {
      id: "prime-video",
      title: "Prime video subscriptions",
      platform: "PC (Steam)",
      price: "16.59 €",
      discount: "-60%",
      image: "/games and offers images/prime video.webp",
      bgColor: "bg-cyan-500",
      category: "subscriptions"
    },
    {
      id: "mobile-legends",
      title: "Mobile legends",
      platform: "PC (Steam)",
      price: "17.99 €",
      discount: "-40%",
      image: "/games and offers images/league.webp",
      bgColor: "bg-orange-500",
      category: "pc-games"
    },
    {
      id: "genshin-impact",
      title: "Genshin impact",
      platform: "PC & Mac (Steam)",
      price: "17.99 €",
      discount: "-50%",
      image: "/games and offers images/Genshin-Impact-Logo.webp",
      bgColor: "bg-red-800",
      category: "pc-games"
    },
    {
      id: "pubg-mobile",
      title: "PUBG mobile",
      platform: "PC (Steam)",
      price: "13.99 €",
      discount: null,
      image: "/games and offers images/pubgmobile.webp",
      bgColor: "bg-purple-600",
      category: "apps"
    },
    {
      id: "wuthering-waves",
      title: "Wuthering waves",
      platform: "PC (Steam)",
      price: "31.99 €",
      discount: "-20%",
      image: "/games and offers images/wuthering waves - Copy.jpg",
      bgColor: "bg-gray-700",
      category: "pc-games"
    },
    {
      id: "efootball",
      title: "Efootball",
      platform: "PC (Steam)",
      price: "23.39 €",
      discount: "-67%",
      image: "/games and offers images/football.webp",
      bgColor: "bg-orange-600",
      category: "pc-games"
    },
    {
      id: "clash-of-clans",
      title: "Clash of clans",
      platform: "PC (Epic)",
      price: "9.99 €",
      discount: "-67%",
      image: "/games and offers images/clashofclans.webp",
      bgColor: "bg-teal-600",
      category: "apps"
    },
    {
      id: "blood-strike",
      title: "Blood Strike",
      platform: "Mobile",
      price: "12.99 €",
      discount: "-30%",
      image: "/games and offers images/blood strike.webp",
      bgColor: "bg-red-700",
      category: "apps"
    },
    {
      id: "discord-nitro",
      title: "Discord Nitro",
      platform: "PC & Mobile",
      price: "4.99 €",
      discount: "-25%",
      image: "/games and offers images/Discord-Nitro.webp",
      bgColor: "bg-indigo-600",
      category: "subscriptions"
    },
    {
      id: "infinity-nikki",
      title: "Infinity Nikki",
      platform: "PC & Mobile",
      price: "19.99 €",
      discount: "-40%",
      image: "/games and offers images/infinity nikki.webp",
      bgColor: "bg-pink-600",
      category: "apps"
    },
    {
      id: "roblox",
      title: "Roblox",
      platform: "PC & Mobile",
      price: "8.99 €",
      discount: "-35%",
      image: "/games and offers images/roblox.webp",
      bgColor: "bg-green-600",
      category: "apps"
    },
    {
      id: "free-fire",
      title: "Free Fire",
      platform: "Mobile",
      price: "6.99 €",
      discount: "-20%",
      image: "/games and offers images/feefire.webp",
      bgColor: "bg-yellow-600",
      category: "apps"
    },
    {
      id: "fortnite",
      title: "Fortnite",
      platform: "PC & Mobile",
      price: "15.99 €",
      discount: "-45%",
      image: "/games and offers images/fortnite.webp",
      bgColor: "bg-blue-700",
      category: "pc-games"
    },
    {
      id: "spotify",
      title: "Spotify Premium",
      platform: "PC & Mobile",
      price: "4.99 €",
      discount: "-30%",
      image: "/games and offers images/Spotify-Icon-White-Dark-Background-Logo.wine.svg",
      bgColor: "bg-green-600",
      category: "subscriptions"
    }
  ], []);

  // Filter games based on active filter
  const filteredGames = useMemo(() => {
    if (activeFilter === 'all') {
      return gameCards;
    }
    return gameCards.filter(game => game.category === activeFilter);
  }, [gameCards, activeFilter]);

  // Infinite scroll logic
  const currentGames = filteredGames.slice(0, visibleCards);
  const hasMoreCards = visibleCards < filteredGames.length;

  // Reset visible cards when filter changes
  useEffect(() => {
    setVisibleCards(6);
  }, [activeFilter]);

  // Load more cards function
  const loadMoreCards = useCallback(() => {
    if (isLoadingMore || !hasMoreCards) return;
    
    setIsLoadingMore(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCards(prev => Math.min(prev + cardsPerLoad, filteredGames.length));
      setIsLoadingMore(false);
    }, 500);
  }, [isLoadingMore, hasMoreCards, cardsPerLoad, filteredGames.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMoreCards && !isLoadingMore) {
          loadMoreCards();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    const loadMoreTrigger = document.getElementById('load-more-trigger');
    if (loadMoreTrigger) {
      observer.observe(loadMoreTrigger);
    }

    return () => {
      if (loadMoreTrigger) {
        observer.unobserve(loadMoreTrigger);
      }
    };
  }, [hasMoreCards, isLoadingMore, loadMoreCards]);

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All', count: gameCards.length },
    { id: 'apps', label: 'Apps', count: gameCards.filter(game => game.category === 'apps').length },
    { id: 'pc-games', label: 'PC Games', count: gameCards.filter(game => game.category === 'pc-games').length },
    { id: 'subscriptions', label: 'Subscriptions', count: gameCards.filter(game => game.category === 'subscriptions').length }
  ];

  return (
    <div 
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: 'url("/website-core-images/retro-digital-art-illustration-person-using-radio-technology.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay to make the background darker */}
      <div 
        className="absolute inset-0 bg-black/70"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(31, 41, 55, 0.8) 100%)'
        }}
      ></div>
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
      <Navigation />

      {/* Hero Section with Responsive Background Image */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 sm:h-80 lg:h-96">
          {/* Background image that scales properly on all devices */}
        <div 
            className="hero-background absolute inset-0 w-full h-full"
          style={{
              backgroundImage: 'url("/website-core-images/image.jpg")',
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
              minHeight: '100%',
              minWidth: '100%'
            }}
          />
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Trending Section */}
        <div id="trending" className="mb-6 sm:mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Trending</h2>
            <span className="ml-2 text-gray-400">›</span>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === option.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                }`}
              >
                <Filter className="w-4 h-4" />
                {option.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === option.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-600/50 text-gray-400'
                }`}>
                  {option.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Game Grid */}
        {/* Responsive Game Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {currentGames.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Link 
                to={`/game/${game.id}`}
                className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 hover:border hover:border-cyan-500/30 backdrop-blur-sm block"
              >
              <div className={`relative aspect-[5/3] ${game.bgColor}`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <LazyImage 
                    src={game.image} 
                    alt={game.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      game.id === 'mobile-legends' ? 'object-bottom' : 
                      game.id === 'pubg-mobile' ? 'object-bottom' : 
                      'object-center'
                    }`}
                    fetchPriority={index < 3 ? "high" : "low"}
                  />
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <h3 className="font-semibold text-sm text-white truncate">{game.title}</h3>
                <span className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                  See More
                </span>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Infinite Scroll Loading */}
        {hasMoreCards && (
          <div id="load-more-trigger" className="flex justify-center items-center py-8">
            {isLoadingMore ? (
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border-2 border-gray-500 border-t-cyan-400 rounded-full animate-spin"></div>
                <span className="text-gray-400 text-sm">Loading more games...</span>
              </div>
            ) : (
              <button
                onClick={loadMoreCards}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Load More Games
              </button>
            )}
          </div>
        )}

        {/* Games Count Info */}
        <div className="text-center text-gray-400 text-sm mb-8">
          Showing {currentGames.length} of {filteredGames.length} games
        </div>

        {/* Footer Features */}
        <div className="bg-black/30 border border-gray-800/50 rounded-lg mb-8 sm:mb-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 py-6">
            {/* Super Fast */}
            <div className="flex items-center space-x-3 sm:border-r sm:border-gray-700 sm:pr-6">
              <div className="text-red-500 flex-shrink-0">
                <Download className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg drop-shadow-red-500/50" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-white text-base sm:text-lg">Super fast</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Instant digital download</p>
              </div>
            </div>

            {/* Reliable & Safe */}
            <div className="flex items-center space-x-3 sm:border-r sm:border-gray-700 sm:pr-6">
              <div className="text-red-500 flex-shrink-0">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg drop-shadow-red-500/50" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-white text-base sm:text-lg">Reliable & safe</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Over 20,000 games</p>
              </div>
            </div>

            {/* Customer Support */}
            <div className="flex items-center space-x-3 sm:border-r sm:border-gray-700 sm:pr-6">
              <div className="text-red-500 flex-shrink-0">
                <Headphones className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg drop-shadow-red-500/50" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-white text-base sm:text-lg">Customer support</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Human support 24/7</p>
              </div>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center space-x-3">
              <div className="text-green-500 flex-shrink-0">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-green-500 text-base sm:text-lg">Trustpilot</h3>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-2 h-2 sm:w-3 sm:h-3 fill-current text-green-400" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">777,543 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Reviews Section */}
        <div id="reviews" className="mb-4 sm:mb-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">What Our Gamers Say</h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-current text-yellow-400" />
              ))}
              <span className="text-xl font-bold ml-2">4.9/5</span>
            </div>
            <div className="mt-6">
              <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 transition-all transform text-sm sm:text-base">
                Join 2M+ Happy Gamers
              </div>
            </div>
          </div>

          {/* Review Cards with Cool Animations */}
          <div className="relative min-h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={animationKey}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  rotateX: window.innerWidth < 768 ? 0 : -15,
                  y: 50
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateX: 0,
                  y: 0
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8,
                  rotateX: window.innerWidth < 768 ? 0 : 15,
                  y: -50
                }}
                transition={{ 
                  duration: window.innerWidth < 768 ? 0.4 : 0.8,
                  ease: [0.4, 0.0, 0.2, 1],
                  staggerChildren: window.innerWidth < 768 ? 0.05 : 0.1
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              >
                {userReviews.slice(reviewStartIndex, reviewStartIndex + 6).map((review, index) => (
                  <motion.div
                    key={`${reviewStartIndex}-${index}`}
                    initial={{ 
                      opacity: 0, 
                      y: 30,
                      scale: 0.9,
                      rotateY: -10
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      rotateY: 0
                    }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                    }}
                    className="bg-black/40 rounded-xl p-4 sm:p-6 hover:bg-black/60 transition-all duration-300 border-none hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm min-h-[200px] flex flex-col cursor-pointer"
                  >
                    <motion.div 
                      className="flex items-center mb-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-cyan-500/50"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                    {review.image ? (
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    ) : (
                          <div className={`w-full h-full bg-gradient-to-r ${review.avatarGradient || 'from-cyan-400 to-cyan-600'} flex items-center justify-center text-white font-bold text-lg`}>
                    {review.avatar}
                      </div>
                    )}
                      </motion.div>
                  <div className="ml-4 flex-1">
                        <motion.h4 
                          className="font-bold text-white"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {review.name}
                        </motion.h4>
                        <motion.p 
                          className="text-gray-400 text-sm"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          {review.totalReviews} reviews
                        </motion.p>
                  </div>
                      <motion.div 
                        className="flex space-x-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      >
                    {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={star}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: index * 0.1 + 0.5 + star * 0.05,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            <Star className={`w-4 h-4 ${star <= review.rating ? 'fill-current text-yellow-400' : 'text-gray-600'}`} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                    <motion.p 
                      className="text-gray-300 mb-4 leading-relaxed flex-grow"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      {review.review}
                    </motion.p>
                    <motion.div 
                      className="flex justify-between items-center text-xs text-gray-500 mt-auto"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.1, color: "#06b6d4" }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {review.helpful} helpful votes
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.1, color: "#06b6d4" }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {review.time}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Featured Game Banner - Full Width */}
      <div id="featured" className="relative overflow-hidden my-8 sm:my-16">
        <div 
          className="relative h-48 sm:h-64 md:h-80 lg:h-[28rem] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/website core iamges/borderlandsM.jpg")',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-32 sm:h-32 bg-red-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-12 h-12 sm:w-24 sm:h-24 bg-red-400/20 rounded-full blur-lg"></div>
        </div>
      </div>

      {/* Gamer Reviews Section Title */}
      <div id="game-reviews" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex items-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold">Gamer reviews</h2>
          <span className="ml-2 text-gray-400">›</span>
        </div>

        {/* Game Review Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {useMemo(() => [
            {
              title: "Genshin Impact",
              image: "/games and offers images/Genshin-Impact-Logo.webp",
              user: "TravelerPro",
              review: "Amazing open-world RPG with stunning visuals and engaging combat. The gacha system can be expensive but the free content is substantial. Love exploring Teyvat!",
              likes: 47,
              verified: true
            },
            {
              title: "PUBG Mobile",
              image: "/games and offers images/pubgmobile.webp",
              user: "BattleRoyaleKing",
              review: "Best mobile battle royale game out there! Graphics are incredible and the gameplay is smooth. Perfect for quick matches during breaks.",
              likes: 32,
              verified: true
            },
            {
              title: "Wuthering Waves",
              image: "/games and offers images/wuthering waves - Copy.jpg",
              user: "WaveRider",
              review: "Incredible action RPG with fluid combat mechanics. The character designs are beautiful and the story is engaging. Highly recommend for anime game fans!",
              likes: 28,
              verified: true
            }
          ], []).map((gameReview, index) => (
            <div key={index} className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 flex-1 backdrop-blur-sm">
              {/* Game Image Header */}
              <div className="relative h-36 bg-gray-800 flex items-end p-3">
                <img 
                  src={gameReview.image} 
                  alt={gameReview.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg">{gameReview.title}</h3>
                </div>
              </div>

              {/* Review Content */}
              <div className="p-3">
                {/* User Info */}
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <span className="text-white text-xs font-bold">
                      {gameReview.user.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-2 flex-1">
                    <span className="text-white text-xs font-medium">{gameReview.user}</span>
                    {gameReview.verified && (
                      <span className="ml-1 text-xs text-green-400">✓</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span className="text-xs">{gameReview.likes}</span>
                    </button>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-xs leading-relaxed">
                  {gameReview.review}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FAQs Section */}
      <div id="faq" className="bg-black/20 py-8 sm:py-16 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">FAQs</h2>
          
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:border hover:border-cyan-500/30 backdrop-blur-sm">
                <div 
                  className="p-4 sm:p-5 cursor-pointer"
                  onClick={() => handleFAQToggle(index)}
                >
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium text-base sm:text-lg pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`text-gray-400 text-lg sm:text-xl transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </div>
                {openFAQ === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <div className="border-t border-gray-700 pt-3 sm:pt-4">
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div id="newsletter" className="bg-black/20 py-8 sm:py-12 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="text-cyan-500 flex-shrink-0">
              <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Don't miss any offers and promotions!</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                And be the first to receive our private offers, newsletters and deals of the week
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default GamingMarketplace;