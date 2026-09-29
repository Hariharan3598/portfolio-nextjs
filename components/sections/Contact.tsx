import { Icon, type IconName } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/portfolio";
import { ContactForm } from "./ContactForm";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: IconName;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}`, icon: "phone" },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    icon: "github",
    external: true,
  },
  { label: "Location", value: profile.location, icon: "mapPin" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Have a role, a project or just a question? My inbox is always open — I'll get back to you as soon as I can."
      muted
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        {/* Contact details */}
        <Reveal>
          <ul className="space-y-3">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-chip text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <span className="block truncate font-medium">{item.value}</span>
                  </span>
                </>
              );

              const cardClass =
                "group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all";

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={`${cardClass} hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
