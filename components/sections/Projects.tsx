import { Icon } from "@/components/icons";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects, type Project } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Production work I've shipped"
      description="Client applications built at Sparkout Tech Solutions across real estate SaaS, real-world asset tokenization and institutional custody."
      muted
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-brand-900/10">
      {/* Accent bar that grows on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-600 to-brand-300 transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {project.category}
        </p>

        <h3 className="mt-3 text-xl font-bold">{project.name}</h3>
        <p className="text-sm font-medium text-muted">{project.subtitle}</p>

        <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <p className="mt-5 flex items-center gap-2 text-sm">
          <Icon name="user" className="size-4 text-accent" />
          <span className="text-muted">Role:</span>
          <span className="font-medium">{project.role}</span>
        </p>

        {/* mt-auto pins the stack to the bottom so cards line up */}
        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-2" aria-label={`${project.name} tech stack`}>
            {project.stack.map((tech) => (
              <li key={tech}>
                <Chip>{tech}</Chip>
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-5 flex gap-4 border-t border-border pt-4 text-sm font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  Live site <Icon name="arrowUpRight" className="size-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  <Icon name="github" className="size-4" /> Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
