"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-4">
        <span className="text-blue-500 animate-spin text-2xl">🔄</span>
        <span className="text-zinc-500 font-mono text-sm">Loading Resident OS Dashboard...</span>
      </div>
    </div>
  );
}
