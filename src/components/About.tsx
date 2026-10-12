'use client';

import React from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { RoleSwitcher } from './RoleSwitcher';
import { PROFILE } from '@/lib/data';
import { Reveal } from '@/ui/Reveal';
import { MapPin, GraduationCap, Code2, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="ENGINEERING PHILOSOPHY & IDENTITY"
          titlePrefix="A developer who thinks in"
          serifItalicWord="systems."
        />

        {/* Narrative & Identity Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Concise Biography Sourced from CV */}
          <div className="lg:col-span-7 space-y-6 text-darkGray font-normal leading-relaxed text-base sm:text-lg">
            <Reveal direction="up" delay={0.1}>
              <p>
                I am <strong className="text-dark font-semibold">Veena</strong> — a Software Engineer, Full Stack Developer, and Data Analyst with a passion for building robust digital products, scalable web platforms, and data analytics systems.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p>
                My focus spans the entire development lifecycle: architecting modular React/Next.js frontend applications, building reliable Node.js and PostgreSQL backend APIs, and formulating analytical SQL queries and Python pipelines that translate operational data into high-value executive insights.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p>
                Having completed multiple production internships across frontend, full-stack, and SQL analytics environments — along with publishing machine learning research in IEEE — I bring technical rigor, adaptability, and product thinking to every line of code.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Interactive Identity Panel */}
          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.25}>
              <div className="bg-surface border border-borderSubtle p-6 sm:p-8 relative overflow-hidden shadow-xs group">
                
                {/* Animated Vertical Line Connector */}
                <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-borderSubtle group-hover:bg-dark transition-colors duration-500" />
                
                <div className="font-mono text-xs uppercase tracking-widest text-mediumGray mb-6 pl-6">
                  WHO I AM • VERIFIED IDENTITY
                </div>

                <div className="space-y-6 pl-6">
                  {/* Identity Row 1 */}
                  <div className="relative group/item">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface border-2 border-dark group-hover/item:bg-dark transition-colors" />
                    <div className="font-mono text-xs text-mediumGray uppercase">Primary Role</div>
                    <div className="font-semibold text-dark text-base sm:text-lg">
                      Software Engineer
                    </div>
                    <div className="text-xs text-mediumGray mt-0.5">
                      Frontend • Full Stack • Data Analytics
                    </div>
                  </div>

                  {/* Identity Row 2 */}
                  <div className="relative group/item">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface border-2 border-mediumGray group-hover/item:border-dark transition-colors" />
                    <div className="font-mono text-xs text-mediumGray uppercase flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" /> Education
                    </div>
                    <div className="font-medium text-dark text-sm sm:text-base">
                      {PROFILE.degree}
                    </div>
                    <div className="text-xs text-mediumGray">
                      {PROFILE.university} ({PROFILE.cgpa})
                    </div>
                  </div>

                  {/* Identity Row 3 */}
                  <div className="relative group/item">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface border-2 border-mediumGray group-hover/item:border-dark transition-colors" />
                    <div className="font-mono text-xs text-mediumGray uppercase flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Location
                    </div>
                    <div className="font-medium text-dark text-sm">
                      {PROFILE.location}
                    </div>
                  </div>

                  {/* Identity Row 4 */}
                  <div className="relative group/item">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface border-2 border-mediumGray group-hover/item:border-dark transition-colors" />
                    <div className="font-mono text-xs text-mediumGray uppercase flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5" /> Engineering Focus
                    </div>
                    <div className="font-mono text-xs text-dark font-medium">
                      BUILD → ANALYZE → SOLVE
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* Interactive Role Switcher Section */}
        <Reveal direction="up" delay={0.4}>
          <RoleSwitcher />
        </Reveal>

      </div>
    </section>
  );
};
