"use client";
import React from "react";
import { motion } from "motion/react";
import {cn} from "../lib/utils"
import JoinByteLyft from "./JoinByteLyft";

export function LampAbout() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            About 
          </h2>
          <img 
            src="/src/assets/BLRemoved.png" 
            alt="Bytelyft Logo" 
            className="h-24 md:h-60"
          />
        </motion.div>
      </motion.h1>
{/* About Content Section */}
<div className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-6 mt-4 sm:mt-8 md:mt-20">
  {/* Main Content Grid */}
  <div className="w-full grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-16 items-start bg-slate-950/80 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-8 border border-cyan-400/10 overflow-hidden">
    
    {/* Text Content */}
    <motion.div
      className="w-full space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Mission Statement */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">Our Mission</h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
          At Bytelyft, we believe gaming should be about passion, creativity, and genuine connection. 
          Unlike traditional studios that chase profit margins, we're building something different—
          games that matter, crafted with our community at the heart of every decision.
        </p>
      </div>

      {/* Company Story */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">Who We Are</h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
          We're an indie game studio startup founded on the principle that great games come from 
          listening to players, not boardrooms. Our small but dedicated team combines years of 
          industry experience with fresh perspectives, creating experiences that challenge conventions 
          and forge meaningful connections between players.
        </p>
      </div>

      {/* Values */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">What Drives Us</h3>
        <div className="space-y-2 sm:space-y-2 md:space-y-3">
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-xl mt-0.5 flex-shrink-0">•</span>
            <span className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              <strong className="text-white">Community First:</strong> Every game we create is shaped by player feedback and community input
            </span>
          </div>
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-xl mt-0.5 flex-shrink-0">•</span>
            <span className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              <strong className="text-white">Innovation Over Imitation:</strong> We dare to explore new mechanics and emotional territories
            </span>
          </div>
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-xl mt-0.5 flex-shrink-0">•</span>
            <span className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              <strong className="text-white">Quality Without Compromise:</strong> Small team, big dreams, zero tolerance for rushed releases
            </span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Visual Elements */}
    <motion.div
      className="w-full relative mt-4 lg:mt-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Stats Card */}
      <div className="w-full bg-gray-800/60 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-cyan-400/20 shadow-2xl">
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center">Studio Snapshot</h4>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 mb-1">2024</div>
            <div className="text-xs sm:text-xs md:text-sm text-gray-400">Founded</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">5+</div>
            <div className="text-xs sm:text-xs md:text-sm text-gray-400">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-400 mb-1">1</div>
            <div className="text-xs sm:text-xs md:text-sm text-gray-400">Games Released</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400 mb-1">∞</div>
            <div className="text-xs sm:text-xs md:text-sm text-gray-400">Big Ideas</div>
          </div>
        </div>
      </div>

      {/* Floating Elements - Much smaller on mobile, properly positioned */}
      <motion.div
        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-lg sm:blur-xl opacity-60"
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
        className="absolute -bottom-1 -left-1 sm:-bottom-3 sm:-left-3 md:-bottom-6 md:-left-6 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-md sm:blur-lg opacity-50"
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, -5, 0]
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
    className="w-full text-center mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-20 pb-4 sm:pb-6 md:pb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
  >
    {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4">
      Ready to be part of something bigger than just gaming?
    </p>
    <JoinByteLyft/> */}
  </motion.div>
</div>
      
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[200vh] flex-col items-center justify-start overflow-visible bg-slate-950 w-full rounded-md z-0",
        className
      )}>
      <div
        className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
          <div
            className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div
            className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
          <div
            className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div
            className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>

        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>
      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};