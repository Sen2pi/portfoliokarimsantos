import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users, Code, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { experience } from '../data/experience';

const Experience: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const getTranslatedTitle = (exp: any) => {
    return exp.title[currentLanguage] || exp.title.pt;
  };

  const getTranslatedDescription = (exp: any) => {
    return exp.description[currentLanguage] || exp.description.pt;
  };

  const getTranslatedPeriod = (exp: any) => {
    if (typeof exp.period === 'string') {
      return exp.period;
    }
    return exp.period[currentLanguage] || exp.period.pt;
  };

  const education = [
    {
      degree: {
        pt: 'Mestrado em Engenharia Informática e Tecnologias Web',
        en: 'Master in Computer Engineering and Web Technologies',
        fr: 'Master en Ingénierie Informatique et Technologies Web',
        es: 'Máster en Ingeniería Informática y Tecnologías Web',
        de: 'Master in Informatik und Webtechnologien',
        it: 'Master in Ingegneria Informatica e Tecnologie Web'
      },
      institution: 'Universidade Aberta',
      year: '2025',
      status: t('experience.inProgress')
    },
    {
      degree: {
        pt: 'Licenciatura em Informática',
        en: 'Bachelor in Computer Science',
        fr: 'Licence en Informatique',
        es: 'Licenciatura en Informática',
        de: 'Bachelor in Informatik',
        it: 'Laurea in Informatica'
      },
      institution: 'Universidade da Maia',
      year: '2024',
      status: t('experience.completed')
    },
    {
      degree: {
        pt: 'Oracle Certified Professional',
        en: 'Oracle Certified Professional',
        fr: 'Oracle Certified Professional',
        es: 'Oracle Certified Professional',
        de: 'Oracle Certified Professional',
        it: 'Oracle Certified Professional'
      },
      institution: 'Rumos',
      year: '2024',
      status: t('experience.completed')
    },
    {
      degree: {
        pt: 'Psicologia',
        en: 'Psychology',
        fr: 'Psychologie',
        es: 'Psicología',
        de: 'Psychologie',
        it: 'Psicologia'
      },
      institution: 'Universidade Católica Portuguesa',
      year: '2013',
      status: t('experience.completed')
    }
  ];

  const getEducationDegree = (edu: any) => {
    return edu.degree[currentLanguage] || edu.degree.pt;
  };

  const getAchievementsTranslation = (achievement: string) => {
    const translations: any = {
      'Gestão de equipa de 50+ colaboradores': {
        pt: 'Gestão de equipa de 50+ colaboradores',
        en: 'Management of 50+ team members',
        fr: 'Gestion d\'équipe de 50+ collaborateurs',
        es: 'Gestión de equipo de 50+ colaboradores',
        de: 'Management von 50+ Teammitgliedern',
        it: 'Gestione di team di 50+ collaboratori'
      },
      'Redução de 40% nos custos operacionais': {
        pt: 'Redução de 40% nos custos operacionais',
        en: '40% reduction in operational costs',
        fr: 'Réduction de 40% des coûts opérationnels',
        es: 'Reducción del 40% en costos operativos',
        de: '40% Reduzierung der Betriebskosten',
        it: 'Riduzione del 40% dei costi operativi'
      },
      'Implementação de sistema integrado completo': {
        pt: 'Implementação de sistema integrado completo',
        en: 'Complete integrated system implementation',
        fr: 'Implémentation complète d\'un système intégré',
        es: 'Implementación completa de sistema integrado',
        de: 'Vollständige Implementierung eines integrierten Systems',
        it: 'Implementazione completa di sistema integrato'
      },
      'Suporte 24/7 a sistemas bancários críticos': {
        pt: 'Suporte 24/7 a sistemas bancários críticos',
        en: '24/7 support to critical banking systems',
        fr: 'Support 24/7 aux systèmes bancaires critiques',
        es: 'Soporte 24/7 a sistemas bancarios críticos',
        de: '24/7 Support für kritische Banksysteme',
        it: 'Supporto 24/7 a sistemi bancari critici'
      },
      'Melhoria de processos de monitorização': {
        pt: 'Melhoria de processos de monitorização',
        en: 'Improvement of monitoring processes',
        fr: 'Amélioration des processus de surveillance',
        es: 'Mejora de procesos de monitorización',
        de: 'Verbesserung der Überwachungsprozesse',
        it: 'Miglioramento dei processi di monitoraggio'
      },
      'Colaboração internacional eficaz': {
        pt: 'Colaboração internacional eficaz',
        en: 'Effective international collaboration',
        fr: 'Collaboration internationale efficace',
        es: 'Colaboración internacional efectiva',
        de: 'Effektive internationale Zusammenarbeit',
        it: 'Collaborazione internazionale efficace'
      },
      'Melhoria de 25% na produtividade da equipa': {
        pt: 'Melhoria de 25% na produtividade da equipa',
        en: '25% improvement in team productivity',
        fr: 'Amélioration de 25% de la productivité de l\'équipe',
        es: 'Mejora del 25% en la productividad del equipo',
        de: '25% Verbesserung der Teamproduktivität',
        it: 'Miglioramento del 25% nella produttività del team'
      },
      'Implementação de novos KPIs': {
        pt: 'Implementação de novos KPIs',
        en: 'Implementation of new KPIs',
        fr: 'Implémentation de nouveaux KPI',
        es: 'Implementación de nuevos KPIs',
        de: 'Implementierung neuer KPIs',
        it: 'Implementazione di nuovi KPI'
      },
      'Otimização de processos operacionais': {
        pt: 'Otimização de processos operacionais',
        en: 'Optimization of operational processes',
        fr: 'Optimisation des processus opérationnels',
        es: 'Optimización de procesos operativos',
        de: 'Optimierung der Betriebsprozesse',
        it: 'Ottimizzazione dei processi operativi'
      },
      'Otimização de rotas de reboques': {
        pt: 'Otimização de rotas de reboques',
        en: 'Optimization of towing routes',
        fr: 'Optimisation des itinéraires de remorquage',
        es: 'Optimización de rutas de remolque',
        de: 'Optimierung der Abschleppwege',
        it: 'Ottimizzazione delle rotte di rimorchio'
      },
      'Melhoria na eficiência logística': {
        pt: 'Melhoria na eficiência logística',
        en: 'Improvement in logistics efficiency',
        fr: 'Amélioration de l\'efficacité logistique',
        es: 'Mejora en la eficiencia logística',
        de: 'Verbesserung der logistischen Effizienz',
        it: 'Miglioramento dell\'efficienza logistica'
      },
      'Suporte técnico especializado Apple': {
        pt: 'Suporte técnico especializado Apple',
        en: 'Specialized Apple technical support',
        fr: 'Support technique spécialisé Apple',
        es: 'Soporte técnico especializado Apple',
        de: 'Spezialisierter Apple-Support',
        it: 'Supporto tecnico specializzato Apple'
      }
    };
    
    return translations[achievement]?.[currentLanguage] || achievement;
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            &lt;{t('experience.title')}/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline de Experiência */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8 font-mono flex items-center">
              <Briefcase className="mr-3 text-blue-400" size={24} />
              {t('experience.professional')}
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      exp.current ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                    } shadow-lg`}>
                      <Briefcase size={20} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 glass-effect rounded-lg p-6">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white font-mono">
                            {getTranslatedTitle(exp)}
                          </h4>
                          <p className="text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm mt-1">
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {getTranslatedPeriod(exp)}
                            </span>
                            <span className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              Portugal
                            </span>
                          </div>
                        </div>
                        
                        {exp.current && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-mono">
                            {t('experience.current')}
                          </span>
                        )}
                      </div>

                      <ul className="space-y-2 mb-4">
                        {getTranslatedDescription(exp).map((desc: string, i: number) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">▸</span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {/* Tecnologias */}
                      <div className="mb-4">
                        <h5 className="text-white font-mono text-sm mb-2 flex items-center">
                          <Code size={14} className="mr-2" />
                          {t('experience.technologies')}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Conquistas - Só renderiza se achievements existir */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h5 className="text-white font-mono text-sm mb-2 flex items-center">
                            <Award size={14} className="mr-2" />
                            {t('experience.achievements')}
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement: string, i: number) => (
                              <li key={i} className="text-green-400 text-xs flex items-start">
                                <span className="mr-2 mt-1">✓</span>
                                {getAchievementsTranslation(achievement)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educação e Certificações */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-mono flex items-center">
              <Award className="mr-3 text-purple-400" size={24} />
              {t('experience.education')}
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={getEducationDegree(edu)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-4"
                >
                  <h4 className="text-white font-semibold font-mono mb-2">
                    {getEducationDegree(edu)}
                  </h4>
                  <p className="text-blue-400 text-sm mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      {edu.year}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-mono ${
                      edu.status === t('experience.inProgress')
                        ? 'bg-yellow-500 text-black' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Estatísticas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 glass-effect rounded-lg p-6"
            >
              <h4 className="text-white font-mono mb-4 flex items-center">
                <Users className="mr-2 text-green-400" size={16} />
                {t('experience.careerSummary')}
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">{t('experience.totalExperience')}</span>
                  <span className="text-white font-mono text-sm">{t('experience.years')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">{t('experience.teamManaged')}</span>
                  <span className="text-white font-mono text-sm">{t('experience.people')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">{t('experience.projectsLed')}</span>
                  <span className="text-white font-mono text-sm">{t('experience.projects')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">{t('experience.certifications')}</span>
                  <span className="text-white font-mono text-sm">{t('experience.oracle')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
