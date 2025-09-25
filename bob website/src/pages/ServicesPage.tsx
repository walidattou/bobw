import React, { useMemo } from 'react';
import { Zap, Shield, DollarSign, Star, Gamepad2, Smartphone, Monitor, Headphones } from 'lucide-react';
import Navigation from '../comps/Navigation';
import Footer from '../comps/Footer';

const ServicesPage: React.FC = () => {

  const services = useMemo(() => [
    {
      title: "Amazon Prime",
      description: "Premium streaming service with movies, series, and exclusive content",
      image: "/services/Amazone-Prime.webp",
      price: "€4.99/month",
      icon: Monitor,
      features: ["HD Streaming", "Exclusive Content", "Free Shipping", "Prime Gaming"]
    },
    {
      title: "Blood Strike",
      description: "Mobile battle royale game with intense combat and survival gameplay",
      image: "/services/BLOOD-STRIKE.webp",
      price: "€12.99",
      icon: Smartphone,
      features: ["Battle Royale", "Mobile Gaming", "Multiplayer", "Fast Paced"]
    },
    {
      title: "PUBG Mobile",
      description: "The ultimate battle royale experience on mobile devices",
      image: "/services/BOB-PUBG-2.webp",
      price: "€9.99",
      icon: Smartphone,
      features: ["100 Players", "Mobile Optimized", "Regular Updates", "Global Competition"]
    },
    {
      title: "Clash of Clans",
      description: "Build your village, raise a clan, and compete in epic Clan Wars",
      image: "/services/CLASH.webp",
      price: "€8.99",
      icon: Gamepad2,
      features: ["Base Building", "Clan Wars", "Strategy Game", "Social Gaming"]
    },
    {
      title: "Discord Nitro",
      description: "Enhanced Discord experience with premium features and perks",
      image: "/services/Discord-01.webp",
      price: "€4.99/month",
      icon: Headphones,
      features: ["HD Streaming", "Custom Emojis", "Server Boosts", "Profile Badges"]
    },
    {
      title: "eFootball",
      description: "The next generation of football gaming with realistic gameplay",
      image: "/services/efootball-finale3.webp",
      price: "€15.99",
      icon: Gamepad2,
      features: ["Realistic Graphics", "Official Teams", "Online Matches", "Career Mode"]
    },
    {
      title: "Fortnite",
      description: "Battle royale game with building mechanics and unique gameplay",
      image: "/services/FORTNITE.webp",
      price: "€15.99",
      icon: Gamepad2,
      features: ["Battle Royale", "Building System", "Cross Platform", "Regular Events"]
    },
    {
      title: "Free Fire",
      description: "Fast-paced battle royale game designed for mobile devices",
      image: "/services/FREE.webp",
      price: "€6.99",
      icon: Smartphone,
      features: ["10-Minute Matches", "Mobile Optimized", "Character System", "Regular Updates"]
    },
    {
      title: "Honor of Kings",
      description: "Mobile MOBA game with strategic team-based combat",
      image: "/services/honorfinal2025.webp",
      price: "€11.99",
      icon: Smartphone,
      features: ["MOBA Gameplay", "Team Strategy", "Mobile Gaming", "Competitive Play"]
    },
    {
      title: "Infinity Nikki",
      description: "Fashion and adventure game with stunning visuals and creativity",
      image: "/services/Infinity-01.webp",
      price: "€19.99",
      icon: Star,
      features: ["Fashion Design", "Adventure Mode", "Creative Gameplay", "Beautiful Graphics"]
    },
    {
      title: "Roblox",
      description: "Platform where you can create, share, and play millions of games",
      image: "/services/roblox.webp",
      price: "€8.99",
      icon: Gamepad2,
      features: ["Game Creation", "Social Platform", "Educational Games", "Virtual Economy"]
    },
    {
      title: "Wuthering Waves",
      description: "Open-world action RPG with stunning visuals and immersive gameplay",
      image: "/services/wuthering-update.webp",
      price: "€16.99",
      icon: Star,
      features: ["Open World", "Action RPG", "Stunning Graphics", "Character Collection"]
    }
  ], []);

  return (
    <div 
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: 'url("/website-core-images/paisaje-de-god-of-war-ragnarok-8580.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative h-80 sm:h-96 flex items-center justify-center px-4">
          <div className="text-center z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-cyan-500 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Discover our comprehensive range of gaming and digital services. From streaming subscriptions to mobile games, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Available Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Choose from our wide selection of premium gaming and digital services, all available at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 hover:border hover:border-cyan-500/30 backdrop-blur-sm flex flex-col"
                >
                  <div className="relative bg-gray-800">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-400 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-2 px-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-black/20 py-8 sm:py-16 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                We provide the best digital services with guaranteed quality and fast delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-red-500/50">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Instant Delivery</h3>
                <p className="text-gray-400 text-sm sm:text-base">Get your services delivered within minutes of payment confirmation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-cyan-500/50">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">100% Guaranteed</h3>
                <p className="text-gray-400 text-sm sm:text-base">All our services come with a full guarantee and customer support.</p>
              </div>
              
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-green-500/50">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Best Prices</h3>
                <p className="text-gray-400 text-sm sm:text-base">Competitive prices in Algeria with regular discounts and offers.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
