"use client";

import Editor from "@monaco-editor/react";

export default function EditorPanel() {
  const codeTemplate = `# 🌌 Resident Agent OS - Execution Environment
# Running memory-aware secure algorithms

import time
from memory.semantic_cache import SemanticCache
from memory.long_term_memory import LongTermMemory

def run_agent_loop():
    print("🤖 [Agent] Bootstrapping cognitive services...")
    cache = SemanticCache(host="localhost", port=6379)
    db_memory = LongTermMemory()
    
    # 1. Fetch specifications (OpenSpec contract validation)
    print("📜 [OpenSpec] Fetching SPECS.md contracts...")
    
    # 2. Heuristics analysis
    print("🧠 [Heuristics] Running loop validation limits...")
    time.sleep(1)
    
    # 3. Execution (Superpowers TDD Mode)
    print("✅ [Superpowers] TDD loop passed! No regressions detected.")

if __name__ == "__main__":
    run_agent_loop()
`;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col h-full shadow-lg">
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs font-mono text-zinc-400 ml-2">agent_runtime.py</span>
        </div>
        <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded text-zinc-400 font-mono">
          Python
        </span>
      </div>
      <div className="flex-1 min-h-[450px]">
        <Editor
          height="100%"
          defaultLanguage="python"
          defaultValue={codeTemplate}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: "on",
            scrollbar: {
              vertical: "visible",
              horizontal: "visible"
            },
            padding: { top: 12 },
            automaticLayout: true
          }}
        />
      </div>
    </div>
  );
}
