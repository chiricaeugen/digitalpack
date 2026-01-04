import React from "react";
import { GlassCard } from "../components/GlassCard";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Cum funcționează (în 60 secunde)</h1>
      <p className="mt-3 text-white/75 max-w-2xl">
        DigitalPack nu „verifică adevărul”. Îți oferă un cadru social simplu: promisiune + grup mic + validare.
      </p>

      <Section title="Pașii, foarte simplu" subtitle="Exact flow-ul pe care îl vei avea în aplicație.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["1) Creezi challenge", "Scrii durata și ce faci zilnic. Alegi categoria."],
            ["2) Inviți 2–5 persoane", "Trimiți link. Ei acceptă să fie în grup."],
            ["3) Check-in zilnic", "Bifezi „Am făcut”. Grupul vede statusul."],
            ["4) Validare la final", "Grupul confirmă / contestă / marchează broken trust."],
          ].map(([t, d]) => (
            <GlassCard key={t}>
              <div className="text-lg font-bold">{t}</div>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Button variant="cyan" onClick={() => navigate("/app/create")}>Start challenge</Button>
          <Button variant="ghost" onClick={() => navigate("/app/demo")}>Demo fără cont</Button>
        </div>
      </Section>

      <Section title="Ce înseamnă „validare”" subtitle="Martorii nu sunt spectatori. Au rol real.">
        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard>
            <div className="font-bold">Confirm</div>
            <p className="mt-2 text-sm text-white/70">„Am văzut progresul. Continuă.”</p>
          </GlassCard>
          <GlassCard>
            <div className="font-bold">Question</div>
            <p className="mt-2 text-sm text-white/70">„E neclar / pare ratată o zi.”</p>
          </GlassCard>
          <GlassCard>
            <div className="font-bold">Break trust</div>
            <p className="mt-2 text-sm text-white/70">„Angajamentul a fost încălcat.” Rămâne în istoric.</p>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
