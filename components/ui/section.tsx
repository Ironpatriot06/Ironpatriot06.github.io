import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
