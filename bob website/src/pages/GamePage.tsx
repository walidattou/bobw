import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Download, Shield, Headphones, Gamepad2, Smartphone, Monitor, Headphones as HeadphonesIcon } from 'lucide-react';
import Navigation from '../comps/Navigation';
import Footer from '../comps/Footer';

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();

  // Game data - this should match the data from your main page
  const gameData = useMemo(() => {
    const games = [
      {
        id: "netflix",
        title: "Netflix subscriptions",
        platform: "PC (Steam)",
        price: "51.99 €",
        discount: "-80%",
        image: "/games and offers images/netflix.webp",
        bgColor: "bg-red-600",
        category: "subscriptions",
        description: "Premium streaming service with unlimited access to movies, TV shows, documentaries, and exclusive Netflix originals. Watch on any device, anywhere.",
        features: ["Unlimited Streaming", "HD & 4K Quality", "Multiple Devices", "Offline Downloads", "No Ads"],
        longDescription: "Netflix is the world's leading streaming entertainment service with over 200 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen."
      },
      {
        id: "xbox-game-pass",
        title: "Xbox game pass subscriptions",
        platform: "PC (Steam)",
        price: "9.99 €",
        discount: "-50%",
        image: "/games and offers images/xbox game pass.webp",
        bgColor: "bg-blue-600",
        category: "subscriptions",
        description: "Access to over 100 high-quality games with Xbox Game Pass. Play new games on day one, including Xbox Game Studios titles.",
        features: ["100+ Games", "Day One Releases", "Xbox Game Studios", "Cloud Gaming", "PC & Console"],
        longDescription: "Xbox Game Pass is a subscription service that gives you access to a rotating catalog of over 100 high-quality games. Play new games on day one, including Xbox Game Studios titles. Games are added regularly, so there's always something new to play."
      },
      {
        id: "prime-video",
        title: "Prime video subscriptions",
        platform: "PC (Steam)",
        price: "16.59 €",
        discount: "-60%",
        image: "/services/Amazone-Prime.webp",
        bgColor: "bg-cyan-500",
        category: "subscriptions",
        description: "Stream thousands of movies and TV shows, including Amazon Originals, with Prime Video subscription.",
        features: ["Amazon Originals", "Thousands of Movies", "TV Shows", "Multiple Devices", "Offline Viewing"],
        longDescription: "Prime Video is a streaming service that offers a wide variety of award-winning Amazon Originals, plus popular movies and TV shows for everyone in the family to enjoy. Watch anywhere, anytime."
      },
      {
        id: "mobile-legends",
        title: "Mobile legends",
        platform: "PC (Steam)",
        price: "17.99 €",
        discount: "-40%",
        image: "/services/honorfinal2025.webp",
        gifUrl: "/games and offers images/gifs/mobile-legends-game.gif",
        bgColor: "bg-orange-500",
        category: "pc-games",
        description: "5v5 MOBA game with fast-paced battles and strategic gameplay. Build your team and dominate the battlefield.",
        features: ["5v5 MOBA", "Fast Paced", "Strategic Gameplay", "Team Battles", "Regular Updates"],
        longDescription: "Mobile Legends is a multiplayer online battle arena (MOBA) game designed for mobile phones. The game is free-to-play and is similar to League of Legends. Players can choose from various heroes and battle in 5v5 matches."
      },
      {
        id: "genshin-impact",
        title: "Genshin impact",
        platform: "PC & Mac (Steam)",
        price: "17.99 €",
        discount: "-50%",
        image: "/services/Infinity-01.webp",
        gifUrl: "/games and offers images/gifs/genshin impact.gif",
        bgColor: "bg-red-800",
        category: "pc-games",
        description: "Open-world action RPG with stunning visuals and engaging combat. Explore the fantasy world of Teyvat.",
        features: ["Open World", "Action RPG", "Stunning Graphics", "Character Collection", "Cross Platform"],
        longDescription: "Genshin Impact is an open-world action RPG that takes place in the fantasy world of Teyvat. The game features a massive, gorgeous map, an elaborate elemental combat system, engaging storyline & characters, co-op game mode, soothing soundtrack, and much more for you to explore.",
        howItWorks: [
          "1. Launch Genshin Impact and go to the Shop",
          "2. Select 'Crystal Top-Up' to buy Genesis Crystals",
          "3. Choose your package (60, 300, 980, 1980, 3280, 6480 Crystals)",
          "4. Select your payment method (Credit Card, PayPal, etc.)",
          "5. Complete the purchase and Genesis Crystals will be added",
          "6. Convert Genesis Crystals to Primogems (1:1 ratio)",
          "7. Use Primogems to buy Wishes for characters and weapons!"
        ]
      },
      {
        id: "pubg-mobile",
        title: "PUBG mobile",
        platform: "PC (Steam)",
        price: "13.99 €",
        discount: null,
        image: "/services/BOB-PUBG-2.webp",
        gifUrl: "/games and offers images/gifs/pubggif.gif",
        bgColor: "bg-purple-600",
        category: "apps",
        description: "The ultimate battle royale experience on mobile devices. Survive, loot, and be the last one standing.",
        features: ["Battle Royale", "100 Players", "Mobile Optimized", "Regular Updates", "Global Competition"],
        longDescription: "PUBG Mobile is a battle royale game where up to 100 players parachute onto a remote island to battle in a winner-takes-all showdown. Players must locate and scavenge their own weapons, vehicles and supplies, and defeat every player in a graphically and tactically rich battleground that forces players into a shrinking play zone.",
        howItWorks: [
          "1. Open PUBG Mobile and go to the Store",
          "2. Select 'UC' (Unknown Cash) to purchase in-game currency",
          "3. Choose your UC package (60, 325, 660, 1800, 3850, 8100 UC)",
          "4. Select your payment method (Credit Card, PayPal, Google Play, etc.)",
          "5. Complete the purchase and UC will be added to your account",
          "6. Use UC to buy Royal Pass, crates, and premium items",
          "7. Enjoy exclusive skins, outfits, and battle pass rewards!"
        ]
      },
      {
        id: "wuthering-waves",
        title: "Wuthering waves",
        platform: "PC (Steam)",
        price: "31.99 €",
        discount: "-20%",
        image: "/services/wuthering-update.webp",
        gifUrl: "/games and offers images/gifs/wuthering-waves-jiyan.gif",
        bgColor: "bg-gray-700",
        category: "pc-games",
        description: "Open-world action RPG with stunning visuals and immersive gameplay. Experience the power of waves.",
        features: ["Open World", "Action RPG", "Stunning Graphics", "Character Collection", "Immersive Story"],
        longDescription: "Wuthering Waves is an open-world action RPG that combines stunning visuals with engaging combat mechanics. Players can explore a vast world, collect characters, and experience an immersive storyline filled with adventure and discovery."
      },
      {
        id: "efootball",
        title: "Efootball",
        platform: "PC (Steam)",
        price: "23.39 €",
        discount: "-67%",
        image: "/services/efootball-finale3.webp",
        gifUrl: "/games and offers images/gifs/Efootball.gif",
        bgColor: "bg-orange-600",
        category: "pc-games",
        description: "The next generation of football gaming with realistic gameplay and official team licenses.",
        features: ["Realistic Graphics", "Official Teams", "Online Matches", "Career Mode", "Multiplayer"],
        longDescription: "eFootball is a football simulation video game that offers realistic gameplay with official team and player licenses. Experience the most authentic football gaming experience with stunning graphics and fluid gameplay mechanics."
      },
      {
        id: "clash-of-clans",
        title: "Clash of clans",
        platform: "PC (Epic)",
        price: "9.99 €",
        discount: "-67%",
        image: "/services/CLASH.webp",
        gifUrl: "/games and offers images/gifs/clash of clans.gif",
        bgColor: "bg-teal-600",
        category: "apps",
        description: "Build your village, raise a clan, and compete in epic Clan Wars in this strategy game.",
        features: ["Base Building", "Clan Wars", "Strategy Game", "Social Gaming", "Regular Updates"],
        longDescription: "Clash of Clans is a strategy game where players build their own village, train troops, and attack other players' villages to earn resources. Join a clan or create your own to participate in epic Clan Wars."
      },
      {
        id: "blood-strike",
        title: "Blood Strike",
        platform: "Mobile",
        price: "12.99 €",
        discount: "-30%",
        image: "/services/BLOOD-STRIKE.webp",
        gifUrl: "/games and offers images/gifs/blood strike.gif",
        bgColor: "bg-red-700",
        category: "apps",
        description: "Mobile battle royale game with intense combat and survival gameplay.",
        features: ["Battle Royale", "Mobile Gaming", "Multiplayer", "Fast Paced", "Intense Combat"],
        longDescription: "Blood Strike is a mobile battle royale game that offers intense combat and survival gameplay. Players must fight to be the last one standing in fast-paced matches designed specifically for mobile devices."
      },
      {
        id: "discord-nitro",
        title: "Discord Nitro",
        platform: "PC & Mobile",
        price: "4.99 €",
        discount: "-25%",
        image: "/services/Discord-01.webp",
        bgColor: "bg-indigo-600",
        category: "subscriptions",
        description: "Enhanced Discord experience with premium features and perks for better communication.",
        features: ["HD Streaming", "Custom Emojis", "Server Boosts", "Profile Badges", "Enhanced Features"],
        longDescription: "Discord Nitro enhances your Discord experience with premium features including HD video streaming, custom emojis, server boosts, profile badges, and much more. Get the most out of your Discord experience."
      },
      {
        id: "infinity-nikki",
        title: "Infinity Nikki",
        platform: "PC & Mobile",
        price: "19.99 €",
        discount: "-40%",
        image: "/services/Infinity-01.webp",
        gifUrl: "/games and offers images/gifs/infinty nikki.gif",
        bgColor: "bg-pink-600",
        category: "apps",
        description: "Fashion and adventure game with stunning visuals and creativity at its core.",
        features: ["Fashion Design", "Adventure Mode", "Creative Gameplay", "Beautiful Graphics", "Character Customization"],
        longDescription: "Infinity Nikki is a fashion and adventure game that combines stunning visuals with creative gameplay. Players can design outfits, explore beautiful worlds, and express their creativity through fashion and adventure."
      },
      {
        id: "roblox",
        title: "Roblox",
        platform: "PC & Mobile",
        price: "8.99 €",
        discount: "-35%",
        image: "/services/roblox.webp",
        gifUrl: "/games and offers images/gifs/roblox.gif",
        bgColor: "bg-green-600",
        category: "apps",
        description: "Platform where you can create, share, and play millions of games created by the community.",
        features: ["Game Creation", "Social Platform", "Educational Games", "Virtual Economy", "Community Driven"],
        longDescription: "Roblox is a platform where millions of people gather together every day to imagine, create, and share experiences with each other in immersive, user-generated 3D worlds. The types of gameplay on Roblox are just as limitless as the imagination of the creators themselves.",
        howItWorks: [
          "1. Open Roblox and log into your account",
          "2. Click on the Robux icon in the top navigation bar",
          "3. Choose your Robux package (80, 400, 800, 1700, 4500, 10000)",
          "4. Select your payment method (Credit Card, PayPal, Google Play, etc.)",
          "5. Complete the purchase and Robux will be added to your account",
          "6. Use Robux to buy avatar items, game passes, and developer products",
          "7. Customize your avatar and enjoy premium features!"
        ]
      },
      {
        id: "free-fire",
        title: "Free Fire",
        platform: "Mobile",
        price: "6.99 €",
        discount: "-20%",
        image: "/services/FREE.webp",
        gifUrl: "/games and offers images/gifs/freefiregif.gif",
        bgColor: "bg-yellow-600",
        category: "apps",
        description: "Fast-paced battle royale game designed for mobile devices with quick matches.",
        features: ["10-Minute Matches", "Mobile Optimized", "Character System", "Regular Updates", "Fast Paced"],
        longDescription: "Free Fire is a battle royale game designed for mobile devices. With matches lasting only 10 minutes, players can enjoy fast-paced action and intense combat in a mobile-optimized experience."
      },
      {
        id: "fortnite",
        title: "Fortnite",
        platform: "PC & Mobile",
        price: "15.99 €",
        discount: "-45%",
        image: "/services/FORTNITE.webp",
        gifUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExemd5aDc2am1tNmMxYWN3MWQ3cnI2NXo1eHgwbXdxZXJnaXZ1c201YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EMp5I4EfDhLNP8qbPv/giphy.gif",
        bgColor: "bg-blue-700",
        category: "pc-games",
        description: "Battle royale game with building mechanics and unique gameplay that sets it apart.",
        features: ["Battle Royale", "Building System", "Cross Platform", "Regular Events", "Unique Gameplay"],
        longDescription: "Fortnite is a battle royale game that combines shooting mechanics with building elements. Players can build structures to defend themselves or gain tactical advantages, making it unique among battle royale games.",
        howItWorks: [
          "1. Launch Fortnite and go to the Item Shop",
          "2. Browse available V-Bucks packages (500, 1000, 2800, 5000, 13500)",
          "3. Select your desired V-Bucks amount",
          "4. Choose your payment method (Credit Card, PayPal, etc.)",
          "5. Complete the purchase and V-Bucks will be added to your account",
          "6. Use V-Bucks to buy Battle Pass, skins, emotes, and other cosmetics",
          "7. Enjoy your new items in-game!"
        ]
      }
    ];

    return games.find(game => game.id === gameId) || null;
  }, [gameId]);

  if (!gameData) {
    return (
      <div className="min-h-screen text-white relative bg-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
            <p className="text-gray-400 mb-8">The game you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getIconComponent = (category: string) => {
    switch (category) {
      case 'subscriptions':
        return Monitor;
      case 'apps':
        return Smartphone;
      case 'pc-games':
        return Gamepad2;
      default:
        return Gamepad2;
    }
  };

  const IconComponent = getIconComponent(gameData.category);

  return (
    <div 
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: 'url("/website core iamges/paisaje-de-god-of-war-ragnarok-8580.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/70"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(31, 41, 55, 0.8) 100%)'
        }}
      ></div>
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Games
            </Link>
          </div>

          {/* Game Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Game Image */}
            <div className="relative">
              <div className={`relative h-64 sm:h-80 lg:h-96 ${gameData.bgColor} rounded-lg overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img 
                    src={gameData.image} 
                    alt={gameData.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Game Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm mr-4">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{gameData.title}</h1>
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{gameData.description}</p>

              {/* Social Media Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://www.facebook.com/profile.php?id=61557910479130" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/bobstore.dz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a 
                  href="https://wa.me/213123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-8">
                <h3 className="text-lg font-bold text-white mb-3">Key Features:</h3>
                {gameData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* How It Works - Only for games */}
              {gameData.howItWorks && (
                <div className="space-y-3 mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">How It Works:</h3>
                  <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/20">
                    <div className="space-y-3">
                      {gameData.howItWorks.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Game Description */}
          <div className="bg-black/40 rounded-lg p-6 sm:p-8 mb-12 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">About This Game</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{gameData.longDescription}</p>
          </div>

          {/* Features Section */}
          <div className="bg-black/20 py-8 sm:py-16 backdrop-blur-sm rounded-lg mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Our Service?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                  We provide the best digital services with guaranteed quality and fast delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-red-500/50">
                    <Download className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
                    <HeadphonesIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Our customer support team is available around the clock to help you.</p>
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

export default GamePage;
