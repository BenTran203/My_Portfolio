import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUser, FaFileDownload, FaCertificate } from 'react-icons/fa';
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
    window.open(`/${resumeFile}`, '_blank');
  };

  const handleCertificateClick = (certImage) => {
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
    <section className="min-h-screen py-20 px-5 bg-gradient-to-br from-brand-50 to-white flex items-center justify-center" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[60px] max-w-[1400px] w-full items-start">
        {/* Left Side - Fixed Avatar and Info */}
        <motion.div
          className="lg:sticky lg:top-[100px] flex flex-col items-center text-center bg-white p-10 rounded-[25px] shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden">
              <img src={avatarImage} alt="PhucDat Tran" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-xl text-brand-800 mb-2 font-normal">{t('intro.greeting')}</h1>
            <h2 className="text-2xl md:text-3xl text-brand-700 mb-2.5 font-bold leading-tight">PhucDat Tran (Ben Tran)</h2>
            <p className="text-lg text-brand-500 font-medium mb-6">{t('intro.title')}</p>

            <button 
              className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 bg-gradient-to-br from-brand-500 to-brand-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl font-sans"
              onClick={handleResumeClick}
            >
              <FaFileDownload />
              {t('intro.viewResume')}
            </button>
          </div>
        </motion.div>

        {/* Right Side - Tabbed Content */}
        <motion.div
          className="bg-white rounded-[25px] p-10 shadow-lg min-h-[600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              className={`flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-600 border-2 border-transparent rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 font-sans hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 ${
                activeTab === 0 ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white border-brand-500 shadow-lg' : ''
              }`}
              onClick={() => handleTabClick(0)}
            >
              <FaUser /> {t('intro.tabs.about')}
            </button>
            <button
              className={`flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-600 border-2 border-transparent rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 font-sans hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 ${
                activeTab === 1 ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white border-brand-500 shadow-lg' : ''
              }`}
              onClick={() => handleTabClick(1)}
            >
              <FaBriefcase /> {t('intro.tabs.experience')}
            </button>
            <button
              className={`flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-600 border-2 border-transparent rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 font-sans hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 ${
                activeTab === 2 ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white border-brand-500 shadow-lg' : ''
              }`}
              onClick={() => handleTabClick(2)}
            >
              <FaGraduationCap /> {t('intro.tabs.education')}
            </button>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="about"
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="p-8 bg-gray-50 rounded-[15px] min-h-[450px]"
                >
                  <div className="w-[70px] h-[70px] bg-gradient-to-br from-brand-500 to-brand-600 rounded-[15px] flex items-center justify-center text-white text-3xl mb-5">
                    <FaUser />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-brand-800 mb-4 font-bold">{t('intro.about.title')}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-left">{t('intro.about.description')}</p>
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
                  className="p-8 bg-gray-50 rounded-[15px] min-h-[450px]"
                >
                  <div className="w-[70px] h-[70px] bg-gradient-to-br from-brand-500 to-brand-600 rounded-[15px] flex items-center justify-center text-white text-3xl mb-5">
                    <FaBriefcase />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-brand-800 mb-4 font-bold">{t('intro.experience.title')}</h3>
                  <h4 className="text-brand-500 text-2xl font-bold mb-4">{t('intro.experience.years')}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-left">{t('intro.experience.description')}</p>
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
                  className="p-8 bg-gray-50 rounded-[15px] min-h-[450px]"
                >
                  <div className="w-[70px] h-[70px] bg-gradient-to-br from-brand-500 to-brand-600 rounded-[15px] flex items-center justify-center text-white text-3xl mb-5">
                    <FaGraduationCap />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-brand-800 mb-4 font-bold">{t('intro.education.title')}</h3>
                  <h4 className="text-brand-500 text-2xl font-bold mb-4">{t('intro.education.degree')}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-left mb-8">{t('intro.education.university')}</p>

                  <div className="mt-8 pt-8 border-t-2 border-gray-200">
                    <div className="flex items-center gap-3 mb-5 text-brand-800 text-xl">
                      <FaCertificate />
                      <h4 className="text-2xl text-brand-800 m-0 font-semibold">{t('intro.certificates.title')}</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                      {certificates.map((cert) => (
                        <div 
                          key={cert.id} 
                          className="bg-white rounded-xl p-4 shadow-md transition-all duration-300 cursor-pointer border-2 border-brand-50 hover:-translate-y-1 hover:shadow-lg hover:border-brand-500"
                          onClick={() => handleCertificateClick(cert.image)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => e.key === 'Enter' && handleCertificateClick(cert.image)}
                        >
                          <img src={cert.image} alt={cert.name} className="w-full h-auto rounded-lg mb-2.5" />
                          <p className="text-sm text-brand-800 font-semibold text-center m-0">{cert.name}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 text-center italic m-0">{t('intro.certificates.clickToView')}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar indicator */}
            <div className="w-full h-1 bg-gray-200 rounded-sm overflow-hidden mt-5">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-sm"
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
