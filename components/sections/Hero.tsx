import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      // On large screens the hero fills the viewport with content centered
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:flex lg:min-h-svh lg:items-center lg:py-24"
    >
      {/* Decorative background: faint grid + soft blue glow */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -z-10 h-[520px] w-[900px] max-w-[200vw] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/25"
      />

      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Left: intro copy */}
        <div>
          {profile.availability && (
            <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </p>
          )}

          <h1 className="mt-6 animate-fade-up text-4xl font-bold tracking-tight text-balance [animation-delay:100ms] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">{profile.name}</span>
          </h1>

          <p className="mt-4 animate-fade-up text-lg font-semibold text-foreground/90 [animation-delay:200ms] sm:text-xl">
            {profile.role}
            <span className="mx-2 text-muted">—</span>
            <span className="text-accent">{profile.specialties.join(" · ")}</span>
          </p>

          <p className="mt-5 max-w-xl animate-fade-up text-base text-pretty text-muted [animation-delay:300ms] sm:text-lg">
            {profile.tagline}
          </p>

          <p className="mt-4 flex animate-fade-up items-center gap-1.5 text-sm text-muted [animation-delay:350ms]">
            <Icon name="mapPin" className="size-4 text-accent" />
            {profile.location}
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:400ms] sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects">
              View Projects
              <Icon name="arrowRight" className="size-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              <Icon name="mail" className="size-4" />
              Contact Me
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="outline" download>
              <Icon name="download" className="size-4" />
              Download Resume
            </ButtonLink>
          </div>

          {/* Social links */}
          <div className="mt-8 flex animate-fade-up items-center gap-4 text-muted [animation-delay:500ms]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-accent"
            >
              <Icon name="github" className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-accent"
            >
              <Icon name="linkedin" className="size-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="transition-colors hover:text-accent"
            >
              <Icon name="mail" className="size-5" />
            </a>
          </div>
        </div>

        {/* Right: decorative "code card" */}
        <div className="animate-fade-up [animation-delay:300ms]">
          <CodeCard />
        </div>
      </Container>
    </section>
  );
}

/**
 * A small editor-style card that renders a profile object as
 * syntax-highlighted TypeScript. Purely decorative.
 */
function CodeCard() {
  const key = "text-brand-300";
  const str = "text-emerald-300";
  const punct = "text-slate-400";

  const list = (items: readonly string[]) => (
    <>
      <span className={punct}>[</span>
      {items.map((item, i) => (
        <span key={item}>
          <span className={str}>&quot;{item}&quot;</span>
          {i < items.length - 1 && <span className={punct}>, </span>}
        </span>
      ))}
      <span className={punct}>]</span>
    </>
  );

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-3xl bg-linear-to-br from-brand-400/30 to-brand-700/20 blur-2xl"
      />
      <div
        role="img"
        aria-label={`Code snippet describing ${profile.name}, ${profile.role}`}
        className="overflow-hidden rounded-2xl border border-brand-800 bg-brand-950 shadow-2xl shadow-brand-900/30"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-400">developer.ts</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-200 sm:text-sm">
          <code>
            <span className="text-brand-400">const</span> developer{" "}
            <span className={punct}>=</span> <span className={punct}>{"{"}</span>
            {"\n  "}
            <span className={key}>name</span>
            <span className={punct}>: </span>
            <span className={str}>&quot;{profile.name}&quot;</span>
            <span className={punct}>,</span>
            {"\n  "}
            <span className={key}>role</span>
            <span className={punct}>: </span>
            <span className={str}>&quot;{profile.role}&quot;</span>
            <span className={punct}>,</span>
            {"\n  "}
            <span className={key}>stack</span>
            <span className={punct}>: </span>
            {list(profile.specialties)}
            <span className={punct}>,</span>
            {"\n  "}
            <span className={key}>domains</span>
            <span className={punct}>: </span>
            {list(["Fintech", "Web3", "SaaS"])}
            <span className={punct}>,</span>
            {"\n  "}
            <span className={key}>experience</span>
            <span className={punct}>: </span>
            <span className={str}>&quot;2+ years&quot;</span>
            <span className={punct}>,</span>
            {"\n  "}
            <span className={key}>openToWork</span>
            <span className={punct}>: </span>
            <span className="text-amber-300">{String(Boolean(profile.availability))}</span>
            <span className={punct}>,</span>
            {"\n"}
            <span className={punct}>{"};"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
