"use client";

import { useAgentStore } from "@/store/agentStore";

export default function MemoryPanel() {
  const { memory } = useAgentStore();

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "decision":
        return "text-cyan-400 bg-cyan-950/40 border-cyan-800";
      case "lesson":
        return "text-purple-400 bg-purple-950/40 border-purple-800";
      case "fact":
        return "text-green-400 bg-green-950/40 border-green-800";
      default:
        return "text-zinc-400 bg-zinc-950/40 border-zinc-800";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col space-y-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Long-Term Cognitive Memory</h3>
          <p className="text-xs text-zinc-500 font-mono mt-0.5">PostgreSQL + pgvector vector store</p>
        </div>
        <div className="space-y-3 overflow-y-auto flex-1">
          {memory.map((m, i) => (
            <div
              key={i}
              className="p-4 border border-zinc-800 bg-zinc-950/40 rounded-lg space-y-2 hover:border-zinc-700 transition"
            >
              <div className="flex justify-between items-center">
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${getTypeStyle(m.type)}`}>
                  {m.type}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">Sim: 0.9421</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-mono">{m.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col space-y-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Short-Term Cache Explorer</h3>
          <p className="text-xs text-zinc-500 font-mono mt-0.5">Valkey semantic cache active keys</p>
        </div>
        <div className="space-y-2 overflow-y-auto flex-1 font-mono text-xs">
          <div className="p-3 border border-zinc-800 bg-zinc-950/40 rounded-lg flex items-center justify-between">
            <span className="text-zinc-400">cache:query:-50942183</span>
            <span className="text-[10px] bg-green-950 text-green-400 border border-green-900 px-2 py-0.5 rounded uppercase">
              active
            </span>
          </div>
          <div className="p-3 border border-zinc-800 bg-zinc-950/40 rounded-lg flex items-center justify-between">
            <span className="text-zinc-400">cache:query:291084562</span>
            <span className="text-[10px] bg-green-950 text-green-400 border border-green-900 px-2 py-0.5 rounded uppercase">
              active
            </span>
          </div>
          <div className="p-3 border border-zinc-800 bg-zinc-950/40 rounded-lg flex items-center justify-between">
            <span className="text-zinc-400">session:status:auth_token</span>
            <span className="text-[10px] bg-zinc-800 text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded uppercase">
              expired
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
