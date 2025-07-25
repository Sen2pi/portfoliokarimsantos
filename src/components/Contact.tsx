import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      label: t('contact.email'),
      value: 'dr.karim.patatas@gmail.com',
      link: 'mailto:dr.karim.patatas@gmail.com'
    },
    {
      icon: <MapPin className="text-green-400" size={24} />,
      label: t('contact.location'),
      value: 'Rua padre Raul de assis № 459, 4820477 Golães, Fafe',
      link: 'https://maps.google.com/?q=Golães,Fafe,Portugal'
    },
    {
      icon: <Phone className="text-purple-400" size={24} />,
      label: t('contact.availability'),
      value: t('contact.availabilityValue'),
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/Sen2pi',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      url: 'mailto:dr.karim.patatas@gmail.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      url: 'https://wa.me/351925542328',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            <AnimatedSectionTitle text={`<${t('contact.title')}/>`} className="text-4xl" />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                {t('contact.info')}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-lg p-4 hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold font-mono mb-1">
                          {info.label}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4 font-mono">
                {t('contact.connectWithMe')}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`glass-effect p-3 rounded-lg text-gray-400 ${social.color} transition-colors`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Disponibilidade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6 border-l-4 border-green-500"
            >
              <h4 className="text-white font-mono mb-2 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                {t('contact.availableForProjects')}
              </h4>
              <p className="text-gray-300 text-sm">
                {t('contact.availableDesc')}
              </p>
            </motion.div>
          </motion.div>

          {/* Formulário de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              {t('contact.sendMessage')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-mono text-sm mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-mono text-sm mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-mono text-sm mb-2">
                  {t('contact.subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-mono text-sm mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg font-mono transition-colors flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{t('contact.sending')}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('contact.send')}</span>
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                {t('contact.responseTime')} <span className="text-blue-400 font-mono">{t('contact.hours')}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
