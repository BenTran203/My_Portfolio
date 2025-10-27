import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">💚</span>
          <span className="logo-text">Portfolio</span>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            {t('nav.projects')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            {t('nav.contact')}
          </button>
          
          <div className="language-switcher">
            <FaGlobe />
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              aria-label={t('nav.language')}
            >
              <option value="en">EN</option>
              <option value="vi">VI</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

