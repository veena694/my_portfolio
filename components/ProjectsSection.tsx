"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stackRef.current || !headerRef.current) return;

    // Check if mobile viewport to bypass ScrollTrigger and prevent blank screens
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      gsap.set(headerRef.current.children, { opacity: 1, y: 0 });
      gsap.set(stackRef.current.children, { opacity: 1, y: 0 });
      return;
    }

    // Header reveal animation
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

    // Staggered reveals for each project card row
    const projectCards = Array.from(stackRef.current.children);
    projectCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      id: "entreskill",
      title: "EntreSkill Hub Full Stack Platform",
      description: "Current enterprise project at Unified Mentor. A premium learn-to-startup ecosystem centered around reusable component architectures, authentication flows, backend database modules, and Turborepo monorepo systems.",
      tech: ["Next.js", "Prisma", "Turborepo", "TypeScript", "Auth Systems"],
      image: "/assets/images/entreskill_hub.png",
      githubLink: "https://github.com/veena694/EntreSkill-Hub", // GitHub only (not live yet)
    },
    {
      id: "agriguard",
      title: "Precision AgriGuard",
      description: "An AI and IoT-powered smart agriculture platform focused on intelligent water management, predictive irrigation systems, and sustainable urban farming using real-time environmental monitoring and machine learning analytics.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "IoT Sensors", "Machine Learning"],
      image: "/assets/images/precision_agriguard.png",
      deployedLink: "https://precision-agroguard.vercel.app/", // Live Deployed
      githubLink: "https://github.com/veena694/precision-agroguard-main", // GitHub code
    },
    {
      id: "golf-charity",
      title: "Golf Charity Subscription Platform",
      description: "A subscription-driven service dashboard featuring automated Stripe billing, customized role-based user portals, charity rewards, automated invoicing, and a clean responsive client interface.",
      tech: ["React", "Node.js", "TypeScript", "Stripe API", "Supabase"],
      image: "/assets/images/golf_charity.png",
      deployedLink: "https://golfcharitysubscriptionplatform-chi.vercel.app/", // Live Deployed
      githubLink: "https://github.com/veena694/Golf-Charity-Subscription-Platform", // GitHub code
    },
    {
      id: "ai-recipe",
      title: "AI-Powered Recipe Generator",
      description: "A gorgeous modern recipe generator integrating OpenAI's API. Provides contextual cooking recommendations based on ingredients, dietary rules, dynamic search, and custom animation menus.",
      tech: ["React", "Node.js", "OpenAI API", "CSS Modules"],
      image: "/assets/images/ai_recipe.png",
      deployedLink: "https://ai-recipe-genrator-8chx.vercel.app/", // Live Deployed
      githubLink: "https://github.com/veena694/AI-Recipe-Genrator", // GitHub code
    },
    {
      id: "library-explorer",
      title: "Library Resource Explorer",
      description: "An intelligent database search application focused on deep keyword-based content exploration, catalog filters, responsive index structures, and high-performance search indices.",
      tech: ["Python Django", "PostgreSQL", "JavaScript", "HTML/CSS"],
      image: "/assets/images/library_explorer.png",
      githubLink: "https://github.com/veena694/library-management", // GitHub only (not live yet)
    },
    {
      id: "weather-app",
      title: "Weather Web Application",
      description: "A responsive weather utility tracking global geopositioning targets, displaying atmospheric details (humidity, pressure graphs), and applying dynamic thematic color palettes based on location forecasts.",
      tech: ["React", "OpenWeather API", "CSS Animations"],
      image: "/assets/images/weather_app.png",
      deployedLink: "https://weather-app-alpha-pearl-51.vercel.app/", // Live Deployed
      githubLink: "https://github.com/veena694/weather-app", // GitHub code
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects-section-container">
      {/* Background Accent glow */}
      <div className="glow-accent glow-warm pulsing-glow" style={{ top: "35%", left: "-15%", width: "45vw", height: "45vw" }} />

      <div className={styles.container}>
        {/* Section header */}
        <div ref={headerRef} className={styles.headerRow} id="projects-header">
          <span className={styles.sectionLabel}>PORTFOLIO</span>
          <h2 className={styles.heading}>
            Featured <span className={styles.headingHighlight}>Projects</span>
          </h2>
        </div>

        {/* Stack of project rows */}
        <div ref={stackRef} className={styles.stack} id="projects-stack">
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard} id={`project-card-${project.id}`}>
              
              {/* Text Side details */}
              <div className={styles.textSide} id={`project-text-${project.id}`}>
                <h3 className={styles.projectTitle} id={`project-title-${project.id}`}>{project.title}</h3>
                <p className={styles.projectDescription} id={`project-desc-${project.id}`}>{project.description}</p>
                
                {/* Tech Badges */}
                <div className={styles.badgeList} id={`project-badges-${project.id}`}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techBadge} id={`project-badge-${project.id}-${t.toLowerCase().replace(/\s+/g, "-")}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Horizontal Action Buttons grid */}
                <div className={styles.projectActions} id={`project-actions-${project.id}`}>
                  {project.deployedLink && (
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className={styles.actionButton} id={`project-live-btn-${project.id}`}>
                      <span>LIVE DEMO</span>
                      <ExternalLink size={12} style={{ marginLeft: 4 }} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.actionButtonSecondary} id={`project-code-btn-${project.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4, display: "inline-block", verticalAlign: "middle" }}>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      </svg>
                      <span style={{ verticalAlign: "middle" }}>GITHUB LINK</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Image side visual mockup */}
              <div className={styles.imageSide} id={`project-image-side-${project.id}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.projectImage}
                    src={project.image}
                    alt={`${project.title} Mockup Preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={project.id === "entreskill"}
                  />
                  <div className={styles.imageOverlay} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
