import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Smartphone, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0">
        {/* Bubbles animadas */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-blue-400 font-mono text-lg">{t('hero.greeting')}</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono"
          >
            Karim <span className="gradient-text">Santos</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-mono"
          >
            {t('hero.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg">
              <Code className="text-blue-400" size={20} />
              <span className="text-white font-mono">{t('hero.fullstack')}</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg">
              <Smartphone className="text-green-400" size={20} />
              <span className="text-white font-mono">{t('hero.mobile')}</span>
            </div>  
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-mono font-semibold transition-colors animate-glow"
            >
              {t('hero.viewProjects')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-mono font-semibold transition-colors"
            >
              {t('hero.contact')}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-white" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
