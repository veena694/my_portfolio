"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar } from "lucide-react";
import styles from "./ExperienceSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !headerRef.current) return;

    // Check if mobile viewport to bypass ScrollTrigger and prevent blank screens
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      gsap.set(headerRef.current.children, { opacity: 1, y: 0 });
      gsap.set(timelineRef.current.children, { opacity: 1, y: 0, x: 0 });
      return;
    }

    // Header reveal
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Timeline items entrance animations
    const items = Array.from(timelineRef.current.children).filter(
      (el) => el.tagName !== "DIV" || !el.className.includes("timelineLine")
    );

    items.forEach((item, index) => {
      // Determine viewport sliding offset directions (left slide vs right slide on desktop)
      let startX = -40;
      if (window.innerWidth >= 1024) {
        startX = index % 2 === 0 ? -60 : 60;
      }

      gsap.fromTo(
        item,
        { opacity: 0, x: startX, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const timelineData = [
    {
      id: "um",
      role: "Frontend Development Intern",
      company: "Unified Mentor",
      date: "Present",
      description: "Contributing to the EntreSkill Hub Full Stack Platform — a scalable entrepreneurship ecosystem. Building modern frontends, Turborepo monorepo components, Prisma integration, JWT authentication layers, and premium responsive user workflows.",
    },
    {
      id: "ca",
      role: "Full Stack Development Intern",
      company: "CodeAlpha",
      date: "Feb 2025 – Mar 2025",
      description: "Successfully built a robust modern job search portal utilizing Angular for an immersive UI, alongside Node.js, Express.js, and PostgreSQL for robust user dashboard APIs, advanced resumes, and search filtering.",
    },
    {
      id: "cs",
      role: "MERN Stack Developer Intern",
      company: "CipherSchools",
      date: "Jun 2024 – Jul 2024",
      description: "Created several high-performance web applications using the MERN stack (MongoDB, Express, React, Node.js). Implemented secure JSON Web Token authentication, RESTful APIs, and full responsive database CRUD dashboards.",
    },
    {
      id: "edu",
      role: "Bachelor of Technology — CS & Engineering",
      company: "Lovely Professional University",
      date: "Graduation Journey",
      description: "Focused on core Computer Science methodologies, advanced web architectures, software design patterns, backend API designs, and comprehensive algorithm strategies.",
    },
  ];

  return (
    <section className={styles.experienceSection} id="experience-section-container">
      {/* Ambient glowing monitor blue node */}
      <div className="glow-accent glow-blue pulsing-glow" style={{ top: "10%", left: "-15%", width: "45vw", height: "45vw" }} />

      <div className={styles.container}>
        {/* Section Header */}
        <div ref={headerRef} className={styles.headerRow} id="experience-header">
          <span className={styles.sectionLabel}>MY JOURNEY</span>
          <h2 className={styles.heading}>
            Experience & <span className={styles.headingHighlight}>Journey</span>
          </h2>
        </div>

        {/* Timeline body wrapper */}
        <div ref={timelineRef} className={styles.timeline} id="experience-timeline">
          {/* Vertical central path line */}
          <div className={styles.timelineLine} />

          {/* Timeline Cards */}
          {timelineData.map((item, index) => (
            <div key={item.id} className={styles.timelineItem} id={`timeline-item-${item.id}`}>
              {/* Central connecting circle node */}
              <div className={styles.timelineNode} id={`timeline-node-${item.id}`} />
              
              {/* Glass card panel */}
              <div className={`${styles.timelineContent} glass-panel`} id={`timeline-card-${item.id}`}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3 className={styles.roleTitle} id={`timeline-role-${item.id}`}>{item.role}</h3>
                    <span className={styles.companyName} id={`timeline-company-${item.id}`}>{item.company}</span>
                  </div>
                  <div className={styles.itemDate} id={`timeline-date-${item.id}`}>
                    <Calendar size={12} style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }} />
                    <span style={{ verticalAlign: "middle" }}>{item.date}</span>
                  </div>
                </div>
                <p className={styles.itemDescription} id={`timeline-desc-${item.id}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
