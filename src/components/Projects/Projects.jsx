import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import image1 from "../../assets/Project_1.png";
import image2 from "../../assets/Project_2.png";
import image3 from "../../assets/Dashboard.png";

const Projects = () => {
  const { t } = useTranslation();

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
      image: image2,
      projectLink: 'https://www.chatwave.space',
      githubLink: 'https://github.com/BenTran203/Multi-Tenant-SaaS-Dashboard'
    },
    {
      id: 3,
      title: t('project3.title'),
      description: t('project3.description'),
      tools: t('project3.tools'),
      image: image3,
      projectLink: 'https://ai-dashboard-analytics-dun.vercel.app',
      githubLink: 'https://github.com/BenTran203/AI_Dashboard-analytics'
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 bg-white dark:bg-neutral-900" id="projects">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header with Gradient Border */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-border">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-neutral-100 mb-4 heading">
              {t('projects.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 body-text">
              {t('projects.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

