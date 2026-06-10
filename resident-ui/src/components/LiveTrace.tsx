"use client";

import { useAgentStore } from "@/store/agentStore";

export default function LiveTrace() {
  const { trace } = useAgentStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return <span className="text-green-500 font-bold mr-2">✔</span>;
      case "running":
        return <span className="text-blue-500 animate-spin mr-2">🔄</span>;
      case "failed":
        return <span className="text-red-500 font-bold mr-2">✘</span>;
      default:
        return <span className="text-zinc-600 mr-2">○</span>;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "done":
        return "text-zinc-300 border-green-800 bg-green-950/20";
      case "running":
        return "text-white border-blue-700 bg-blue-950/20 font-bold";
      case "failed":
        return "text-red-300 border-red-900 bg-red-950/20";
      default:
        return "text-zinc-500 border-zinc-800 bg-zinc-950/10";
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col space-y-4 h-full">
      <div>
        <h3 className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Cognitive Pipeline Trace</h3>
        <p className="text-xs text-zinc-500 font-mono mt-0.5">Execution flow visualizer</p>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto">
        {trace.map((t, i) => (
          <div
            key={i}
            className={`flex items-center p-3 rounded-lg border text-xs transition duration-200 ${getStatusClass(
              t.status
            )}`}
          >
            {getStatusIcon(t.status)}
            <span className="font-mono">{t.step}</span>
            <span className="ml-auto text-[10px] uppercase tracking-wider font-semibold opacity-70">
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
