"use client";

import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const socialDisabled = !profile.github && !profile.linkedin;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="#" className="font-mono text-sm font-semibold text-white">
          Ratish Kapoor
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted transition hover:bg-white/[0.04] hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <SocialLink href={profile.github} label="GitHub">
            <Github className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={profile.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </SocialLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white/[0.04] text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={cn("border-t border-line bg-ink px-5 py-4 md:hidden", open ? "block" : "hidden")}>
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted hover:bg-white/[0.04] hover:text-white">
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-2 border-t border-line pt-4">
            <SocialLink href={profile.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
          </div>
          {socialDisabled ? <p className="px-3 pt-2 text-xs text-muted">Social URLs were not included in the provided source material.</p> : null}
        </div>
      </div>
    </header>
  );
}

function SocialLink({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
  if (!href) {
    return (
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white/[0.03] text-muted/60"
        aria-label={`${label} unavailable`}
        title={`${label} URL not available in provided source material`}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white/[0.04] text-muted transition hover:border-white/20 hover:text-white"
      aria-label={label}
    >
      {children}
    </Link>
  );
}
