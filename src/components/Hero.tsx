import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building <br />
            <span className="text-gradient">Digital Experiences</span>
            <br />
            That Matter
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            I'm a passionate developer crafting stunning, user-centric interfaces.
            I blend technical expertise with creative design to build scalable solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] transition-shadow"
            >
              View Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-700 hover:border-white text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              Resume <Download size={20} />
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-gray-400">
            <SocialLink href="https://github.com/HARISH2709" icon={<Github size={24} />} />
            <SocialLink href="https://linkedin.com/in/harish-ravi-a7659827b/" icon={<Linkedin size={24} />} />
            <SocialLink href="mailto:raviharish296@gmail.com" icon={<Mail size={24} />} />
          </div>
        </motion.div>

        {/* Hero Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full h-[500px] glass rounded-2xl overflow-hidden border border-white/10 glow">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Coding Workspace"
              className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
            />

            {/* Floating Cards */}
            <FloatingCard
              className="absolute top-10 right-10"
              delay={1}
              icon={<div className="w-3 h-3 rounded-full bg-red-500" />}
              text="React Developer"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-secondary/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ y: -3, color: '#fff' }}
    className="hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

const FloatingCard = ({ className, delay, icon, text }: any) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`glass px-4 py-2 rounded-lg flex items-center gap-3 ${className}`}
  >
    {icon}
    <span className="text-sm font-medium">{text}</span>
  </motion.div>
);
