import { motion } from "motion/react";

const JoinByteLyft = () => {
  const discordInviteUrl = "https://discord.gg/YOUR_SERVER_ID"; // Replace with your actual Discord invite link

  const openDiscord = () => {
    window.open(discordInviteUrl, '_blank');
  };

  return (
    <motion.button
      onClick={openDiscord}
      whileHover={{ 
        y: -3,
        boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)"
      }}
      whileTap={{ scale: 1.02 }}
      className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg text-center rounded-lg sm:rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[24rem] mx-auto cursor-pointer overflow-hidden shadow-lg transition-all duration-300 border border-violet-400/30"
    >
      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-3"
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.197.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
        <span className="whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg">
          Join ByteLyft Community
        </span>
      </motion.div>
      
      {/* Subtle background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default JoinByteLyft;