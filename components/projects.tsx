import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { ApolloArchitecture } from "@/components/apollo-architecture";
import { TraceVisualization } from "@/components/trace-visualization";

export function Projects() {
  const [apollo, ...rest] = projects;

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Systems, AI Products, and Developer Infrastructure"
      description="Apollo is presented as the flagship because it demonstrates instrumentation, backend services, event ingestion, persistence, UI, testing, and debugging workflows in one system."
      className="border-y border-line bg-white/[0.025]"
    >
      <ApolloFlagship project={apollo} />

      <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View more projects on Ratish Kapoor's GitHub profile"
        className="group mt-6 flex flex-col gap-4 rounded-lg border border-line bg-panel p-5 shadow-soft transition hover:border-accent/50 hover:bg-white/[0.055] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
            <Github className="h-5 w-5" aria-hidden />
          </span>
          <span>
            <span className="block text-lg font-semibold text-white">Other projects are available on GitHub</span>
            <span className="mt-1 block text-sm leading-6 text-muted">Browse more repositories, experiments, and source code on the full GitHub profile.</span>
          </span>
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-sm text-accent">
          Open GitHub
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </a>
    </Section>
  );
}

function ApolloFlagship({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="rounded-lg border border-line bg-panel p-5 shadow-soft sm:p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-5 inline-flex rounded-md border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">{project.priority}</div>
          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h3>
          <p className="mt-2 text-lg text-slate-300">{project.subtitle}</p>
          <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <MiniBlock title="Problem" text={project.problem} />
            <MiniBlock title="Solution" text={project.solution} />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border border-line bg-black/20 px-2 py-1 font-mono text-[11px] text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <ApolloArchitecture />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <TraceVisualization />
        <div className="rounded-lg border border-line bg-ink p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Engineering depth</p>
          <ul className="mt-5 space-y-3">
            {project.engineering.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <details className="group self-start rounded-lg border border-line bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.055] open:border-accent/35 open:bg-white/[0.045]">
      <summary className="list-none [&::-webkit-details-marker]:hidden">
        <div className="flex cursor-pointer items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-accent">{project.priority}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{project.subtitle}</p>
          </div>
          <ProjectGithubArrow title={project.title} href={project.githubUrl} />
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-accent/85">
          <span className="group-open:hidden">Expand details</span>
          <span className="hidden group-open:inline">Collapse details</span>
        </p>
      </summary>

      <div className="mt-5 border-t border-line pt-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <MiniBlock title="Problem" text={project.problem} />
          <MiniBlock title="Solution" text={project.solution} />
        </div>
        <Pipeline items={project.flow} className="mt-5" />
        <div className="mt-5 rounded-md border border-line bg-black/18 p-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Engineering</p>
          <ul className="mt-3 space-y-2">
            {project.engineering.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-md border border-line bg-black/20 px-2 py-1 font-mono text-[11px] text-muted">
              {tech}
            </span>
          ))}
        </div>
        <ProjectGithubLink className="mt-5" href={project.githubUrl} label={project.githubCta} title={project.title} />
      </div>
    </details>
  );
}

function ProjectGithubArrow({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} on GitHub`}
      className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-line bg-black/20 text-muted transition hover:border-accent/45 hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <ArrowUpRight className="h-5 w-5" aria-hidden />
    </a>
  );
}

function ProjectGithubLink({ className, href, label, title }: { className?: string; href: string; label: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} on GitHub`}
      className={`inline-flex items-center gap-2 rounded-md border border-accent/35 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent/60 hover:bg-accent/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className ?? ""}`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden />
    </a>
  );
}

function Pipeline({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={`rounded-md border border-line bg-black/18 p-3 ${className ?? ""}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">How it works</p>
      <div className="mt-3 flex flex-col gap-2">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <span className="min-w-0 flex-1 rounded-md border border-line bg-black/20 px-3 py-2 text-sm text-muted">{item}</span>
            {index < items.length - 1 ? <span className="font-mono text-xs text-accent" aria-hidden>↓</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-line bg-black/18 p-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
