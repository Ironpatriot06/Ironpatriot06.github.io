import { CalendarDays } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Section } from "@/components/ui/section";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience"
      // description="A timeline of backend, AI, frontend, testing, automation, and enterprise workflow work from the provided source material."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-line md:block" />
        <div className="space-y-5">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="relative grid gap-4 rounded-lg border border-line bg-white/[0.035] p-5 md:ml-12 md:grid-cols-[0.72fr_1.28fr] md:p-6">
              <div className="absolute -left-[3.15rem] top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-line bg-ink md:flex">
                <CalendarDays className="h-4 w-4 text-accent" aria-hidden />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{experience.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{experience.company}</h3>
                <p className="mt-1 text-sm text-muted">{experience.role}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-line bg-black/20 px-2 py-1 font-mono text-[11px] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm leading-6 text-slate-300">{experience.summary}</p>
                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
