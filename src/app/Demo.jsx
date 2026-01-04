import React, { useMemo, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";

export default function Demo() {
  const [day, setDay] = useState(4);
  const total = 7;

  const status = useMemo(() => {
    if (day < total) return "ongoing";
    return "completed";
  }, [day]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Demo (fără cont)</h1>
      <p className="text-white/75 max-w-2xl">
        Simulează un challenge: vezi cum ar arăta progresul și validarea în grup.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">7 zile • 20 min mers pe jos</div>
            <Badge>{status}</Badge>
          </div>
          <div className="mt-2 text-sm text-white/70">Grup: 3 persoane • Ziua {day}/{total}</div>

          <div className="mt-6 flex gap-3">
            <Button variant="cyan" onClick={() => setDay((d) => Math.min(total, d + 1))}>
              Check-in făcut
            </Button>
            <Button variant="ghost" onClick={() => setDay((d) => Math.max(1, d - 1))}>
              Înapoi
            </Button>
          </div>

          <p className="mt-4 text-xs text-white/50">
            În versiunea reală, check-in-urile și validarea sunt salvate în Supabase și sincronizate în timp real.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">Martori (demo)</div>
          <div className="mt-3 grid gap-3">
            {["Mara", "Alex", "Vlad"].map((n) => (
              <div key={n} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-sm">{n}</span>
                <span className="text-xs text-white/60">a văzut progresul</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-2">
            <Button variant="ghost">Confirm (demo)</Button>
            <Button variant="ghost">Question (demo)</Button>
            <Button variant="ghost">Break trust (demo)</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
