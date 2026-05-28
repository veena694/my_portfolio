"use client";

import dynamic from "next/dynamic";
import VideoIntro from "@/components/VideoIntro";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

// Dynamically import Three.js particle layer with SSR disabled to make page load instantly!
const CinematicLayer = dynamic(() => import("@/components/CinematicLayer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
      {/* 
        Three.js Cinematic Particle Atmosphere Layer 
        Dynamically imported to prevent Server-Side blocking!
      */}
      <CinematicLayer />

      {/* 
        Hero Video Section 
        Full viewport video centerpiece with glass controls and staggers
      */}
      <VideoIntro />

      {/* 
        Content panels with custom glows, layouts and staggers
      */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  );
}
