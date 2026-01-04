import React, { useMemo } from "react";
import { GlassCard } from "../components/GlassCard";
import { getUser } from "../lib/storage";

export default function Admin() {
  const user = useMemo(() => getUser(), []);

  if (!user?.isAdmin) {
    return (
      <GlassCard>
        <div className="text-lg font-bold">Acces restricționat</div>
        <p className="mt-2 text-sm text-white/70">
          Doar admin. În MVP real, rolul admin vine din Supabase (profiles.is_admin).
        </p>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Admin</h1>
      <p className="text-white/70">Dashboard (demo). În MVP real: stats, moderare, templates editor.</p>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["Useri noi", "—"],
          ["Challenge-uri create", "—"],
          ["Share clicks", "—"],
        ].map(([k, v]) => (
          <GlassCard key={k}>
            <div className="text-sm text-white/70">{k}</div>
            <div className="mt-2 text-3xl font-extrabold">{v}</div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
