"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import styles from "./ContactSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Check if mobile viewport to bypass ScrollTrigger and prevent blank screens
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      if (headerRef.current) {
        gsap.set(headerRef.current.children, { opacity: 1, y: 0 });
      }
      if (cardsRef.current) {
        gsap.set(cardsRef.current.children, { opacity: 1, y: 0 });
      }
      return;
    }

    // Staggered reveal for headers
    gsap.fromTo(
      headerRef.current?.children || [],
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

    // Staggered slide-in for the 4 contact channel cards
    gsap.fromTo(
      cardsRef.current?.children || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const contactChannels = [
    {
      id: "email",
      label: "Email",
      value: "veenasardana1@gmail.com",
      link: "mailto:veenasardana1@gmail.com",
      icon: <Mail size={20} />,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: "+91 8053745320",
      link: "https://wa.me/918053745320",
      icon: <MessageSquare size={20} />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "in/veena-sardana",
      link: "https://linkedin.com/in/veena-sardana",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      id: "github",
      label: "GitHub",
      value: "@veena694",
      link: "https://github.com/veena694",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className={styles.contactSection} id="contact-section-container">
      {/* Background Accent copper glow */}
      <div className="glow-accent glow-warm pulsing-glow" style={{ bottom: "5%", right: "-10%", width: "40vw", height: "40vw" }} />

      <div className={styles.container}>
        {/* Overhauled Header Section */}
        <div ref={headerRef} className={styles.headerRow} id="contact-header">
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subtitle}>Pick whichever channel suits you</p>
        </div>

        {/* 4-Column Direct Channel Cards Grid */}
        <div ref={cardsRef} className={styles.cardsGrid} id="contact-cards-grid">
          {contactChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.channelCard} glass-panel`}
              id={`contact-card-${channel.id}`}
            >
              {/* Card top icons wrapper */}
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle} id={`contact-icon-${channel.id}`}>
                  {channel.icon}
                </div>
                <ArrowUpRight size={18} className={styles.arrowIcon} />
              </div>

              {/* Card text details */}
              <div className={styles.cardBody}>
                <span className={styles.channelLabel}>{channel.label}</span>
                <span className={styles.channelValue} id={`contact-value-${channel.id}`}>
                  {channel.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer block */}
        <div className={styles.footerContainer} id="portfolio-footer">
          <p className={styles.footerQuote}>“Designing experiences where creativity meets technology.”</p>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} VEENA • ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>
  );
}
