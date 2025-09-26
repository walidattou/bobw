import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Shield, Gamepad2, Smartphone, Monitor, Headphones as HeadphonesIcon, X, ZoomIn } from 'lucide-react';
import Navigation from '../comps/Navigation';
import Footer from '../comps/Footer';
import LoadingScreen from '../comps/LoadingScreen';
// import LazyImage from '../comps/LazyImage';

// Function to get gameplay video for each game
const getGameplayVideo = (gameId: string): string => {
  const videoIds: { [key: string]: string } = {
    'mobile-legends': 'https://www.youtube.com/embed/i4zZ3C8pDXE', // Mobile Legends Gameplay
    'genshin-impact': 'https://www.youtube.com/embed/V_L-2rDzIaU', // Genshin Impact Gameplay
    'pubg-mobile': 'https://www.youtube.com/embed/70uq0UlRLGI', // PUBG Mobile Gameplay
    'wuthering-waves': 'https://www.youtube.com/embed/7sPKkDQPLQ0', // Wuthering Waves Gameplay
    'efootball': 'https://www.youtube.com/embed/w6cdYa5YHCE', // eFootball Gameplay
    'clash-of-clans': 'https://www.youtube.com/embed/TuzysXvmLlM', // Clash of Clans Gameplay
    'blood-strike': 'https://www.youtube.com/embed/XqDSPg-sOXo', // Blood Strike Gameplay
    'infinity-nikki': 'https://www.youtube.com/embed/f10NGD5b_Zc', // Infinity Nikki Gameplay
    'roblox': 'https://www.youtube.com/embed/N1nnCsqS8vg', // Roblox Gameplay
    'free-fire': 'https://www.youtube.com/embed/ODvJ8oTsiMU', // Free Fire Gameplay
    'fortnite': 'https://www.youtube.com/embed/--RA1Wy4rFY', // Fortnite Gameplay
  };
  
  // Add subscription videos
  const subscriptionVideoIds: { [key: string]: string } = {
    'spotify': 'https://www.youtube.com/embed/4-1u3pS4Np4', // Spotify Premium
    'netflix': 'https://www.youtube.com/embed/T8FeHSoTHs8', // Netflix
    'xbox-game-pass': 'https://www.youtube.com/embed/srLdxSfCB8U', // Xbox Game Pass
    'discord-nitro': 'https://www.youtube.com/embed/v2i6nu2OYfY', // Discord Nitro
  };
  
  return videoIds[gameId] || subscriptionVideoIds[gameId] || 'https://www.youtube.com/embed/8Qn_spdM5ZQ'; // Default video
};

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Game data - this should match the data from your main page
  const gameData = useMemo(() => {
    const games = [
      {
        id: "netflix",
        title: "Netflix subscriptions",
        platform: "PC (Steam)",
        price: "51.99 €",
        discount: "-80%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903224/ntflix_lvhcie.jpg",
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
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758902358/xbox_game_pass_hnztca.webp",
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
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/Amazone-Prime_raqfou.webp",
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
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903221/honorfinal2025_xgm9c4.webp",
        gifUrl: null,
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
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/Infinity-01_oo3b15.webp",
        gifUrl: "/games and offers images/gifs/genshin impact.gif",
        bgColor: "bg-red-800",
        category: "pc-games",
        description: "Open-world action RPG with stunning visuals and engaging combat. Explore the fantasy world of Teyvat.",
        features: ["Open World", "Action RPG", "Stunning Graphics", "Character Collection", "Cross Platform"],
        longDescription: "Genshin Impact is an open-world action RPG that takes place in the fantasy world of Teyvat. The game features a massive, gorgeous map, an elaborate elemental combat system, engaging storyline & characters, co-op game mode, soothing soundtrack, and much more for you to explore.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Genshin Impact UID (User ID)",
          "3. Choose your desired Genesis Crystals package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account with Genesis Crystals",
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
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903214/BOB-PUBG-2_c1glje.webp",
        gifUrl: "/games and offers images/gifs/pubggif.gif",
        bgColor: "bg-purple-600",
        category: "apps",
        description: "The ultimate battle royale experience on mobile devices. Survive, loot, and be the last one standing.",
        features: ["Battle Royale", "100 Players", "Mobile Optimized", "Regular Updates", "Global Competition"],
        longDescription: "PUBG Mobile is a battle royale game where up to 100 players parachute onto a remote island to battle in a winner-takes-all showdown. Players must locate and scavenge their own weapons, vehicles and supplies, and defeat every player in a graphically and tactically rich battleground that forces players into a shrinking play zone.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your PUBG Mobile UID (User ID)",
          "3. Choose your desired UC (Unknown Cash) package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account with UC currency",
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
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903224/wuthering-update_phopww.webp",
        gifUrl: "/games and offers images/gifs/wuthering-waves-jiyan.gif",
        bgColor: "bg-gray-700",
        category: "pc-games",
        description: "Open-world action RPG with stunning visuals and immersive gameplay. Experience the power of waves.",
        features: ["Open World", "Action RPG", "Stunning Graphics", "Character Collection", "Immersive Story"],
        longDescription: "Wuthering Waves is an open-world action RPG that combines stunning visuals with engaging combat mechanics. Players can explore a vast world, collect characters, and experience an immersive storyline filled with adventure and discovery.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Wuthering Waves account credentials",
          "3. Choose your desired recharge package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account directly",
          "6. Enjoy premium features and in-game currency",
          "7. Access exclusive content and characters!"
        ]
      },
      {
        id: "efootball",
        title: "Efootball",
        platform: "PC (Steam)",
        price: "23.39 €",
        discount: "-67%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903215/efootball-finale3_ncnuc3.webp",
        gifUrl: "/games and offers images/gifs/Efootball.gif",
        bgColor: "bg-orange-600",
        category: "pc-games",
        description: "The next generation of football gaming with realistic gameplay and official team licenses.",
        features: ["Realistic Graphics", "Official Teams", "Online Matches", "Career Mode", "Multiplayer"],
        longDescription: "eFootball is a football simulation video game that offers realistic gameplay with official team and player licenses. Experience the most authentic football gaming experience with stunning graphics and fluid gameplay mechanics.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Konami email and password",
          "3. Choose your desired eFootball package",
          "4. Complete the payment using your preferred method",
          "5. We'll send you a confirmation code via email",
          "6. Use the code to access your account and recharge",
          "7. Enjoy premium players and exclusive content!"
        ]
      },
      {
        id: "clash-of-clans",
        title: "Clash of clans",
        platform: "PC (Epic)",
        price: "9.99 €",
        discount: "-67%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903214/CLASH_wtcanl.webp",
        gifUrl: "/games and offers images/gifs/clash of clans.gif",
        bgColor: "bg-teal-600",
        category: "apps",
        description: "Build your village, raise a clan, and compete in epic Clan Wars in this strategy game.",
        features: ["Base Building", "Clan Wars", "Strategy Game", "Social Gaming", "Regular Updates"],
        longDescription: "Clash of Clans is a strategy game where players build their own village, train troops, and attack other players' villages to earn resources. Join a clan or create your own to participate in epic Clan Wars.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Supercell email address",
          "3. Choose your desired gems package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account via Supercell email",
          "6. Gems will be added to your Clash of Clans account",
          "7. Use gems to speed up upgrades and buy resources!"
        ]
      },
      {
        id: "blood-strike",
        title: "Blood Strike",
        platform: "Mobile",
        price: "12.99 €",
        discount: "-30%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903230/BLOOD-STRIKE_uvzzsh.webp",
        gifUrl: "/games and offers images/gifs/blood strike.gif",
        bgColor: "bg-red-700",
        category: "apps",
        description: "Mobile battle royale game with intense combat and survival gameplay.",
        features: ["Battle Royale", "Mobile Gaming", "Multiplayer", "Fast Paced", "Intense Combat"],
        longDescription: "Blood Strike is a mobile battle royale game that offers intense combat and survival gameplay. Players must fight to be the last one standing in fast-paced matches designed specifically for mobile devices.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Blood Strike MENA UID (User ID)",
          "3. Choose your desired recharge package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account with in-game currency",
          "6. Enjoy premium weapons and exclusive skins",
          "7. Dominate the battlefield with your new items!"
        ]
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
        longDescription: "Discord Nitro enhances your Discord experience with premium features including HD video streaming, custom emojis, server boosts, profile badges, and much more. Get the most out of your Discord experience.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Choose your Discord Nitro plan (1 month, 3 months, or 1 year)",
          "3. Complete the payment using your preferred method",
          "4. We'll provide you with an activation code or link",
          "5. Redeem the code in your Discord account",
          "6. Enjoy premium features and server boosts",
          "7. Access HD streaming and custom emojis!"
        ]
      },
      {
        id: "infinity-nikki",
        title: "Infinity Nikki",
        platform: "PC & Mobile",
        price: "19.99 €",
        discount: "-40%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903225/Infinity-01_oo3b15.webp",
        gifUrl: "/games and offers images/gifs/infinty nikki.gif",
        bgColor: "bg-pink-600",
        category: "apps",
        description: "Fashion and adventure game with stunning visuals and creativity at its core.",
        features: ["Fashion Design", "Adventure Mode", "Creative Gameplay", "Beautiful Graphics", "Character Customization"],
        longDescription: "Infinity Nikki is a fashion and adventure game that combines stunning visuals with creative gameplay. Players can design outfits, explore beautiful worlds, and express their creativity through fashion and adventure.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Infinity Nikki account credentials",
          "3. Choose your desired recharge package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account directly",
          "6. Enjoy premium fashion items and exclusive content",
          "7. Express your creativity with new outfits!"
        ]
      },
      {
        id: "roblox",
        title: "Roblox",
        platform: "PC & Mobile",
        price: "8.99 €",
        discount: "-35%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903224/roblox_qjppkn.webp",
        gifUrl: "/games and offers images/gifs/roblox.gif",
        bgColor: "bg-green-600",
        category: "apps",
        description: "Platform where you can create, share, and play millions of games created by the community.",
        features: ["Game Creation", "Social Platform", "Educational Games", "Virtual Economy", "Community Driven"],
        longDescription: "Roblox is a platform where millions of people gather together every day to imagine, create, and share experiences with each other in immersive, user-generated 3D worlds. The types of gameplay on Roblox are just as limitless as the imagination of the creators themselves.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Roblox username and password",
          "3. Choose your desired Robux package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account directly",
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
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903215/FREE_hxlmkv.webp",
        gifUrl: "/games and offers images/gifs/freefiregif.gif",
        bgColor: "bg-yellow-600",
        category: "apps",
        description: "Fast-paced battle royale game designed for mobile devices with quick matches.",
        features: ["10-Minute Matches", "Mobile Optimized", "Character System", "Regular Updates", "Fast Paced"],
        longDescription: "Free Fire is a battle royale game designed for mobile devices. With matches lasting only 10 minutes, players can enjoy fast-paced action and intense combat in a mobile-optimized experience.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Free Fire UID (User ID)",
          "3. Choose your desired diamond package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account with diamonds",
          "6. Use diamonds to buy characters, skins, and bundles",
          "7. Dominate the battlefield with your new items!"
        ]
      },
      {
        id: "fortnite",
        title: "Fortnite",
        platform: "PC & Mobile",
        price: "15.99 €",
        discount: "-45%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903217/FORTNITE_scphv4.webp",
        gifUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExemd5aDc2am1tNmMxYWN3MWQ3cnI2NXo1eHgwbXdxZXJnaXZ1c201YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EMp5I4EfDhLNP8qbPv/giphy.gif",
        bgColor: "bg-blue-700",
        category: "pc-games",
        description: "Battle royale game with building mechanics and unique gameplay that sets it apart.",
        features: ["Battle Royale", "Building System", "Cross Platform", "Regular Events", "Unique Gameplay"],
        longDescription: "Fortnite is a battle royale game that combines shooting mechanics with building elements. Players can build structures to defend themselves or gain tactical advantages, making it unique among battle royale games.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Epic Games account credentials",
          "3. Choose your desired V-Bucks package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account directly",
          "6. Use V-Bucks to buy Battle Pass, skins, emotes, and other cosmetics",
          "7. Enjoy your new items in-game!"
        ]
      },
      {
        id: "spotify",
        title: "Spotify Premium",
        platform: "PC & Mobile",
        price: "4.99 €",
        discount: "-30%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/q_auto,f_auto/v1758837551/Spotify-Icon-White-Dark-Background-Logo_wine.svg",
        bgColor: "bg-green-600",
        category: "subscriptions",
        description: "Premium music streaming service with ad-free listening, offline downloads, and high-quality audio.",
        features: ["Ad-Free Listening", "Offline Downloads", "High Quality Audio", "Unlimited Skips", "Cross Platform"],
        longDescription: "Spotify Premium is the ultimate music streaming experience that gives you access to millions of songs, podcasts, and audiobooks. Enjoy ad-free listening, download music for offline playback, and stream in high quality across all your devices.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Spotify username and password",
          "3. Choose your subscription duration (1 month, 3 months, 6 months, or 1 year)",
          "4. Complete the payment using your preferred method",
          "5. We'll upgrade your account to Spotify Premium",
          "6. Enjoy ad-free music, offline downloads, and premium features",
          "7. Your subscription will be automatically renewed based on your chosen plan"
        ]
      },
      {
        id: "netflix",
        title: "Netflix subscriptions",
        platform: "PC (Steam)",
        price: "51.99 €",
        discount: "-80%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903224/ntflix_lvhcie.jpg",
        bgColor: "bg-red-600",
        category: "subscriptions",
        description: "Premium streaming service with unlimited access to movies, TV shows, documentaries, and exclusive Netflix originals. Watch on any device, anywhere.",
        features: ["Unlimited Streaming", "HD & 4K Quality", "Multiple Devices", "Offline Downloads", "No Ads"],
        longDescription: "Netflix is the world's leading streaming entertainment service with over 200 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Choose your Netflix subscription plan",
          "3. Complete the payment using your preferred method",
          "4. We'll provide you with an official Netflix account",
          "5. Receive your account email, password, and account name",
          "6. Log in and enjoy unlimited streaming content",
          "7. Access HD/4K quality and multiple device support!"
        ]
      },
      {
        id: "mobile-legends",
        title: "Mobile legends",
        platform: "PC (Steam)",
        price: "17.99 €",
        discount: "-40%",
        image: "https://res.cloudinary.com/dzvgjeddx/image/upload/v1758903221/honorfinal2025_xgm9c4.webp",
        gifUrl: null,
        bgColor: "bg-orange-500",
        category: "pc-games",
        description: "5v5 MOBA game with fast-paced battles and strategic gameplay. Build your team and dominate the battlefield.",
        features: ["5v5 MOBA", "Fast Paced", "Strategic Gameplay", "Team Battles", "Regular Updates"],
        longDescription: "Mobile Legends is a multiplayer online battle arena (MOBA) game designed for mobile phones. The game is free-to-play and is similar to League of Legends. Players can choose from various heroes and battle in 5v5 matches.",
        howItWorks: [
          "1. Contact us via WhatsApp, Facebook, or Instagram",
          "2. Provide your Mobile Legends UID (User ID)",
          "3. Choose your desired diamond package",
          "4. Complete the payment using your preferred method",
          "5. We'll recharge your account with diamonds",
          "6. Use diamonds to buy heroes, skins, and battle passes",
          "7. Dominate the battlefield with your new heroes!"
        ]
      }
    ];

    return games.find(game => game.id === gameId) || null;
  }, [gameId]);

  // Image loading optimization
  useEffect(() => {
    if (gameData) {
      // Count total images to load
      const imagesToLoad = [
        gameData.image,
        // Add other images that need to be loaded
      ].filter(Boolean);
      
      if (imagesToLoad.length === 0) {
        setIsLoading(false);
        return;
      }

      // Preload images
      let loadedCount = 0;
      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / imagesToLoad.length) * 100);
            resolve(img);
          };
          img.onerror = reject;
          img.src = src;
        });
      };

      // Load all images
      Promise.all(imagesToLoad.map(loadImage))
        .then(() => {
          // Add a small delay for smooth transition
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        })
        .catch(() => {
          // Even if some images fail, show the page
          setIsLoading(false);
        });
    }
  }, [gameData]);

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
    <div>
      <LoadingScreen isLoading={isLoading} progress={loadingProgress} />
      <div 
        className="min-h-screen text-white relative"
        style={{
          backgroundImage: 'url("/website-core-images/retro-digital-art-illustration-person-using-radio-technology.jpg")',
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
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            {/* Back Button */}
            <div className="mb-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Games
            </Link>
          </div>

          {/* Game Header */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Game Image */}
            <div className="relative">
               <div className={`relative ${gameData.bgColor} rounded-xl overflow-hidden shadow-2xl`}>
                <div className="relative bg-black/20 p-4">
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    <img 
                      src={gameData.image} 
                      alt={gameData.title}
                      className="w-full h-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                    />
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </div>
               
               {/* Gameplay Video - For games and subscriptions - Directly under image */}
               {(gameData.category !== 'subscriptions' || gameData.id === 'spotify' || gameData.id === 'netflix' || gameData.id === 'xbox-game-pass' || gameData.id === 'discord-nitro') && (
                 <div className="bg-black/30 rounded-xl p-4 mt-4 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
                   <h2 className="text-lg font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                     {gameData.category === 'subscriptions' ? 'Service Preview' : 'Gameplay Preview'}
                   </h2>
                   <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                     <iframe
                       className="absolute top-0 left-0 w-full h-full rounded-lg"
                       src={getGameplayVideo(gameData.id)}
                       title={`${gameData.title} Gameplay`}
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                     ></iframe>
                   </div>
                 </div>
               )}
            </div>

            {/* Game Info */}
             <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center mb-3">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center backdrop-blur-sm mr-4 shadow-lg shadow-cyan-500/30">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {gameData.title}
                  </h1>
                  <p className="text-cyan-400 font-semibold text-base">{gameData.platform}</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed font-medium">{gameData.description}</p>

              {/* Social Media Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61557910479130" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/bobstore.dz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm">Instagram</span>
                </a>
                <a 
                  href="https://wa.me/213123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {gameData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-black/20 rounded-lg p-2 border border-gray-700/30">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 shadow-lg shadow-cyan-500/50"></div>
                      <span className="text-gray-200 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              </div>

              {/* Why Choose Bob Store - Only for games */}
              {gameData.howItWorks && (
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose Bob Store?</h3>
                  <div className="bg-black/20 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-cyan-500/50"></div>
                        <div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            <span className="font-bold text-white">100% official service:</span> guaranteed top‑ups approved by the game's developers.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-cyan-500/50"></div>
                        <div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            <span className="font-bold text-white">Competitive prices:</span> the best value for every purchase tier.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-cyan-500/50"></div>
                        <div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            <span className="font-bold text-white">Easy and fast:</span> simple steps starting with entering the player ID.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-cyan-500/50"></div>
                        <div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            <span className="font-bold text-white">Full security:</span> complete account protection during payment.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-cyan-500/50"></div>
                        <div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            <span className="font-bold text-white">Ongoing support:</span> a support team available around the clock.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* How It Works - Only for games */}
              {gameData.howItWorks && (
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Top‑up Steps</h3>
                  <div className="bg-black/20 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm">
                    <div className="space-y-3">
                      {gameData.howItWorks.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-cyan-500/30">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 text-sm leading-relaxed font-medium">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* How to find UID - Only for games that require UID */}
              {(gameData.id === 'genshin-impact' || gameData.id === 'pubg-mobile' || gameData.id === 'free-fire' || gameData.id === 'blood-strike' || gameData.id === 'mobile-legends') && (
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">How to Find the UID</h3>
                  <div className="bg-black/20 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-cyan-500/50"></div>
                        <div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            From inside the game, open the main menu or profile screen.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-cyan-500/50"></div>
                        <div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            The {gameData.title} UID appears on screen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


          {/* Game Description */}
          <div className="bg-black/30 rounded-xl p-6 mb-8 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About This Service</h2>
            <p className="text-gray-300 leading-relaxed text-lg font-medium">{gameData.longDescription}</p>
          </div>

          {/* Why Choose Our Service Section */}
          <div className="bg-black/20 py-12 sm:py-16 backdrop-blur-sm rounded-xl mb-12 border border-gray-700/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Why Choose Our Service?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg px-4 font-medium">We provide the best digital services with guaranteed quality and fast delivery.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Instant Delivery */}
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-red-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Instant Delivery</h3>
                  <p className="text-gray-400 text-base leading-relaxed">Get your services delivered within minutes of payment confirmation.</p>
                </div>
                
                {/* 100% Guaranteed */}
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">100% Guaranteed</h3>
                  <p className="text-gray-400 text-base leading-relaxed">All our services come with a full guarantee and customer support.</p>
                </div>
                
                {/* 24/7 Support */}
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                    <HeadphonesIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">24/7 Support</h3>
                  <p className="text-gray-400 text-base leading-relaxed">Our customer support team is available around the clock to help you.</p>
                </div>
              </div>
            </div>
          </div>

          </main>

          <Footer />
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            {/* Close button */}
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal image */}
            <img 
              src={gameData.image} 
              alt={gameData.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              loading="eager"
            />
            
            {/* Image title */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
              <h3 className="text-white text-lg font-semibold">{gameData.title}</h3>
              <p className="text-gray-300 text-sm">Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
