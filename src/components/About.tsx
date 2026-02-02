import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Users } from 'lucide-react';

export const About = () => {
  const highlights = [
    { icon: GraduationCap, text: 'CGPA: 8.09', color: 'text-primary' },
    { icon: Code2, text: 'MERN Stack Developer', color: 'text-secondary' },
    { icon: Brain, text: 'Strong in DSA & REST APIs', color: 'text-tertiary' },
    { icon: Users, text: 'Team Player & Leader', color: 'text-primary' }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 rounded-full" />
            <div className="glass-card rounded-3xl p-8 relative z-10 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-64 h-64 mx-auto bg-dark rounded-full flex items-center justify-center border-2 border-white/5 group-hover:border-primary/50 transition-colors">
                {/* Placeholder for Profile Image or Avatars */}
                <div className="text-8xl font-bold text-gradient">HR</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-secondary font-semibold">Computer Science Engineering graduate</span> from Government College of Engineering, Salem, with hands-on experience in full stack web development using the MERN stack.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy transforming complex problems into <span className="text-primary font-semibold">scalable, secure, and intuitive digital solutions</span> that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Icon className={`${item.color}`} size={28} />
                    <p className="text-sm font-medium text-gray-200">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
