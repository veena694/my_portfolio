'use client';

import React from 'react';
import { VideoHero } from './VideoHero';
import { PROFILE } from '@/lib/data';
import { MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen h-screen md:h-[100svh] pt-16 md:pt-20 pb-0 flex flex-col justify-between overflow-hidden bg-[#EDE9DD]"
    >
      {/* Accessible Screen Reader Heading */}
      <h1 className="sr-only">
        {PROFILE.name} {PROFILE.lastName} — Software Engineer (Frontend, Full Stack, Data Analytics)
      </h1>

      {/* Center Stage: VideoHero fills the background/center stage */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 pt-16 md:pt-20 pb-12">
        <VideoHero />
      </div>

      {/* Editorial Vertical Manifesto: Beside character's right side near shoulder height */}
      <div className="hidden md:flex absolute left-1/2 translate-x-[110px] lg:translate-x-[135px] xl:translate-x-[155px] top-[24%] lg:top-[26%] xl:top-[28%] items-center gap-3 z-20 pointer-events-none select-none">
        {/* Step 1: Subtle horizontal guide line draws into view */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="w-8 lg:w-12 xl:w-14 h-[1px] bg-black/25"
        />

        {/* Steps 2-5: BUILD -> ANALYZE -> SOLVE -> CONNECT appear with staggered upward fade */}
        <div className="flex flex-col space-y-1 font-mono text-[9px] lg:text-[10px] xl:text-[11px] tracking-[0.22em] text-[#666666] uppercase leading-tight select-none">
          {[
            { word: 'BUILD', delay: 3.1 },
            { word: 'ANALYZE', delay: 3.25 },
            { word: 'SOLVE', delay: 3.4 },
            { word: 'CONNECT', delay: 3.55 },
          ].map((item) => (
            <motion.span
              key={item.word}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-medium"
            >
              {item.word}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Main Content Overlays: Anchored explicitly to the lower portion of the hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto mb-4 sm:mb-6 lg:mb-8 pointer-events-none">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-2 sm:pb-3">
          
          {/* Lower-Left Column: Role Badge & Technical Details */}
          <div className="w-full max-w-[290px] lg:max-w-[320px] xl:max-w-[350px] text-left pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-xs border border-black/10 shadow-xs rounded-xs"
            >
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-black font-semibold">
                SOFTWARE ENGINEER
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs text-[#555555] tracking-widest uppercase font-medium mt-3"
            >
              FRONTEND • FULL STACK • DATA ANALYTICS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#1A1A1A] text-xs sm:text-sm md:text-[14px] font-normal leading-relaxed mt-2"
            >
              Building software products, responsive interfaces, and analytical data dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-3 mt-3 border-t border-black/15 font-mono text-[10px] text-[#666666] tracking-wider uppercase"
            >
              BASED IN INDIA • B.TECH CSE • IEEE PUBLISHED
            </motion.div>

            {/* Mobile Manifesto Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
              className="md:hidden flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[9px] tracking-[0.2em] text-[#777777] uppercase pt-2 select-none"
            >
              <span>BUILD</span>
              <span>/</span>
              <span>ANALYZE</span>
              <span>/</span>
              <span>SOLVE</span>
              <span>/</span>
              <span>CONNECT</span>
            </motion.div>
          </div>

          {/* Lower-Right Column: Editorial Statement & Actions */}
          <div className="w-full max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] text-left pointer-events-auto">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl lg:text-[26px] xl:text-[28px] font-normal tracking-tight text-black leading-snug"
            >
              I BUILD{' '}
              <span className="font-editorial-serif italic font-normal text-black underline underline-offset-4 decoration-black/20">
                digital experiences
              </span>
              <br className="hidden sm:inline" />
              & DATA-DRIVEN{' '}
              <span className="font-editorial-serif italic font-normal text-black underline underline-offset-4 decoration-black/20">
                solutions.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-white hover:bg-[#262626] font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
              >
                <span>EXPLORE MY WORK</span>
                <span>→</span>
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 hover:bg-white text-[#0D0D0D] border border-black/15 font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-xs"
              >
                <span>LET'S TALK</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 pt-3 font-mono text-xs text-[#555555]"
            >
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D0D0D] hover:underline font-semibold flex items-center gap-1"
              >
                Download Resume ↓
              </a>
              <span>•</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Divider Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"
      >
        <div className="w-full border-t border-black/15 pt-3 flex justify-between items-center font-mono text-[11px] text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="uppercase tracking-widest font-semibold text-black">
              BUILD • ANALYZE • SOLVE
            </span>
          </div>
          <div className="hidden sm:block uppercase tracking-wider text-[#666666]">
            SCROLL TO EXPLORE ↓
          </div>
        </div>
      </motion.div>
    </section>
  );
};
