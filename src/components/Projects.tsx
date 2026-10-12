'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { PROJECTS } from '@/lib/data';
import { ProjectPanel } from './ProjectPanel';
import { Reveal } from '@/ui/Reveal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = [
    { label: 'ALL', value: 'ALL' },
    { label: 'SOFTWARE', value: 'software' },
    { label: 'FRONTEND', value: 'frontend' },
    { label: 'FULL STACK', value: 'fullstack' },
    { label: 'AI / ML', value: 'ai' },
  ];

  const filteredProjects = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="03 SELECTED WORK"
          subtitle="PROOF OF EXECUTION & SOFTWARE ENGINEERING"
          titlePrefix="Things I've"
          serifItalicWord="built."
        />

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-borderSubtle pb-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-dark text-surface border-dark font-medium shadow-xs'
                      : 'bg-surface text-darkGray border-borderSubtle hover:bg-softBg'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs text-mediumGray">
            SHOWING {filteredProjects.length} OF {PROJECTS.length} SHIPPED PROJECTS
          </div>
        </div>

        {/* Project List Panels */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={index * 0.1}>
              <ProjectPanel project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
