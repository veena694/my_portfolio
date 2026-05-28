"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroContent.module.css";

export default function HeroContent() {
  const taglineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant luxury slow-motion GSAP timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.4,
      delay: 0.8, // Allow video fade-in first
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
        },
        "-=1.0"
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
        },
        "-=1.2"
      )
      .to(
        pillsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
        },
        "-=1.0"
      );
  }, []);

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "GSAP",
    "Three.js",
    "TailwindCSS",
    "Supabase",
  ];

  return (
    <div className={styles.heroOverlay} id="hero-content-section">
      {/* Cinematic animated tagline */}
      <div ref={taglineRef} className={styles.tagline} id="hero-tagline">
        FULL STACK DEVELOPER • CREATOR • PROBLEM SOLVER
      </div>

      {/* Main stacked typography */}
      <div className={styles.headingWrapper}>
        <h1 ref={titleRef} className={styles.mainTitleAccent} id="hero-title">
          VEENA
        </h1>
      </div>

      {/* Cinematic subtitle description */}
      <p ref={subtitleRef} className={styles.subtitle} id="hero-subtitle">
        Full Stack Developer passionate about building immersive digital experiences, scalable applications, AI-powered platforms, and modern web products using React, Next.js, Node.js, TypeScript, MongoDB, and modern frontend technologies.
      </p>

      {/* Dynamic tech stack pills */}
      <div ref={pillsRef} className={styles.techPillsWrapper} id="hero-tech-pills">
        {techStack.map((tech) => (
          <span key={tech} className={styles.techPill} id={`hero-pill-${tech.toLowerCase()}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
