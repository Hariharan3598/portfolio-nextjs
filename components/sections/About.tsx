import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { about, profile } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineer by training, developer by craft">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        {/* Bio */}
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty">
              {paragraph}
            </p>
          ))}

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
            <li className="flex items-center gap-2">
              <Icon name="mapPin" className="size-4 text-accent" />
              {profile.location}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="size-4 text-accent" />
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
            </li>
          </ul>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-1">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-brand-900/5 sm:p-6 lg:flex lg:items-center lg:gap-5 lg:text-left">
                <p className="text-3xl font-bold text-accent sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm lg:mt-0">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
