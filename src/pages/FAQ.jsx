import React from "react";
import { GlassCard } from "../components/GlassCard";

const faqs = [
  ["Pot să mint?", "Da, poți. DigitalPack nu e poliție. Dar grupul poate contesta sau marca „broken trust”, iar asta contează social."],
  ["De ce grup mic (2–5)?", "E suficient de mic încât să fie personal, suficient de mare încât să nu depindă de o singură persoană."],
  ["Trebuie bani?", "Nu. La început nu gestionăm bani. Există doar tips/donații voluntare pentru a susține proiectul."],
  ["E nevoie de cookie banner?", "Nu la lansare (folosim analytics fără cookies). Dacă adăugăm ads/tracking, introducem consent."],
  ["Cum devin admin?", "În versiunea finală, contul tău are rol admin. Panoul admin este protejat."],
];

export default function FAQ() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">FAQ</h1>
      <p className="mt-3 text-white/75 max-w-2xl">
        Întrebări frecvente (FAQ). Scopul: claritate, fără promisiuni false.
      </p>

      <div className="mt-8 grid gap-4">
        {faqs.map(([q, a]) => (
          <GlassCard key={q}>
            <div className="text-lg font-bold">{q}</div>
            <p className="mt-2 text-sm text-white/70">{a}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
