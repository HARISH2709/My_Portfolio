import { motion } from 'framer-motion';
import { Trophy, Target, Building2, Heart } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Paper Presentation',
      description: '4th Place in Technical Competition',
      color: 'text-primary'
    },
    {
      icon: Target,
      title: 'Placement Coordinator',
      description: 'Coordinated 20+ companies, 200+ students',
      color: 'text-secondary'
    },
    {
      icon: Building2,
      title: 'Industrial Visit Coordinator',
      description: 'Organized industry exposure programs',
      color: 'text-tertiary'
    },
    {
      icon: Heart,
      title: 'NSS Volunteer',
      description: '100+ hours of community service',
      color: 'text-primary'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 bg-dark relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Achievements & <span className="text-gradient">Leadership</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-6 text-center rounded-2xl group border border-white/5"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-colors`}>
                  <Icon className={achievement.color} size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
