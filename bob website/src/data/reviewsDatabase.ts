import type { ReviewDatabase, Review, GameReview } from '../types/Review';

// Sample user reviews data - Only reviews with real profile images
const userReviews: Review[] = [
  {
    id: "review-007",
    avatar: "H",
    name: "Hicham Ht",
    review: "مصدر موثوق خاوتي",
    time: "2 days ago",
    rating: 5,
    image: "/reviews-images/Hicham-Ht.jpg",
    verified: true,
    helpful: 5,
    totalReviews: 12
  },
  {
    id: "review-008",
    avatar: "Ø",
    name: "Øut Łãw",
    review: "ثقة ماشاء الله عليه ، ربي يبارك و من احسن ناس ممكن تتعامل معاهم",
    time: "1 day ago",
    rating: 5,
    image: "/reviews-images/Øut Łãw.jpg",
    verified: true,
    helpful: 8,
    totalReviews: 7
  },
  {
    id: "review-009",
    avatar: "P",
    name: "Psychicso Sohaib",
    review: "مصدر موثوق",
    time: "3 hours ago",
    rating: 5,
    image: "/reviews-images/Psychicso-Sohaib.jpg",
    verified: true,
    helpful: 3,
    totalReviews: 15
  },
  {
    id: "review-010",
    avatar: "O",
    name: "Oualid Derouiche",
    review: "Number one khouya la3ziz Bob",
    time: "1 hour ago",
    rating: 5,
    image: "/reviews-images/Oualid-Derouiche.jpg",
    verified: true,
    helpful: 6,
    totalReviews: 22
  },
  {
    id: "review-011",
    avatar: "M",
    name: "Mounir Bahadji",
    review: "موثوق في عملك شكرا على مجهوداتك",
    time: "30 minutes ago",
    rating: 5,
    image: "/reviews-images/Mounir-Bahadji.jpg",
    verified: true,
    helpful: 10,
    totalReviews: 30
  },
  {
    id: "review-012",
    avatar: "H",
    name: "Hana Hassani",
    review: "هدي المرة الثانية لي نتعامل معاك ثقة 100% شكرا جزيلا اخي",
    time: "15 minutes ago",
    rating: 5,
    image: "/reviews-images/Hana-Hassani.jpg",
    verified: true,
    helpful: 7,
    totalReviews: 18
  },
  {
    id: "review-013",
    avatar: "M",
    name: "Mohamed Belakoul",
    review: "متى تعاملت معاك",
    time: "2 years ago",
    rating: 5,
    image: null,
    avatarGradient: "from-blue-500 to-blue-700",
    verified: true,
    helpful: 3,
    totalReviews: 8
  },
  {
    id: "review-014",
    avatar: "م",
    name: "مصطفى العذاري",
    review: "ثقه الله يوفقك🤍",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/485993600_1445862223046164_32603113468558856_n.jpg",
    avatarGradient: "from-green-500 to-green-700",
    verified: true,
    helpful: 5,
    totalReviews: 12
  },
  {
    id: "review-015",
    avatar: "C",
    name: "Chaker Gouasmia",
    review: "ثقة برو ماكس🫦",
    time: "2 years ago",
    rating: 5,
    image: null,
    avatarGradient: "from-purple-500 to-purple-700",
    verified: true,
    helpful: 7,
    totalReviews: 15
  },
  {
    id: "review-016",
    avatar: "Q",
    name: "Qussi Jamal Ibredah",
    review: "ما تعاملت معاك 🐦",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/486241991_1446742686291451_5896140876206118949_n.jpg",
    avatarGradient: "from-orange-500 to-orange-700",
    verified: true,
    helpful: 4,
    totalReviews: 9
  },
  {
    id: "review-017",
    avatar: "I",
    name: "IsSa Boubaker",
    review: "Les hommes ❤️",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/486825620_1450005462631840_6603026625700811656_n.jpg",
    avatarGradient: "from-pink-500 to-pink-700",
    verified: true,
    helpful: 6,
    totalReviews: 11
  },
  {
    id: "review-018",
    avatar: "A",
    name: "Ali Sh",
    review: "خوش ولد",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/486955626_1449083229390730_6812952396168084032_n.jpg",
    avatarGradient: "from-teal-500 to-teal-700",
    verified: true,
    helpful: 8,
    totalReviews: 14
  },
  {
    id: "review-019",
    avatar: "A",
    name: "Abdo Al Habeb",
    review: "ثقة 🔥🔥",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/487380151_1449023452730041_795710497407658996_n.jpg",
    avatarGradient: "from-red-500 to-red-700",
    verified: true,
    helpful: 9,
    totalReviews: 16
  },
  {
    id: "review-020",
    avatar: "ت",
    name: "تركي محمود",
    review: "ثقة ضلعي 👏",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/502570010_1499037084395344_1471937901484174197_n.jpg",
    avatarGradient: "from-indigo-500 to-indigo-700",
    verified: true,
    helpful: 12,
    totalReviews: 18
  },
  {
    id: "review-021",
    avatar: "ع",
    name: "عمر ابو حفصه",
    review: "هذا النسان ثقا الف",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/484334674_1440565646909155_2317249062376209281_n.jpg",
    avatarGradient: "from-yellow-500 to-yellow-700",
    verified: true,
    helpful: 10,
    totalReviews: 13
  },
  {
    id: "review-022",
    avatar: "M",
    name: "Mayor Mď",
    review: "ثقه",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/484541807_1441756773456709_4147548551053516475_n.jpg",
    avatarGradient: "from-emerald-500 to-emerald-700",
    verified: true,
    helpful: 5,
    totalReviews: 7
  },
  {
    id: "review-023",
    avatar: "O",
    name: "Obada Taj Alsier",
    review: "ثقة🐦✨🌺",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/484930429_1442526573379729_8487768777560764629_n.jpg",
    avatarGradient: "from-rose-500 to-rose-700",
    verified: true,
    helpful: 6,
    totalReviews: 10
  },
  {
    id: "review-024",
    avatar: "M",
    name: "Mohmed Alsaedy",
    review: "ما تعاملت وياك بس مبين خوش ولد 🫂",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/485120413_1443543909944662_7133721561707582881_n.jpg",
    avatarGradient: "from-cyan-500 to-cyan-700",
    verified: true,
    helpful: 4,
    totalReviews: 6
  },
  {
    id: "review-025",
    avatar: "S",
    name: "Saif Aldeen",
    review: "انتة ياهو",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/485310757_1443268119972241_8159251891978969568_n.jpg",
    avatarGradient: "from-violet-500 to-violet-700",
    verified: true,
    helpful: 7,
    totalReviews: 12
  },
  {
    id: "review-026",
    avatar: "ر",
    name: "رهف البيك",
    review: "Up كل الدعم",
    time: "2 years ago",
    rating: 5,
    image: "/reviews-images/485964942_1444950499804003_3383765786584591231_n.jpg",
    avatarGradient: "from-lime-500 to-lime-700",
    verified: true,
    helpful: 8,
    totalReviews: 15
  },
  {
    id: "review-027",
    avatar: "Y",
    name: "Yassine 夜",
    review: "ثيقة مطلقة ✨💖💯",
    time: "2 years ago",
    rating: 5,
    image: null,
    avatarGradient: "from-sky-500 to-sky-700",
    verified: true,
    helpful: 11,
    totalReviews: 19
  },
  {
    id: "review-028",
    avatar: "ふ",
    name: "ふみこ あけみ",
    review: "ثقة ❤️",
    time: "2 years ago",
    rating: 5,
    image: null,
    avatarGradient: "from-fuchsia-500 to-fuchsia-700",
    verified: true,
    helpful: 9,
    totalReviews: 17
  },
  {
    id: "review-029",
    avatar: "S",
    name: "Sebaa Mn",
    review: "خوش ولد",
    time: "2 years ago",
    rating: 5,
    image: null,
    avatarGradient: "from-amber-500 to-amber-700",
    verified: true,
    helpful: 6,
    totalReviews: 11
  },
  {
    id: "review-030",
    avatar: "ا",
    name: "العبد الشكور",
    review: "اسطورة الاساطير🔥",
    time: "2 years ago",
    rating: 5,
    image: null,
    avatarGradient: "from-stone-500 to-stone-700",
    verified: true,
    helpful: 13,
    totalReviews: 22
  },
  
];

