import { skillGroups } from "@/data/portfolio";
import { Section } from "@/components/ui/section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="A Systems-Oriented Stack"
      // description="Grouped by engineering surface area instead of percentage bars or inflated proficiency claims."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.title} className="rounded-lg border border-line bg-white/[0.035] p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-black/20">
                  <Icon className="h-4 w-4 text-accent" aria-hidden />
                </span>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-line bg-black/20 px-2 py-1 text-xs text-muted">
                    {skill}
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
