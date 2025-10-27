import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUser, FaFileDownload, FaCertificate } from 'react-icons/fa';
import './Introduction.css';
import avatarImage from '../../assets/Avatar.png';
import javascriptCert from '../../assets/javascript_certificate.jpg';
import nodeCert from '../../assets/Node_certificate.jpg';


const Introduction = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['about', 'experience', 'education'];

  // Auto-rotate tabs every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 20000);

    return () => clearInterval(timer);
  }, [tabs.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Certificate data
  const certificates = [
    {
      id: 1,
      name: 'JavaScript Certificate',
      image: javascriptCert,
    },
    {
      id: 2,
      name: 'Backend Development Certificate',
      image: nodeCert,
    },
  ];

  const handleResumeClick = () => {
    const resumeFile = i18n.language === 'vi' ? 'resume-vi.pdf' : 'resume-en.pdf';
    // Opens the resume in a new tab
    window.open(`${process.env.PUBLIC_URL}/${resumeFile}`, '_blank');
  };

  const handleCertificateClick = (certImage) => {
    // Opens the certificate image in a new tab
    window.open(certImage, '_blank');
  };

  const contentVariants = {
    enter: {
      x: 50,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -50,
      opacity: 0,
    },
  };

  return (
    <section className="introduction" id="home">
      <div className="intro-wrapper">
        {/* Left Side - Fixed Avatar and Info */}
        <motion.div
          className="intro-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="avatar-container">
            <div className="avatar-circle">
            <img src={avatarImage} alt="PhucDat Tran" />
            </div>
          </div>

          <div className="intro-info">
            <h1 className="intro-greeting">{t('intro.greeting')}</h1>
            <h2 className="intro-name">PhucDat Tran (Ben Tran)</h2>
            <p className="intro-title">{t('intro.title')}</p>

            <button className="resume-btn" onClick={handleResumeClick}>
              <FaFileDownload />
              {t('intro.viewResume')}
            </button>
          </div>
        </motion.div>

        {/* Right Side - Tabbed Content */}
        <motion.div
          className="intro-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 0 ? 'active' : ''}`}
              onClick={() => handleTabClick(0)}
            >
              <FaUser /> {t('intro.tabs.about')}
            </button>
            <button
              className={`tab-btn ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => handleTabClick(1)}
            >
              <FaBriefcase /> {t('intro.tabs.experience')}
            </button>
            <button
              className={`tab-btn ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => handleTabClick(2)}
            >
              <FaGraduationCap /> {t('intro.tabs.education')}
            </button>
          </div>

          <div className="tab-content">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="about"
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="tab-panel"
                >
                  <div className="tab-icon">
                    <FaUser />
                  </div>
                  <h3>{t('intro.about.title')}</h3>
                  <p>{t('intro.about.description')}</p>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="experience"
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="tab-panel"
                >
                  <div className="tab-icon">
                    <FaBriefcase />
                  </div>
                  <h3>{t('intro.experience.title')}</h3>
                  <h4 className="highlight">{t('intro.experience.years')}</h4>
                  <p>{t('intro.experience.description')}</p>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="education"
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="tab-panel"
                >
                  <div className="tab-icon">
                    <FaGraduationCap />
                  </div>
                  <h3>{t('intro.education.title')}</h3>
                  <h4 className="highlight">{t('intro.education.degree')}</h4>
                  <p>{t('intro.education.university')}</p>

                  <div className="certificates-section">
                    <div className="certificates-header">
                      <FaCertificate />
                      <h4>{t('intro.certificates.title')}</h4>
                    </div>
                    <div className="certificates-grid">
                      {certificates.map((cert) => (
                        <div 
                          key={cert.id} 
                          className="certificate-card"
                          onClick={() => handleCertificateClick(cert.image)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => e.key === 'Enter' && handleCertificateClick(cert.image)}
                        >
                          <img src={cert.image} alt={cert.name} />
                          <p className="cert-name">{cert.name}</p>
                        </div>
                      ))}
                    </div>
                    <p className="cert-hint">{t('intro.certificates.clickToView')}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar indicator */}
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                key={activeTab}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
