import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden shadow-xl shadow-black/20 card-interactive"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Thumbnail */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-100 mb-3 heading">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-neutral-300 mb-6 body-text leading-relaxed">
          {project.description}
        </p>

        {/* Tools */}
        <div className="mb-6 p-4 glass-light rounded-xl border-l-4 border-emerald-500">
          <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2 uppercase tracking-wide">
            Tools Used
          </h4>
          <p className="text-sm text-gray-700 dark:text-neutral-300 whitespace-pre-line">
            {project.tools}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary flex items-center justify-center gap-2 text-center"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary flex items-center justify-center gap-2 text-center"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

