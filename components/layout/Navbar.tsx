"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { navLinks, profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

/* ── Scroll position as an external store (adds navbar shadow) ── */
function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const getScrolled = () => window.scrollY > 8;
const getServerScrolled = () => false;

/** Tracks which section is currently in the middle of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band across the middle of the screen decides the active section
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((link) => link.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolled, getServerScrolled);
  const active = useActiveSection(sectionIds);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <nav aria-label="Main" className="flex h-16 items-center justify-between">
          {/* Logo / name */}
          <a href="#home" className="group flex items-center gap-2.5 font-semibold">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white transition-transform group-hover:scale-105">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                    active === link.id ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                      active === link.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              download
              className="ml-2 hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover lg:inline-flex"
            >
              <Icon name="download" className="size-4" />
              Resume
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-chip md:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`grid transition-all duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="pb-4">
            <ul className="flex flex-col gap-1 border-t border-border pt-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-chip ${
                      active === link.id ? "bg-chip text-accent" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.resumeUrl}
                  download
                  tabIndex={menuOpen ? 0 : -1}
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white"
                >
                  <Icon name="download" className="size-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </header>
  );
}
