'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  className?: string;
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Attempt autoplay with sound enabled
    video.volume = 1;
    video.muted = false;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay with sound succeeded
          setIsMuted(false);
        })
        .catch(() => {
          // Browser autoplay policy blocked unmuted playback.
          // Gracefully fall back to muted playback to ensure continuous video display.
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }

    // 2. If blocked by browser, allow the first user interaction anywhere on the page to activate sound
    const handleFirstInteraction = () => {
      const v = videoRef.current;
      if (!v) return;
      if (v.muted) {
        v.muted = false;
        v.play()
          .then(() => {
            setIsMuted(false);
          })
          .catch(() => {
            v.muted = true;
            setIsMuted(true);
          });
      }
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { once: true });

    // 3. IntersectionObserver to pause/resume video when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      observer.disconnect();
    };
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsMuted(false);
          })
          .catch(() => {
            video.muted = true;
            setIsMuted(true);
          });
      } else {
        setIsMuted(false);
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center w-full h-full max-h-[76vh] sm:max-h-[82vh] md:max-h-[86vh] mx-auto select-none ${className}`}
    >
      {/* 
        Video Element:
        - intro1.mp4 features authentic character footage with VEENA typography already synchronized behind.
        - Warm ivory background #EDE9DD blends into container background with zero borders or hard boxes.
      */}
      <video
        ref={videoRef}
        src="/intro1.mp4"
        autoPlay
        playsInline
        loop
        preload="auto"
        muted={isMuted}
        style={{ backgroundColor: '#EDE9DD' }}
        className="w-auto h-full max-h-[76vh] sm:max-h-[82vh] md:max-h-[86vh] object-contain transition-opacity duration-700 pointer-events-auto z-10"
      />

      {/* Floating Sound Control Button with Concentric Pulse Rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 4.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-1 sm:bottom-3 z-30 flex items-center justify-center pointer-events-auto"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-black/10 pointer-events-none" />
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-black/5 pointer-events-none" />
          <button
            onClick={toggleSound}
            className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0D0D0D] text-white hover:bg-black hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg group"
            aria-label={isMuted ? 'Enable Sound' : 'Mute Sound'}
            title={isMuted ? 'Enable Sound' : 'Mute Sound'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
