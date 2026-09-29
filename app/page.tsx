import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { experience, profile, skillGroups } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

/**
 * Structured data (schema.org Person) — helps search engines show
 * rich results for your name.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  worksFor: experience[0] && { "@type": "Organization", name: experience[0].company },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: skillGroups.flatMap((group) => group.skills),
};

/** Section order on the page — reorder or remove components here. */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
