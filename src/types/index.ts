export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  category: 'web' | 'mobile' | 'fullstack'| 'game';
  status: 'live' | 'development' | 'testing';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'database';
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}
