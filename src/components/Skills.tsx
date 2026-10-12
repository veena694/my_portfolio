'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { SKILLS, SkillItem } from '@/lib/data';
import { SkillTile } from '@/ui/SkillTile';
import { Reveal } from '@/ui/Reveal';
import { Sparkles, Layers, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(SKILLS[0]);

  const categories = ['ALL', 'Frontend', 'Backend', 'Databases', 'Data', 'Programming', 'Tools'];

  const filteredSkills = selectedCategory === 'ALL'
    ? SKILLS
    : SKILLS.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="skills" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="02.1 ECOSYSTEM"
          subtitle="TECHNICAL CONSTELLATION"
          titlePrefix="Interactive skill"
          serifItalicWord="matrix."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-borderSubtle pb-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-dark text-surface border-dark font-medium'
                      : 'bg-surface text-darkGray border-borderSubtle hover:bg-softBg'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs text-mediumGray">
            SHOWING {filteredSkills.length} VERIFIED SKILLS
          </div>
        </div>

        {/* Grid Layout: Tile Constellation + Detail Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Periodic Table Inspired Tile Grid */}
          <div className="lg:col-span-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {filteredSkills.map((skill) => (
              <SkillTile
                key={skill.id}
                skill={skill}
                isSelected={activeSkill?.id === skill.id}
                onSelect={(s) => setActiveSkill(s)}
              />
            ))}
          </div>

          {/* Right: Selected Skill Detail Inspector Panel */}
          <div className="lg:col-span-4 sticky top-28">
            <Reveal direction="left" delay={0.2}>
              <div className="bg-surface border border-borderSubtle p-6 space-y-6 shadow-xs">
                
                {/* Inspector Header */}
                <div className="flex items-center justify-between border-b border-borderSubtle pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-mediumGray">
                    <Info className="w-4 h-4 text-dark" />
                    <span>SKILL INSPECTOR</span>
                  </div>
                  {activeSkill && (
                    <span className="font-mono text-xs px-2 py-0.5 bg-dark text-surface">
                      {activeSkill.category}
                    </span>
                  )}
                </div>

                {activeSkill ? (
                  <div className="space-y-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-3xl font-extrabold text-dark">
                        {activeSkill.symbol}
                      </span>
                      <div>
                        <h4 className="text-xl font-bold text-dark">
                          {activeSkill.name}
                        </h4>
                        <span className="font-mono text-xs text-mediumGray">
                          Proficiency: {activeSkill.level}
                        </span>
                      </div>
                    </div>

                    <p className="text-darkGray text-sm font-normal leading-relaxed border-t border-borderSubtle pt-4">
                      {activeSkill.description}
                    </p>

                    {/* Related Projects */}
                    {activeSkill.relatedProjects.length > 0 && (
                      <div className="pt-2 space-y-2">
                        <div className="font-mono text-xs text-mediumGray uppercase">
                          APPLIED IN SHIPPED PROJECTS:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {activeSkill.relatedProjects.map((p) => (
                            <span
                              key={p}
                              className="px-2.5 py-1 bg-softBg border border-borderSubtle text-xs text-dark font-mono"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-mediumGray font-mono text-xs">
                    Hover or click a skill tile to inspect details.
                  </div>
                )}

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
