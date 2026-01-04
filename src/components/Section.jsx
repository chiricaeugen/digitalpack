import React from "react";
import { cn } from "../lib/ui";

export function Section({ title, subtitle, children, className = "" }) {
  return (
    <section className={cn("py-10", className)}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-2 text-white/70">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
