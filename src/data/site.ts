import type { NavItem, SocialLink } from "../types";

export const profile = {
  name: "Gus Jabung Al Fiansyah",
  greeting: "Hola, I'm Gus Jabung!",
  role: "Fullstack Developer",
  intro: [
    "I'm a software engineer with 3 years of experience building end-to-end production systems, from user interfaces down to the APIs behind them.",
    "I start from the problem, figuring out what actually needs solving, weighing the trade-offs, and shipping something that holds up in production.",
    "Here I document my work, experiments, and things I learn along the way. Thanks for dropping by.",
  ],
  defaultDescription:
    "Portfolio of Gus Jabung Al Fiansyah — a software engineer building end-to-end scalable systems with React, Python, and Java Spring.",
} as const;

export const navItems: NavItem[] = [
  { label: "blog", href: "/blog" },
  { label: "work", href: "/work" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "/#lets-connect" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/alfianvx" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gusjabungaf" },
  {
    label: "gusjabungaf@gmail.com",
    href: "mailto:gusjabungaf@gmail.com",
  },
];

export const connectMessage =
  "If you want to get in touch about a project or an opportunity, or just to say hi, reach out through any of the links below.";
