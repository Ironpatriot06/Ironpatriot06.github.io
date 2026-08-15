import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {profile.name}. Built as a systems-focused software engineering portfolio.</p>
        <p className="font-mono text-xs">requests · spans · systems · AI</p>
      </div>
    </footer>
  );
}
