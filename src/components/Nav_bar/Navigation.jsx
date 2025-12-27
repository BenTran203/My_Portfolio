import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { smoothScrollTo } from '../../utils/smoothScroll';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true' || 
                     (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    // Use custom smooth scroll with navbar offset
    smoothScrollTo(sectionId, 120);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-[1000] md:left-8 md:right-8">
      <div className="glass rounded-3xl px-6 py-4 shadow-xl shadow-black/20">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-xl md:text-2xl font-bold text-emerald-700 dark:text-emerald-400 transition-colors">
            <span className="tracking-tight">PhucDat Tran</span>
          </div>

          <button 
            className="md:hidden glass-light rounded-xl p-2 text-emerald-700 dark:text-emerald-400 transition-all duration-200 ease-out hover:scale-[1.05] active:scale-[0.95] focus-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`md:flex md:items-center md:gap-6 md:static md:bg-transparent md:shadow-none md:opacity-100 md:pointer-events-auto md:transform-none md:p-0 md:flex-row absolute top-full left-0 right-0 mt-4 glass rounded-2xl p-5 flex-col gap-4 transform transition-all duration-300 ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100 pointer-events-auto' 
              : 'translate-y-[-100%] opacity-0 pointer-events-none'
          }`}>
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 dark:text-neutral-200 text-base font-medium px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full md:w-auto text-left md:text-center focus-ring"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 dark:text-neutral-200 text-base font-medium px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full md:w-auto text-left md:text-center focus-ring"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-700 dark:text-neutral-200 text-base font-medium px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full md:w-auto text-left md:text-center focus-ring"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 dark:text-neutral-200 text-base font-medium px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full md:w-auto text-left md:text-center focus-ring"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 dark:text-neutral-200 text-base font-medium px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 w-full md:w-auto text-left md:text-center focus-ring"
            >
              {t('nav.contact')}
            </button>
            
            <div className="flex items-center gap-3 pt-4 md:pt-0 border-t border-gray-200 dark:border-neutral-700 md:border-t-0">
              <div className="flex items-center gap-2 px-4 py-2 glass-light rounded-xl text-emerald-700 dark:text-emerald-400 w-full md:w-auto justify-center">
                <FaGlobe />
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  aria-label={t('nav.language')}
                  className="bg-transparent border-none text-emerald-700 dark:text-emerald-400 font-semibold cursor-pointer text-base outline-none focus-ring"
                >
                  <option value="en">EN</option>
                  <option value="vi">VI</option>
                </select>
              </div>
              
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="glass-light rounded-xl p-2 text-emerald-700 dark:text-emerald-400 transition-all duration-200 ease-out hover:scale-[1.05] active:scale-[0.95] focus-ring"
              >
                {isDark ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

