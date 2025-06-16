export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools';
  icon: string;
}

export interface Project {
  id: string;
  title: {
    pt: string;
    en: string;
    fr: string;
    es: string;
    de: string;
    it: string;
  };
  description: {
    pt: string;
    en: string;
    fr: string;
    es: string;
    de: string;
    it: string;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  category: 'web' | 'mobile' | 'fullstack' | 'game';
  status: 'live' | 'development' | 'testing';
}

export interface Experience {
  id: string;
  title: {
    pt: string;
    en: string;
    fr: string;
    es: string;
    de: string;
    it: string;
  };
  company: string;
  period: string | {
    pt: string;
    en: string;
    fr: string;
    es: string;
    de: string;
    it: string;
  };
  current?: boolean;
  description: {
    pt: string[];
    en: string[];
    fr: string[];
    es: string[];
    de: string[];
    it: string[];
  };
  technologies: string[];
  achievements?: string[]; // Adicionado este campo
}
