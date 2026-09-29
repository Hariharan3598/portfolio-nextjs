"use client";

import type { FormEvent } from "react";
import { Icon } from "@/components/icons";
import { profile } from "@/data/portfolio";

/**
 * Simple contact form that opens the visitor's email client with the
 * message pre-filled (mailto:). No backend required.
 *
 * To send messages directly instead, swap `handleSubmit` for a call to
 * a service such as Formspree, Resend or a Next.js Server Action.
 */
export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "mt-1.5 block w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-lg font-semibold">Send a message</h3>
      <p className="mt-1 text-sm text-muted">
        This opens your email app with the message ready to send.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project or role…"
            className={`${inputClass} resize-y`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md active:scale-[0.98] sm:w-auto"
      >
        Send Message
        <Icon name="send" className="size-4" />
      </button>
    </form>
  );
}
