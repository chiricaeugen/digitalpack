import React, { useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

export default function Feedback() {
  const [copied, setCopied] = useState(false);
  const email = "contact@digitalpack.ro";

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Feedback & idei</h1>
      <p className="mt-3 text-white/75 max-w-3xl">
        Construim rapid. Dacă vrei să influențezi direcția produsului, trimite o sugestie sau o problemă.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <GlassCard className="p-6">
          <div className="text-lg font-bold">Trimite feedback</div>
          <p className="mt-2 text-sm text-white/70">
            Scrie 2–3 rânduri: ce ai încercat, ce ai vrea să fie mai simplu, ce te-ar face să revii.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="cyan"
              as="a"
              href={`mailto:${email}?subject=Feedback%20DigitalPack&body=Salut!%20Uite%20feedback-ul%20meu:%0A%0A`}
            >
              Deschide email
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                navigator.clipboard?.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1200);
              }}
            >
              {copied ? "Copiat!" : "Copiază email"}
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="text-lg font-bold">Ce construim următor</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Conturi & reset parolă</li>
            <li>Challenge-uri reale + invitații</li>
            <li>Notificări inteligente</li>
            <li>Gamification discret (streaks)</li>
          </ul>
          <div className="mt-4 text-xs text-white/55">
            Feedback-ul bun = feature-uri construite mai repede.
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
