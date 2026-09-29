import type { ReactNode } from "react";

/** Small pill used for skills and tech-stack tags. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-chip px-2.5 py-1 text-xs font-medium text-chip-foreground">
      {children}
    </span>
  );
}
