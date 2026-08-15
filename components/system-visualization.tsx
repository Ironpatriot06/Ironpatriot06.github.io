"use client";

import { motion } from "framer-motion";
import { Bot, Cloud, Database, Server, ShieldCheck } from "lucide-react";

const nodes = [
  { label: "Request", icon: Cloud, x: "8%", y: "18%", tone: "text-steel" },
  { label: "API", icon: Server, x: "36%", y: "38%", tone: "text-accent" },
  { label: "Database", icon: Database, x: "66%", y: "20%", tone: "text-amber" },
  { label: "Auth", icon: ShieldCheck, x: "18%", y: "70%", tone: "text-rose" },
  { label: "AI / Processing", icon: Bot, x: "70%", y: "68%", tone: "text-accent" }
];

export function SystemVisualization() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-line bg-panel p-4 shadow-soft">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <svg className="absolute inset-0 h-full w-full" role="img" aria-label="Architecture flow from request to API, database, external service, and AI processing">
        <defs>
          <linearGradient id="traceLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#66e3c4" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#66e3c4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#91a7ff" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path d="M 72 88 C 170 86, 166 166, 280 164 S 430 94, 544 94" fill="none" stroke="url(#traceLine)" strokeWidth="2" />
        <path d="M 280 164 C 210 210, 196 248, 130 278" fill="none" stroke="url(#traceLine)" strokeWidth="2" />
        <path d="M 280 164 C 410 180, 430 250, 566 272" fill="none" stroke="url(#traceLine)" strokeWidth="2" />
      </svg>
      <motion.div
        className="absolute left-[10%] top-[24%] h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(102,227,196,0.85)]"
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ offsetPath: "path('M 72 88 C 170 86, 166 166, 280 164 S 430 94, 544 94')" }}
      />
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className="absolute w-36 rounded-lg border border-line bg-ink/88 p-3 backdrop-blur"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Icon className={`mb-3 h-5 w-5 ${node.tone}`} aria-hidden />
            <p className="font-mono text-xs text-white">{node.label}</p>
            <p className="mt-1 text-[11px] leading-4 text-muted">span-aware event</p>
          </motion.div>
        );
      })}
      <div className="absolute bottom-4 left-4 right-4 rounded-md border border-line bg-black/20 p-3 font-mono text-[11px] text-muted">
        <span className="text-accent">trace</span> req_8f3a... <span className="text-white">latency</span> 184ms <span className="text-white">events</span> 7
      </div>
    </div>
  );
}
