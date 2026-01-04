import React from "react";
import { cn } from "../lib/ui";

export function Badge({ children, className = "" }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/85", className)}>
      {children}
    </span>
  );
}
