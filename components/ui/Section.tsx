import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type SectionProps = {
  /** Anchor id used by the navbar (e.g. "about" → #about). */
  id: string;
  /** Small label above the title. */
  eyebrow: string;
  title: string;
  description?: string;
  /** Use the alternate (tinted) background to separate sections. */
  muted?: boolean;
  children: ReactNode;
};

/** Standard page section with a consistent, animated heading. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  muted = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      // scroll-mt keeps the heading clear of the sticky navbar
      className={`scroll-mt-16 py-20 sm:py-28 ${muted ? "bg-surface" : ""}`}
    >
      <Container>
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-pretty text-muted sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
