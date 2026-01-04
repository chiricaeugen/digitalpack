import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";

export default function Challenge() {
  const { id } = useParams();
  const [day, setDay] = useState(1);
  const [status, setStatus] = useState("ongoing");

  const challenge = useMemo(() => {
    const items = JSON.parse(localStorage.getItem("dp_mock_challenges") || "[]");
    return items.find((x) => x.id === id) || null;
  }, [id]);

  const total = challenge?.days ?? 7;

  function checkIn() {
    const next = Math.min(total, day + 1);
    setDay(next);
    if (next === total) setStatus("ready_for_validation");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Challenge</h1>
      <p className="text-white/70">
        Demo flow. În versiunea reală: check-in-uri salvate, notificări, validare în grup.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">{total} zile • {challenge?.title ?? "Challenge"}</div>
            <Badge>{status}</Badge>
          </div>

          <div className="mt-3 text-sm text-white/70">Ziua {day}/{total}</div>

          <div className="mt-6 flex gap-3">
            <Button variant="cyan" onClick={checkIn}>Am făcut (check-in)</Button>
            <Button variant="ghost" onClick={() => setStatus("missed")}>Am ratat azi</Button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <div className="font-semibold text-white/85">La final:</div>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Grupul confirmă / contestă / break trust.</li>
              <li>Rezultatul intră în istoric.</li>
              <li>Opțional: card share + tips.</li>
            </ul>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">Validare (demo)</div>
          <p className="mt-2 text-sm text-white/70">
            În starea reală, membrii grupului văd aici ultimele check-in-uri și decid rezultatul.
          </p>
          <div className="mt-4 grid gap-2">
            <Button variant="ghost">Confirm</Button>
            <Button variant="ghost">Question</Button>
            <Button variant="ghost">Break trust</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
