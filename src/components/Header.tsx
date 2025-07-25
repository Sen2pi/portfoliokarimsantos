import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import '../styles/menu3d.css';

interface HeaderProps {
  onNavClick: (href: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('hero');

  // IDs das seções
  const sectionIds = [
    'hero',
    'about',
    'skills',
    'projects',
    'experience',
    'certifications',
    'contact',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar seção ativa
  useEffect(() => {
    const handleSectionScroll = () => {
      let current = 'hero';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleSectionScroll);
    handleSectionScroll();
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#hero', id: 'hero' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.skills'), href: '#skills', id: 'skills' },
    { name: t('nav.projects'), href: '#projects', id: 'projects' },
    { name: t('nav.experience'), href: '#experience', id: 'experience' },
    { name: t('nav.certifications'), href: '#certifications', id: 'certifications' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  // Função para lidar com clique nos links do menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavClick(href);
  };

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
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    className={`menu3d-btn${isActive ? ' menu3d-active' : ''}`}
                    onClick={e => handleNavClick(e, item.href)}
                  >
                    <span>{item.name}</span>
                  </a>
                  {/* Linha animada apenas no hover */}
                  <span
                    className="absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                  />
                </div>
              );
            })}
          </div>

          {/* Right Side: Language Selector + Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
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
            <div className="mt-4 pt-4 border-t border-gray-600">
              <LanguageSelector />
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
