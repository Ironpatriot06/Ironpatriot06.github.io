import { FileText, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { LinkButton } from "@/components/ui/link-button";
import { SystemVisualization } from "@/components/system-visualization";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-xs text-accent">
            Software Engineering · AI systems · Developer Tools
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {profile.school}, working across backend systems, full-stack applications, AI/LLM systems, observability, APIs,
            databases, and engineering infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="primary">
              View Projects
            </LinkButton>
            <LinkButton href={profile.github} external disabled={!profile.github} icon={<Github className="h-4 w-4" />}>
              GitHub
            </LinkButton>
            <LinkButton href={profile.linkedin} external disabled={!profile.linkedin} icon={<Linkedin className="h-4 w-4" />}>
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.resume} external disabled={!profile.resume} icon={<FileText className="h-4 w-4" />}>
              Resume
            </LinkButton>
          </div>
        </div>
        <SystemVisualization />
      </div>
    </section>
  );
}
