'use client';

import React from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { RESEARCH, ACHIEVEMENTS } from '@/lib/data';
import { Reveal } from '@/ui/Reveal';
import { BookOpen, ExternalLink, Award, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/ui/Button';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="DEEP LEARNING PUBLICATION & MILESTONES"
          titlePrefix="Research. Build."
          serifItalicWord="Explore."
        />

        {/* Featured IEEE Research Card */}
        <Reveal direction="up" delay={0.1}>
          <div className="bg-surface border border-borderSubtle p-6 sm:p-8 md:p-10 mb-16 shadow-xs relative overflow-hidden group">
            
            {/* Top Label */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-borderSubtle pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-mediumGray font-bold">
                <BookOpen className="w-4 h-4 text-dark" />
                <span>PEER-REVIEWED IEEE CONFERENCE PAPER</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-0.5 bg-dark text-surface font-semibold">
                IEEE {RESEARCH.year}
              </span>
            </div>

            {/* Paper Title & Conference */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-light text-dark tracking-tight leading-tight">
                {RESEARCH.title}
              </h3>
              <p className="font-mono text-xs text-mediumGray uppercase tracking-wider">
                Published at: {RESEARCH.conference}
              </p>
            </div>

            {/* Paper Abstract Summary */}
            <p className="text-darkGray text-sm sm:text-base font-normal leading-relaxed mt-4 max-w-4xl">
              {RESEARCH.description}
            </p>

            {/* Benchmarked Model Architectures */}
            <div className="pt-6 border-t border-borderSubtle mt-6 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-mediumGray">
                BENCHMARKED MODEL ARCHITECTURES:
              </div>
              <div className="flex flex-wrap gap-2">
                {RESEARCH.architectures.map((arch) => (
                  <span
                    key={arch}
                    className="px-3 py-1 bg-softBg border border-borderSubtle font-mono text-xs text-dark font-medium"
                  >
                    {arch}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link to IEEE Xplore */}
            <div className="pt-6">
              <Button
                href={RESEARCH.doiLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                View Publication on IEEE Xplore
              </Button>
            </div>

          </div>
        </Reveal>

        {/* Verified Achievement Counter Grid */}
        <div className="space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-mediumGray border-b border-borderSubtle pb-2">
            VERIFIED HIGHLIGHTS & CREDENTIAL COUNTERS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={index * 0.1}>
                <div className="bg-surface border border-borderSubtle p-6 hover:border-dark transition-all duration-300 h-full flex flex-col justify-between shadow-xs">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-borderSubtle pb-3">
                      <span className="font-mono text-[11px] font-semibold text-mediumGray uppercase tracking-wider">
                        KEY MILESTONE
                      </span>
                      <Award className="w-4 h-4 text-dark" />
                    </div>
                    <h4 className="text-lg font-bold text-dark tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-darkGray text-xs sm:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