// Sample game-specific reviews
const gameReviews: GameReview[] = [
  {
    id: "game-review-001",
    title: "Cyberpunk 2077",
    image: "bg-gradient-to-br from-purple-600 to-blue-600",
    price: "$29.99",
    discount: "-50%",
    rating: 4,
    review: "Amazing game with incredible graphics and story. The recent updates have fixed most of the launch issues. Highly recommended!",
    likes: 156,
    verified: true,
    reviewer: {
      name: "GamerPro2024",
      avatar: "G",
      totalReviews: 234
    },
    gameInfo: {
      platform: "PC",
      genre: "RPG",
      releaseDate: "2020-12-10"
    }
  },
  {
    id: "game-review-002",
    title: "Elden Ring",
    image: "bg-gradient-to-br from-yellow-600 to-orange-600",
    price: "$39.99",
    discount: "-33%",
    rating: 5,
    review: "Masterpiece! The open world is breathtaking and the combat system is perfect. FromSoftware never disappoints.",
    likes: 289,
    verified: true,
    reviewer: {
      name: "SoulsFan",
      avatar: "S",
      totalReviews: 178
    },
    gameInfo: {
      platform: "PlayStation 5",
      genre: "Action RPG",
      releaseDate: "2022-02-25"
    }
  },
  {
    id: "game-review-003",
    title: "The Witcher 3",
    image: "bg-gradient-to-br from-green-600 to-teal-600",
    price: "$19.99",
    discount: "-60%",
    rating: 5,
    review: "Still one of the best RPGs ever made. The story, characters, and world-building are absolutely phenomenal.",
    likes: 445,
    verified: true,
    reviewer: {
      name: "RPGMaster",
      avatar: "R",
      totalReviews: 312
    },
    gameInfo: {
      platform: "PC",
      genre: "RPG",
      releaseDate: "2015-05-19"
    }
  },
  {
    id: "game-review-004",
    title: "God of War Ragnarök",
    image: "bg-gradient-to-br from-red-600 to-purple-600",
    price: "$49.99",
    discount: "-17%",
    rating: 5,
    review: "Epic conclusion to Kratos' story. The combat is fluid, the story is emotional, and the graphics are stunning.",
    likes: 198,
    verified: true,
    reviewer: {
      name: "KratosFan",
      avatar: "K",
      totalReviews: 156
    },
    gameInfo: {
      platform: "PlayStation 5",
      genre: "Action Adventure",
      releaseDate: "2022-11-09"
    }
  },
  {
    id: "game-review-005",
    title: "Baldur's Gate 3",
    image: "bg-gradient-to-br from-indigo-600 to-purple-600",
    price: "$59.99",
    discount: "-0%",
    rating: 5,
    review: "Incredible D&D experience! The character customization, story choices, and turn-based combat are all perfect.",
    likes: 367,
    verified: true,
    reviewer: {
      name: "DnDPlayer",
      avatar: "D",
      totalReviews: 89
    },
    gameInfo: {
      platform: "PC",
      genre: "RPG",
      releaseDate: "2023-08-03"
    }
  },
  {
    id: "game-review-006",
    title: "Spider-Man 2",
    image: "bg-gradient-to-br from-blue-600 to-red-600",
    price: "$54.99",
    discount: "-8%",
    rating: 4,
    review: "Great game, it's not bad great graphics. You have to practice to understand how to jump and land in the right place.",
    likes: 23,
    verified: true,
    reviewer: {
      name: "WebSlinger",
      avatar: "W",
      totalReviews: 45
    },
    gameInfo: {
      platform: "PlayStation 5",
      genre: "Action Adventure",
      releaseDate: "2023-10-20"
    }
  }
];

