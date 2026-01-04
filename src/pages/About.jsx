import React from "react";
import { GlassCard } from "../components/GlassCard";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Despre DigitalPack DigitalPack</h1>
      <p className="mt-3 text-white/75 max-w-2xl">
        DigitalPack este construit pentru oameni care vor să se țină de cuvânt, dar au nevoie de un cadru social simplu.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="text-lg font-bold">Principii</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
            <li>Grup mic, fără rușine publică.</li>
            <li>Validare socială, nu control total.</li>
            <li>Design modern, rapid, fără aglomerație.</li>
            <li>Respect pentru confidențialitate.</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">Ce urmează</div>
          <p className="mt-3 text-sm text-white/70">
            În versiune beta conectăm auth + DB real în Supabase și activăm notificări + admin panel.
            În etapa 2 adăugăm „public proof” anonim (opt-in).
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
