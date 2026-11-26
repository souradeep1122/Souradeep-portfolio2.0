export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  statNumber?: string;
  statLabel?: string;
  highlights: string[];
  tags: string[];
  image: string;
  url?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  bullets: string[];
  tags: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  detail: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  when: string;
  detail: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  type: 'github' | 'linkedin' | 'email';
}

export interface PortfolioData {
  personal: {
    nameFirst: string;
    nameLast: string;
    eyebrow: string;
    backgroundWord: string;
    location: string;
    status: string;
    email: string;
    cvUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    aboutHeadlineLead: string;
    aboutHeadlineLime: string;
    aboutBio1: string;
    aboutBio2: string;
    aboutBullets: string[];
    bento: {
      experience: {
        label: string;
        role: string;
        company: string;
        period: string;
        tags: string[];
      };
      education: {
        label: string;
        degree: string;
        school: string;
        school2: string;
      };
      currentFocus: {
        label: string;
        title: string;
        tags: string[];
      };
      collaboration: {
        label: string;
        title: string;
        cta: string;
      };
    };
  };
  stats: StatItem[];
  marqueeSkills: string[];
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}
