import React, { useMemo } from "react";
import { GlassCard } from "../components/GlassCard";
import { Badge } from "../components/Badge";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export default function History() {
  const items = useMemo(() => {
    return JSON.parse(localStorage.getItem("dp_mock_challenges") || "[]");
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Istoric</h1>
          <p className="mt-2 text-white/70">În MVP, acest istoric vine din Supabase și e real.</p>
        </div>
        <Button as={Link} to="/app/create" variant="cyan">Creează</Button>
      </div>

      {items.length === 0 ? (
        <GlassCard>
          <div className="text-lg font-bold">Nimic încă</div>
          <p className="mt-2 text-sm text-white/70">Creează primul challenge ca să apară aici.</p>
        </GlassCard>
      ) : (
        <div className="grid gap-4">
          {items.map((x) => (
            <GlassCard key={x.id} className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">{x.days} zile • {x.title}</div>
                <div className="mt-1 text-xs text-white/60">{new Date(x.createdAt).toLocaleString("ro-RO")}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge>{x.category}</Badge>
                <Button as={Link} to={`/app/group/${x.id}`} variant="ghost">Deschide</Button>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
