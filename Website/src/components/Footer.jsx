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
                href="#"
                className="w-10 h-10 bg-gray-800/60 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">🐦</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800/60 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">💬</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800/60 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">📺</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800/60 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">👥</span>
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
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
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