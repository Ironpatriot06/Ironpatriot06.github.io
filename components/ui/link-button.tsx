import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export function LinkButton({ href, children, variant = "secondary", external, disabled, icon }: LinkButtonProps) {
  const className = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium transition",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
    variant === "primary" && "border-accent/40 bg-accent text-ink hover:bg-accent/90",
    variant === "secondary" && "border-line bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]",
    variant === "ghost" && "border-transparent bg-transparent text-muted hover:text-white",
    disabled && "pointer-events-none border-line bg-white/[0.02] text-muted/60"
  );

  if (disabled || !href) {
    return (
      <span className={className} aria-disabled="true" title="Link not available in provided source material">
        {icon}
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {icon}
      {children}
      {external ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
    </Link>
  );
}
