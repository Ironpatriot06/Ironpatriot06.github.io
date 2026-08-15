import { buildAreas } from "@/data/portfolio";
import { Section } from "@/components/ui/section";

export function WhatIBuild() {
  return (
    <Section
      title="What I Build"
      eyebrow="Engineering range"
      description="A compact map of the systems, products, and infrastructure themes that show up across my internships and projects."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {buildAreas.map((area) => {
          const Icon = area.icon;
          return (
            <article key={area.title} className="rounded-lg border border-line bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.055]">
              <Icon className="h-5 w-5 text-accent" aria-hidden />
              <h3 className="mt-5 text-lg font-semibold text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{area.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <span key={item} className="rounded-md border border-line bg-black/20 px-2 py-1 font-mono text-[11px] text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
