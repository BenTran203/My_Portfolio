import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';
import image1 from "../../assets/Project_1.png";

const Projects = () => {
  const { t } = useTranslation();
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      id: 1,
      title: t('project1.title'),
      description: t('project1.description'),
      tools: t('project1.tools'),
      image: image1,
      projectLink: 'https://e-commerce-liard-rho-36.vercel.app/',
      githubLink: 'https://github.com/BenTran203/E_commerce'
    },
    {
      id: 2,
      title: t('project2.title'),
      description: t('project2.description'),
      tools: t('project2.tools'),
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop',
      projectLink: '#',
      githubLink: '#'
    },
    // {
    //   id: 3,
    //   title: t('project3.title'),
    //   description: t('project3.description'),
    //   tools: t('project3.tools'),
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    //   projectLink: '#',
    //   githubLink: '#'
    // }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentProject((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return next;
    });
  };

  const project = projects[currentProject];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>
        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('projects.subtitle')}
        </motion.p>
      </div>

      <div className="project-slider">
        <button
          className="slider-button prev"
          onClick={() => paginate(-1)}
          aria-label="Previous project"
        >
          <FaChevronLeft />
        </button>

        <div className="project-content">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="project-slide"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <FaExternalLinkAlt /> {t('projects.viewProject')}
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <FaGithub /> {t('projects.github')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tools">
                  <h4>{t('projects.tools')}:</h4>
                  <p>{project.tools}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="slider-button next"
          onClick={() => paginate(1)}
          aria-label="Next project"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="project-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentProject ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentProject ? 1 : -1);
              setCurrentProject(index);
            }}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

