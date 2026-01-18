import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: '1',
    title: {
      pt: 'DestinaTur',
      en: 'DestinaTur',
      fr: 'DestinaTur',
      es: 'DestinaTur',
      de: 'DestinaTur',
      it: 'DestinaTur'
    },
    description: {
      pt: 'Plataforma de turismo moderna com sistema de reservas e gestão de destinos turísticos.',
      en: 'Modern tourism platform with booking system and destination management.',
      fr: 'Plateforme touristique moderne avec système de réservation et gestion des destinations.',
      es: 'Plataforma de turismo moderna con sistema de reservas y gestión de destinos turísticos.',
      de: 'Moderne Tourismusplattform mit Buchungssystem und Zielverwaltung.',
      it: 'Piattaforma turistica moderna con sistema di prenotazione e gestione delle destinazioni.'
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://destinatur.vercel.app/',
    githubUrl: 'https://github.com/Sen2pi/destinatur',
    image: '/Divertour.png',
    category: 'web',
    status: 'live'
  },
  {
    id: '2',
    title: {
      pt: 'AjudaAqui',
      en: 'AjudaAqui',
      fr: 'AjudaAqui',
      es: 'AjudaAqui',
      de: 'AjudaAqui',
      it: 'AjudaAqui'
    },
    description: {
      pt: 'Sistema de gestão para prestação de serviços locais com geolocalização.',
      en: 'Management system for local service provision with geolocation.',
      fr: 'Système de gestion pour la prestation de services locaux avec géolocalisation.',
      es: 'Sistema de gestión para prestación de servicios locales con geolocalización.',
      de: 'Managementsystem für die Erbringung lokaler Dienstleistungen mit Geolokalisierung.',
      it: 'Sistema di gestione per la fornitura di servizi locali con geolocalizzazione.'
    },
    technologies: ['React', 'Node', 'PostgreSQL'],
    liveUrl: 'https://ajudaaqui.pt/',
    image: '/Ajudaaqui.png',
    githubUrl: 'https://github.com/Sen2pi/ajudaaqui',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '3',
    title: {
      pt: 'OPAH',
      en: 'OPAH',
      fr: 'OPAH',
      es: 'OPAH',
      de: 'OPAH',
      it: 'OPAH'
    },
    description: {
      pt: 'Plataforma empresarial para gestão de operações e recursos humanos.',
      en: 'Enterprise platform for operations and human resources management.',
      fr: "Plateforme d'entreprise pour la gestion des opérations et des ressources humaines.",
      es: 'Plataforma empresarial para gestión de operaciones y recursos humanos.',
      de: 'Unternehmensplattform für Betriebs- und Personalmanagement.',
      it: 'Piattaforma aziendale per la gestione delle operazioni e delle risorse umane.'
    },
    technologies: ['React', 'MySQL', 'Linux'],
    liveUrl: 'https://opah.pt/',
    githubUrl: 'https://github.com/Sen2pi/opahpt',
    image: '/opah.pt.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '4',
    title: {
      pt: 'KP Soluções',
      en: 'KP Solutions',
      fr: 'KP Solutions',
      es: 'KP Soluciones',
      de: 'KP Lösungen',
      it: 'KP Soluzioni'
    },
    description: {
      pt: 'Website corporativo da empresa com integração de contact center e gestão empresarial.',
      en: 'Corporate company website with contact center integration and business management.',
      fr: "Site web d'entreprise avec intégration de centre de contact et gestion d'entreprise.",
      es: 'Sitio web corporativo de la empresa con integración de centro de contacto y gestión empresarial.',
      de: 'Unternehmenswebsite mit Contact-Center-Integration und Geschäftsverwaltung.',
      it: 'Sito web aziendale con integrazione di contact center e gestione aziendale.'
    },
    technologies: ['React', 'Django', 'React Native', 'API'],
    liveUrl: 'https://www.kpsolucoes.pt/',
    githubUrl: 'https://github.com/Sen2pi/kpsolucoes',
    image: '/kpsolucoes.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '5',
    title: {
      pt: 'Dispatcheur-cc',
      en: 'Dispatcheur-cc',
      fr: 'Dispatcheur-cc',
      es: 'Dispatcheur-cc',
      de: 'Dispatcheur-cc',
      it: 'Dispatcheur-cc'
    },
    description: {
      pt: 'WebAPP corporativo da empresa com integração de contact center e gestão empresarial KPI, Faturação e chamadas.',
      en: 'Corporate WebAPP with contact center integration and business management KPI, Billing and calls.',
      fr: "WebAPP d'entreprise avec intégration de centre de contact et gestion d'entreprise KPI, facturation et appels.",
      es: 'WebAPP corporativo de la empresa con integración de centro de contacto y gestión empresarial KPI, facturación y llamadas.',
      de: 'Corporate WebAPP mit Contact-Center-Integration und Geschäftsmanagement KPI, Abrechnung und Anrufe.',
      it: 'WebAPP aziendale con integrazione di contact center e gestione aziendale KPI, fatturazione e chiamate.'
    },
    technologies: ['React', 'Nginx', 'React Native', 'API', 'Swagger', 'PostgreSQL', 'MySQL', 'Express', 'Linux', 'Node.js'],
    liveUrl: 'https://dispatcheur-cc.fr/',
    githubUrl: 'https://github.com/Sen2pi/Dispatcheur-CC',
    image: '/Dispatcheur.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '6',
    title: {
      pt: 'Princesa Nails',
      en: 'Princesa Nails',
      fr: 'Princesa Nails',
      es: 'Princesa Nails',
      de: 'Princesa Nails',
      it: 'Princesa Nails'
    },
    description: {
      pt: 'Sistema de agendamento e gestão para salão de beleza.',
      en: 'Scheduling and management system for beauty salon.',
      fr: 'Système de planification et de gestion pour salon de beauté.',
      es: 'Sistema de programación y gestión para salón de belleza.',
      de: 'Terminplanungs- und Verwaltungssystem für Schönheitssalon.',
      it: 'Sistema di pianificazione e gestione per salone di bellezza.'
    },
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://princesanails.vercel.app/',
    githubUrl: 'https://github.com/Sen2pi/princesanails',
    image: '/Princesa.png',
    category: 'web',
    status: 'live'
  },
  {
    id: '7',
    title: {
      pt: 'Memoriza+',
      en: 'Memoriza+',
      fr: 'Memoriza+',
      es: 'Memoriza+',
      de: 'Memoriza+',
      it: 'Memoriza+'
    },
    description: {
      pt: 'App mobile para técnicas de memorização e aprendizagem.',
      en: 'Mobile app for memorization and learning techniques.',
      fr: "Application mobile pour les techniques de mémorisation et d'apprentissage.",
      es: 'App móvil para técnicas de memorización y aprendizaje.',
      de: 'Mobile App für Memorierungs- und Lerntechniken.',
      it: 'App mobile per tecniche di memorizzazione e apprendimento.'
    },
    technologies: ['React Native', 'Kotlin', 'Android'],
    image: '/mem+.png',
    category: 'mobile',
    githubUrl: 'https://github.com/IACartoesFlash/Memoriza-',
    status: 'testing'
  },
  {
    id: '8',
    title: {
      pt: 'PocketCV',
      en: 'PocketCV',
      fr: 'PocketCV',
      es: 'PocketCV',
      de: 'PocketCV',
      it: 'PocketCV'
    },
    description: {
      pt: 'Aplicação mobile para criação e gestão de currículos profissionais.',
      en: 'Mobile application for creating and managing professional resumes.',
      fr: 'Application mobile pour la création et la gestion de CV professionnels.',
      es: 'Aplicación móvil para la creación y gestión de currículos profesionales.',
      de: 'Mobile Anwendung zur Erstellung und Verwaltung von professionellen Lebensläufen.',
      it: 'Applicazione mobile per la creazione e gestione di curriculum professionali.'
    },
    technologies: ['React Native', 'Kotlin', 'Android'],
    image: '/pocketcv.png',
    githubUrl: 'https://github.com/Sen2pi/pocketCV',
    category: 'mobile',
    status: 'testing'
  },
  {
    id: '9',
    title: {
      pt: 'Meu Irmão Z - 2D',
      en: 'My Brother Z - 2D',
      fr: 'Mon Frère Z - 2D',
      es: 'Mi Hermano Z - 2D',
      de: 'Mein Bruder Z - 2D',
      it: 'Mio Fratello Z - 2D'
    },
    description: {
      pt: 'Jogo de sobrevivência 2D com zombies desenvolvido em Unity. Explore um mundo pós-apocalíptico e lute pela sobrevivência.',
      en: '2D zombie survival game developed in Unity. Explore a post-apocalyptic world and fight for survival.',
      fr: 'Jeu de survie 2D avec zombies développé sous Unity. Explorez un monde post-apocalyptique et luttez pour survivre.',
      es: 'Juego de supervivencia 2D con zombies desarrollado en Unity. Explora un mundo post-apocalíptico y lucha por sobrevivir.',
      de: '2D-Zombie-Überlebensspiel entwickelt in Unity. Erkunde eine postapokalyptische Welt und kämpfe ums Überleben.',
      it: 'Gioco di sopravvivenza 2D con zombie sviluppato in Unity. Esplora un mondo post-apocalittico e lotta per la sopravvivenza.'
    },
    technologies: ['Unity', 'C#', '2D Graphics', 'Game Design'],
    image: '/meu-irmao-z-2d.png',
    category: 'game',
    status: 'development'
  },
  {
    id: '10',
    title: {
      pt: 'Meu Irmão Z - 3D',
      en: 'My Brother Z - 3D',
      fr: 'Mon Frère Z - 3D',
      es: 'Mi Hermano Z - 3D',
      de: 'Mein Bruder Z - 3D',
      it: 'Mio Fratello Z - 3D'
    },
    description: {
      pt: 'Jogo de sobrevivência 3D com zombies desenvolvido em Unity. Experiência imersiva em primeira pessoa num mundo infestado.',
      en: '3D zombie survival game developed in Unity. Immersive first-person experience in an infested world.',
      fr: 'Jeu de survie 3D avec zombies développé sous Unity. Expérience immersive à la première personne dans un monde infesté.',
      es: 'Juego de supervivencia 3D con zombies desarrollado en Unity. Experiencia inmersiva en primera persona en un mundo infestado.',
      de: '3D-Zombie-Überlebensspiel entwickelt in Unity. Immersives First-Person-Erlebnis in einer verseuchten Welt.',
      it: 'Gioco di sopravvivenza 3D con zombie sviluppato in Unity. Esperienza immersiva in prima persona in un mondo infestato.'
    },
    technologies: ['Unity', 'C#', '3D Graphics', 'AI Programming'],
    image: '/meu-irmao-z-3d.png',
    category: 'game',
    status: 'development'
  },
  {
    id: '11',
    title: {
      pt: 'Portfolio',
      en: 'Portfolio',
      fr: 'Portfolio',
      es: 'Portfolio',
      de: 'Portfolio',
      it: 'Portfolio'
    },
    description: {
      pt: 'Meu portfólio pessoal, apresentando meus projetos e habilidades.',
      en: 'My personal portfolio showcasing my projects and skills.',
      fr: 'Mon portfolio personnel présentant mes projets et compétences.',
      es: 'Mi portafolio personal que muestra mis proyectos y habilidades.',
      de: 'Mein persönliches Portfolio mit meinen Projekten und Fähigkeiten.',
      it: 'Il mio portfolio personale che mostra i miei progetti e competenze.'
    },
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    liveUrl: 'https://portfoliokarimsantos.vercel.app/',
    githubUrl: 'https://github.com/Sen2pi/portfoliokarimsantos',
    image: '/portfolio.png',
    category: 'web',
    status: 'live'
  },
  {
    id: '12',
    title: {
      pt: 'KPCloud',
      en: 'KPCloud',
      fr: 'KPCloud',
      es: 'KPCloud',
      de: 'KPCloud',
      it: 'KPCloud'
    },
    description: {
      pt: 'Plataforma de cloud computing para gestão de recursos e serviços locais e remotos. (Gestão de servidores, Ficheiros , backups, etc.)',
      en: 'Cloud computing platform for managing local and remote resources and services. (Server management, files, backups, etc.)',
      fr: 'Plateforme de cloud computing pour la gestion des ressources et services locaux et distants. (Gestion des serveurs, fichiers, sauvegardes, etc.)',
      es: 'Plataforma de computación en la nube para la gestión de recursos y servicios locales y remotos. (Gestión de servidores, archivos, copias de seguridad, etc.)',
      de: 'Cloud-Computing-Plattform zur Verwaltung lokaler und entfernter Ressourcen und Dienste. (Serververwaltung, Dateien, Backups, etc.)',
      it: 'Piattaforma di cloud computing per la gestione di risorse e servizi locali e remoti. (Gestione server, file, backup, ecc.)'
    },
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://github.com/Sen2pi/KPCloud',
    githubUrl: 'https://github.com/Sen2pi/KPCloud',
    image: '/kpcloud.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '13',
    title: {
      pt: 'Bloquinho',
      en: 'Bloquinho',
      fr: 'Bloquinho',
      es: 'Bloquinho',
      de: 'Bloquinho',
      it: 'Bloquinho'
    },
    description: {
      pt: 'WebApp profissional de workspace inspirada no Notion, desenvolvida em Flutter. Oferece edição rica de texto, gestão de base de dados, agenda integrada, sincronização em nuvem e 100% de privacidade.',
      en: 'Professional workspace WebApp inspired by Notion, developed in Flutter. Offers rich text editing, database management, integrated agenda, cloud synchronization and 100% privacy.',
      fr: 'WebApp professionnelle de workspace inspirée par Notion, développée en Flutter. Offre une édition de texte riche, une gestion de base de données, une agenda intégrée, une synchronisation cloud et 100% de confidentialité.',
      es: 'WebApp profesional de workspace inspirada en Notion, desarrollada en Flutter. Ofrece edición rica de texto, gestión de base de datos, agenda integrada, sincronización en la nube y 100% de privacidad.',
      de: 'Professionelle Workspace-WebApp inspiriert von Notion, entwickelt in Flutter. Bietet Rich-Text-Bearbeitung, Datenbankverwaltung, integrierte Agenda, Cloud-Synchronisation und 100% Privatsphäre.',
      it: 'WebApp professionale di workspace ispirata a Notion, sviluppata in Flutter. Offre editing di testo ricco, gestione database, agenda integrata, sincronizzazione cloud e 100% privacy.'
    },
    technologies: ['Flutter', 'Dart', 'JavaScript', 'CSS', 'Swift', 'Kotlin', 'C', 'CMake'],
    liveUrl: 'https://bloquinho.kpsolucoes.pt/',
    githubUrl: 'https://github.com/Sen2pi/Bloquinho',
    image: '/bloquinho.png',
    category: 'fullstack',
    status: 'live'
  },
  {
    id: '14',
    title: {
      pt: 'TCMTreino',
      en: 'TCMTreino',
      fr: 'TCMTreino',
      es: 'TCMTreino',
      de: 'TCMTreino',
      it: 'TCMTreino'
    },
    description: {
      pt: 'Sistema de Gestão de Tesouraria e Garantias desenvolvido em Spring Boot. Plataforma empresarial para gestão financeira, com autenticação JWT, mensageria Kafka e interface moderna.',
      en: 'Treasury & Collateral Management System developed in Spring Boot. Enterprise platform for financial management, with JWT authentication, Kafka messaging and modern interface.',
      fr: 'Système de Gestion de Trésorerie et Garanties développé en Spring Boot. Plateforme d\'entreprise pour la gestion financière, avec authentification JWT, messagerie Kafka et interface moderne.',
      es: 'Sistema de Gestión de Tesorería y Garantías desarrollado en Spring Boot. Plataforma empresarial para gestión financiera, con autenticación JWT, mensajería Kafka e interfaz moderna.',
      de: 'Treasury & Collateral Management System entwickelt in Spring Boot. Unternehmensplattform für Finanzmanagement, mit JWT-Authentifizierung, Kafka-Messaging und moderner Oberfläche.',
      it: 'Sistema di Gestione Tesoreria e Garanzie sviluppato in Spring Boot. Piattaforma aziendale per la gestione finanziaria, con autenticazione JWT, messaggistica Kafka e interfaccia moderna.'
    },
    technologies: ['Spring Boot', 'Java', 'JWT', 'Kafka', 'PostgreSQL', 'React', 'JPA', 'H2', 'Docker', 'Zookeeper', 'JavaScript', 'Material-UI', 'Maven', 'Spring Security'],
    githubUrl: 'https://github.com/Sen2pi/TCMTreino',
    image: '/TCMTreino.png',
    category: 'fullstack',
    status: 'completed'
  },
  {
    id: '15',
    title: {
      pt: 'CuidaHub',
      en: 'CuidaHub',
      fr: 'CuidaHub',
      es: 'CuidaHub',
      de: 'CuidaHub',
      it: 'CuidaHub'
    },
    description: {
      pt: 'Plataforma que conecta cuidadores informais, profissionais de saúde e empresas. Apoio emocional, gestão de cuidados e comunidade.',
      en: 'Platform connecting informal caregivers, health professionals, and companies. Emotional support, care management, and community.',
      fr: 'Plateforme reliant les aidants informels, les professionnels de santé et les entreprises. Soutien émotionnel, gestion des soins et communauté.',
      es: 'Plataforma que conecta a cuidadores informales, profesionales de la salud y empresas. Apoyo emocional, gestión de cuidados y comunidad.',
      de: 'Plattform, die informelle Pflegekräfte, Gesundheitsexperten und Unternehmen verbindet. Emotionale Unterstützung, Pflegemanagement und Gemeinschaft.',
      it: 'Piattaforma che collega caregiver informali, professionisti sanitari e aziende. Supporto emotivo, gestione delle cure e comunità.'
    },
    technologies: ['React', 'Node.js', 'AI', 'HealthTech'],
    liveUrl: 'https://cuidahub.kpsolucoes.pt/',
    image: '/cuidahub.png',
    category: 'fullstack',
    status: 'live'
  }
];
