import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Intern',
      company: 'Emiglitz Technologies',
      period: 'Recent',
      responsibilities: [
        'Developed full-stack web applications using MERN stack',
        'Created and optimized REST APIs for various services',
        'Participated in Agile development and code reviews',
        'Collaborated with team members on feature implementation',
        'Implemented secure authentication and authorization'
      ],
      color: 'text-primary',
      bg: 'bg-primary'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-24 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-5 top-0 w-7 h-7 rounded-full bg-dark border-2 border-primary flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary hover:border-l-secondary transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                      {exp.title}
                      <Briefcase size={18} className="text-primary" />
                    </h3>
                    <p className="text-secondary text-lg font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full text-sm w-fit">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle size={20} className="text-tertiary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
