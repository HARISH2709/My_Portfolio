import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, BookOpen } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: ['C', 'C++', 'Java', 'JavaScript'],
      color: 'text-primary'
    },
    {
      icon: Layout,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'React.js'],
      color: 'text-secondary'
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      color: 'text-tertiary'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'MySQL'],
      color: 'text-primary'
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Canva'],
      color: 'text-secondary'
    },
    {
      icon: BookOpen,
      title: 'Soft Skills',
      skills: ['MS Excel', 'MS Word', 'MS PowerPoint'],
      color: 'text-tertiary'
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-dark relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
                    <Icon className={`${category.color}`} size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/5 group-hover:border-primary/20 transition-colors"
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
