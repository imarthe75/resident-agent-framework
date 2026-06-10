"use client";

import { useAgentStore } from "@/store/agentStore";

export default function SpecPanel() {
  const { specs } = useAgentStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col space-y-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-300 tracking-wide uppercase">OpenSpec Contract List</h3>
          <p className="text-xs text-zinc-500 font-mono mt-0.5">Active specifications contracts</p>
        </div>
        <div className="space-y-2 overflow-y-auto flex-1">
          {specs.map((s) => (
            <div
              key={s}
              className="p-3 border border-zinc-800 bg-zinc-950/60 rounded-lg hover:border-green-600/40 transition duration-200 cursor-pointer flex justify-between items-center"
            >
              <span className="font-mono text-sm text-zinc-300 font-bold">{s}</span>
              <span className="text-[10px] bg-green-950 text-green-400 border border-green-900 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                Approved
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col space-y-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Specification Editor</h3>
          <p className="text-xs text-zinc-500 font-mono mt-0.5">Define constraints and acceptance criteria</p>
        </div>
        <div className="flex-1 flex flex-col space-y-3">
          <textarea
            className="flex-1 w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 focus:outline-none focus:border-green-600 transition resize-none leading-relaxed"
            defaultValue={`# SPEC AUTH-001: Local-First Session Verification

## Requirements
- Authenticate developers via system-level keys.
- Cache the validation tokens locally in Valkey semantic cache.

## Constraints
- Do not store credentials in plain text or push to git repositories.
- Primary key in PG vector database must be UUIDv7.

## Acceptance Criteria
- Token validation latency < 15ms.
- Auto-fallback to offline mode if external SSO server is down.`}
          />
          <div className="flex justify-end space-x-3">
            <button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer">
              Discard Changes
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer">
              Save & Apply Spec
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
