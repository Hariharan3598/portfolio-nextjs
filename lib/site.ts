import { fullTitle, profile } from "@/data/portfolio";

/**
 * Absolute URL of the deployed site — used for SEO metadata,
 * the sitemap, robots.txt and Open Graph images.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL (set this once you have a custom domain)
 *  2. Vercel's production URL (set automatically on Vercel)
 *  3. localhost for local development
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  title: `${profile.name} — ${fullTitle}`,
  description: `${profile.name} is a ${profile.role} based in ${profile.location}, building production web applications with Next.js, React and TypeScript across fintech, Web3 and B2B SaaS.`,
  keywords: [
    profile.name,
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web3 Developer",
    "MERN Stack",
    "Coimbatore",
    "Portfolio",
  ],
};
