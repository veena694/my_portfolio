'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { CAPABILITIES } from '@/lib/data';
import { Reveal } from '@/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="TECHNICAL CORE & DISCIPLINE"
          titlePrefix="What I can"
          serifItalicWord="build."
        />

        {/* 4 Large Vertical Capability Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const isHovered = hoveredId === cap.id;

            return (
              <Reveal key={cap.id} direction="up" delay={index * 0.1}>
                <div
                  onMouseEnter={() => setHoveredId(cap.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`h-full bg-surface border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? 'border-dark shadow-xl bg-softBg/30 -translate-y-1'
                      : 'border-borderSubtle hover:border-darkGray'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Header: Indicator Badge & Arrow */}
                    <div className="flex items-center justify-between border-b border-borderSubtle pb-4">
                      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark font-semibold">
                        <span className="w-2 h-2 rounded-full bg-dark" />
                        CAPABILITY
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isHovered ? 'translate-x-1 -translate-y-1 text-dark' : 'text-lightGray'
                        }`}
                      />
                    </div>

                    {/* Column Title */}
                    <h3 className="text-xl font-light tracking-tight text-dark uppercase leading-tight font-sans font-semibold">
                      {cap.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-darkGray text-xs sm:text-sm leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>

                  {/* Bottom: Technical Stack Badges */}
                  <div className="pt-8 space-y-4">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-mediumGray">
                      STACK & TOOLING
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-bgPrimary border border-borderSubtle font-mono text-[11px] text-dark font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
