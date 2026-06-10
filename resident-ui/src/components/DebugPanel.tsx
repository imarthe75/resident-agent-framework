"use client";

import { useAgentStore } from "@/store/agentStore";

export default function DebugPanel() {
  const { trace, heuristics } = useAgentStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "done":
        return "text-green-400 bg-green-950/30 border-green-900";
      case "running":
        return "text-blue-400 bg-blue-950/30 border-blue-900";
      case "failed":
        return "text-red-400 bg-red-950/30 border-red-900";
      default:
        return "text-zinc-500 bg-zinc-950/30 border-zinc-900";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col space-y-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Cognitive Pipeline Trace</h3>
          <p className="text-xs text-zinc-500 font-mono mt-0.5">ECC execution flow steps log</p>
        </div>
        <div className="space-y-2 overflow-y-auto flex-1 font-mono text-xs">
          {trace.map((t, i) => (
            <div
              key={i}
              className={`p-3 border rounded-lg flex items-center justify-between ${getStatusColor(t.status)}`}
            >
              <span>{t.step}</span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col space-y-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Active Heuristics Engine</h3>
          <p className="text-xs text-zinc-500 font-mono mt-0.5">Rules parsed from HEURISTICS.md</p>
        </div>
        <div className="space-y-3 overflow-y-auto flex-1">
          {heuristics.map((h, i) => (
            <div
              key={i}
              className="p-3 border border-zinc-800 bg-zinc-950/40 rounded-lg text-xs text-zinc-300 font-mono"
            >
              ➔ {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
