import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#"
                    className="text-2xl font-bold font-sans tracking-tighter text-gradient"
                    whileHover={{ scale: 1.05 }}
                >
                    Harish's Portfolio.
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-gray-400 hover:text-white transition-colors duration-300 text-base font-semibold tracking-wide group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 pl-8 border-l border-gray-800">
                        <SocialIcon icon={<Github size={18} />} href="https://github.com/HARISH2709" />
                        <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com/in/harish-ravi-a7659827b/" />
                        <SocialIcon icon={<Mail size={18} />} href="mailto:raviharish296@gmail.com" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass border-t border-gray-800"
                >
                    <div className="flex flex-col space-y-4 p-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-primary transition-colors block text-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
    <motion.a
        href={href}
        whileHover={{ y: -2, color: '#FF6B35' }}
        className="text-gray-400 transition-colors"
    >
        {icon}
    </motion.a>
);
