import { Icon } from "@/components/icons";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools & technologies I work with"
      description="A frontend core, backed by full-stack, Web3 and real-time experience from shipping production apps."
      muted
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 80} className={group.layout ?? ""}>
            <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-brand-900/5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-chip text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={group.icon} className="size-5" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Chip>{skill}</Chip>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
