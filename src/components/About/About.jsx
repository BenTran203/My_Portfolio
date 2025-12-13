import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUser, FaCertificate } from 'react-icons/fa';
import avatarImage from '../../assets/Avatar.png';
import javascriptCert from '../../assets/javascript_certificate.jpg';
import nodeCert from '../../assets/Node_certificate.jpg';

const About = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['about', 'experience', 'education'];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [tabs.length]);

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

  const handleCertificateClick = (certImage) => {
    window.open(certImage, '_blank');
  };

  const contentVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 bg-white dark:bg-neutral-900" id="about">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-neutral-100 mb-4 heading">
            About Me
          </h2>
        </motion.div>

        {/* Tabbed Content - Full Width */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-10 shadow-xl shadow-black/20 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="flex gap-4 mb-8 flex-wrap">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ease-out focus-ring ${
                    activeTab === index
                      ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg'
                      : 'glass-light text-gray-700 dark:text-neutral-300 hover:scale-[1.02]'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {index === 0 && <FaUser />}
                  {index === 1 && <FaBriefcase />}
                  {index === 2 && <FaGraduationCap />}
                  <span>{t(`intro.tabs.${tab}`)}</span>
                </button>
              ))}
            </div>

            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="about"
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="glass-light rounded-2xl p-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                      <FaUser />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-neutral-100 mb-4 heading">
                      {t('intro.about.title')}
                    </h3>
                    <p className="text-gray-700 dark:text-neutral-300 body-text leading-relaxed whitespace-pre-line">
                      {t('intro.about.description')}
                    </p>
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
                    className="glass-light rounded-2xl p-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                      <FaBriefcase />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-neutral-100 mb-4 heading">
                      {t('intro.experience.title')}
                    </h3>
                    <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                      {t('intro.experience.years')}
                    </h4>
                    <p className="text-gray-700 dark:text-neutral-300 body-text leading-relaxed whitespace-pre-line">
                      {t('intro.experience.description')}
                    </p>
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
                    className="glass-light rounded-2xl p-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                      <FaGraduationCap />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-neutral-100 mb-4 heading">
                      {t('intro.education.title')}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-700 dark:text-neutral-300 mb-2">
                      {t('intro.education.degree')}
                    </h4>
                    <p className="text-gray-700 dark:text-neutral-300 mb-8 body-text">
                      {t('intro.education.university')}
                    </p>

                    <div className="mt-8 pt-8 border-t-2 border-gray-200 dark:border-neutral-700">
                      <div className="flex items-center gap-3 mb-6 text-emerald-600 dark:text-emerald-400">
                        <FaCertificate className="text-2xl" />
                        <h4 className="text-2xl font-bold">{t('intro.certificates.title')}</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                        {certificates.map((cert) => (
                          <div
                            key={cert.id}
                            className="glass rounded-2xl p-4 card-interactive cursor-pointer focus-ring"
                            onClick={() => handleCertificateClick(cert.image)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleCertificateClick(cert.image)}
                          >
                            <img src={cert.image} alt={cert.name} className="w-full h-auto rounded-xl mb-3" />
                            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 text-center">
                              {cert.name}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-neutral-400 text-center italic">
                        {t('intro.certificates.clickToView')}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress bar */}
              <div className="w-full h-1 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden mt-6">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"
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

export default About;

