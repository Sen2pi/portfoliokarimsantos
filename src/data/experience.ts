import type { Experience } from '../types/index';

export const experience: Experience[] = [
  {
    id: '1',
    title: {
      pt: 'Desenvolvedor Full Stack',
      en: 'Full Stack Developer',
      fr: 'Développeur Full Stack',
      es: 'Desarrollador Full Stack',
      de: 'Full Stack Entwickler',
      it: 'Sviluppatore Full Stack'
    },
    company: 'Randstad Digital',
    period: {
      pt: 'agosto 2025 - Presente',
      en: 'August 2025 - Present',
      fr: 'août 2025 - Présent',
      es: 'agosto 2025 - Presente',
      de: 'August 2025 - Gegenwart',
      it: 'agosto 2025 - Presente'
    },
    current: true,
    description: {
      pt: [
        'Fullstack Developer na Randstad Digital para o Setor Financeiro e Seguradora da Société Générale Assurances',
        'Desenvolvimento e manutenção em GraphTalk AIA para soluções de seguros',
        'Colaboração com equipas funcionais e técnicas em ambiente internacional',
        'Práticas ágeis, documentação funcional e suporte a produção'
      ],
      en: [
        'Fullstack Developer at Randstad Digital for the Financial and Insurance Sector of Société Générale Assurances',
        'Development and maintenance in GraphTalk AIA for insurance solutions',
        'Collaboration with functional and technical teams in an international environment',
        'Agile practices, functional documentation and production support'
      ],
      fr: [
        'Développeur Fullstack chez Randstad Digital pour le secteur financier et assurance de Société Générale Assurances',
        'Développement et maintenance en GraphTalk AIA pour des solutions d’assurance',
        'Collaboration avec des équipes fonctionnelles et techniques dans un environnement international',
        'Pratiques agiles, documentation fonctionnelle et support à la production'
      ],
      es: [
        'Desarrollador Fullstack en Randstad Digital para el sector financiero y asegurador de Société Générale Assurances',
        'Desarrollo y mantenimiento en GraphTalk AIA para soluciones de seguros',
        'Colaboración con equipos funcionales y técnicos en entorno internacional',
        'Prácticas ágiles, documentación funcional y soporte a producción'
      ],
      de: [
        'Fullstack-Entwickler bei Randstad Digital für den Finanz- und Versicherungssektor von Société Générale Assurances',
        'Entwicklung und Wartung in GraphTalk AIA für Versicherungslösungen',
        'Zusammenarbeit mit funktionalen und technischen Teams in internationalem Umfeld',
        'Agile Praktiken, funktionale Dokumentation und Produktionssupport'
      ],
      it: [
        'Sviluppatore Fullstack presso Randstad Digital per il settore finanziario e assicurativo di Société Générale Assurances',
        'Sviluppo e manutenzione in GraphTalk AIA per soluzioni assicurative',
        'Collaborazione con team funzionali e tecnici in ambiente internazionale',
        'Pratiche agili, documentazione funzionale e supporto alla produzione'
      ]
    },
    technologies: ['GraphTalk AIA', 'Insurance', 'Financial Sector', 'Agile', 'Git', 'Jira']
  },
  {
    id: '2',
    title: {
      pt: 'Gerente Técnico',
      en: 'Technical Manager',
      fr: 'Manager Technique',
      es: 'Gerente Técnico',
      de: 'Technischer Manager',
      it: 'Manager Tecnico'
    },
    company: 'KPS Portugal',
    period: {
      pt: 'março 2016 - março 2021',
      en: 'March 2016 - March 2021',
      fr: 'mars 2016 - mars 2021',
      es: 'marzo 2016 - marzo 2021',
      de: 'März 2016 - März 2021',
      it: 'marzo 2016 - marzo 2021'
    },
    current: false,
    description: {
      pt: [
        'Liderança de equipas multidisciplinares e gestão operacional de contact center com até 50 colaboradores',
        'Desenvolvimento de plataforma própria integrando gestão de empresas de reboques e contact center',
        'Otimização de fluxos de trabalho e redução de custos operacionais',
        'Implementação de soluções web e mobile em Django e React Native',
        'Integração de sistemas de telefonia e automação de processos',
        'Gestão de infraestrutura Linux e redes, garantindo alta disponibilidade e segurança'
      ],
      en: [
        'Leadership of multidisciplinary teams and operational management of contact center with up to 50 employees',
        'Development of proprietary platform integrating management of towing companies and contact center',
        'Workflow optimization and operational cost reduction',
        'Implementation of web and mobile solutions in Django and React Native',
        'Integration of telephony systems and process automation',
        'Management of Linux infrastructure and networks, ensuring high availability and security'
      ],
      fr: [
        "Gestion d'équipes multidisciplinaires et gestion opérationnelle de centre de contact avec jusqu'à 50 collaborateurs",
        "Développement d'une plateforme propriétaire intégrant la gestion des entreprises de remorquage et centre de contact",
        "Optimisation des flux de travail et réduction des coûts opérationnels",
        'Mise en œuvre de solutions web et mobiles en Django et React Native',
        'Intégration des systèmes de téléphonie et automatisation des processus',
        "Gestion de l'infrastructure Linux et des réseaux, garantissant une haute disponibilité et sécurité"
      ],
      es: [
        'Liderazgo de equipos multidisciplinarios y gestión operativa de centro de contacto con hasta 50 colaboradores',
        'Desarrollo de plataforma propia integrando gestión de empresas de remolque y centro de contacto',
        'Optimización de flujos de trabajo y reducción de costos operativos',
        'Implementación de soluciones web y móviles en Django y React Native',
        'Integración de sistemas de telefonía y automatización de procesos',
        'Gestión de infraestructura Linux y redes, garantizando alta disponibilidad y seguridad'
      ],
      de: [
        'Führung multidisziplinärer Teams und operative Verwaltung eines Contact Centers mit bis zu 50 Mitarbeitern',
        'Entwicklung einer proprietären Plattform zur Verwaltung von Abschleppunternehmen und Contact Center',
        'Workflow-Optimierung und Reduzierung der Betriebskosten',
        'Implementierung von Web- und Mobil-Lösungen in Django und React Native',
        'Integration von Telefonsystemen und Prozessautomatisierung',
        'Verwaltung der Linux-Infrastruktur und Netzwerke zur Gewährleistung hoher Verfügbarkeit und Sicherheit'
      ],
      it: [
        'Leadership di team multidisciplinari e gestione operativa di contact center con fino a 50 collaboratori',
        'Sviluppo di piattaforma proprietaria integrando la gestione di aziende di traino e contact center',
        'Ottimizzazione dei flussi di lavoro e riduzione dei costi operativi',
        'Implementazione di soluzioni web e mobile in Django e React Native',
        'Integrazione di sistemi telefonici e automazione dei processi',
        "Gestione dell'infrastruttura Linux e delle reti, garantendo alta disponibilità e sicurezza"
      ]
    },
    technologies: ['React', 'Django', 'React Native', 'Linux', 'MySQL', 'Python', 'API', 'NGINX', 'Docker', 'Git', 'Jira', 'XLDeploy', 'Spring Boot', 'Java']
  },
  {
    id: '3',
    title: {
      pt: 'Engenheiro de Suporte Aplicacional',
      en: 'Application Support Engineer',
      fr: 'Ingénieur Support Applicatif',
      es: 'Ingeniero de Soporte de Aplicaciones',
      de: 'Anwendungs-Support-Ingenieur',
      it: 'Ingegnere di Supporto Applicativo'
    },
    company: 'Natixis',
    period: '2022',
    description: {
      pt: [
        'Suporte a aplicações bancárias críticas',
        'Monitorização de processos automatizados (Java/Shell Script)',
        'Troubleshooting e documentação de sistemas',
        'Colaboração com equipas internacionais',
        'Gestão de tickets e melhoria contínua de processos'
      ],
      en: [
        'Support for critical banking applications',
        'Monitoring of automated processes (Java/Shell Script)',
        'Troubleshooting and system documentation',
        'Collaboration with international teams',
        'Ticket management and continuous process improvement'
      ],
      fr: [
        'Support des applications bancaires critiques',
        'Surveillance des processus automatisés (Java/Shell Script)',
        'Dépannage et documentation des systèmes',
        'Collaboration avec des équipes internationales',
        'Gestion des tickets et amélioration continue des processus'
      ],
      es: [
        'Soporte a aplicaciones bancarias críticas',
        'Monitoreo de procesos automatizados (Java/Shell Script)',
        'Solución de problemas y documentación de sistemas',
        'Colaboración con equipos internacionales',
        'Gestión de tickets y mejora continua de procesos'
      ],
      de: [
        'Support für kritische Bankanwendungen',
        'Überwachung automatisierter Prozesse (Java/Shell Script)',
        'Fehlerbehebung und Systemdokumentation',
        'Zusammenarbeit mit internationalen Teams',
        'Ticket-Management und kontinuierliche Prozessverbesserung'
      ],
      it: [
        'Supporto per applicazioni bancarie critiche',
        'Monitoraggio di processi automatizzati (Java/Shell Script)',
        'Risoluzione dei problemi e documentazione dei sistemi',
        'Collaborazione con team internazionali',
        'Gestione dei ticket e miglioramento continuo dei processi'
      ]
    },
    technologies: ['Java', 'Shell Script', 'Linux', 'Git', 'Jira', 'Docker', 'XLDeploy']
  },
  {
    id: '4',
    title: {
      pt: 'Especialista de Suporte Apple',
      en: 'Apple Support Specialist',
      fr: 'Spécialiste Support Apple',
      es: 'Especialista de Soporte Apple',
      de: 'Apple Support Spezialist',
      it: 'Specialista Supporto Apple'
    },
    company: 'Apple',
    period: {
      pt: '2018 - 2020',
      en: '2018 - 2020',
      fr: '2018 - 2020',
      es: '2018 - 2020',
      de: '2018 - 2020',
      it: '2018 - 2020'
    },
    current: false,
    description: {
      pt: [
        'Suporte técnico especializado para produtos Apple (iPhone, iPad, Mac, Apple Watch, AirPods)',
        'Diagnóstico e resolução de problemas de hardware e software em dispositivos iOS e macOS',
        'Assistência a clientes empresariais e consumidores finais em ambiente multilingue',
        'Formação e mentoria de novos especialistas de suporte técnico',
        'Colaboração com equipas de engenharia para identificação e resolução de bugs críticos',
        'Desenvolvimento de documentação técnica e guias de troubleshooting',
        'Suporte remoto e presencial para configuração e otimização de dispositivos Apple',
        'Gestão de casos complexos e escalação para equipas especializadas quando necessário'
      ],
      en: [
        'Specialized technical support for Apple products (iPhone, iPad, Mac, Apple Watch, AirPods)',
        'Diagnosis and resolution of hardware and software issues on iOS and macOS devices',
        'Assistance to business customers and end consumers in a multilingual environment',
        'Training and mentoring of new technical support specialists',
        'Collaboration with engineering teams for identification and resolution of critical bugs',
        'Development of technical documentation and troubleshooting guides',
        'Remote and on-site support for Apple device configuration and optimization',
        'Management of complex cases and escalation to specialized teams when necessary'
      ],
      fr: [
        'Support technique spécialisé pour les produits Apple (iPhone, iPad, Mac, Apple Watch, AirPods)',
        'Diagnostic et résolution de problèmes matériels et logiciels sur les appareils iOS et macOS',
        'Assistance aux clients professionnels et consommateurs finaux dans un environnement multilingue',
        'Formation et mentorat de nouveaux spécialistes du support technique',
        'Collaboration avec les équipes d\'ingénierie pour l\'identification et la résolution de bugs critiques',
        'Développement de documentation technique et guides de dépannage',
        'Support à distance et sur site pour la configuration et l\'optimisation des appareils Apple',
        'Gestion de cas complexes et escalade vers des équipes spécialisées si nécessaire'
      ],
      es: [
        'Soporte técnico especializado para productos Apple (iPhone, iPad, Mac, Apple Watch, AirPods)',
        'Diagnóstico y resolución de problemas de hardware y software en dispositivos iOS y macOS',
        'Asistencia a clientes empresariales y consumidores finales en ambiente multilingüe',
        'Formación y mentoría de nuevos especialistas de soporte técnico',
        'Colaboración con equipos de ingeniería para identificación y resolución de bugs críticos',
        'Desarrollo de documentación técnica y guías de troubleshooting',
        'Soporte remoto y presencial para configuración y optimización de dispositivos Apple',
        'Gestión de casos complejos y escalación a equipos especializados cuando sea necesario'
      ],
      de: [
        'Spezialisierter technischer Support für Apple-Produkte (iPhone, iPad, Mac, Apple Watch, AirPods)',
        'Diagnose und Lösung von Hardware- und Software-Problemen auf iOS- und macOS-Geräten',
        'Unterstützung von Geschäftskunden und Endverbrauchern in einer mehrsprachigen Umgebung',
        'Schulung und Mentoring neuer technischer Support-Spezialisten',
        'Zusammenarbeit mit Engineering-Teams zur Identifizierung und Lösung kritischer Bugs',
        'Entwicklung technischer Dokumentation und Troubleshooting-Leitfäden',
        'Remote- und Vor-Ort-Support für Apple-Gerätekonfiguration und -optimierung',
        'Verwaltung komplexer Fälle und Eskalation an spezialisierte Teams bei Bedarf'
      ],
      it: [
        'Supporto tecnico specializzato per prodotti Apple (iPhone, iPad, Mac, Apple Watch, AirPods)',
        'Diagnosi e risoluzione di problemi hardware e software su dispositivi iOS e macOS',
        'Assistenza a clienti aziendali e consumatori finali in ambiente multilingue',
        'Formazione e mentoring di nuovi specialisti di supporto tecnico',
        'Collaborazione con team di ingegneria per identificazione e risoluzione di bug critici',
        'Sviluppo di documentazione tecnica e guide di troubleshooting',
        'Supporto remoto e in loco per configurazione e ottimizzazione di dispositivi Apple',
        'Gestione di casi complessi ed escalation a team specializzati quando necessario'
      ]
    },
    technologies: ['iOS', 'macOS', 'Apple Hardware', 'Troubleshooting', 'Technical Support', 'Customer Service', 'Remote Support', 'Hardware Diagnostics', 'Software Configuration']
  },
  {
    id: '5',
    title: {
      pt: 'Coordenador Operacional',
      en: 'Operations Coordinator',
      fr: 'Coordinateur Opérationnel',
      es: 'Coordinador Operativo',
      de: 'Betriebskoordinator',
      it: 'Coordinatore Operativo'
    },
    company: 'Randstad',
    period: '2014 - 2016',
    description: {
      pt: [
        'Coordenação de equipas e controlo de KPIs financeiros',
        'Gestão de produtividade e otimização de processos',
        'Análise de métricas e relatórios de performance'
      ],
      en: [
        'Team coordination and financial KPI control',
        'Productivity management and process optimization',
        'Metrics analysis and performance reporting'
      ],
      fr: [
        "Coordination d'équipes et contrôle des KPI financiers",
        'Gestion de la productivité et optimisation des processus',
        'Analyse des métriques et rapports de performance'
      ],
      es: [
        'Coordinación de equipos y control de KPIs financieros',
        'Gestión de productividad y optimización de procesos',
        'Análisis de métricas e informes de rendimiento'
      ],
      de: [
        'Teamkoordination und Kontrolle der finanziellen KPIs',
        'Produktivitätsmanagement und Prozessoptimierung',
        'Metriken-Analyse und Leistungsberichterstattung'
      ],
      it: [
        'Coordinamento del team e controllo dei KPI finanziari',
        'Gestione della produttività e ottimizzazione dei processi',
        'Analisi delle metriche e reportistica delle performance'
      ]
    },
    technologies: ['Gestão', 'KPIs', 'Produtividade', 'Análise de Dados']
  },
  {
    id: '6',
    title: {
      pt: 'Operador de CallCenter',
      en: 'CallCenter Operator',
      fr: 'Opérateur de Centre d\'Appels',
      es: 'Operador de Centro de Llamadas',
      de: 'CallCenter-Operator',
      it: 'Operatore di CallCenter'
    },
    company: 'AcordoTango',
    period: '2012 - 2014',
    description: {
      pt: [
        'Gestão de chamadas e organização logística de frotas de camiões de reboques',
        'Utilização de mapas e cartografia para otimização de rotas',
        'Trabalho com sistemas baseados na localização',
        'Suporte iOS e MacOS e produtos Apple T1/T2'
      ],
      en: [
        'Call management and logistical organization of towing truck fleets',
        'Use of maps and cartography for route optimization',
        'Work with location-based systems',
        'iOS and MacOS support and Apple T1/T2 products'
      ],
      fr: [
        'Gestion des appels et organisation logistique des flottes de camions de remorquage',
        'Utilisation de cartes et cartographie pour l\'optimisation des itinéraires',
        'Travail avec des systèmes basés sur la localisation',
        'Support iOS et MacOS et produits Apple T1/T2'
      ],
      es: [
        'Gestión de llamadas y organización logística de flotas de camiones de remolque',
        'Uso de mapas y cartografía para optimización de rutas',
        'Trabajo con sistemas basados en ubicación',
        'Soporte iOS y MacOS y productos Apple T1/T2'
      ],
      de: [
        'Anrufverwaltung und logistische Organisation von Abschleppwagen-Flotten',
        'Verwendung von Karten und Kartografie für Routenoptimierung',
        'Arbeit mit standortbasierten Systemen',
        'iOS und MacOS Support und Apple T1/T2 Produkte'
      ],
      it: [
        'Gestione delle chiamate e organizzazione logistica delle flotte di camion da traino',
        'Uso di mappe e cartografia per l\'ottimizzazione dei percorsi',
        'Lavoro con sistemi basati sulla localizzazione',
        'Supporto iOS e MacOS e prodotti Apple T1/T2'
      ]
    },
    technologies: ['Sistemas de Localização', 'Cartografia', 'iOS', 'MacOS', 'Apple Support']
  }
];
