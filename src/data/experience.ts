import { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: '1',
    title: 'CEO & Lead Developer',
    company: 'KPS - Karim Patatas Soluções',
    period: '2016 - Presente',
    current: true,
    description: [
      'Liderança de equipas multidisciplinares e gestão operacional de contact center com até 50 colaboradores',
      'Desenvolvimento de plataforma própria integrando gestão de empresas de reboques e contact center',
      'Implementação de soluções web e mobile em Django e React Native',
      'Gestão de infraestrutura Linux e redes, garantindo alta disponibilidade'
    ],
    technologies: ['React', 'Django', 'React Native', 'Linux', 'MySQL', 'Python']
  },
  {
    id: '2',
    title: 'Engenheiro de Suporte Aplicacional',
    company: 'Natixis',
    period: '2022',
    description: [
      'Suporte a aplicações bancárias críticas',
      'Monitorização de processos automatizados (Java/Shell Script)',
      'Troubleshooting e documentação de sistemas',
      'Colaboração com equipas internacionais'
    ],
    technologies: ['Java', 'Shell Script', 'Linux', 'Git', 'Jira']
  },
  {
    id: '3',
    title: 'Coordenador Operacional',
    company: 'Randstad',
    period: '2014 - 2016',
    description: [
      'Coordenação de equipas e controlo de KPIs financeiros',
      'Gestão de produtividade e otimização de processos'
    ],
    technologies: ['Gestão', 'KPIs', 'Produtividade']
  }
];
