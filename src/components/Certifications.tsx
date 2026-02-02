import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      title: 'C++ Programming',
      issuer: 'Simplilearn',
      color: 'text-primary'
    },
    {
      title: 'Web Development',
      issuer: 'Codsoft',
      color: 'text-secondary'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">Certifications</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 w-full md:w-80 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">{cert.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 pl-16">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
