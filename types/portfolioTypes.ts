export interface AboutData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  bio: string;
  email: string;
  profileImage: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
  resumeLink: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
  skills: string[];
}

// Project
export interface ProjectData {
  id: number;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  image: string;
  github?: string;
  demoLink?: string;
}

// Experience
export interface ExperienceData {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  achievements: string[];
  technologies: string[];
}

// Education
export interface EducationData {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  gpa: string;
  relevantCourses: string[];
}

// TechnicalSkills
export interface TechnicalSkillData {
  id: number;
  category: string;
  skills: string[];
  icon: string;
}

// Contact
export interface ContactData {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

// Complete Portfolio Data
export interface PortfolioData {
  about: AboutData;
  projects: ProjectData[];
  experiences: ExperienceData[];
  education: EducationData[];
  technicalSkills: TechnicalSkillData[];
  contact: ContactData;
}
