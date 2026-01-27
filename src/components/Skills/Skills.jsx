import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaReact, FaDatabase, FaCode, FaServer, FaDocker, FaGitAlt
} from 'react-icons/fa';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      name: 'Frontend',
      icon: FaReact,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
      color: 'emerald'
    },
    {
      name: 'Backend',
      icon: FaServer,
      skills: ['Node.js', 'Express', 'REST APIs', 'Microservices', 'RabbitMQ', 'MQTT', 'Odoo', 'JWT'],
      color: 'green'
    },
    {
      name: 'Languages',
      icon: FaCode,
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
      color: 'lime'
    },
    {
      name: 'Databases',
      icon: FaDatabase,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'AWS'],
      color: 'emerald'
    },
    {
      name: 'DevOps',
      icon: FaDocker,
      skills: ['Docker', 'Docker Compose', 'CI/CD'],
      color: 'green'
    },
    {
      name: 'Tools',
      icon: FaGitAlt,
      skills: ['Github','Gitlens', 'Microsoft Planner', 'Trello', 'Atlassian'],
      color: 'lime'
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" id="skills">
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
            Skills & Stack
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 body-text max-w-3xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                className="glass rounded-3xl p-6 md:p-8 shadow-xl shadow-black/20 card-interactive"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg ${
                    category.color === 'emerald' ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' :
                    category.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                    'bg-gradient-to-br from-lime-400 to-lime-600'
                  }`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-neutral-100 heading">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 glass-light rounded-xl text-sm font-medium text-emerald-700 dark:text-emerald-400 transition-all duration-200 ease-out hover:scale-105 focus-ring"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

