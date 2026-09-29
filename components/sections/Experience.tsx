import { Icon } from "@/components/icons";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      {/* Vertical timeline — add more entries in data/portfolio.ts */}
      <ol className="relative mx-auto max-w-3xl border-l-2 border-border pl-6 sm:pl-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pb-10 last:pb-0">
            {/* Timeline marker */}
            <span className="absolute top-6 -left-[calc(1.5rem+9px)] flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background ring-4 ring-background sm:-left-[calc(2.5rem+9px)]">
              <span className="size-1.5 rounded-full bg-primary" />
            </span>

            <Reveal>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand-900/5 sm:p-8">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <span className="hidden size-11 shrink-0 items-center justify-center rounded-xl bg-chip text-accent sm:flex">
                      <Icon name="briefcase" className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
                      <p className="font-medium text-accent">{job.company}</p>
                      {job.location && (
                        <p className="mt-1 text-sm text-muted">{job.location}</p>
                      )}
                    </div>
                  </div>
                  <p className="w-fit shrink-0 rounded-full bg-chip px-3 py-1 text-xs font-semibold text-chip-foreground">
                    {job.period}
                  </p>
                </header>

                <p className="mt-5 text-muted">{job.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted sm:text-base">
                      <Icon name="check" className="mt-1 size-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {job.stack.map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
