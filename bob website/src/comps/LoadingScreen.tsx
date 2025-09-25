import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  progress?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, progress = 0 }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Gaming Icon Animation */}
        <motion.div
          className="mb-6 sm:mb-8"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading Game...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 mx-auto mb-4">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Gaming Quote */}
        <motion.p
          className="text-gray-300 text-sm mt-6 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          "The best games are those that make you forget you're playing a game."
        </motion.p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-cyan-400 border-t-transparent border-r-transparent rounded-tl-2xl opacity-60" />
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-cyan-400 border-t-transparent border-l-transparent rounded-tr-2xl opacity-60" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-cyan-400 border-b-transparent border-r-transparent rounded-bl-2xl opacity-60" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-cyan-400 border-b-transparent border-l-transparent rounded-br-2xl opacity-60" />
    </motion.div>
  );
};

export default LoadingScreen;
