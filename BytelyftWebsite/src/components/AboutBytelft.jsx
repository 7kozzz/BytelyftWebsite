import { motion } from "motion/react";
import JoinByteLyft from "./JoinByteLyft";

const AboutBytelyft = () => {
  return (
    // <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pb-20 px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            About 
            <img 
              src="/src/assets/BLRemoved.png" 
              alt="Bytelyft Logo" 
              className="h-24 md:h-32"
            />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div> */}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start pt-8">
          
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Mission Statement */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Bytelyft, we believe gaming should be about passion, creativity, and genuine connection. 
                Unlike traditional studios that chase profit margins, we're building something different—
                games that matter, crafted with our community at the heart of every decision.
              </p>
            </div>

            {/* Company Story */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Who We Are</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We're an indie game studio startup founded on the principle that great games come from 
                listening to players, not boardrooms. Our small but dedicated team combines years of 
                industry experience with fresh perspectives, creating experiences that challenge conventions 
                and forge meaningful connections between players.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">What Drives Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">•</span>
                  <span className="text-gray-300"><strong className="text-white">Community First:</strong> Every game we create is shaped by player feedback and community input</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">•</span>
                  <span className="text-gray-300"><strong className="text-white">Innovation Over Imitation:</strong> We dare to explore new mechanics and emotional territories</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">•</span>
                  <span className="text-gray-300"><strong className="text-white">Quality Without Compromise:</strong> Small team, big dreams, zero tolerance for rushed releases</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Stats Card */}
            <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Studio Snapshot</h4>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2024</div>
                  <div className="text-sm text-gray-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1</div>
                  <div className="text-sm text-gray-400">Games Released</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                  <div className="text-sm text-gray-400">Big Ideas</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-xl opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-lg opacity-50"
              animate={{ 
                scale: [1.2, 1, 1.2],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 mb-6">
            Ready to be part of something bigger than just gaming?
          </p>
          <JoinByteLyft/>
        </motion.div>
      </div>
    // </section>
  );
};

export default AboutBytelyft;