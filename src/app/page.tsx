import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Capabilities } from '@/components/Capabilities';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { DataLab } from '@/components/DataLab';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-bgPrimary text-dark min-h-screen">
      {/* Sticky Top Navigation */}
      <Navigation />

      {/* Narrative Section Sequence: HERO ↓ ABOUT ↓ CAPABILITIES ↓ SELECTED WORK ↓ DATA LAB ↓ EXPERIENCE ↓ RESEARCH & ACHIEVEMENTS ↓ CERTIFICATIONS ↓ CONTACT */}
      <Hero />
      <About />
      <Capabilities />
      <Skills />
      <Projects />
      <DataLab />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
