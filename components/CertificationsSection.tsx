"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink } from "lucide-react";
import styles from "./CertificationsSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  credentialId?: string;
}

export default function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const certifications: Certification[] = [
    {
      id: "google-ux",
      title: "Google UX Design Professional Certificate",
      issuer: "Coursera",
      date: "2025",
      link: "https://coursera.org/share/google-ux-design-professional-certificate",
      credentialId: "G-UXD-9817"
    },
    {
      id: "infosys-genai",
      title: "Principles of Generative AI Certification",
      issuer: "Infosys Springboard",
      date: "2025",
      link: "https://springboard.infosys.com",
      credentialId: "INF-GENAI-774"
    },
    {
      id: "infosys-comm",
      title: "Basics of Business Communication",
      issuer: "Infosys Springboard",
      date: "2025",
      link: "https://springboard.infosys.com",
      credentialId: "INF-COMM-891"
    },
    {
      id: "infosys-goals",
      title: "Saving Time by Setting Goals",
      issuer: "Infosys Springboard",
      date: "2024",
      link: "https://springboard.infosys.com",
      credentialId: "INF-GOAL-324"
    },
    {
      id: "infosys-fed",
      title: "Front End Web Developer Certification",
      issuer: "Infosys Springboard",
      date: "2024",
      link: "https://springboard.infosys.com",
      credentialId: "INF-FED-501"
    },
    {
      id: "nptel-cloud",
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2024",
      link: "https://nptel.ac.in",
      credentialId: "NPTEL-CC-8291"
    },
    {
      id: "cipher-mern",
      title: "Full-Stack MERN Development",
      issuer: "CipherSchools",
      date: "2024",
      link: "https://www.cipherschools.com",
      credentialId: "CS-MERN-3048"
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !headerRef.current || !gridRef.current) return;

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
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cards staggered entry
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className={styles.section} id="certifications-section">
      {/* Background warm copper glowing node */}
      <div className="glow-accent glow-copper pulsing-glow" style={{ top: "30%", right: "-10%", width: "40vw", height: "40vw" }} />
      <div className="glow-accent glow-blue pulsing-glow" style={{ bottom: "10%", left: "-10%", width: "35vw", height: "35vw" }} />

      <div className={styles.container}>
        {/* Section Header */}
        <div ref={headerRef} className={styles.header}>
          <span className={styles.label}>CREDENTIALS</span>
          <h2 className={styles.title}>
            Certifications & <span className={styles.titleHighlight}>Badges</span>
          </h2>
          <p className={styles.subtitle}>
            A curated collection of verified professional certificates, course accomplishments, and technology accreditations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div ref={gridRef} className={styles.grid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={`${styles.card} glass-panel`} id={`cert-card-${cert.id}`}>
              <div className={styles.cardGlow} />
              
              <div className={styles.cardHeader}>
                <div className={styles.badgeWrapper}>
                  <Award className={styles.awardIcon} size={16} />
                  <span className={styles.issuer}>{cert.issuer}</span>
                </div>
                <span className={styles.date}>{cert.date}</span>
              </div>

              <h3 className={styles.certTitle} id={`cert-title-${cert.id}`}>
                {cert.title}
              </h3>

              <div className={styles.cardFooter}>
                {cert.credentialId && (
                  <span className={styles.credentialId}>ID: {cert.credentialId}</span>
                )}
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                  title={`View verified ${cert.title} credential`}
                  id={`cert-link-${cert.id}`}
                >
                  <span>Verify</span>
                  <ExternalLink size={14} className={styles.linkIcon} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
