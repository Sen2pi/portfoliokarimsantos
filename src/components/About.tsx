import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Globe, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const personalInfo = [
    { icon: <User className="text-blue-400" size={20} />, label: t('about.name'), value: t('about.nameValue') },
    { icon: <MapPin className="text-green-400" size={20} />, label: t('about.location'), value: t('about.locationValue') },
    { icon: <Calendar className="text-purple-400" size={20} />, label: t('about.experience'), value: t('about.experienceValue') },
    { icon: <Award className="text-yellow-400" size={20} />, label: t('about.certification'), value: t('about.certificationValue') },
    { icon: <Award className="text-yellow-400" size={20} />, label: t('about.degree'), value: t('about.degreeValue') },
  ];

  const highlights = [
    {
      icon: <Code2 className="text-blue-500" size={24} />,
      title: t('about.fullStackDev'),
      description: t('about.fullStackDesc')
    },
    {
      icon: <Globe className="text-green-500" size={24} />,
      title: t('about.ceoLeader'),
      description: t('about.ceoDesc')
    },
    {
      icon: <Award className="text-purple-500" size={24} />,
      title: t('about.techInnovation'),
      description: t('about.techDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            &lt;{t('about.title')}/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto e Informações Pessoais */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl"
              >
                <img
                  src="/foto.png"
                  alt="Karim Santos"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-gray-800"></div>
            </div>

            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 glass-effect p-3 rounded-lg"
                >
                  {info.icon}
                  <div>
                    <span className="text-gray-400 text-sm">{info.label}:</span>
                    <span className="text-white font-mono ml-2">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Descrição e Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                {t('about.presentationTitle')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.presentation1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.presentation2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.presentation3')}
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-4 rounded-lg border-l-4 border-blue-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold font-mono mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
