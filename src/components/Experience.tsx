'use client';

import React from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { EXPERIENCE } from '@/lib/data';
import { Reveal } from '@/ui/Reveal';
import { GraduationCap, Briefcase, ExternalLink, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="05 EXPERIENCE"
          subtitle="CAREER TIMELINE & ACADEMIC BACKGROUND"
          titlePrefix="Built through practice, projects and"
          serifItalicWord="experience."
        />

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-borderSubtle ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 my-12">
          {EXPERIENCE.map((item, index) => {
            const isEducation = item.type === 'education';

            return (
              <Reveal key={item.id} direction="up" delay={index * 0.1}>
                <div className="relative group">
                  
                  {/* Timeline Node Bullet */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-dark group-hover:bg-dark transition-colors" />

                  {/* Timeline Content Card */}
                  <div className="bg-surface border border-borderSubtle p-6 sm:p-8 space-y-4 shadow-xs group-hover:border-dark transition-colors">
                    
                    {/* Top Row: Period & Type */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-borderSubtle pb-3">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-dark">
                        <Calendar className="w-3.5 h-3.5 text-mediumGray" />
                        <span>{item.period}</span>
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 bg-bgPrimary border border-borderSubtle uppercase">
                        {isEducation ? 'ACADEMIC DEGREE' : 'PRODUCTION INTERNSHIP'}
                      </span>
                    </div>

                    {/* Role Title & Organization */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-light text-dark tracking-tight flex items-center gap-2">
                        {isEducation ? (
                          <GraduationCap className="w-5 h-5 text-dark" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-dark" />
                        )}
                        <span>{item.role}</span>
                      </h3>
                      <div className="font-mono text-xs text-mediumGray uppercase tracking-wider mt-1 font-semibold">
                        {item.organization}
                      </div>
                    </div>

                    {/* Bullet Descriptions */}
                    <ul className="space-y-2 text-darkGray text-sm font-normal list-disc list-inside">
                      {item.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges & Offer Letter Link */}
                    <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-borderSubtle">
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-bgPrimary border border-borderSubtle font-mono text-[11px] text-dark font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-dark hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>View Verification Document</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
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
