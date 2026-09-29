import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-sm shadow-brand-900/10 hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5",
  outline:
    "border border-border bg-card text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5",
  ghost: "text-foreground hover:bg-chip hover:text-accent",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

/**
 * A link styled as a button. Uses a plain <a> because every button on
 * this site is either an in-page anchor (#section), a file download,
 * or an external link.
 */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
