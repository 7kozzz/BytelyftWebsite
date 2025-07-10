import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to scroll to top when navigating to legal pages
  const handleLegalPageClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <footer className="w-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 border-t border-gray-800/50">
      <div className="w-full max-w-none px-4 md:px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/src/assets/BLRemoved.png" 
                alt="Bytelyft Logo" 
                className="h-12 w-auto"
              />
              <h3 className="text-2xl font-bold text-white">Bytelyft</h3>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Crafting unforgettable gaming experiences with passion, innovation, and community at heart. 
              Join us on our journey to redefine what games can be.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://x.com/Bytelyft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/60 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a
                href="http://www.youtube.com/@ByteLyft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/60 hover:bg-red-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/bytelyft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/60 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@bytelyft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/60 hover:bg-black rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.948-1.316-2.143-1.316-3.368C16.425.608 16.425.304 16.425 0h-3.578v16.033c0 1.622-1.313 2.936-2.935 2.936s-2.935-1.314-2.935-2.936c0-1.621 1.313-2.935 2.935-2.935.304 0 .596.049.871.14v-3.691a6.544 6.544 0 0 0-.871-.058c-3.621 0-6.561 2.94-6.561 6.561S6.291 22.611 9.912 22.611s6.561-2.94 6.561-6.561V8.817a9.065 9.065 0 0 0 5.338 1.707V6.946a5.613 5.613 0 0 1-2.49-1.384z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {/* <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li> */}
              <li>
                <Link 
                  to="/#games" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    // If we're on the homepage, scroll to section
                    if (window.location.pathname === '/') {
                      handleSmoothScroll(e, 'games');
                    }
                  }}
                >
                  Games
                </Link>
              </li>
              <li>
                <Link 
                  to="/#about" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      handleSmoothScroll(e, 'about');
                    }
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/#careers" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      handleSmoothScroll(e, 'careers');
                    }
                  }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/#contact" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      handleSmoothScroll(e, 'contact');
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
            
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">🛠️</span>
                <a 
                  href="mailto:support@bytelyft.io" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  support@bytelyft.io
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">⏰</span>
                <span className="text-gray-300">24-48h response time</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="max-w-7xl mx-auto border-t border-gray-800/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>© {currentYear} Bytelyft. All rights reserved.</p>
              <p className="text-sm">Made with ❤️ for the gaming community</p>
            </div>

            {/* Legal Links - Using React Router Link */}
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                onClick={handleLegalPageClick}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                onClick={handleLegalPageClick}
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                onClick={handleLegalPageClick}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-pink-500/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>
      </div>
    </footer>
  );
};

export default Footer;