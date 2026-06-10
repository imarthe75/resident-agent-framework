"use client";

import { useAgentStore } from "@/store/agentStore";
import { useEffect, useRef } from "react";

export default function Console() {
  const { logs } = useAgentStore();
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col h-48">
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-zinc-400">⚡ Live Agent Console</span>
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        </div>
      </div>
      <div
        ref={consoleRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-xs text-green-500 space-y-1 bg-black scrollbar-thin scrollbar-thumb-zinc-800"
      >
        {logs.map((l: string, i: number) => (
          <div key={i} className="leading-relaxed">
            <span className="text-zinc-500 font-bold select-none mr-2">&gt;</span>
            {l}
          </div>
        ))}
        <div className="animate-pulse inline-block w-1.5 h-3 bg-green-500 ml-1" />
      </div>
    </div>
  );
}
