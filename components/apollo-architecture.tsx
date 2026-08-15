const lanes = [
  "User Request",
  "Application / Python SDK",
  "Request ID / Span ID",
  "Event Ingestion",
  "FastAPI Services",
  "PostgreSQL",
  "Next.js Observability Console"
];

const correlated = ["SQL Queries", "HTTP Calls", "Exceptions"];

export function ApolloArchitecture() {
  return (
    <div className="rounded-lg border border-line bg-ink p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Apollo architecture</p>
          <h4 className="mt-2 text-lg font-semibold text-white">Request events become an explainable trace</h4>
        </div>
        <span className="hidden rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted sm:inline-flex">visual model</span>
      </div>
      <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-2">
          {lanes.slice(0, 3).map((lane, index) => (
            <FlowNode key={lane} label={lane} index={index} />
          ))}
        </div>
        <div className="rounded-lg border border-line bg-white/[0.035] p-4">
          <p className="mb-3 font-mono text-xs text-muted">Correlated execution events</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {correlated.map((item) => (
              <div key={item} className="rounded-md border border-line bg-black/20 p-3">
                <p className="font-mono text-xs text-white">{item}</p>
                <div className="mt-3 h-1 rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-accent/70" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {lanes.slice(3).map((lane, index) => (
              <FlowNode key={lane} label={lane} index={index + 3} compact />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowNode({ label, index, compact = false }: { label: string; index: number; compact?: boolean }) {
  return (
    <div className="relative rounded-md border border-line bg-white/[0.035] p-3">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 font-mono text-[11px] text-accent">{String(index + 1).padStart(2, "0")}</span>
        <p className="font-mono text-xs text-white">{label}</p>
      </div>
      {!compact ? <div className="ml-[1.35rem] mt-2 h-4 w-px bg-line" aria-hidden /> : null}
    </div>
  );
}
