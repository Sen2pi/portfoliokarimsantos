import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitMerge, Star } from 'lucide-react';

const GitActivity: React.FC = () => {
  // Dados simulados de atividade Git
  const gitStats = {
    totalCommits: 847,
    repositories: 23,
    contributions: 312,
    streak: 45
  };

  const recentCommits = [
    { message: 'feat: implement user authentication system', repo: 'ajudaaqui.pt', time: '2 horas atrás', type: 'feature' },
    { message: 'fix: resolve mobile responsive issues', repo: 'destinatur', time: '5 horas atrás', type: 'bugfix' },
    { message: 'docs: update API documentation', repo: 'kp-solucoes', time: '1 dia atrás', type: 'docs' },
    { message: 'refactor: optimize database queries', repo: 'opah.pt', time: '2 dias atrás', type: 'refactor' },
    { message: 'feat: add real-time notifications', repo: 'princesa-nails', time: '3 dias atrás', type: 'feature' },
  ];

  const getCommitIcon = (type: string) => {
    switch (type) {
      case 'feature': return <Star className="text-green-400" size={16} />;
      case 'bugfix': return <GitCommit className="text-red-400" size={16} />;
      case 'docs': return <GitBranch className="text-blue-400" size={16} />;
      case 'refactor': return <GitMerge className="text-yellow-400" size={16} />;
      default: return <GitCommit className="text-gray-400" size={16} />;
    }
  };

  const getCommitColor = (type: string) => {
    switch (type) {
      case 'feature': return 'border-green-400';
      case 'bugfix': return 'border-red-400';
      case 'docs': return 'border-blue-400';
      case 'refactor': return 'border-yellow-400';
      default: return 'border-gray-400';
    }
  };

  // Gerar dados para o gráfico de contribuições (simulado)
  const generateContributionData = () => {
    const weeks = 52;
    const data = [];
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < 7; day++) {
        const contributions = Math.floor(Math.random() * 5);
        data.push({
          week,
          day,
          contributions,
          date: new Date(2024, 0, week * 7 + day + 1)
        });
      }
    }
    return data;
  };

  const contributionData = generateContributionData();

  const getContributionColor = (contributions: number) => {
    if (contributions === 0) return 'bg-gray-800';
    if (contributions === 1) return 'bg-green-900';
    if (contributions === 2) return 'bg-green-700';
    if (contributions === 3) return 'bg-green-500';
    return 'bg-green-300';
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            &lt;GitActivity/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Atividade de desenvolvimento e contribuições no GitHub
          </p>
        </motion.div>

        {/* Estatísticas Git */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Commits', value: gitStats.totalCommits, icon: <GitCommit className="text-blue-400" size={24} /> },
            { label: 'Repositórios', value: gitStats.repositories, icon: <GitBranch className="text-green-400" size={24} /> },
            { label: 'Contribuições', value: gitStats.contributions, icon: <GitMerge className="text-purple-400" size={24} /> },
            { label: 'Streak Atual', value: `${gitStats.streak} dias`, icon: <Star className="text-yellow-400" size={24} /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gráfico de Contribuições */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6 font-mono">
              Contribuições em 2024
            </h3>
            
            <div className="mb-4">
              <div className="grid grid-cols-53 gap-1">
                {contributionData.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.001 }}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day.contributions)} hover:scale-110 transition-transform cursor-pointer`}
                    title={`${day.contributions} contribuições em ${day.date.toLocaleDateString()}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Jan</span>
              <span>Mar</span>
              <span>Mai</span>
              <span>Jul</span>
              <span>Set</span>
              <span>Nov</span>
            </div>

            <div className="flex items-center justify-end mt-4 space-x-2 text-xs text-gray-400">
              <span>Menos</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
              </div>
              <span>Mais</span>
            </div>
          </motion.div>

          {/* Commits Recentes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6 font-mono">
              Commits Recentes
            </h3>
            
            <div className="space-y-4">
              {recentCommits.map((commit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-l-4 ${getCommitColor(commit.type)} pl-4 py-2`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {getCommitIcon(commit.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-mono text-sm mb-1">
                        {commit.message}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <span className="bg-gray-700 px-2 py-1 rounded">
                          {commit.repo}
                        </span>
                        <span>{commit.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-6 text-center"
            >
              <a
                href="https://github.com/Sen2pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-mono text-sm transition-colors"
              >
                <GitBranch size={16} />
                <span>Ver no GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitActivity;
