import { Icon, type IconName } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { fullTitle, navLinks, profile } from "@/data/portfolio";

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Name + title */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-semibold">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                {profile.initials}
              </span>
              {profile.name}
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">{fullTitle}</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-muted transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon name={social.icon} className="size-4.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
