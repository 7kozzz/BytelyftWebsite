import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <section 
    id="contact"
    className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20 px-4 md:px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            Contact Us
            <span className="text-cyan-400">📬</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to connect? We'd love to hear from you. Whether you have questions, 
            feedback, or just want to say hello, we're here to listen.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Primary Contact */}
            <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400 text-2xl">📧</span>
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Support</p>
                    <a 
                      href="mailto:support@bytelyft.io" 
                      className="text-white hover:text-cyan-400 transition-colors text-lg font-medium"
                    >
                      support@bytelyft.io
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 text-xl">⏰</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white text-lg font-medium">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 border border-cyan-400/30">
              <h4 className="text-xl font-bold text-white mb-4">Quick Connect</h4>
              <p className="text-gray-300 mb-4">
                Looking for faster responses? Connect with us on social media or join our community discussions.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="bg-gray-800/60 hover:bg-gray-700/60 text-white px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discord
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-gray-800/60 hover:bg-gray-700/60 text-white px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Twitter
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Animated Interactive Section */}
          <motion.div
            className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Animated Background Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />

            <h3 className="text-2xl font-bold text-white mb-8 text-center">Let's Connect!</h3>
            
            {/* Animated Cards */}
            <div className="space-y-6">
              {/* Gaming Focus Card */}
              <motion.div
                className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl p-6 border border-cyan-400/30 cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <motion.div
                    className="text-3xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    🎮
                  </motion.div>
                  <h4 className="text-xl font-bold text-white">Gaming Enthusiast?</h4>
                </div>
                <p className="text-gray-300">
                  Join our community of gamers and get early access to our latest projects and beta releases.
                </p>
              </motion.div>

              {/* Developer Card */}
              <motion.div
                className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-6 border border-purple-400/30 cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <motion.div
                    className="text-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    💻
                  </motion.div>
                  <h4 className="text-xl font-bold text-white">Developer?</h4>
                </div>
                <p className="text-gray-300">
                  Interested in collaborating? We're always looking for talented developers to join our mission.
                </p>
              </motion.div>

              {/* Feedback Card */}
              <motion.div
                className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-xl p-6 border border-orange-400/30 cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(251, 146, 60, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <motion.div
                    className="text-3xl"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    💡
                  </motion.div>
                  <h4 className="text-xl font-bold text-white">Have Ideas?</h4>
                </div>
                <p className="text-gray-300">
                  Share your thoughts and feedback. Your input helps shape the future of our games.
                </p>
              </motion.div>
            </div>

            {/* Floating Action Button */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {/* <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(34, 211, 238, 0.3)",
                    "0 0 30px rgba(168, 85, 247, 0.3)",
                    "0 0 20px rgba(34, 211, 238, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                onClick={() => window.location.href = 'mailto:support@bytelyft.io'}
              >
                Start the Conversation
              </motion.button> */}
            </motion.div>

            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-cyan-400/20"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16 bg-gray-800/40 rounded-xl p-6 border border-gray-600/20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-white mb-3">
            We Value Your Privacy
          </h4>
          <p className="text-gray-300">
            Your information is safe with us. We'll never share your details with third parties 
            and will only use your contact information to respond to your inquiry.
          </p>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-xl opacity-30"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-lg opacity-25"
            animate={{ 
              scale: [1.2, 1, 1.2],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;