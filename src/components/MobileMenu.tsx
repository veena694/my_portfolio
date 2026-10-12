'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '@/lib/data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; id: string }[];
  resumeUrl: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  resumeUrl,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-bgPrimary/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 border-b border-borderSubtle"
        >
          {/* Header Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-borderSubtle pb-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-dark text-surface font-mono text-sm font-bold flex items-center justify-center">
                V
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-dark font-semibold">
                {PROFILE.name} {PROFILE.lastName}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 bg-surface border border-borderSubtle text-dark hover:bg-softBg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sequential Editorial Navigation Links */}
          <nav className="my-auto py-8 space-y-3">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-3 border-b border-borderSubtle/60 hover:border-dark transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-borderSubtle group-hover:bg-dark transition-colors" />
                    <span className="text-2xl sm:text-3xl font-light tracking-tight text-dark group-hover:pl-2 transition-all">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-dark text-surface font-mono text-xs uppercase tracking-widest hover:bg-darkGray transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <div className="font-mono text-[11px] text-mediumGray uppercase tracking-wider">
              Software Engineer • India
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
