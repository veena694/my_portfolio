"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Monitor, Sparkles, Palette, Network, Gauge } from "lucide-react";
import styles from "./ServicesSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !headerRef.current) return;

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

    // Cards staggered reveal
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const services = [
    {
      id: "fullstack",
      icon: <Database size={24} />,
      title: "Full Stack Web Development",
      description: "Building scalable full-stack platforms using modern frontend and backend technologies with optimized architecture and responsive experiences.",
    },
    {
      id: "frontend",
      icon: <Monitor size={24} />,
      title: "Frontend Engineering",
      description: "Creating immersive interfaces using React, Next.js, GSAP animations, Three.js interactions, and modern UI systems.",
    },
    {
      id: "ai",
      icon: <Sparkles size={24} />,
      title: "AI-Powered Applications",
      description: "Developing intelligent AI-integrated platforms using OpenAI APIs, automation workflows, and dynamic interfaces.",
    },
    {
      id: "uiux",
      icon: <Palette size={24} />,
      title: "UI/UX & Interactive Design",
      description: "Designing premium cinematic interfaces with elegant animations, responsive layouts, and immersive interactions.",
    },
    {
      id: "backend",
      icon: <Network size={24} />,
      title: "Backend & API Systems",
      description: "Building secure REST APIs, authentication systems, database architecture, and scalable backend services.",
    },
    {
      id: "performance",
      icon: <Gauge size={24} />,
      title: "Performance Optimization",
      description: "Improving rendering performance, frontend scalability, loading speed, and interaction smoothness.",
    },
  ];

  return (
    <section className={styles.servicesSection} id="services-section-container">
      {/* Ambient Blue glow node */}
      <div className="glow-accent glow-blue pulsing-glow" style={{ bottom: "-10%", left: "-10%", width: "40vw", height: "40vw" }} />

      <div className={styles.container}>
        {/* Header section */}
        <div ref={headerRef} className={styles.headerRow} id="services-header">
          <span className={styles.sectionLabel}>EXPERTISE</span>
          <h2 className={styles.heading}>
            What I <span className={styles.headingHighlight}>Build</span>
          </h2>
        </div>

        {/* Responsive Grid of Glassmorphism Services cards */}
        <div ref={gridRef} className={styles.grid} id="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`${styles.card} glass-panel`} id={`service-card-${service.id}`}>
              <div className={styles.iconWrapper} id={`service-icon-${service.id}`}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle} id={`service-title-${service.id}`}>{service.title}</h3>
              <p className={styles.cardDescription} id={`service-desc-${service.id}`}>{service.description}</p>
              {/* Corner accent warm glow */}
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