// Calculate database statistics
const totalReviews = userReviews.length + gameReviews.length;
const averageRating = (userReviews.reduce((sum, review) => sum + review.rating, 0) + 
                      gameReviews.reduce((sum, review) => sum + review.rating, 0)) / totalReviews;

// Export the complete database
export const reviewsDatabase: ReviewDatabase = {
  userReviews,
  gameReviews,
  totalReviews,
  averageRating: Math.round(averageRating * 10) / 10 // Round to 1 decimal place
};

// Export individual arrays for specific use cases
export { userReviews, gameReviews };

// Helper functions for database operations
export const getReviewById = (id: string): Review | GameReview | undefined => {
  const userReview = userReviews.find(review => review.id === id);
  if (userReview) return userReview;
  
  const gameReview = gameReviews.find(review => review.id === id);
  return gameReview;
};

export const getReviewsByRating = (rating: number): (Review | GameReview)[] => {
  return [...userReviews, ...gameReviews].filter(review => review.rating === rating);
};

export const getVerifiedReviews = (): (Review | GameReview)[] => {
  return [...userReviews, ...gameReviews].filter(review => review.verified);
};

export const getRecentReviews = (days: number = 7): (Review | GameReview)[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return [...userReviews, ...gameReviews].filter(review => {
    // This is a simplified filter - in a real app you'd parse the time string
    return 'time' in review && (review.time.includes('day') || review.time.includes('week') || review.time.includes('hour'));
  });
};

export const addReview = (review: Review | GameReview): void => {
  if ('gameInfo' in review) {
    gameReviews.push(review as GameReview);
  } else {
    userReviews.push(review as Review);
  }
};

export const updateReview = (id: string, updatedReview: Partial<Review | GameReview>): boolean => {
  const userIndex = userReviews.findIndex(review => review.id === id);
  if (userIndex !== -1) {
    userReviews[userIndex] = { ...userReviews[userIndex], ...updatedReview };
    return true;
  }
  
  const gameIndex = gameReviews.findIndex(review => review.id === id);
  if (gameIndex !== -1) {
    gameReviews[gameIndex] = { ...gameReviews[gameIndex], ...updatedReview };
    return true;
  }
  
  return false;
};

export const deleteReview = (id: string): boolean => {
  const userIndex = userReviews.findIndex(review => review.id === id);
  if (userIndex !== -1) {
    userReviews.splice(userIndex, 1);
    return true;
  }
  
  const gameIndex = gameReviews.findIndex(review => review.id === id);
  if (gameIndex !== -1) {
    gameReviews.splice(gameIndex, 1);
    return true;
  }
  
  return false;
};
