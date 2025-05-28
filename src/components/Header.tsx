import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text font-mono"
          >
            &lt;KarimSantos/&gt;
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors font-mono"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href="https://github.com/Sen2pi"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:dr.karim.patatas@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
 {/* Right Side: Language Selector + Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSelector />
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-white transition-colors font-mono"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
