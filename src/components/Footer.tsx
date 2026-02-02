import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black/90 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Harish's Portfolio.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Harish R.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/HARISH2709" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://linkedin.com/in/harish-ravi-a7659827b/" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:raviharish296@gmail.com" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
