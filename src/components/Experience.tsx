import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users, Code, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: '1',
      title: 'CEO & Lead Developer',
      company: 'KPS - Karim Patatas Soluções',
      period: '2016 - Presente',
      location: 'Portugal',
      current: true,
      type: 'Liderança & Desenvolvimento',
      description: [
        'Liderança de equipas multidisciplinares e gestão operacional de contact center com até 50 colaboradores',
        'Desenvolvimento de plataforma própria integrando gestão de empresas de reboques e contact center',
        'Otimização de fluxos de trabalho e redução de custos operacionais',
        'Implementação de soluções web e mobile em Django e React Native',
        'Integração de sistemas de telefonia e automação de processos',
        'Gestão de infraestrutura Linux e redes, garantindo alta disponibilidade e segurança'
      ],
      technologies: ['React', 'Django', 'React Native', 'Linux', 'MySQL', 'Python', 'API', 'NGINX'],
      achievements: [
        'Gestão de equipa de 50+ colaboradores',
        'Redução de 40% nos custos operacionais',
        'Implementação de sistema integrado completo'
      ]
    },
    {
      id: '2',
      title: 'Engenheiro de Suporte Aplicacional',
      company: 'Natixis',
      period: '2022',
      location: 'Portugal',
      type: 'Suporte Técnico',
      description: [
        'Suporte a aplicações bancárias críticas',
        'Monitorização de processos automatizados (Java/Shell Script)',
        'Troubleshooting e documentação de sistemas',
        'Colaboração com equipas internacionais',
        'Gestão de tickets e melhoria contínua de processos'
      ],
      technologies: ['Java', 'Shell Script', 'Linux', 'Git', 'Jira', 'Docker', 'XLDeploy'],
      achievements: [
        'Suporte 24/7 a sistemas bancários críticos',
        'Melhoria de processos de monitorização',
        'Colaboração internacional eficaz'
      ]
    },
    {
      id: '3',
      title: 'Coordenador Operacional',
      company: 'Randstad',
      period: '2014 - 2016',
      location: 'Portugal',
      type: 'Gestão Operacional',
      description: [
        'Coordenação de equipas e controlo de KPIs financeiros',
        'Gestão de produtividade e otimização de processos',
        'Análise de métricas e relatórios de performance'
      ],
      technologies: ['Gestão', 'KPIs', 'Produtividade', 'Análise de Dados'],
      achievements: [
        'Melhoria de 25% na produtividade da equipa',
        'Implementação de novos KPIs',
        'Otimização de processos operacionais'
      ]
    },
    {
      id: '4',
      title: 'Operador de CallCenter',
      company: 'AcordoTango',
      period: '2012 - 2014',
      location: 'Portugal',
      type: 'Operações',
      description: [
        'Gestão de chamadas e organização logística de frotas de camiões de reboques',
        'Utilização de mapas e cartografia para otimização de rotas',
        'Trabalho com sistemas baseados na localização',
        'Suporte iOS e MacOS e produtos Apple T1/T2'
      ],
      technologies: ['Sistemas de Localização', 'Cartografia', 'iOS', 'MacOS', 'Apple Support'],
      achievements: [
        'Otimização de rotas de reboques',
        'Melhoria na eficiência logística',
        'Suporte técnico especializado Apple'
      ]
    }
  ];

  const education = [
    {
      degree: 'Licenciatura em Informática',
      institution: 'Universidade da Maia',
      year: '2025',
      status: 'Em curso'
    },
    {
      degree: 'Oracle Certified Professional',
      institution: 'Rumos',
      year: '2024',
      status: 'Concluído'
    },
    {
      degree: 'Psicologia',
      institution: 'Universidade Católica Portuguesa',
      year: '2013',
      status: 'Concluído'
    }
  ];

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
            &lt;Experiência/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trajetória profissional e formação acadêmica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline de Experiência */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8 font-mono flex items-center">
              <Briefcase className="mr-3 text-blue-400" size={24} />
              Experiência Profissional
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
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
                            {exp.title}
                          </h4>
                          <p className="text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm mt-1">
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {exp.period}
                            </span>
                            <span className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        
                        {exp.current && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-mono">
                            Atual
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-mono">
                          {exp.type}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, i) => (
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
                          Tecnologias:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Conquistas */}
                      <div>
                        <h5 className="text-white font-mono text-sm mb-2 flex items-center">
                          <Award size={14} className="mr-2" />
                          Principais Conquistas:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-green-400 text-xs flex items-start">
                              <span className="mr-2 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
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
              Formação
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-4"
                >
                  <h4 className="text-white font-semibold font-mono mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-400 text-sm mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      {edu.year}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-mono ${
                      edu.status === 'Em curso' 
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
                Resumo da Carreira
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Experiência Total:</span>
                  <span className="text-white font-mono text-sm">10+ anos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Equipa Gerida:</span>
                  <span className="text-white font-mono text-sm">50+ pessoas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Projetos Liderados:</span>
                  <span className="text-white font-mono text-sm">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Certificações:</span>
                  <span className="text-white font-mono text-sm">Oracle OCP</span>
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
