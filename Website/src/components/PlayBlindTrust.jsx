import { motion } from "motion/react";

const PlayBlindTrust = () => {
  const steamPageUrl = "https://store.steampowered.com/app/YOUR_GAME_ID"; // Replace with your actual Steam page URL

  const openSteamPage = () => {
    window.open(steamPageUrl, '_blank');
  };

  return (
    <motion.button
      onClick={openSteamPage}
      whileHover={{ 
        y: -6,
        boxShadow: "0 12px 30px rgba(26, 159, 255, 0.4)"
      }}
      whileTap={{ scale: 1.03 }}
      className="relative px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl text-center rounded-xl sm:rounded-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-400 text-white w-full max-w-[22rem] cursor-pointer overflow-hidden shadow-2xl transition-all duration-300 border-2 border-cyan-400/40 mx-auto"
    >
      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-4"
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.03 }}
      >
        {/* Steam Icon */}
        <svg 
          className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.62 20.442 6.287 24 11.979 24c6.624 0 11.999-5.375 11.999-12S18.603.001 11.979.001zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.456-.397.957-1.497 1.41-2.454 1.01z"/>
        </svg>
        
        <span className="tracking-wide whitespace-nowrap">PLAY NOW</span>
        
        {/* Play Icon */}
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>
      </motion.div>
      
      {/* Steam-style shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        initial={{ x: '-120%' }}
        whileHover={{ x: '120%' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      {/* Subtle pulse effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl sm:rounded-2xl"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.01, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.button>
  );
};

export default PlayBlindTrust;