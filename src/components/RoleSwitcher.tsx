'use client';

import React, { useState } from 'react';
import { ROLE_MODES, PROJECTS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const RoleSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'software' | 'frontend' | 'fullstack' | 'data'>('software');

  const currentRole = ROLE_MODES.find((r) => r.id === activeTab) || ROLE_MODES[0];

  // Get matching projects for active persona
  const matchingProjects = PROJECTS.filter((p) =>
    currentRole.featuredProjects.includes(p.id) || p.category === activeTab
  );

  return (
    <div className="bg-surface border border-borderSubtle p-6 sm:p-8 md:p-10 my-10 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-borderSubtle pb-6 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-mediumGray">
            INTERACTIVE POSITIONING
          </span>
          <h3 className="text-xl sm:text-2xl font-light text-dark tracking-tight mt-1">
            Explore My Specialized Capabilities
          </h3>
        </div>

        {/* Persona Mode Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {ROLE_MODES.map((mode) => {
            const isSelected = activeTab === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveTab(mode.id)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-dark text-surface border-dark font-medium shadow-xs'
                    : 'bg-softBg text-darkGray border-borderSubtle hover:bg-surface hover:text-dark'
                }`}
              >
                {mode.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Role Detail */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="font-mono text-xs text-mediumGray uppercase tracking-widest">
                {currentRole.subtitle}
              </div>
              <h4 className="text-2xl sm:text-3xl font-light text-dark tracking-tight mt-1">
                {currentRole.title}
              </h4>
            </div>

            <p className="text-darkGray text-sm sm:text-base font-normal leading-relaxed">
              {currentRole.description}
            </p>

            {/* Key Tooling & Skill Highlights */}
            <div className="pt-3">
              <div className="font-mono text-xs uppercase tracking-wider text-dark font-semibold mb-3">
                Highlighted Core Tooling:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentRole.featuredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-softBg border border-borderSubtle font-mono text-xs text-dark"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-dark" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Matched Projects Preview */}
          <div className="lg:col-span-5 bg-bgPrimary p-5 border border-borderSubtle space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-mediumGray border-b border-borderSubtle pb-2 flex justify-between">
              <span>PROOFS OF CAPABILITY</span>
              <span>{matchingProjects.length} PROJECTS</span>
            </div>

            <div className="space-y-3">
              {matchingProjects.slice(0, 3).map((project) => (
                <a
                  key={project.id}
                  href="#work"
                  className="group block p-3 bg-surface border border-borderSubtle hover:border-dark transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-mediumGray">
                      {project.number} • {project.categoryLabel}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="font-medium text-dark text-sm mt-1">
                    {project.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
