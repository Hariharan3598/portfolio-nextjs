import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & training">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="h-full">
            <article className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-chip text-accent">
                <Icon name="graduation" className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-muted">{item.institution}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-muted">{item.period}</span>
                  {item.note && (
                    <span className="rounded-full bg-chip px-2.5 py-0.5 text-xs font-semibold text-chip-foreground">
                      {item.note}
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
