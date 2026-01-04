import React from "react";
import { GlassCard } from "../components/GlassCard";

const items = [
  { q: "Q1", t: "Autentificare & conturi", d: "Email login, reset parolă, profil, rol admin." },
  { q: "Q1", t: "Bază de date", d: "Challenge-uri reale, check-in-uri, martori, istoric." },
  { q: "Q2", t: "Notificări", d: "Remindere inteligente și sumar zilnic/săptămânal." },
  { q: "Q2", t: "Pachete & șabloane", d: "Seturi predefinite: sport, studiu, somn, detox." },
  { q: "Q3", t: "Funcții extra", d: "Gamification, streaks, export, opțiuni plătite." },
];

export default function Roadmap() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Roadmap</h1>
      <p className="mt-3 text-white/75 max-w-3xl">
        Plan orientativ. Construim pe feedback real. Unele lucruri pot apărea mai devreme sau mai târziu.
      </p>

      <div className="mt-8 grid gap-4">
        {items.map((x) => (
          <GlassCard key={x.t} className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg font-bold">{x.t}</div>
              <div className="text-xs rounded-full border border-white/12 bg-white/6 px-3 py-1 text-white/70">
                {x.q}
              </div>
            </div>
            <p className="mt-2 text-sm text-white/70">{x.d}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
