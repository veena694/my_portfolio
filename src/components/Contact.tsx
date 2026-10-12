'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { PROFILE } from '@/lib/data';
import { Reveal } from '@/ui/Reveal';
import { Copy, Check, Mail, Phone, Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/ui/Button';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="GET IN TOUCH & OPPORTUNITIES"
          titlePrefix="Let's build"
          serifItalicWord="something useful."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Prominent Email & Copy Widget */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="up" delay={0.1}>
              <p className="text-darkGray text-lg sm:text-xl font-normal leading-relaxed">
                Open to relevant opportunities across Software Development, Frontend Engineering, Full Stack Development, and Data Analytics.
              </p>
            </Reveal>

            {/* Prominent Copyable Email Card */}
            <Reveal direction="up" delay={0.2}>
              <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="font-mono text-xs uppercase tracking-widest text-mediumGray">
                  DIRECT EMAIL CONTACT
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-borderSubtle pt-4">
                  <span className="text-xl sm:text-2xl md:text-3xl font-light text-dark font-mono break-all font-semibold">
                    {PROFILE.email}
                  </span>

                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-dark text-surface font-mono text-xs uppercase tracking-wider hover:bg-darkGray transition-colors border border-dark cursor-pointer shrink-0"
                    aria-label="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied ✓</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Accessible Toast Notification via aria-live */}
                <div aria-live="polite" className="sr-only">
                  {copied ? 'Email address copied to clipboard' : ''}
                </div>
              </div>
            </Reveal>

            {/* Phone & Location Details */}
            <Reveal direction="up" delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface border border-borderSubtle p-5 font-mono text-xs">
                  <div className="text-mediumGray uppercase">PHONE / WHATSAPP</div>
                  <a href={`tel:${PROFILE.phone}`} className="text-dark text-base font-semibold block mt-1 hover:underline">
                    {PROFILE.phone}
                  </a>
                </div>

                <div className="bg-surface border border-borderSubtle p-5 font-mono text-xs">
                  <div className="text-mediumGray uppercase">LOCATION</div>
                  <div className="text-dark text-base font-semibold mt-1">
                    {PROFILE.location}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Professional Profiles & Huge CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            <Reveal direction="left" delay={0.2}>
              <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="font-mono text-xs uppercase tracking-widest text-mediumGray border-b border-borderSubtle pb-3">
                  PROFESSIONAL LINKS & RESUME
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-bgPrimary border border-borderSubtle hover:border-dark transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-dark font-medium">
                      <Github className="w-4 h-4" /> GitHub Profile
                    </span>
                    <span className="text-mediumGray group-hover:text-dark">github.com/veena694 ↗</span>
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-bgPrimary border border-borderSubtle hover:border-dark transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-dark font-medium">
                      <Linkedin className="w-4 h-4" /> LinkedIn Profile
                    </span>
                    <span className="text-mediumGray group-hover:text-dark">linkedin.com/in/veena-sardana ↗</span>
                  </a>

                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-bgPrimary border border-borderSubtle hover:border-dark transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-dark font-medium">
                      <FileText className="w-4 h-4" /> Download Official Resume
                    </span>
                    <span className="text-mediumGray group-hover:text-dark">Veena_Resume.pdf ↓</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Huge Minimalist CTA */}
            <Reveal direction="up" delay={0.3}>
              <a
                href={`mailto:${PROFILE.email}`}
                className="group block p-8 bg-dark text-surface border border-dark hover:bg-darkGray transition-all duration-300 text-center shadow-lg"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-surface/70">
                  HAVE AN IDEA OR ROLE?
                </div>
                <div className="text-2xl sm:text-3xl font-light tracking-tight mt-2 flex items-center justify-center gap-2">
                  <span>LET'S BUILD IT</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
};
