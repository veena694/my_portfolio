"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import HeroContent from "./HeroContent";
import styles from "./VideoIntro.module.css";

export default function VideoIntro() {
  const fgVideoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const soundBadgeRef = useRef<HTMLDivElement>(null);
  const splitWrapperRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showBadge, setShowBadge] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Sync controls (visual play/pause)
  const togglePlay = () => {
    if (!fgVideoRef.current) return;
    
    if (isPlaying) {
      fgVideoRef.current.pause();
      if (bgVideoRef.current) bgVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      fgVideoRef.current.play().catch(() => {});
      if (bgVideoRef.current) bgVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Only unmute/mute the foreground crisp video, keeping background blurred video muted forever!
  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!fgVideoRef.current) return;

    const newMutedState = !isMuted;
    fgVideoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
    
    if (showBadge && !newMutedState) {
      dismissSoundBadge();
    }
  };

  const handleTapForSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!fgVideoRef.current) return;

    fgVideoRef.current.muted = false;
    setIsMuted(false);
    dismissSoundBadge();
  };

  const dismissSoundBadge = () => {
    if (soundBadgeRef.current) {
      gsap.to(soundBadgeRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => setShowBadge(false),
      });
    } else {
      setShowBadge(false);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section-container");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setMounted(true);
    
    // Check screen size to determine desktop vs mobile rendering target
    const handleScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);

    // Attempt autoplay immediately
    if (fgVideoRef.current) {
      const playPromise = fgVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }
    
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }

    // Staggered slow fade in for the split container components on page load
    gsap.fromTo(
      splitWrapperRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.4, ease: "power4.out", delay: 0.1 }
    );

    // Auto-fade for Tap for Sound Badge
    const timer = setTimeout(() => {
      if (soundBadgeRef.current) {
        gsap.to(soundBadgeRef.current, {
          opacity: 0,
          y: -10,
          duration: 1.0,
          ease: "power2.inOut",
          onComplete: () => setShowBadge(false),
        });
      }
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={styles.heroContainer} id="hero-video-intro">
      {/* 
        Background Fullscreen Blur Video 
        CRITICAL OPTIMIZATION: Rendered ONLY on Desktop (1024px+) AND after hydration.
        Saves 50% CPU/GPU/network footprint on mobile!
      */}
      {mounted && isDesktop && (
        <video
          ref={bgVideoRef}
          className={styles.bgBlurVideo}
          src="/assets/video/hero-cinematic.mp4"
          loop
          muted
          playsInline
          autoPlay
          preload="none" /* Prevent blocking initial hydration payload */
        />
      )}

      {/* Cinematic Vignette Overlay */}
      <div className={styles.overlayMask} />
      <div className={styles.vignette} />

      {/* Foreground Interactive UX Overlay */}
      <div className={styles.contentOverlay}>
        
        {/* Top brand header */}
        <div className={styles.headerTop}>
          <div className={styles.brandName}>Veena</div>
          <nav className={styles.navigationBar}>
            <a href="#about-section-container" className={styles.navLink}>About</a>
            <a href="#services-section-container" className={styles.navLink}>Services</a>
            <a href="#projects-section-container" className={styles.navLink}>Projects</a>
            <a href="#experience-section-container" className={styles.navLink}>Journey</a>
            <a href="#contact-section-container" className={styles.navLink}>Contact</a>
          </nav>
        </div>

        {/* 2-Column Split Container */}
        <div ref={splitWrapperRef} className={styles.heroSplitWrapper} id="hero-split-container">
          
          {/* Left Column: Staggered Text Details */}
          <div className={styles.leftContent}>
            <HeroContent />
          </div>

          {/* Right Column: Floating Vertical Video card */}
          <div className={styles.rightVideoSide}>
            <div className={`${styles.videoCardWrapper} glass-panel`} id="cinematic-video-card">
              <video
                ref={fgVideoRef}
                className={styles.fgVideoCard}
                src="/assets/video/hero-cinematic.mp4"
                loop
                muted
                playsInline
                autoPlay
                preload="metadata" /* Light preloading to prevent rendering block */
                onClick={toggleMute}
              />

              {/* Tap for Cinematic Sound badge floating inside the card */}
              {showBadge && (
                <div
                  ref={soundBadgeRef}
                  className={styles.soundBadge}
                  onClick={handleTapForSound}
                  id="tap-for-sound-badge"
                >
                  <div className={styles.pulseDot} />
                  <span>TAP FOR SOUND</span>
                </div>
              )}

              {/* Dynamic glassmorphic audio/video controls overlay inside the video card */}
              <div className={styles.videoCardControls}>
                <button
                  className={styles.cardControlButton}
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  aria-label={isPlaying ? "Pause cinematic intro" : "Play cinematic intro"}
                  id="play-pause-btn-widget"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                
                <button
                  className={styles.cardControlButton}
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  id="mute-unmute-btn-widget"
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator} onClick={scrollToAbout} id="home-scroll-indicator">
          <span className={styles.scrollText}>ENTER EXPERIENCES</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollPulseLine} />
          </div>
        </div>

      </div>
    </section>
  );
}
