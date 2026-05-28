"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Compass, Cpu, Layers } from "lucide-react";
import styles from "./AboutSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // ScrollTrigger entrance animation for left column content
    gsap.fromTo(
      leftColRef.current?.children || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftColRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // ScrollTrigger entrance animation for right column cards
    gsap.fromTo(
      rightColRef.current?.children || [],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const skillsData = {
    Frontend: ["React.js", "Next.js", "TypeScript", "GSAP", "Three.js", "TailwindCSS"],
    Backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
    Tools: ["Git", "GitHub", "Docker", "Railway", "Vercel", "Supabase"],
    Design: ["Figma", "UX/UI Design", "Responsive Design", "Motion Design"],
  };

  return (
    <section ref={sectionRef} className={styles.aboutSection} id="about-section-container">
      {/* Background Ambience node */}
      <div className="glow-accent glow-warm pulsing-glow" style={{ top: "10%", right: "-10%", width: "40vw", height: "40vw" }} />

      <div className={styles.container}>
        {/* Left Column - Biography Storytelling */}
        <div ref={leftColRef} className={styles.leftColumn} id="about-left-col">
          <span className={styles.sectionLabel}>BIOGRAPHY</span>
          <h2 className={styles.heading}>
            Crafting Digital Experiences <br />
            <span className={styles.headingHighlight}>With Purpose</span>
          </h2>
          <div className={styles.description}>
            <p>
              Hi, I’m <strong>Veena</strong> — a Full Stack Developer passionate about building immersive digital experiences, scalable full-stack applications, and AI-powered platforms.
            </p>
            <p>
              I specialize in modern frontend engineering using <strong>React, Next.js, TypeScript, GSAP, and Three.js</strong> while also building scalable backend systems with <strong>Node.js, Express.js, MongoDB, PostgreSQL, and Prisma</strong>.
            </p>
            <p>
              My focus is creating products that combine performance, functionality, and cinematic user experiences. I enjoy transforming ideas into modern digital products with elegant UI architecture and immersive interactions.
            </p>
            <p>
              Currently, I’m working as a <strong>Frontend Development Intern at Unified Mentor</strong>, contributing to the <strong>EntreSkill Hub</strong> full-stack platform with reusable frontend systems, scalable architecture, and premium user experiences.
            </p>
          </div>
        </div>

        {/* Right Column - Stats & Technical Skills */}
        <div ref={rightColRef} className={styles.rightColumn} id="about-right-col">
          {/* Glassmorphic Statistics Grid */}
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} glass-panel`} id="about-stat-internships">
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Internship Tenures</div>
            </div>
            
            <div className={`${styles.statCard} glass-panel`} id="about-stat-commitment">
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Performance Focus</div>
            </div>
          </div>

          {/* Interactive Skills categorized glass-panel */}
          <div className={`${styles.skillsCard} glass-panel`} id="about-skills-box">
            <h3 className={styles.skillsTitle}>
              <Layers size={18} style={{ color: "var(--accent-warm)" }} />
              Technical Arsenal
            </h3>

            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className={styles.skillsCategory} id={`skills-cat-${category.toLowerCase()}`}>
                <div className={styles.categoryName}>{category}</div>
                <div className={styles.skillsList}>
                  {skills.map((skill) => (
                    <span key={skill} className={styles.skillPill} id={`skill-pill-${skill.toLowerCase().replace(/\./g, "")}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
