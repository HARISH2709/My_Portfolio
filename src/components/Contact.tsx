import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  const socials = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/HARISH2709', color: 'text-white' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/harish-ravi-a7659827b/', color: 'text-blue-400' },
    { icon: Mail, label: 'Email', link: 'mailto:raviharish296@gmail.com', color: 'text-primary' }
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-6 text-white leading-tight">
              Let's build something <br />
              <span className="text-gradient">amazing</span> together.
            </h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Salem, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+91-6381173758</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-tertiary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">raviharish296@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 glass rounded-full flex items-center justify-center ${social.color} hover:bg-white/10 transition-colors`}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl space-y-6 border border-white/5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-dark/50 border border-white/10 rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-dark/50 border border-white/10 rounded-2xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 transition-all text-white placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-dark/50 border border-white/10 rounded-2xl focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary/50 transition-all resize-none text-white placeholder:text-gray-600"
                  placeholder="I'd like to talk about..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-orange-600 rounded-2xl font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
