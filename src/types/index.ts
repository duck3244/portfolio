// src/types/index.ts
export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    github: string;
    linkedin: string;
  }
  
  export interface Education {
    school: string;
    degree: string;
    period: string;
    description: string;
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
  
  export interface Experience {
    company: string;
    position: string;
    period: string;
    achievements: string[];
  }