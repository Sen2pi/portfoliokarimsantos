import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Globe, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: <User className="text-blue-400" size={20} />, label: 'Nome', value: 'Karim Hussen Patatas Hassam dos Santos' },
    { icon: <MapPin className="text-green-400" size={20} />, label: 'Localização', value: 'Golães, Fafe, Portugal' },
    { icon: <Calendar className="text-purple-400" size={20} />, label: 'Experiência', value: '4+ anos em desenvolvimento' },
    { icon: <Award className="text-yellow-400" size={20} />, label: 'Certificação', value: 'Oracle Certified Professional' },
    { icon: <Award className="text-yellow-400" size={20} />, label: 'Licenciatura', value: 'Licenciado em Informática' },
  ];

  const highlights = [
    {
      icon: <Code2 className="text-blue-500" size={24} />,
      title: 'Full Stack Developer',
      description: 'Especialista em React, Django, React Native e desenvolvimento mobile'
    },
    {
      icon: <Globe className="text-green-500" size={24} />,
      title: 'CEO & Líder Técnico',
      description: 'Gestão de equipas até 50 colaboradores e desenvolvimento de soluções empresariais'
    },
    {
      icon: <Award className="text-purple-500" size={24} />,
      title: 'Inovação Tecnológica',
      description: 'Criação de plataformas integradas para contact centers e gestão empresarial'
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
            &lt;Sobre/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça mais sobre minha trajetória e experiência profissional
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
                Apresentação
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Engenheiro de Software e Desenvolvedor Web/Mobile com sólida experiência em programação, 
                gestão de equipas e desenvolvimento de soluções inovadoras para contact centers e gestão empresarial.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Especialista em React Native e Computação Móvel, com domínio avançado de Linux, Django, 
                desenvolvimento web full stack, redes e integração de sistemas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Reconhecido pela criatividade, capacidade de liderança e entrega de projetos de alto impacto. 
                Busco uma posição desafiante na Europa para contribuir com soluções tecnológicas de ponta 
                e crescer em ambientes internacionais dinâmicos.
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
