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
      className="relative min-h-[100svh] h-auto md:h-[100svh] pt-16 md:pt-20 pb-0 flex flex-col justify-between overflow-x-hidden md:overflow-hidden bg-[#EDE9DD]"
    >
      {/* Accessible Screen Reader Heading */}
      <h1 className="sr-only">
        {PROFILE.name} {PROFILE.lastName} — Software Engineer (Frontend, Full Stack, Data Analytics)
      </h1>

      {/* Center Stage: VideoHero fills the background/center stage */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 pt-16 md:pt-20 pb-10 md:pb-12">
        <VideoHero />
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (>= md): Preserved exactly as approved                    */}
      {/* ========================================================================= */}

      {/* Desktop Vertical Manifesto: Beside character's right side near shoulder height */}
      <div className="hidden md:flex absolute left-1/2 translate-x-[110px] lg:translate-x-[135px] xl:translate-x-[155px] top-[24%] lg:top-[26%] xl:top-[28%] items-center gap-3 z-20 pointer-events-none select-none">
        {/* Subtle horizontal guide line draws into view */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="w-8 lg:w-12 xl:w-14 h-[1px] bg-black/25"
        />

        {/* BUILD -> ANALYZE -> SOLVE -> CONNECT appear with staggered upward fade */}
        <div className="flex flex-col space-y-1 font-mono text-[9px] lg:text-[10px] xl:text-[11px] tracking-[0.22em] text-[#666666] uppercase leading-tight select-none">
          {[
            { word: 'BUILD', delay: 2.5 },
            { word: 'ANALYZE', delay: 2.65 },
            { word: 'SOLVE', delay: 2.8 },
            { word: 'CONNECT', delay: 2.95 },
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

      {/* Desktop Main Content Overlays: Anchored explicitly to the lower portion */}
      <div className="hidden md:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto mb-4 sm:mb-6 lg:mb-8 pointer-events-none">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-2 sm:pb-3">
          
          {/* Lower-Left Column: Role Badge & Technical Details */}
          <div className="w-full max-w-[290px] lg:max-w-[320px] xl:max-w-[350px] text-left pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-xs border border-black/10 shadow-xs rounded-xs"
            >
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-black font-semibold">
                SOFTWARE ENGINEER
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs text-[#555555] tracking-widest uppercase font-medium mt-3"
            >
              FRONTEND • FULL STACK • DATA ANALYTICS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#1A1A1A] text-xs sm:text-sm md:text-[14px] font-normal leading-relaxed mt-2"
            >
              Building software products, responsive interfaces, and analytical data dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-3 mt-3 border-t border-black/15 font-mono text-[10px] text-[#666666] tracking-wider uppercase"
            >
              BASED IN INDIA • B.TECH CSE • IEEE PUBLISHED
            </motion.div>
          </div>

          {/* Lower-Right Column: Editorial Statement & Actions */}
          <div className="w-full max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] text-left pointer-events-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Desktop Bottom Divider Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"
      >
        <div className="w-full border-t border-black/15 pt-3 flex justify-between items-center font-mono text-[11px] text-[#555555]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="uppercase tracking-widest font-semibold text-black">
              BUILD • ANALYZE • SOLVE
            </span>
          </div>
          <div className="uppercase tracking-wider text-[#666666]">
            SCROLL TO EXPLORE ↓
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* MOBILE LAYOUT (< md): Exact composition matching approved reference       */}
      {/* ========================================================================= */}

      {/* Decorative Orbit Swirl Path behind character (as in reference) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="md:hidden absolute inset-0 z-10 pointer-events-none overflow-hidden"
      >
        <svg
          viewBox="0 0 390 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          {/* Subtle swooping vector curve passing around character waist and feet */}
          <path
            d="M 285 360 C 330 460 210 520 120 580 C 100 595 110 650 145 660"
            stroke="rgba(13, 13, 13, 0.45)"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
          {/* 4-point sparkle star accent at the curve knot */}
          <path
            d="M 128 646 Q 128 652 122 652 Q 128 652 128 658 Q 128 652 134 652 Q 128 652 128 646 Z"
            fill="#0D0D0D"
          />
        </svg>
      </motion.div>

      {/* Zone 1: Mobile Upper-Left Information Block (Close to Header) */}
      <div className="md:hidden relative z-20 w-full px-5 pt-3 pointer-events-auto">
        <div className="max-w-[275px] text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white border border-black/15 shadow-xs rounded-xs"
          >
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-black font-semibold">
              SOFTWARE ENGINEER
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10.5px] text-[#555555] tracking-widest uppercase font-medium mt-2.5 leading-snug"
          >
            FRONTEND • FULL STACK • DATA ANALYTICS
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1A1A1A] text-xs font-normal leading-relaxed mt-1.5"
          >
            Building software products, responsive interfaces, and analytical data dashboards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 mt-2 border-t border-black/15 font-mono text-[9px] text-[#666666] tracking-wider uppercase leading-tight space-y-0.5"
          >
            <div>BASED IN INDIA • B.TECH CSE</div>
            <div>IEEE PUBLISHED</div>
          </motion.div>
        </div>
      </div>

      {/* Zone 2: Mobile Narrative Labels beside Character's Right Side with Vertical Line & Dots */}
      <div className="md:hidden absolute right-5 top-[27%] z-20 pointer-events-none select-none flex items-start gap-3">
        {/* Thin vertical guide line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'top' }}
          className="w-[1px] h-28 bg-black/35 self-stretch"
        />

        {/* 4 Items: Dot + Label */}
        <div className="flex flex-col justify-between h-28 font-mono text-[10px] tracking-[0.2em] text-[#555555] uppercase">
          {[
            { word: 'BUILD', delay: 2.5 },
            { word: 'ANALYZE', delay: 2.65 },
            { word: 'SOLVE', delay: 2.8 },
            { word: 'CONNECT', delay: 2.95 },
          ].map((item) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
              <span className="font-semibold text-neutral-800">{item.word}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zone 3 & 4: Mobile Lower-Right Statement & Stacked Action Controls */}
      <div className="md:hidden relative z-20 w-full px-5 pb-6 mt-auto pointer-events-auto space-y-3.5">
        {/* Lower-Right Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-right"
        >
          <h2 className="text-xl font-normal tracking-tight text-black leading-snug">
            I BUILD{' '}
            <span className="font-editorial-serif italic font-normal text-black underline underline-offset-4 decoration-black/25">
              digital experiences
            </span>
            <br />
            & DATA-DRIVEN{' '}
            <span className="font-editorial-serif italic font-normal text-black underline underline-offset-4 decoration-black/25">
              solutions.
            </span>
          </h2>
        </motion.div>

        {/* Action Buttons: Full-width stacked buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2.5 pt-0.5"
        >
          <a
            href="#work"
            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0D0D0D] text-white hover:bg-[#262626] active:scale-[0.99] font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-sm w-full text-center"
          >
            <span>EXPLORE MY WORK</span>
            <span>→</span>
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#0D0D0D] border border-black/20 hover:bg-neutral-50 active:scale-[0.99] font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-xs w-full text-center"
          >
            <span>LET'S TALK</span>
            <MessageSquare className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Resume & GitHub Links with icons and divider */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 pt-1 font-mono text-xs text-[#1A1A1A]"
        >
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D0D0D] hover:underline font-semibold flex items-center gap-1.5"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Download Resume ↓</span>
          </a>
          <span className="text-black/30 font-light">|</span>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black font-semibold flex items-center gap-1.5"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </motion.div>
      </div>

    </section>
  );
};
