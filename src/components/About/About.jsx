import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaCertificate,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import javascriptCert from "../../assets/javascript_certificate.jpg";
import nodeCert from "../../assets/Node_certificate.jpg";
import sadMouseImage from "../../assets/Sad mouse.jpg";
import sadMouseAudio from "../../assets/Sad_mouse.mp3";

const About = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const tabs = ["experience", "education", "please"];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const certificates = [
    {
      id: 1,
      name: "JavaScript Certificate",
      image: javascriptCert,
    },
    {
      id: 2,
      name: "Backend Development Certificate",
      image: nodeCert,
    },
  ];

  const handleCertificateClick = (certImage) => {
    window.open(certImage, "_blank");
  };

  const contentVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-8 bg-white dark:bg-neutral-900"
      id="about"
    >
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
            More of me
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
                    ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg"
                    : "glass-light text-gray-700 dark:text-neutral-300 hover:scale-[1.02]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {index === 0 && <FaBriefcase />}
                {index === 1 && <FaGraduationCap />}
                {index === 2 && <></>}
                <span>{t(`intro.tabs.${tab}`)}</span>
              </button>
            ))}
          </div>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
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
                    {t("intro.experience.title")}
                  </h3>
                  <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    {t("intro.experience.years")}
                  </h4>
                  <p className="text-gray-700 dark:text-neutral-300 body-text leading-relaxed whitespace-pre-line">
                    {t("intro.experience.description")}
                  </p>
                </motion.div>
              )}

              {activeTab === 1 && (
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
                    {t("intro.education.title")}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-neutral-300 mb-2">
                    {t("intro.education.degree")}
                  </h4>
                  <p className="text-gray-700 dark:text-neutral-300 mb-8 body-text">
                    {t("intro.education.university")}
                  </p>

                  <div className="mt-8 pt-8 border-t-2 border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center gap-3 mb-6 text-emerald-600 dark:text-emerald-400">
                      <FaCertificate className="text-2xl" />
                      <h4 className="text-2xl font-bold">
                        {t("intro.certificates.title")}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                      {certificates.map((cert) => (
                        <div
                          key={cert.id}
                          className="glass rounded-2xl p-4 card-interactive cursor-pointer focus-ring"
                          onClick={() => handleCertificateClick(cert.image)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) =>
                            e.key === "Enter" &&
                            handleCertificateClick(cert.image)
                          }
                        >
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-full h-auto rounded-xl mb-3"
                          />
                          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 text-center">
                            {cert.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-neutral-400 text-center italic">
                      {t("intro.certificates.clickToView")}
                    </p>
                  </div>
                </motion.div>
              )}
              {activeTab === 2 && (
                <motion.div
                  key="about"
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="glass-light rounded-2xl p-8"
                >
                  {/* Hidden audio element */}
                  <audio
                    ref={audioRef}
                    src={sadMouseAudio}
                    onEnded={handleAudioEnd}
                    preload="auto"
                  />

                  <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-neutral-100 mb-6 heading">
                      Hire me, Please 🥺
                    </h3>

                    {/* Funny Mouse Meme Image */}
                    <motion.div
                      className={`relative cursor-pointer mb-6 ${
                        isPlaying ? "animate-pulse" : ""
                      }`}
                      onClick={togglePlay}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative">
                        <img
                          src={sadMouseImage}
                          alt="Sad Mouse Meme"
                          className={`w-64 h-64 md:w-80 md:h-80 object-contain rounded-3xl shadow-2xl ${
                            isPlaying
                              ? "ring-4 ring-emerald-400 ring-opacity-75"
                              : ""
                          }`}
                        />
                        {/* Play/Pause overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-3xl opacity-0">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                            {isPlaying ? (
                              <FaPause className="text-2xl text-emerald-600" />
                            ) : (
                              <FaPlay className="text-2xl text-emerald-600 ml-1" />
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <p className="text-gray-500 dark:text-neutral-400 text-sm italic">
                      Click the mouse
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
