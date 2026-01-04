import React from "react";
import { GlassCard } from "../components/GlassCard";

export default function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Termeni și Condiții</h1>
      <p className="mt-3 text-white/75 max-w-3xl">
        Prin utilizarea DigitalPack accepți acești termeni. Dacă nu ești de acord, te rugăm să nu folosești serviciul.
        DigitalPack este un produs în evoluție (MVP).
      </p>

      <div className="mt-8 space-y-4">
        <GlassCard>
          <div className="text-lg font-bold">1) Ce oferim</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            O platformă pentru challenge-uri în grupuri mici, cu check-in-uri și validare socială.
            Unele funcții pot fi limitate sau schimbate pe parcurs.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">2) Reguli de folosire</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            <li>Fără hărțuire, spam sau conținut ilegal.</li>
            <li>Respectă membrii grupului și acordul lor.</li>
            <li>Nu încerca să exploatezi sau să ataci platforma.</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">3) Validare socială</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Validarea este o funcție de responsabilizare, nu o garanție a adevărului. Disputele se rezolvă între membri.
            Putem oferi semnale de integritate, dar nu arbitrajăm fiecare caz.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">4) Plăți / donații</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Putem oferi opțiuni de susținere (tips/donații) sau funcții plătite. Orice plată este opțională.
            Înainte de funcții plătite, vom afișa clar condițiile și prețurile.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">5) Limitarea răspunderii</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Serviciul este oferit „ca atare”. Nu garantăm rezultate. Nu suntem responsabili pentru pierderi indirecte.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">6) Contact</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Întrebări: <a className="underline underline-offset-4 hover:text-white" href="mailto:contact@digitalpack.ro">contact@digitalpack.ro</a>.
          </p>
        </GlassCard>

        <GlassCard>
          <div className="text-lg font-bold">7) Modificări</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Putem actualiza termenii. Data ultimei actualizări: {new Date().toLocaleDateString("ro-RO")}.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
