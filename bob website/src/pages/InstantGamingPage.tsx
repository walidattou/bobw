import React from 'react';
import { Star, Download, Shield, Headphones } from 'lucide-react';
import Navigation from '../comps/Navigation';
import Footer from '../comps/Footer';
import { userReviews } from '../data/reviewsDatabase';

const GamingMarketplace: React.FC = () => {
  const gameCards = [
    {
      title: "Borderlands 3",
      platform: "PC (Steam)",
      price: "51.99 €",
      discount: "-80%",
      image: "/games and offers images/netflix.webp",
      bgColor: "bg-red-600"
    },
    {
      title: "Realm of Dreams",
      platform: "PC (Steam)",
      price: "9.99 €",
      discount: "-50%",
      image: "/games and offers images/pubg-battlegrounds-19vwb.webp",
      bgColor: "bg-blue-600"
    },
    {
      title: "Voyagers of Nera",
      platform: "PC (Steam)",
      price: "16.59 €",
      discount: "-60%",
      image: "/api/placeholder/300/400",
      bgColor: "bg-cyan-500"
    },
    {
      title: "Down to City",
      platform: "PC (Steam)",
      price: "17.99 €",
      discount: "-40%",
      image: "/api/placeholder/300/400",
      bgColor: "bg-orange-500"
    },
    {
      title: "Silksong",
      platform: "PC & Mac (Steam)",
      price: "17.99 €",
      discount: "-50%",
      image: "/api/placeholder/300/400",
      bgColor: "bg-red-800"
    },
    {
      title: "Rayman",
      platform: "PC (Steam)",
      price: "13.99 €",
      discount: null,
      image: "/api/placeholder/300/400",
      bgColor: "bg-purple-600"
    },
    {
      title: "Hell-US",
      platform: "PC (Steam)",
      price: "31.99 €",
      discount: "-20%",
      image: "/api/placeholder/300/400",
      bgColor: "bg-gray-700"
    },
    {
      title: "IGNITE",
      platform: "PC (Steam)",
      price: "23.39 €",
      discount: "-67%",
      image: "/api/placeholder/300/400",
      bgColor: "bg-orange-600"
    },
    {
      title: "Planet Coaster 2: Scenery Pack",
      platform: "PC (Epic)",
      price: "9.99 €",
      discount: "-67%",
      image: "/api/placeholder/300/400",
      bgColor: "bg-teal-600"
    }
  ];

  return (
    <div 
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)'
      }}
    >
      <Navigation />

      {/* Hero Section with Sloped Design */}
      <section className="relative overflow-hidden">
        <div 
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 relative"
          style={{
            background: 'linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-16 flex items-center justify-center relative z-10">
            {/* Center - EA FC25 Logo and Text */}
            <div className="text-center">
              <div className="mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg drop-shadow-cyan-500/50">EA</span>
                <span className="text-4xl font-bold ml-2 drop-shadow-lg drop-shadow-cyan-500/30">FC25</span>
              </div>
              <h1 className="text-5xl font-bold mb-2">PAY LESS</h1>
              <p className="text-xl text-gray-300">WITH PSN CARDS</p>
            </div>

            {/* Stadium Background Effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-900/30 to-red-900/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Trending Section */}
        <div id="trending" className="flex items-center mb-8">
          <h2 className="text-2xl font-bold">Trending</h2>
          <span className="ml-2 text-gray-400">›</span>
        </div>

        {/* Game Grid */}
        <div className="space-y-4 mb-12">
          {/* Row 1 */}
          <div className="flex gap-4">
            {gameCards.slice(0, 3).map((game, index) => (
              <div key={index} className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 cursor-pointer flex-1 hover:shadow-lg hover:shadow-cyan-500/20 hover:border hover:border-cyan-500/30 backdrop-blur-sm">
                <div className={`relative h-36 ${game.bgColor}`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {index <= 1 ? (
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-16 bg-black/40 rounded"></div>
                    )}
                </div>
                {game.discount && (
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded shadow-lg shadow-red-500/50">
                    {game.discount}
                  </div>
                )}
              </div>
                <div className="p-3 flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white truncate">{game.title}</h3>
                  <span className="text-sm font-bold text-white">{game.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="flex gap-4">
            {gameCards.slice(3, 6).map((game, index) => (
              <div key={index + 3} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer flex-1">
                <div className={`relative h-36 ${game.bgColor}`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-16 bg-black/40 rounded"></div>
                  </div>
                  {game.discount && (
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded shadow-lg shadow-red-500/50">
                      {game.discount}
                    </div>
                  )}
                </div>
                <div className="p-3 flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white truncate">{game.title}</h3>
                  <span className="text-sm font-bold text-white">{game.price}</span>
              </div>
            </div>
          ))}
          </div>
          
          {/* Row 3 */}
          <div className="flex gap-4">
            {gameCards.slice(6, 9).map((game, index) => (
              <div key={index + 6} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer flex-1">
                <div className={`relative h-36 ${game.bgColor}`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-16 bg-black/40 rounded"></div>
                  </div>
                  {game.discount && (
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded shadow-lg shadow-red-500/50">
                      {game.discount}
                    </div>
                  )}
                </div>
                <div className="p-3 flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white truncate">{game.title}</h3>
                  <span className="text-sm font-bold text-white">{game.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Features */}
        <div className="bg-black/30 border border-gray-800/50 rounded-lg mb-12 backdrop-blur-sm">
          <div className="flex items-center justify-between px-8 py-6">
            {/* Super Fast */}
            <div className="flex items-center space-x-3 border-r border-gray-700 pr-8">
              <div className="text-red-500">
                <Download className="w-8 h-8 drop-shadow-lg drop-shadow-red-500/50" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Super fast</h3>
                <p className="text-gray-400 text-sm">Instant digital download</p>
              </div>
            </div>

            {/* Reliable & Safe */}
            <div className="flex items-center space-x-3 border-r border-gray-700 pr-8">
              <div className="text-red-500">
                <Shield className="w-8 h-8 drop-shadow-lg drop-shadow-red-500/50" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Reliable & safe</h3>
                <p className="text-gray-400 text-sm">Over 20,000 games</p>
              </div>
            </div>

            {/* Customer Support */}
            <div className="flex items-center space-x-3 pr-8">
              <div className="text-red-500">
                <Headphones className="w-8 h-8 drop-shadow-lg drop-shadow-red-500/50" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Customer support</h3>
                <p className="text-gray-400 text-sm">Human support 24/7</p>
              </div>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center space-x-3">
              <div className="text-green-500">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-green-500 text-lg">Trustpilot</h3>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-current text-green-400" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">777,543 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-orders Section */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">Coming soon</h2>
            <span className="ml-2 text-gray-400">›</span>
          </div>

          {/* Coming Soon Grid */}
          <div className="flex gap-4 mb-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 cursor-pointer flex-1 hover:shadow-lg hover:shadow-cyan-500/20 hover:border hover:border-cyan-500/30 backdrop-blur-sm">
                <div className="relative h-36 bg-gradient-to-br from-slate-600 to-slate-800">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-semibold">Coming Soon</span>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white truncate">Pre-order Game {index + 1}</h3>
                  <span className="text-sm font-bold text-white">Pre-order</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Gamers Say</h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-current text-yellow-400" />
              ))}
              <span className="text-xl font-bold ml-2">4.9/5</span>
            </div>
            <p className="text-gray-400 text-lg">Based on 1,555,579 verified reviews</p>
            <div className="mt-6">
              <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 transition-all transform">
                Join 2M+ Happy Gamers
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userReviews.slice(0, 6).map((review, index) => (
              <div key={index} className="bg-black/40 rounded-xl p-6 hover:bg-black/60 transition-all duration-300 border-none hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-cyan-500/50">
                    {review.image ? (
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                    {review.avatar}
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.totalReviews} reviews</p>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-current text-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{review.review}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{review.helpful} helpful votes</span>
                  <span>{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Featured Game Banner - Full Width */}
      <div id="featured" className="relative overflow-hidden my-16">
        <div 
          className="relative h-[28rem] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/website core iamges/borderlandsM.jpg")',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
          }}
        >

          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-red-400/20 rounded-full blur-lg"></div>
        </div>
      </div>

      {/* Gamer Reviews Section Title */}
      <div id="game-reviews" className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-bold">Gamer reviews</h2>
          <span className="ml-2 text-gray-400">›</span>
        </div>

        {/* Game Review Cards - Flex Layout */}
        <div className="flex gap-4 mb-16">
          {[
            {
              title: "HELLDIVERS",
              image: "bg-gradient-to-br from-yellow-600 via-orange-500 to-red-600",
              user: "Commander Jake",
              review: "I was looking for just this type of game. It's really fun to play, but sometimes it can annoying. But what great coop!",
              likes: 15,
              verified: true
            },
            {
              title: "The SIMS 3",
              image: "bg-gradient-to-br from-green-400 to-blue-500",
              user: "SimMaster2024",
              review: "Wouldn't let me save my game. Then I uninstalled and downloaded a few more. Says I need to buy it to play.",
              likes: 8,
              verified: false
            },
            {
              title: "Monster Supercross 3",
              image: "bg-gradient-to-br from-blue-600 via-purple-600 to-red-500",
              user: "RacerPro",
              review: "Great game, it's not bad great graphics. You have to practice to understand how to jump and land in the right place.",
              likes: 23,
              verified: true
            }
          ].map((gameReview, index) => (
            <div key={index} className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 flex-1 backdrop-blur-sm">
              {/* Game Image Header */}
              <div className={`relative h-36 ${gameReview.image} flex items-end p-3`}>
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
      <div id="faq" className="bg-black/20 py-16 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          
          <div className="space-y-4">
            {[
              "What is Instant Gaming and how does it work?",
              "What kind of products can I buy on Instant Gaming?",
              "Why is Instant Gaming not a marketplace?",
              "Does Instant Gaming also sell Video Games DLC, Gift Card and Subscriptions?",
              "How does Instant Gaming offer such low prices?",
              "What payment methods can I use to buy on Instant Gaming?",
              "Is Instant Gaming a legitimate and trustworthy website?",
              "How and when can I contact Instant Gaming?"
            ].map((question, index) => (
              <div key={index} className="bg-black/40 rounded-lg p-5 hover:bg-black/60 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 hover:border hover:border-cyan-500/30 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium text-lg">{question}</h3>
                  <span className="text-gray-400 text-xl">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div id="newsletter" className="bg-black/20 py-12 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-8">
            <div className="text-cyan-500">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Don't miss any offers and promotions!</h3>
              <p className="text-gray-400">
                And be the first to receive our private offers, newsletters and deals of the week
              </p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 transform">
              Sign Up!
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GamingMarketplace;