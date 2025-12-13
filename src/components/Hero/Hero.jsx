import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaFileDownload, FaArrowDown } from 'react-icons/fa';
import avatarImage from '../../assets/Avatar.png';
import { smoothScrollTo } from '../../utils/smoothScroll';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const handleResumeClick = () => {
    const resumeFile = i18n.language === 'vi' ? 'resume-vi.pdf' : 'resume-en.pdf';
    window.open(`/${resumeFile}`, '_blank');
  };

  const scrollToProjects = () => {
    smoothScrollTo('projects', 120);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 gradient-nature animate-gradient-drift noise-overlay">
        {/* Radial highlight overlay */}
        <div className="absolute inset-0 gradient-radial-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar and Info */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl glass shadow-2xl shadow-black/30 overflow-hidden card-interactive">
                <img 
                  src={avatarImage} 
                  alt="PhucDat Tran" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 heading drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">{t('intro.greeting')}</span>
              <span className="block text-emerald-100">PhucDat Tran</span>
              <span className="block text-lg md:text-xl font-medium text-emerald-50 mt-2">
                (Ben Tran)
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 body-text drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('intro.title')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={scrollToProjects}
                className="cta-primary flex items-center justify-center gap-2"
              >
                <span>View Work</span>
                <FaArrowDown className="animate-bounce" />
              </button>
              <button
                onClick={handleResumeClick}
                className="cta-secondary flex items-center justify-center gap-2"
              >
                <FaFileDownload />
                <span>{t('intro.viewResume')}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Decorative Elements or Additional Content */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8 shadow-2xl shadow-black/30 max-w-md">
              <p className="text-gray-700 dark:text-neutral-200 text-lg body-text">
                {t('intro.about.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
      >
        <FaArrowDown className="text-white/60 text-2xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;

