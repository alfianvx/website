export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-09-12" */
  pubDate: string;
  content: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  /** e.g. "Jan 2024 - Present" */
  period: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  period: string;
  role: string;
  tech: string[];
  highlights: string[];
}
