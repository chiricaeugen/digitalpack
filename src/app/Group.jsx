import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";

export default function Group() {
  const { id } = useParams();
  const navigate = useNavigate();

  const challenge = useMemo(() => {
    const items = JSON.parse(localStorage.getItem("dp_mock_challenges") || "[]");
    return items.find((x) => x.id === id) || null;
  }, [id]);

  const inviteLink = `${window.location.origin}/app/group/${id}`;

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Grup</h1>
          <p className="mt-2 text-white/70">Invită 2–5 persoane și începeți challenge-ul împreună.</p>
        </div>
        <Button variant="cyan" onClick={() => navigate(`/app/challenge/${id}`)}>Intră în challenge</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">{challenge?.days ?? "?"} zile • {challenge?.title ?? "Challenge"}</div>
            <Badge>{challenge?.category ?? "—"}</Badge>
          </div>
          <div className="mt-3 text-sm text-white/70">
            Link invitație (copie & trimite):<br />
            <code className="mt-2 block rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-xs">{inviteLink}</code>
          </div>

          <div className="mt-4 flex gap-3">
            <Button variant="ghost" onClick={() => navigator.clipboard?.writeText(inviteLink)}>Copiază link</Button>
            <Button variant="ghost" as={Link} to="/app/demo">Vezi demo</Button>
          </div>

          <p className="mt-4 text-xs text-white/50">
            În versiunea finală, link-ul va include token de invitație și acceptarea va adăuga automat membrul în grup (Supabase).
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">Membri (demo)</div>
          <div className="mt-3 grid gap-3">
            {["Tu", "Invitat 1", "Invitat 2"].map((n) => (
              <div key={n} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-sm">{n}</span>
                <span className="text-xs text-white/60">{n === "Tu" ? "owner" : "pending"}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
