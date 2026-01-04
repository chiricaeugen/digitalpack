import React from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

export default function AppHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Aplicație</h1>
      <p className="text-white/75 max-w-2xl">
        Aici va fi zona produsului. În MVP, auth este mock doar pentru demo flow. La pasul următor conectăm Supabase.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <GlassCard>
          <div className="font-bold">Demo</div>
          <p className="mt-2 text-sm text-white/70">Vezi experiența fără cont.</p>
          <Button as={Link} to="/app/demo" className="mt-4 w-full" variant="ghost">Deschide</Button>
        </GlassCard>
        <GlassCard>
          <div className="font-bold">Create</div>
          <p className="mt-2 text-sm text-white/70">Creează un challenge nou.</p>
          <Button as={Link} to="/app/create" className="mt-4 w-full" variant="cyan">Start</Button>
        </GlassCard>
        <GlassCard>
          <div className="font-bold">Istoric</div>
          <p className="mt-2 text-sm text-white/70">Vezi ce ai făcut până acum.</p>
          <Button as={Link} to="/app/history" className="mt-4 w-full" variant="ghost">Istoric</Button>
        </GlassCard>
      </div>
    </div>
  );
}
