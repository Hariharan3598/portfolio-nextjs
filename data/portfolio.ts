/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT
 * ─────────────────────────────────────────────────────────────
 *  Everything you see on the site lives in this file.
 *  To update text, links, skills, projects, etc. — edit here.
 *  Components read from these objects, so you rarely need to
 *  touch the JSX.
 * ─────────────────────────────────────────────────────────────
 */

import type { IconName } from "@/components/icons";

/* ── Types ─────────────────────────────────────────────────── */

export type NavLink = { id: string; label: string };

export type SkillGroup = {
  title: string;
  icon: IconName;
  skills: string[];
  /** Optional Tailwind grid-span classes to balance the skills grid. */
  layout?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Project = {
  name: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  stack: string[];
  /** Optional links — leave undefined for private/client work. */
  liveUrl?: string;
  repoUrl?: string;
};

export type Education = {
  title: string;
  institution: string;
  period: string;
  note?: string;
};

/* ── Profile ───────────────────────────────────────────────── */

export const profile = {
  name: "Hariharan S",
  firstName: "Hariharan",
  initials: "HS",
  role: "Frontend Developer",
  specialties: ["Next.js", "React", "TypeScript"],
  tagline:
    "I build fast, reliable, production-grade web apps — from multi-tenant SaaS dashboards to Web3 fintech platforms.",
  /** Small status pill in the hero. Set to "" to hide it. */
  availability: "Open to new opportunities",
  location: "Coimbatore, Tamil Nadu, India",
  email: "hariharan030598@gmail.com",
  phone: "+91 89035 56971",
  /** Phone number in E.164 format for the tel: link. */
  phoneHref: "+918903556971",
  linkedin: "https://www.linkedin.com/in/hariharan030598",
  linkedinLabel: "linkedin.com/in/hariharan030598",
  github: "https://github.com/Hariharan3598",
  githubLabel: "github.com/Hariharan3598",
  /**
   * Resume file served from /public.
   * Drop your PDF at: public/Hariharan_S_Resume.pdf
   */
  resumeUrl: "/Hariharan_S_Resume.pdf",
} as const;

/** "Frontend Developer — Next.js · React · TypeScript" */
export const fullTitle = `${profile.role} — ${profile.specialties.join(" · ")}`;

/* ── Navigation ────────────────────────────────────────────── */
// `id` must match the section's id attribute.

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

/* ── About ─────────────────────────────────────────────────── */

export const about = {
  paragraphs: [
    "I'm a frontend-focused software developer with 2+ years of experience building production web applications using Next.js, React, and TypeScript across fintech, Web3, and B2B SaaS.",
    "My background is in mechanical engineering — a path that shaped how I work today: structured, detail-oriented, and focused on systems that hold up in the real world. I'm also comfortable across the full stack with the MERN ecosystem.",
    "At Sparkout Tech Solutions, I was recognized with 4 quarterly Best Employee awards.",
  ],
  stats: [
    { value: "2+", label: "Years building for production" },
    { value: "3", label: "Production apps shipped" },
    { value: "4×", label: "Best Employee awards" },
  ],
};

/* ── Skills ────────────────────────────────────────────────── */

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Radix UI",
    ],
    layout: "sm:col-span-2",
  },
  {
    title: "Full Stack (MERN)",
    icon: "database",
    skills: ["MongoDB", "Express.js", "Node.js", "REST APIs"],
  },
  {
    title: "Web3 / Blockchain",
    icon: "link",
    skills: ["wagmi/viem (Ethereum)", "Fireblocks SDK", "Web3 integration"],
  },
  {
    title: "Backend & Realtime",
    icon: "zap",
    skills: ["Socket.io", "JWT auth", "NextAuth", "React Query"],
  },
  {
    title: "Payments & Services",
    icon: "card",
    skills: ["Stripe", "GoCardless", "IPFS (Pinata)", "AWS S3", "Mapbox"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "AI-Assisted Development",
    icon: "sparkles",
    skills: ["Claude Code", "Cursor", "GitHub Copilot", "Codex"],
    layout: "lg:col-span-2",
  },
];

/* ── Experience ────────────────────────────────────────────── */

export const experience: Experience[] = [
  {
    role: "Junior Software Developer",
    company: "Sparkout Tech Solutions Inc.",
    period: "Jul 2024 – Jul 2026",
    location: "Coimbatore, India",
    summary:
      "Developed 3 production applications across fintech, Web3, and B2B SaaS as part of the React team.",
    highlights: [
      "Built with Next.js 15, React 19, TypeScript, Tailwind CSS and Radix UI.",
      "Built multi-tenant, role-based dashboards with JWT-protected routes.",
      "Delivered real-time features — live updates and notifications — via Socket.io.",
      "Integrated payment, blockchain, and third-party services (Stripe, GoCardless, wagmi/viem, Fireblocks, AWS S3, IPFS, Mapbox).",
      "Recognized with 4 quarterly Best Employee awards.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Socket.io",
    ],
  },
];

/* ── Projects ──────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    name: "Unifi",
    subtitle: "Unifi Property",
    category: "B2B Real Estate SaaS",
    description:
      "SaaS platform for the Australian property market. Built property and listing management, real-time reservations, and role-based dashboards for Agents, Channel Partners, and Super Admins on a multi-tenant architecture. Implemented PDF/contract handling, analytics exports, real-time notifications, and payment workflows.",
    role: "Frontend Developer",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind + Radix UI",
      "Socket.io",
      "Stripe",
      "GoCardless",
    ],
  },
  {
    name: "RWA",
    subtitle: "Real-World Assets Platform",
    category: "Web3 / Fintech",
    description:
      "Delivered property tokenization, wallet-based signature auth, investment approval and KYC workflows, and portfolio dashboards across a 3-app architecture.",
    role: "Frontend Developer",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "wagmi/viem",
      "NextAuth",
      "React Query",
      "IPFS (Pinata)",
      "AWS S3",
      "Mapbox",
    ],
  },
  {
    name: "Archax",
    subtitle: "Institutional Digital-Asset Custody",
    category: "Web3 / Fintech",
    description:
      "Built real-time transaction tracking, multi-org asset vaults, role-based access, wallet integration (MetaMask + Azure MSAL OAuth), and JWT auth in a multi-tenant, 3-portal system.",
    role: "Frontend Developer",
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind + Radix UI",
      "wagmi/viem",
      "Fireblocks SDK",
      "Socket.io",
    ],
  },
];

/* ── Education ─────────────────────────────────────────────── */

export const education: Education[] = [
  {
    title: "B.E. Mechanical Engineering",
    institution: "KIT – Kalaignar Karunanidhi Institute of Technology",
    period: "Aug 2015 – May 2019",
    note: "First Class",
  },
  {
    title: "Full Stack Web Development",
    institution: "Skill Safari",
    period: "Aug 2023 – Feb 2024",
  },
];
