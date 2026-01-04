import React from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

export default function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Prețuri</h1>
      <p className="mt-3 text-white/75 max-w-3xl">
        Acum este gratuit. Când avem utilizatori activi, introducem opțiuni simple pentru funcții extra — fără surprize.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <GlassCard className="p-6">
          <div className="text-sm text-white/70">Start</div>
          <div className="mt-2 text-3xl font-extrabold">Gratis</div>
          <ul className="mt-4 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Challenge-uri de bază</li>
            <li>Grupuri 2–5</li>
            <li>Check-in & istoric</li>
          </ul>
          <div className="mt-6">
            <Button variant="cyan" as="a" href="/app/demo">Încearcă demo</Button>
          </div>
        </GlassCard>

        <GlassCard className="p-6 border border-cyan-300/20">
          <div className="text-sm text-white/70">Plus</div>
          <div className="mt-2 text-3xl font-extrabold">Abonament mic</div>
          <div className="mt-1 text-xs text-white/60">În lucru</div>
          <ul className="mt-4 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Mai multe challenge-uri active</li>
            <li>Notificări & remindere</li>
            <li>Șabloane rapide</li>
          </ul>
          <div className="mt-6">
            <Button variant="ghost" as="a" href="/roadmap">Vezi roadmap</Button>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="text-sm text-white/70">Susținător</div>
          <div className="mt-2 text-3xl font-extrabold">Tips</div>
          <ul className="mt-4 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Badge „Susținător”</li>
            <li>Prioritate la feedback</li>
            <li>Acces early la funcții</li>
          </ul>
          <div className="mt-6">
            <Button variant="ghost" as="a" href="/#support">Susține</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
