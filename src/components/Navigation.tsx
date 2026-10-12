'use client';

import React, { useState, useEffect } from 'react';
import { PROFILE } from '@/lib/data';
import { MobileMenu } from './MobileMenu';
import { Menu, FileText, ArrowDownRight } from 'lucide-react';

import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 40);

      // Section tracking
      const sections = ['about', 'capabilities', 'work', 'data-lab', 'experience', 'achievements', 'certifications', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Data Lab', href: '#data-lab', id: 'data-lab' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-borderSubtle z-[100]">
        <div
          className="h-full bg-dark transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Sticky Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-bgPrimary/85 backdrop-blur-md border-b border-borderSubtle py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-bold tracking-tight text-dark text-sm sm:text-base group"
          >
            <span className="w-7 h-7 rounded-none bg-dark text-surface flex items-center justify-center font-mono text-xs group-hover:bg-darkGray transition-colors">
              V
            </span>
            <span className="font-mono tracking-widest text-xs uppercase font-semibold">
              {PROFILE.name}
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface/80 backdrop-blur-xs border border-borderSubtle px-4 py-1.5 rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1 font-mono text-xs transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'bg-dark text-surface font-medium'
                      : 'text-mediumGray hover:text-dark hover:bg-softBg'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Resume Button (Desktop) & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-wider bg-dark text-surface hover:bg-darkGray transition-all duration-200 border border-dark"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowDownRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-surface border border-borderSubtle font-mono text-xs uppercase tracking-wider text-dark hover:bg-softBg transition-colors"
              aria-label="Open menu"
            >
              <span className="font-bold text-xs">V</span>
              <span>Menu</span>
              <Menu className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        resumeUrl={PROFILE.resumeUrl}
      />
    </>
  );
};
