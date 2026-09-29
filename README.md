# Hariharan S — Developer Portfolio

Personal portfolio for **Hariharan S**, Frontend Developer (Next.js · React · TypeScript).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**. It's a single page that is fully static, responsive (mobile-first) and SEO-ready, with a dark mode toggle.

## Features

- Sticky navbar with smooth-scroll links, active-section highlighting and a mobile menu
- Sections: Hero, About, Skills, Experience, Projects, Education, Contact
- Light/dark theme: follows the system setting by default, remembers the visitor's choice, and doesn't flash the wrong theme on load
- Subtle scroll-reveal and entrance animations that respect `prefers-reduced-motion`
- SEO: metadata, Open Graph/Twitter cards, a generated social share image, `sitemap.xml`, `robots.txt`, and JSON-LD (schema.org `Person`)
- Accessible: semantic landmarks, skip link, visible focus styles and ARIA labels
- No UI or icon libraries. The icons are inline SVG, which keeps the bundle small.

## Getting started

Requirements: **Node.js 20.9+** (Next.js 16's minimum).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command         | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)   |
| `npm run build` | Create a production build          |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Add your resume

Place your resume PDF at:

```
public/Hariharan_S_Resume.pdf
```

The "Download Resume" buttons link to `/Hariharan_S_Resume.pdf`. To use a different file name, change `resumeUrl` in `data/portfolio.ts`.

## Customizing

Most edits only touch **one file**:

| What                                                   | Where                                   |
| ------------------------------------------------------ | --------------------------------------- |
| Name, contact info, tagline, availability pill         | `data/portfolio.ts` → `profile`         |
| About text & stats                                     | `data/portfolio.ts` → `about`           |
| Skills, experience, projects, education                | `data/portfolio.ts`                     |
| Navbar links                                           | `data/portfolio.ts` → `navLinks`        |
| SEO title, description, keywords                       | `lib/site.ts`                           |
| Colors (light & dark)                                  | `app/globals.css` (`:root` and `.dark`) |
| Section order                                          | `app/page.tsx`                          |
| Social share image                                     | `app/opengraph-image.tsx`               |
| Favicon                                                | `app/icon.svg`                          |

Tips:

- **Project links:** add `liveUrl` and/or `repoUrl` to a project in `data/portfolio.ts`, and the card shows "Live site" / "Source" links automatically.
- **Hide the "Open to new opportunities" pill:** set `availability: ""`.
- **Brand color:** the palette (`brand-50` … `brand-950`) is built around `#1F4E79` and defined in the `@theme` block of `app/globals.css`.
- **Real contact form:** the form currently opens the visitor's email app (`mailto:`). To receive messages directly, replace `handleSubmit` in `components/sections/ContactForm.tsx` with a call to Formspree, Resend or a Server Action.

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, theme script, navbar/footer
  page.tsx              Home page: section order + JSON-LD
  globals.css           Tailwind, color tokens, animations
  opengraph-image.tsx   Generated social share image
  sitemap.ts, robots.ts SEO files
  icon.svg              Favicon
components/
  layout/               Navbar, Footer, ThemeToggle
  sections/             Hero, About, Skills, Experience, Projects, Education, Contact
  ui/                   Reusable primitives: Container, Section, Reveal, ButtonLink, Chip
  icons.tsx             Inline SVG icon set
data/
  portfolio.ts          ← all site content
lib/
  site.ts               Site URL + SEO config
  theme-script.ts       Pre-paint theme script
public/                 Static files (put your resume PDF here)
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository. Vercel detects Next.js automatically, so there's nothing to configure.
3. Click **Deploy**.

Or deploy from the command line:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Site URL (for SEO)

The site's absolute URL is used for canonical links, the sitemap and social previews. On Vercel it's detected automatically from the production domain. If you add a **custom domain**, set this environment variable in *Vercel → Project → Settings → Environment Variables*:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Then redeploy.

## License

The code is free to reuse. The content (text, resume and personal details) belongs to Hariharan S.
