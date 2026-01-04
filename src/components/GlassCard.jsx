import React from "react";
import { cn } from "../lib/ui";

export function GlassCard({ className = "", children }) {
  return (
    <div className={cn("dp-glass rounded-3xl p-6 transition duration-300 hover:translate-y-[-2px] hover:bg-white/[0.075] hover:border-white/15", className)}>
      {children}
    </div>
  );
}
