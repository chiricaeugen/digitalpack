import React from "react";
import { cn } from "../lib/ui";

export function Button({ as: As = "button", className = "", variant = "primary", ...props }) {
  const base =
    "dp-focus-ring group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition active:scale-[0.99]";
  const variants = {
    primary:
      "bg-white/10 hover:bg-white/14 border border-white/12 shadow-soft",
    ghost:
      "bg-transparent hover:bg-white/8 border border-white/10",
    cyan:
      "bg-cyan-400/10 hover:bg-cyan-400/14 border border-cyan-200/20 text-cyan-50",
    violet:
      "bg-violet-400/10 hover:bg-violet-400/14 border border-violet-200/20 text-violet-50",
  };
  return (
    <As className={cn(base, variants[variant], className)} {...props}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {props.children}
    </As>
  );
}
