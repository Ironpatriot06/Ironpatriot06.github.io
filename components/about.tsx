import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering With Product Judgment"
      description="My work sits across backend systems, AI engineering, developer tooling, performance, automation, and system design."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-line bg-white/[0.035] p-6">
          <p className="text-lg leading-8 text-slate-200">
            I am a Computer Science undergraduate at VIT Chennai focused on building useful software systems:
            backend services, AI-assisted workflows, full-stack products, observability tools, and automation that makes engineering work easier to reason about.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
          The strongest thread across my work is practical systems thinking: building APIs and data systems, instrumenting and debugging applications, designing retrieval workflows, and improving performance, testing, and developer experience.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Developer tools", "Apollo centers the portfolio around tracing, debugging, request exploration, and root-cause analysis."],
            ["AI applications", "Projects use LangChain, RAG, semantic search, Gemini API, document parsing, and conversational workflows."],
            ["Backend depth", "Internship and project work includes FastAPI, SQL, PostgreSQL, Supabase, API testing, and optimization."],
            ["Product surfaces", "Next.js, React, Tailwind CSS, Streamlit, dashboards, and reusable components appear across the work."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-line bg-white/[0.035] p-5">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
