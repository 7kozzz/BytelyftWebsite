import { motion } from "motion/react";

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
              {/* <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => handleSmoothScroll(e, '/')}
                >
                  Home
                </a>
              </li> */}
              <li>
                <a 
                  href="#games" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => handleSmoothScroll(e, 'games')}
                >
                  Games
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#careers" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => handleSmoothScroll(e, 'careers')}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                >
                  Contact
                </a>
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

        {/* Newsletter Signup */}
        {/* <motion.div
          className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 md:p-8 border border-cyan-400/20 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-white mb-2">Stay in the Loop</h4>
              <p className="text-gray-300">Get the latest updates on our games, releases, and company news.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/60 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div> */}

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

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
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