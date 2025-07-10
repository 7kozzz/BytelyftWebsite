"use client";
import React from "react";
import { motion } from "motion/react";
import {cn} from "../lib/utils"
import JoinByteLyft from "./JoinByteLyft";

export function LampCareers() {
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
          <div className="max-w-6xl mx-auto">
        
        {/* Main Content */}
        <div className="bg-slate-950/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-cyan-400/10">
          
          {/* Hero Message */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Grow With Us
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              As Bytelyft evolves from a passionate startup into an industry force, 
              we believe in growing together. Every team member who joins us becomes 
              part of our story, shaping the future of gaming alongside us.
            </p>
          </motion.div>

          {/* What We Offer Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            
            <motion.div
              className="bg-gray-800/40 rounded-xl p-6 border border-cyan-400/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-cyan-400 text-3xl mb-4">🚀</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-3">Growth Opportunities</h4>
              <p className="text-gray-300 text-sm md:text-base">
                Shape your career as we expand. Early team members have the chance to define roles, 
                lead projects, and grow into leadership positions.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/40 rounded-xl p-6 border border-purple-400/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-purple-400 text-3xl mb-4">🎨</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-3">Creative Freedom</h4>
              <p className="text-gray-300 text-sm md:text-base">
                Your ideas matter. We encourage innovation, experimentation, and bold thinking 
                in every aspect of game development.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/40 rounded-xl p-6 border border-orange-400/20 md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-orange-400 text-3xl mb-4">🤝</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-3">Tight-Knit Team</h4>
              <p className="text-gray-300 text-sm md:text-base">
                Work directly with founders and core team members. Your voice will be heard, 
                and your contributions will have immediate impact.
              </p>
            </motion.div>
          </div>

          {/* Future Roles Teaser */}
          <motion.div
            className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 md:p-8 border border-cyan-400/30 mb-8 md:mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 text-center">
              Future Opportunities We're Building Towards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-center max-w-4xl mx-auto">
              <div className="text-gray-300 text-sm md:text-base">
                <span className="text-cyan-400 font-semibold">•</span> Game Developers
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                <span className="text-purple-400 font-semibold">•</span> 3D Artists
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                <span className="text-orange-400 font-semibold">•</span> UI/UX Designers
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                <span className="text-green-400 font-semibold">•</span> Sound Engineers
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                <span className="text-pink-400 font-semibold">•</span> Community Managers
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                <span className="text-yellow-400 font-semibold">•</span> QA Testers
              </div>
            </div>
          </motion.div>

          {/* Current Status */}
          <motion.div
            className="text-center bg-gray-800/60 rounded-xl p-6 md:p-8 border border-yellow-400/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-yellow-400 text-4xl md:text-5xl mb-4">👀</div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              Keep an Eye Out
            </h4>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Currently, no positions are available, but we're growing fast!
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-6">
              Follow our journey and be the first to know when opportunities open up. 
              The best talent finds us before we even post the job.
            </p>
            
            {/* Floating Elements */}
            <div className="relative">
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-50"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
            
            </div>
          </motion.div>
        </div>
      </div>
        </motion.div>
      </motion.h1>

      
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
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-green-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
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
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-green-500 text-white [--conic-position:from_290deg_at_center_top]">
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
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-green-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-green-400 "></motion.div>

        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>
      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};