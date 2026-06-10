"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const items = [
    { name: "🤖 Agent Core", path: "/dashboard" },
    { name: "📝 Workspace Editor", path: "/editor" },
    { name: "📜 Specifications", path: "/specs" },
    { name: "🧠 Semantic Memory", path: "/memory" },
    { name: "🔍 Debug Logs", path: "/debug" },
  ];

  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col justify-between h-full">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-black tracking-wider text-green-400">RESIDENT OS</h2>
          <p className="text-xs text-zinc-500 font-mono mt-1">v3.0.0-cognitive-beta</p>
        </div>
        <div className="space-y-1">
          {items.map((i) => {
            const isActive = pathname === i.path;
            return (
              <Link key={i.path} href={i.path}>
                <div
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center ${
                    isActive
                      ? "bg-green-600 text-white font-bold shadow-md shadow-green-900/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {i.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-xs text-zinc-500 font-mono space-y-1">
        <div>Host: Sovereign Local</div>
        <div>Valkey: Connected (6379)</div>
        <div>pgvector: Operational (5432)</div>
      </div>
    </div>
  );
}
