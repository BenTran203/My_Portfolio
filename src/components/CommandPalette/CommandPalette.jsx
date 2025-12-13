import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTimes, FaHome, FaBriefcase, FaCode, FaUser, FaEnvelope, FaFileDownload, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from '../../utils/smoothScroll';

const CommandPalette = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const commands = [
    {
      id: 'home',
      label: t('nav.home'),
      icon: FaHome,
      action: () => {
        scrollToSection('home');
        onClose();
      },
      shortcut: 'H'
    },
    {
      id: 'projects',
      label: t('nav.projects'),
      icon: FaBriefcase,
      action: () => {
        scrollToSection('projects');
        onClose();
      },
      shortcut: 'P'
    },
    {
      id: 'skills',
      label: t('nav.skills'),
      icon: FaCode,
      action: () => {
        scrollToSection('skills');
        onClose();
      },
      shortcut: 'S'
    },
    {
      id: 'about',
      label: t('nav.about'),
      icon: FaUser,
      action: () => {
        scrollToSection('about');
        onClose();
      },
      shortcut: 'A'
    },
    {
      id: 'contact',
      label: t('nav.contact'),
      icon: FaEnvelope,
      action: () => {
        scrollToSection('contact');
        onClose();
      },
      shortcut: 'C'
    },
    {
      id: 'resume',
      label: t('intro.viewResume'),
      icon: FaFileDownload,
      action: () => {
        const resumeFile = i18n.language === 'vi' ? 'resume-vi.pdf' : 'resume-en.pdf';
        window.open(`/${resumeFile}`, '_blank');
        onClose();
      },
      shortcut: 'R'
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: FaGithub,
      action: () => {
        window.open('https://github.com/BenTran203', '_blank');
        onClose();
      },
      shortcut: 'G'
    },
  ];

  const scrollToSection = (sectionId) => {
    smoothScrollTo(sectionId, 120);
  };

  const filteredCommands = commands.filter(command =>
    command.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCommandClick = (command) => {
    command.action();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[2000] flex items-start justify-center pt-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Panel */}
        <motion.div
          className="relative glass rounded-3xl shadow-2xl shadow-black/40 w-full max-w-2xl max-h-[80vh] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-neutral-700/60">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-100 heading">
              Command Palette
            </h2>
            <button
              onClick={onClose}
              className="glass-light rounded-xl p-2 text-gray-700 dark:text-neutral-300 transition-all duration-200 ease-out hover:scale-[1.05] active:scale-[0.95] focus-ring"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-6 border-b border-white/20 dark:border-neutral-700/60">
            <input
              type="text"
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 glass-light rounded-2xl border-2 border-transparent text-gray-800 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-neutral-400 transition-all duration-200 focus-ring focus:border-emerald-500"
              autoFocus
            />
          </div>

          {/* Commands List */}
          <div className="overflow-y-auto max-h-[calc(80vh-200px)] p-4">
            {filteredCommands.length > 0 ? (
              <div className="space-y-2">
                {filteredCommands.map((command) => {
                  const IconComponent = command.icon;
                  return (
                    <button
                      key={command.id}
                      onClick={() => handleCommandClick(command)}
                      className="w-full flex items-center gap-4 p-4 glass-light rounded-2xl transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-ring text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white flex-shrink-0">
                        <IconComponent />
                      </div>
                      <span className="flex-1 text-gray-800 dark:text-neutral-100 font-medium">
                        {command.label}
                      </span>
                      <kbd className="px-3 py-1 glass rounded-lg text-xs font-mono text-gray-600 dark:text-neutral-400">
                        {command.shortcut}
                      </kbd>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-neutral-400">
                No commands found
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/20 dark:border-neutral-700/60 text-center text-sm text-gray-500 dark:text-neutral-400">
            Press <kbd className="px-2 py-1 glass rounded text-xs">Esc</kbd> to close
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommandPalette;

