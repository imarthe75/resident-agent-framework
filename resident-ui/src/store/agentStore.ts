import { create } from "zustand";

export interface LogEntry {
  timestamp: string;
  message: string;
}

export interface TraceStep {
  step: string;
  status: "pending" | "running" | "done" | "failed";
}

export interface MemoryItem {
  content: string;
  type: "decision" | "lesson" | "fact";
}

export interface AgentState {
  status: "idle" | "running" | "paused" | "error";
  currentTask: string;
  phase: "bootstrap" | "execution" | "closure";
  logs: string[];
  trace: TraceStep[];
  heuristics: string[];
  specs: string[];
  memory: MemoryItem[];
  setStatus: (status: "idle" | "running" | "paused" | "error") => void;
  setCurrentTask: (task: string) => void;
  setPhase: (phase: "bootstrap" | "execution" | "closure") => void;
  addLog: (log: string) => void;
  updateTraceStep: (step: string, status: "pending" | "running" | "done" | "failed") => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  status: "running",
  currentTask: "AUTH-001",
  phase: "execution",
  logs: [
    "[10:01] Loading STATE.md",
    "[10:02] Running tests",
    "[10:03] Compiling and validating specifications",
  ],
  trace: [
    { step: "bootstrap", status: "done" },
    { step: "write_tests", status: "done" },
    { step: "implement", status: "done" },
    { step: "validate", status: "running" },
  ],
  heuristics: [
    "prefer_local (local-first design override)",
    "avoid_recomputation (caching enabled)",
    "autocorrect_loop_limit (max 3 tries)"
  ],
  specs: ["AUTH-001", "API-002"],
  memory: [
    { content: "Use UUID v7 for database primary keys", type: "decision" },
    { content: "Cache LLM calls in Valkey semantically", type: "lesson" },
  ],
  setStatus: (status) => set({ status }),
  setCurrentTask: (currentTask) => set({ currentTask }),
  setPhase: (phase) => set({ phase }),
  addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
  updateTraceStep: (step, status) => set((state) => ({
    trace: state.trace.map((t) => t.step === step ? { ...t, status } : t)
  })),
}));
