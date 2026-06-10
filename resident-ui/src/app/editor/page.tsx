"use client";

import EditorPanel from "@/components/EditorPanel";
import Console from "@/components/Console";
import LiveTrace from "@/components/LiveTrace";

export default function EditorPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full flex flex-col space-y-4">
      <div className="lg:col-span-2">
        <EditorPanel />
      </div>
      <div>
        <LiveTrace />
      </div>
      <div className="lg:col-span-3">
        <Console />
      </div>
    </div>
  );
}
