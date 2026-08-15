const traceRows = [
  { label: "Request", detail: "POST /api/orders", ms: "184ms", width: "100%", tone: "bg-accent" },
  { label: "Authentication", detail: "token validation", ms: "18ms", width: "24%", tone: "bg-steel" },
  { label: "Database Query", detail: "SELECT orders WHERE id = ?", ms: "71ms", width: "52%", tone: "bg-amber" },
  { label: "External HTTP Call", detail: "payment dependency", ms: "64ms", width: "44%", tone: "bg-accent" },
  { label: "Exception", detail: "structured traceback captured", ms: "31ms", width: "30%", tone: "bg-rose" }
];

export function TraceVisualization() {
  return (
    <div className="rounded-lg border border-line bg-ink p-5">
      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs text-accent">Visual representation</p>
          <h4 className="mt-2 text-lg font-semibold text-white">Apollo request trace console</h4>
        </div>
        <div className="rounded-md border border-line bg-black/20 px-3 py-2 font-mono text-xs text-muted">
          req_8f3a... · span root
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {traceRows.map((row, index) => (
          <div key={row.label} className="grid gap-3 rounded-md border border-line bg-white/[0.03] p-3 sm:grid-cols-[11rem_1fr_4rem] sm:items-center">
            <div>
              <p className="font-mono text-xs text-white">{row.label}</p>
              <p className="mt-1 truncate font-mono text-[11px] text-muted">{row.detail}</p>
            </div>
            <div className="h-8 rounded-md bg-black/25 p-1">
              <div className={`${row.tone} h-full rounded opacity-80`} style={{ width: row.width, marginLeft: `${Math.min(index * 8, 28)}%` }} />
            </div>
            <p className="font-mono text-xs text-muted sm:text-right">{row.ms}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-rose/30 bg-rose/10 p-3">
        <p className="font-mono text-xs text-rose">traceback</p>
        <p className="mt-2 font-mono text-[11px] leading-5 text-muted">Exception captured with request context, dependency event, and correlated span data.</p>
      </div>
    </div>
  );
}
