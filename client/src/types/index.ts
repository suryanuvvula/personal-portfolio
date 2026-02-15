export interface Company {
  name: string;
  role: string;
  period: string;
  technologies: string[];
  description: string;
  logo?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string | null;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  other: string[];
}

export interface TechStackItem {
  name: string;
  level: number; // 1-100
  yearsOfExperience: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export interface Social {
  github: string;
  linkedin: string;
  email: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  experience: string;
  email: string;
  location: string;
  bio: string;
  skills: Skills;
  companies: Company[];
  projects: Project[];
  social: Social;
  techStack: TechStackItem[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
