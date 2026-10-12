'use client';

import React, { useState, useMemo } from 'react';
import { SectionHeading } from '@/ui/SectionHeading';
import { CERTIFICATIONS, CertificationItem } from '@/lib/data';
import { Reveal } from '@/ui/Reveal';
import { 
  Search, 
  ExternalLink, 
  FileText, 
  Award, 
  X, 
  CheckCircle2, 
  Filter, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'all', label: 'All Credentials' },
  { id: 'data', label: 'Data Analytics & BI' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'fullstack', label: 'Full-Stack & Cloud' },
  { id: 'frontend', label: 'Frontend & Web' },
  { id: 'management', label: 'Management & Leadership' },
] as const;

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string } | null>(null);

  // Filtered certificates
  const filteredCertifications = useMemo(() => {
    return CERTIFICATIONS.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'all' || cert.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        (cert.skills && cert.skills.some((s) => s.toLowerCase().includes(q))) ||
        (cert.categoryLabel && cert.categoryLabel.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: CERTIFICATIONS.length };
    for (const cert of CERTIFICATIONS) {
      counts[cert.category] = (counts[cert.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-bgPrimary border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="VERIFIED CREDENTIALS & INDUSTRY HONORS"
          titlePrefix="Continuous learning & verified"
          serifItalicWord="mastery."
        />

        {/* Gallery Controls Header: Search + Category Filters */}
        <div className="mb-10 space-y-5">
          
          {/* Top Control Bar: Search and Summary Counter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-mediumGray absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by skill (SQL, React, AI), title, or issuer..."
                className="w-full pl-10 pr-10 py-2.5 bg-surface border border-borderSubtle font-mono text-xs text-dark placeholder:text-mediumGray focus:outline-none focus:border-dark transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-mediumGray hover:text-dark transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-mediumGray self-start sm:self-auto">
              <Award className="w-4 h-4 text-dark" />
              <span>
                Showing <strong className="text-dark">{filteredCertifications.length}</strong> of{' '}
                <strong className="text-dark">{CERTIFICATIONS.length}</strong> Verified Credentials
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-borderSubtle/60">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 font-mono text-xs transition-all duration-200 border cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-dark text-surface border-dark font-medium shadow-xs'
                      : 'bg-surface text-darkGray border-borderSubtle hover:bg-softBg hover:text-dark'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-surface/20 text-surface'
                        : 'bg-bgPrimary text-mediumGray'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Dynamic Credentials Grid */}
        {filteredCertifications.length === 0 ? (
          <div className="bg-surface border border-dashed border-borderSubtle p-12 text-center space-y-4 my-8">
            <Award className="w-10 h-10 text-mediumGray mx-auto opacity-50" />
            <h3 className="text-lg font-light text-dark">No credentials matched your search</h3>
            <p className="text-sm font-mono text-mediumGray">
              No results found for &ldquo;{searchQuery}&rdquo;. Try another skill keyword like &ldquo;Python&rdquo;, &ldquo;SQL&rdquo;, or &ldquo;React&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 font-mono text-xs bg-dark text-surface border border-dark uppercase cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredCertifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-surface border border-borderSubtle hover:border-dark transition-all duration-300 flex flex-col justify-between p-6 shadow-xs group relative"
                >
                  {/* Top Badge & Date */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-borderSubtle pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-bgPrimary border border-borderSubtle text-dark font-medium">
                        {cert.categoryLabel || cert.category}
                      </span>
                      <span className="font-mono text-[11px] text-mediumGray">
                        {cert.date}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-lg font-bold text-dark tracking-tight leading-snug group-hover:text-black transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="font-mono text-xs text-mediumGray font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-dark/70" />
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Extracted Skill Badges */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-[10px] px-2 py-0.5 bg-softBg border border-borderSubtle/60 text-dark"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-5 mt-5 border-t border-borderSubtle flex items-center justify-between gap-2">
                    {/* View Certificate PDF Button */}
                    {cert.pdfUrl ? (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-dark hover:underline font-semibold"
                      >
                        <FileText className="w-3.5 h-3.5 text-dark" />
                        <span>View Certificate PDF</span>
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] text-mediumGray">
                        VERIFIED RECORD
                      </span>
                    )}

                    {/* Verify Online Link */}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-mediumGray hover:text-dark transition-colors"
                        title="Verify credential online"
                        aria-label={`Verify ${cert.title} online`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};
