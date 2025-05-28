import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitMerge, Star, ExternalLink } from 'lucide-react';

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
    { message: 'feat: Unity 2D zombie game mechanics', repo: 'meu-irmao-z-2d', time: '4 dias atrás', type: 'feature' },
    { message: 'feat: 3D zombie AI implementation', repo: 'meu-irmao-z-3d', time: '5 dias atrás', type: 'feature' },
  ];

  const getCommitIcon = (type: string) => {
    switch (type) {
      case 'feature': return <GitBranch className="w-4 h-4" />;
      case 'bugfix': return <GitCommit className="w-4 h-4" />;
      case 'docs': return <Star className="w-4 h-4" />;
      case 'refactor': return <GitMerge className="w-4 h-4" />;
      default: return <GitCommit className="w-4 h-4" />;
    }
  };

  const getCommitColor = (type: string) => {
    switch (type) {
      case 'feature': return 'border-green-400 text-green-400';
      case 'bugfix': return 'border-red-400 text-red-400';
      case 'docs': return 'border-blue-400 text-blue-400';
      case 'refactor': return 'border-yellow-400 text-yellow-400';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  // Gerar dados realistas de contribuições para o ano inteiro
  const generateContributionData = () => {
    const startDate = new Date(2024, 0, 1); // 1 de Janeiro de 2024
    const endDate = new Date(2024, 11, 31); // 31 de Dezembro de 2024
    const weeks = [];
    
    // Calcular o número de semanas necessárias
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const totalWeeks = Math.ceil((endDate.getTime() - startDate.getTime()) / msPerWeek) + 2;
    
    // Encontrar o primeiro domingo antes ou igual à data de início
    const firstSunday = new Date(startDate);
    firstSunday.setDate(startDate.getDate() - startDate.getDay());
    
    // Gerar dados para cada semana
    for (let week = 0; week < totalWeeks; week++) {
      const weekData = [];
      
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(firstSunday);
        currentDate.setDate(firstSunday.getDate() + (week * 7) + day);
        
        // Gerar contribuições baseadas em padrões realistas
        let contributions = 0;
        
        // Verificar se a data está dentro do ano de 2024
        if (currentDate.getFullYear() === 2024) {
          const dayOfWeek = currentDate.getDay();
          const month = currentDate.getMonth();
          
          // Padrões realistas de contribuições
          // Menos contribuições aos fins de semana
          if (dayOfWeek === 0 || dayOfWeek === 6) {
            contributions = Math.random() < 0.3 ? Math.floor(Math.random() * 3) : 0;
          } else {
            // Dias úteis com mais atividade
            contributions = Math.random() < 0.8 ? Math.floor(Math.random() * 5) + 1 : 0;
          }
          
          // Períodos de férias com menos atividade (Dezembro, Agosto)
          if (month === 11 || month === 7) {
            contributions = Math.floor(contributions * 0.5);
          }
          
          // Períodos intensos de trabalho (Março, Setembro, Outubro)
          if (month === 2 || month === 8 || month === 9) {
            contributions = Math.min(contributions + Math.floor(Math.random() * 2), 4);
          }
          
          // Alguns dias completamente sem atividade
          if (Math.random() < 0.15) {
            contributions = 0;
          }
          
          // Alguns dias com atividade intensa
          if (Math.random() < 0.05) {
            contributions = 4;
          }
        }
        
        weekData.push({
          date: new Date(currentDate),
          contributions,
          week,
          day
        });
      }
      
      weeks.push(weekData);
    }
    
    return weeks;
  };

  const contributionData = generateContributionData();

  const getContributionColor = (contributions: number) => {
    if (contributions === 0) return 'bg-gray-800 hover:bg-gray-700';
    if (contributions === 1) return 'bg-green-900 hover:bg-green-800';
    if (contributions === 2) return 'bg-green-700 hover:bg-green-600';
    if (contributions === 3) return 'bg-green-500 hover:bg-green-400';
    return 'bg-green-300 hover:bg-green-200';
  };

  const dayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  // Calcular estatísticas das contribuições
  const totalContributions = contributionData.flat().reduce((sum, day) => sum + day.contributions, 0);
  const activeDays = contributionData.flat().filter(day => day.contributions > 0).length;

  return (
    <section id="git-activity" className="py-20 bg-gray-900">
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            Atividade de desenvolvimento e contribuições no GitHub
          </p>
        </motion.div>

        {/* Estatísticas Git Atualizadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Commits', value: gitStats.totalCommits, icon: <GitCommit className="w-6 h-6" /> },
            { label: 'Repositórios', value: gitStats.repositories, icon: <GitBranch className="w-6 h-6" /> },
            { label: 'Contribuições 2024', value: totalContributions, icon: <GitMerge className="w-6 h-6" /> },
            { label: 'Dias Ativos', value: activeDays, icon: <Star className="w-6 h-6" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
            >
              <div className="text-blue-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gráfico de Contribuições HORIZONTAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white font-mono">
              Contribuições em 2024
            </h3>
            <div className="text-gray-400 text-sm">
              <span className="font-mono">{totalContributions} contribuições</span> em {activeDays} dias
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
            {/* Labels dos meses no topo */}
            <div className="flex justify-start text-xs text-gray-400 mb-2 ml-8">
              {monthLabels.map((month) => (
                <span key={month} className="w-12 text-left" style={{ marginRight: '32px' }}>
                  {month}
                </span>
              ))}
            </div>
            
            {/* Container principal com labels dos dias e grid */}
            <div className="flex">
              {/* Labels dos dias da semana */}
              <div className="flex flex-col justify-between text-xs text-gray-400 mr-2 py-1">
                {dayLabels.map((day, index) => (
                  <span key={day} className={`h-3 flex items-center text-xs ${index % 2 === 1 ? '' : 'opacity-0'}`}>
                    {index % 2 === 1 ? day : ''}
                  </span>
                ))}
              </div>
              
              {/* Grid de contribuições horizontal */}
              <div className="flex flex-col gap-1" style={{ minWidth: '800px' }}>
                {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                  <div key={dayIndex} className="flex gap-1">
                    {contributionData.map((week, weekIndex) => {
                      const dayData = week[dayIndex];
                      return (
                        <div
                          key={`${dayIndex}-${weekIndex}`}
                          className={`w-3 h-3 rounded-sm ${getContributionColor(dayData.contributions)} transition-all cursor-pointer`}
                          title={`${dayData.contributions} contribuições em ${dayData.date.toLocaleDateString('pt-PT', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legenda */}
            <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
              <span>Menos</span>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
              </div>
              <span>Mais</span>
            </div>
          </div>
        </motion.div>

        {/* Commits Recentes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-mono">
            Commits Recentes
          </h3>
          <div className="space-y-4">
            {recentCommits.map((commit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${getCommitColor(commit.type)}`}>
                    {getCommitIcon(commit.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-mono text-sm mb-1">
                      {commit.message}
                    </h4>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span className="text-blue-400 font-mono">{commit.repo}</span>
                      <span>{commit.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Link para GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/sen2pi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-mono transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Ver no GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitActivity;
