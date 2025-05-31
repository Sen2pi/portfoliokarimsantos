import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: '1',
    title: 'DestinaTur',
    description: 'Plataforma de turismo moderna com sistema de reservas e gestão de destinos turísticos.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://destinatur.vercel.app/',
    image: '/Divertour.png',
    category: 'web',
    status: 'live'
  },
  {
    id: '2',
    title: 'AjudaAqui',
    description: 'Sistema de gestão para prestação de serviços locais com geolocalização.',
    technologies: ['React', 'Node', 'PostgreSQL'],
    liveUrl: 'https://ajudaaqui.pt/',
    image: '/Ajudaaqui.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '3',
    title: 'OPAH',
    description: 'Plataforma empresarial para gestão de operações e recursos humanos.',
    technologies: ['React', 'MySQL', 'Linux'],
    liveUrl: 'https://opah.pt/',
    image: '/opah.pt.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '4',
    title: 'KP Soluções',
    description: 'Website corporativo da empresa com integração de contact center e gestão empresarial.',
    technologies: ['React', 'Django', 'React Native', 'API'],
    liveUrl: 'https://www.kpsolucoes.pt/',
    image: '/kpsolucoes.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '5',
    title: 'Dispatcheur-cc',
    description: 'WebAPP corporativo da empresa com integração de contact center e gestão empresarial KPI, Faturação e chamadas.',
    technologies: ['React', 'Nginx', 'React Native', 'API', 'Swagger','PostgreSQL','MySQL','Express','Linux', 'Node.js'],
    liveUrl: 'https://dispatcheur-cc.fr/',
    image: '/Dispatcheur.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '6',
    title: 'Princesa Nails',
    description: 'Sistema de agendamento e gestão para salão de beleza.',
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://princesanails.vercel.app/',
    image: '/Princesa.png',
    category: 'web',
    status: 'live'
  },
  {
    id: '7',
    title: 'Memoriza+',
    description: 'App mobile para técnicas de memorização e aprendizagem.',
    technologies: ['React Native', 'Kotlin', 'Android'],
    image: '/mem+.png',
    category: 'mobile',
    status: 'testing'
  },
  {
    id: '8',
    title: 'PocketCV',
    description: 'Aplicação mobile para criação e gestão de currículos profissionais.',
    technologies: ['React Native', 'Kotlin', 'Android'],
    image: '/pocketcv.png',
    category: 'mobile',
    status: 'testing'
  },
  {
    id: '9',
    title: 'Meu Irmão Z - 2D',
    description: 'Jogo de sobrevivência 2D com zombies desenvolvido em Unity. Explore um mundo pós-apocalíptico e lute pela sobrevivência.',
    technologies: ['Unity', 'C#', '2D Graphics', 'Game Design'],
    image: '/meu-irmao-z-2d.png',
    category: 'game',
    status: 'development'
  },
  {
    id: '10',
    title: 'Meu Irmão Z - 3D',
    description: 'Jogo de sobrevivência 3D com zombies desenvolvido em Unity. Experiência imersiva em primeira pessoa num mundo infestado.',
    technologies: ['Unity', 'C#', '3D Graphics', 'AI Programming'],
    image: '/meu-irmao-z-3d.png',
    category: 'game',
    status: 'development'
  },
    {
    id: '11',
    title: 'Portfolio',
    description: 'Meu portfólio pessoal, apresentando meus projetos e habilidades.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    liveUrl: 'https://portfoliokarimsantos.vercel.app/',
    image: '/portfolio.png',
    category: 'web',
    status: 'live'
  },
      {
    id: '12',
    title: 'KPCloud',
    description: ' Plataforma de cloud computing para gestão de recursos e serviços locais e remotos. (Gestão de servidores, Ficheiros , backups, etc.)',
    technologies: ['React',  'JavaScript', 'CSS'],
    liveUrl: 'https://github.com/Sen2pi/KPCloud',
    image: '/kpcloud.png',
    category: 'fullstack',
    status: 'live'
  },
];
