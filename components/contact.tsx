import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { LinkButton } from "@/components/ui/link-button";
import { Section } from "@/components/ui/section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something Useful."
      description="You can reach me on any of these platforms."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <ContactCard label="Email" value={profile.email || "Not available in source material"} icon={<Mail className="h-5 w-5" />} href={profile.email ? `mailto:${profile.email}` : ""} />
        <ContactCard label="GitHub" value={profile.github || "Not available in source material"} icon={<Github className="h-5 w-5" />} href={profile.github} />
        <ContactCard label="LinkedIn" value={profile.linkedin || "Not available in source material"} icon={<Linkedin className="h-5 w-5" />} href={profile.linkedin} />
      </div>
    </Section>
  );
}

function ContactCard({ label, value, icon, href }: { label: string; value: string; icon: React.ReactNode; href?: string }) {
  return (
    <article className="rounded-lg border border-line bg-white/[0.035] p-5">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-line bg-black/20 text-accent">{icon}</div>
      <h3 className="font-semibold text-white">{label}</h3>
      <p className="mt-2 min-h-10 break-words text-sm leading-6 text-muted">{value}</p>
      <div className="mt-5">
        <LinkButton href={href} external={href?.startsWith("http")} disabled={!href}>
          Open
        </LinkButton>
      </div>
    </article>
  );
}
