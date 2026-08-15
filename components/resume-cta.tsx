import { FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { LinkButton } from "@/components/ui/link-button";

export function ResumeCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-lg border border-line bg-panel p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">Resume</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Want the full picture?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            A concise overview of my experience, projects, and technical background.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkButton href={profile.resume} external disabled={!profile.resume} icon={<FileText className="h-4 w-4" />}>
              View Resume
            </LinkButton>

          </div>
        </div>
      </div>
    </section>
  );
}
