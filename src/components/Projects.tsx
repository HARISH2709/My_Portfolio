import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Users, Activity, Calculator, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  icon: typeof Users;
  tags: string[];
  details: string[];
  color: string;
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Employee Management System',
      description: 'MERN stack application with role-based authentication managing 500+ employee records',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Users,
      tags: ['MERN', 'JWT', 'RBAC', 'REST API'],
      details: [
        'Role-based authentication using JWT tokens',
        'Manages 500+ employee records efficiently',
        'Optimized MongoDB queries for performance',
        'Real-time React UI with state management',
        'Secure RBAC implementation'
      ],
      color: 'text-primary'
    },
    {
      title: 'Interactive Healthcare Landing',
      description: 'Fully responsive healthcare website with smooth animations and form validation',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Activity,
      tags: ['React', 'CSS', 'JavaScript', 'Responsive'],
      details: [
        'Fully responsive design across all devices',
        'Smooth scroll animations and transitions',
        'JavaScript form validation',
        'Modern healthcare UI/UX',
        'Performance optimized'
      ],
      color: 'text-secondary'
    },
    {
      title: 'Web-Based Calculator',
      description: 'Clean calculator with real-time calculations, error handling, and keyboard accessibility',
      image: 'https://images.pexels.com/photos/5900183/pexels-photo-5900183.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Calculator,
      tags: ['JavaScript', 'HTML', 'CSS'],
      details: [
        'Real-time calculation processing',
        'Comprehensive error handling',
        'Keyboard accessibility support',
        'Clean minimal UI design',
        'Responsive layout'
      ],
      color: 'text-tertiary'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full relative">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
                      <Icon className={project.color} size={20} />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="text-gray-500 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" size={20} />
                    </div>

                    <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-colors border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <selectedProject.icon className={selectedProject.color} size={28} />
                  <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                </div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
