"use client";

import { Icon } from "@/components/icons";

/**
 * Toggles the `.dark` class on <html> and remembers the choice.
 * The icon swap is pure CSS (dark:hidden / dark:block), so there is
 * no React state and no hydration mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    root.style.colorScheme = isDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode) — the toggle still works.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-chip hover:text-accent ${className}`}
    >
      <Icon name="moon" className="size-5 dark:hidden" />
      <Icon name="sun" className="hidden size-5 dark:block" />
    </button>
  );
}
