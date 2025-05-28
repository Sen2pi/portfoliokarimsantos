import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Server, Gamepad2 } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack' | 'game'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500';
      case 'development': return 'bg-yellow-500';
      case 'testing': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'Online';
      case 'development': return 'Em Desenvolvimento';
      case 'testing': return 'Em Testes';
      default: return 'Inativo';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Globe size={16} />;
      case 'mobile': return <Smartphone size={16} />;
      case 'fullstack': return <Server size={16} />;
      case 'game': return <Gamepad2 size={16} />;
      default: return <Globe size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            &lt;Projetos/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { key: 'all', label: 'Todos', icon: '🌟' },
            { key: 'web', label: 'Web', icon: '🌐' },
            { key: 'mobile', label: 'Mobile', icon: '📱' },
            { key: 'fullstack', label: 'Full Stack', icon: '⚡' },
            { key: 'game', label: 'Jogos', icon: '🎮' },
          ].map((filterOption) => (
            <motion.button
              key={filterOption.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterOption.key as any)}
              className={`px-6 py-3 rounded-lg font-mono font-semibold transition-colors flex items-center space-x-2 ${
                filter === filterOption.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600'
              }`}
            >
              <span>{filterOption.icon}</span>
              <span>{filterOption.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Imagem do Projeto */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback se a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-white text-6xl opacity-50">
                          ${project.category === 'game' ? '🎮' : '💻'}
                        </div>
                      `;
                    }
                  }}
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                  <span className="text-white text-xs font-mono bg-black bg-opacity-50 px-2 py-1 rounded">
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white font-mono">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-400">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-gray-500 text-xs font-mono">
                      +{project.technologies.length - 4} mais
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-mono transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Ver Site</span>
                    </motion.a>
                  )}

                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-4 py-2 rounded text-sm font-mono transition-colors"
                    >
                      <Github size={14} />
                      <span>Código</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apps Mobile em Teste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 font-mono text-center">
            📱 Apps Mobile em Teste
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="text-white font-mono mb-2">Memoriza+</h4>
              <p className="text-gray-400 text-sm mb-2">App para técnicas de memorização</p>
              <code className="text-blue-400 text-xs">memorizamais@googlegroups.com</code>
            </div>
            <div className="text-center">
              <h4 className="text-white font-mono mb-2">PocketCV</h4>
              <p className="text-gray-400 text-sm mb-2">Criação de currículos profissionais</p>
              <code className="text-blue-400 text-xs">pocketCV@googlegroups.com</code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
