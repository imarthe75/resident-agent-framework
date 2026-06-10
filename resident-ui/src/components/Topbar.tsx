"use client";

import { useAgentStore } from "@/store/agentStore";

export default function Topbar() {
  const { status, currentTask, phase, setStatus } = useAgentStore();

  const getStatusColor = (s: string) => {
    switch (s) {
      case "running":
        return "text-green-400 bg-green-950 border-green-800";
      case "paused":
        return "text-yellow-400 bg-yellow-950 border-yellow-800";
      case "error":
        return "text-red-400 bg-red-950 border-red-800";
      default:
        return "text-zinc-400 bg-zinc-950 border-zinc-800";
    }
  };

  return (
    <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex justify-between items-center text-sm">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-zinc-500 font-mono">STATUS:</span>
          <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${getStatusColor(status)}`}>
            ● {status}
          </span>
        </div>
        <div className="h-4 w-px bg-zinc-800" />
        <div className="flex items-center space-x-2">
          <span className="text-zinc-500 font-mono">ACTIVE SPEC:</span>
          <span className="font-semibold text-zinc-300 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 font-mono">
            {currentTask}
          </span>
        </div>
        <div className="h-4 w-px bg-zinc-800" />
        <div className="flex items-center space-x-2">
          <span className="text-zinc-500 font-mono">PHASE:</span>
          <span className="font-semibold text-zinc-300 uppercase tracking-wide">
            {phase}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        {status === "paused" || status === "idle" ? (
          <button
            onClick={() => setStatus("running")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition duration-200 cursor-pointer"
          >
            ▶ Resume Agent
          </button>
        ) : (
          <button
            onClick={() => setStatus("paused")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition duration-200 cursor-pointer"
          >
            ⏸ Pause Agent
          </button>
        )}
        <button
          onClick={() => setStatus("error")}
          className="bg-zinc-800 hover:bg-red-700 hover:text-white text-zinc-300 px-4 py-1.5 rounded-lg text-xs font-bold transition duration-200 cursor-pointer"
        >
          ⏹ Abort Action
        </button>
      </div>
    </div>
  );
}
